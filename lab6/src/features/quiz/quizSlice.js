import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<scripting>", "<script>", "<js>"],
      correct: 2,
      selected: null,
    },
    {
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these"
      ],
      correct: 0,
      selected: null,
    },
    {
      question: "Which of the following can’t be done with client-side JavaScript?",
      options: [
        "Validating a form",
        "Sending a form’s contents by email",
        "Storing form contents to a database on a server",
        "None of the above"
      ],
      correct: 2,
      selected: null,
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
      correct: 0,
      selected: null,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: [
        "// for single line, /* */ for multi line",
        "<!-- -->",
        "#",
        "**"
      ],
      correct: 0,
      selected: null,
    },
    {
      question: "Which is the correct syntax for referring to an external script?",
      options: [
        "<script src='xxx.js'>",
        "<script href='xxx.js'>",
        "<script ref='xxx.js'>",
        "<script name='xxx.js'>"
      ],
      correct: 0,
      selected: null,
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "alert('Hello World');",
        "msg('Hello World');",
        "msgBox('Hello World');",
        "alertBox('Hello World');"
      ],
      correct: 0,
      selected: null,
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "create function myFunction()"
      ],
      correct: 1,
      selected: null,
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call function myFunction()",
        "call myFunction()",
        "myFunction()",
        "Call.myFunction()"
      ],
      correct: 2,
      selected: null,
    },
    {
      question: "How to write an IF statement in JavaScript?",
      options: [
        "if i = 5 then",
        "if (i == 5)",
        "if i == 5 then",
        "if i = 5"
      ],
      correct: 1,
      selected: null,
    }
  ],
  checked: false,
  score: 0
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectOption: (state, action) => {
      const { questionIndex, optionIndex } = action.payload;
      state.questions[questionIndex].selected = optionIndex;
    },
    checkAnswers: (state) => {
      let correctCount = 0;
      state.questions.forEach(q => {
        if (q.selected === q.correct) correctCount += 1;
      });
      state.checked = true;
      state.score = correctCount;
    },
    resetQuiz: (state) => {
      state.questions.forEach(q => q.selected = null);
      state.checked = false;
      state.score = 0;
    }
  },
});

export const { selectOption, checkAnswers, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
