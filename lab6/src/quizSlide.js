import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      question: 'React là gì?',
      options: ['Framework', 'Library', 'Ngôn ngữ lập trình', 'Trình duyệt'],
      correct: 1, // index của đáp án đúng
      selected: null, // index đáp án được chọn
    },
    // Thêm câu hỏi khác ở đây
  ],
  checked: false, // Trạng thái đã check đáp án chưa
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
      state.checked = true;
    },
    resetQuiz: (state) => {
      state.questions.forEach(q => q.selected = null);
      state.checked = false;
    },
  },
});

export const { selectOption, checkAnswers, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
