import React, { useState } from 'react';
import { QuizProvider } from './context/QuizContext';
import QuestionInput from './components/QuestionInput';
import QuizDisplay from './components/QuizDisplay';
import TabNavigation from './components/TabNavigation';
import { styles } from './styles/styles';

const App = () => {
  const [activeTab, setActiveTab] = useState('quiz');

  return (
    <QuizProvider>
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.mainWrapper}>
          <h1 style={styles.title}>
            🚀 Lab 4: React Quiz App with Hooks
          </h1>

          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'quiz' ? <QuizDisplay /> : <QuestionInput />}
        </div>
      </div>
    </QuizProvider>
  );
};

export default App;