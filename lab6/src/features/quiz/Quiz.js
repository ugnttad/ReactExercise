import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOption, checkAnswers } from './quizSlice';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, checked } = useSelector(state => state.quiz);
  const [current, setCurrent] = useState(0);

  const handleSelect = (optionIdx) => {
    if (!checked) dispatch(selectOption({ questionIndex: current, optionIndex: optionIdx }));
  };

  const handleNav = (type) => {
    if (type === 'first') setCurrent(0);
    else if (type === 'prev' && current > 0) setCurrent(current - 1);
    else if (type === 'next' && current < questions.length - 1) setCurrent(current + 1);
    else if (type === 'last') setCurrent(questions.length - 1);
  };

  return (
    <div>
      <h2 style={{
        textAlign: "center",
        background: "#222",
        color: "#fff",
        padding: 32,
        borderRadius: 6,
        marginBottom: 24
      }}>
        JavaScript Quiz
      </h2>

      <div style={{ margin: '20px 0', fontWeight: 600 }}>
        Q.{current + 1} {questions[current].question}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {questions[current].options.map((opt, idx) => (
          <button
            key={idx}
            style={{
              background: questions[current].selected === idx ? '#bbdefb' : '#e3f2fd',
              padding: 16,
              border: '1px solid #90caf9',
              borderRadius: 8,
              fontWeight: 500,
              textAlign: 'left'
            }}
            onClick={() => handleSelect(idx)}
            disabled={checked}
          >
            {opt}
          </button>
        ))}
      </div>

      <div style={{ margin: '24px 0', display: 'flex', gap: 12, justifyContent: "center" }}>
        <button onClick={() => handleNav('first')} disabled={current === 0}>First</button>
        <button onClick={() => handleNav('prev')} disabled={current === 0}>Prev</button>
        <button onClick={() => handleNav('next')} disabled={current === questions.length - 1}>Next</button>
        <button onClick={() => handleNav('last')} disabled={current === questions.length - 1}>Last</button>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => navigate('/quiz')} style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Quiz
        </button>
        <button onClick={() => navigate('/quiz/review')} style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Quiz Review
        </button>
        <button
          onClick={() => {
            dispatch(checkAnswers());
            navigate('/quiz/result');
          }}
          style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}
          disabled={checked}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
