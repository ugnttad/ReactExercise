import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function QuizReview() {
  const navigate = useNavigate();
  const { questions } = useSelector(state => state.quiz);

  return (
    <div>
      <h2 style={{
        textAlign: "center",
        background: "#23272f",
        color: "#fff",
        padding: 28,
        borderRadius: 6,
        marginBottom: 20
      }}>
        Quiz Review
      </h2>
      <div style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 40
      }}>
        {questions.map((q, idx) => (
          <div
            key={idx}
            style={{
              minWidth: 140,
              background: '#d1fae5',
              border: '1px solid #b2f5ea',
              borderRadius: 10,
              padding: 15,
              textAlign: 'center'
            }}
          >
            <div style={{ fontWeight: 600 }}>Question No {idx + 1}</div>
            <div style={{ marginTop: 8, fontWeight: 500, color: "#098" }}>
              {q.selected !== null ? <span>Answered</span> : <span style={{ color: "#888" }}>Unanswered</span>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => navigate('/quiz')} style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Quiz
        </button>
        <button style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Quiz Review
        </button>
        <button onClick={() => navigate('/quiz/result')} style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Submit
        </button>
      </div>
    </div>
  );
}
