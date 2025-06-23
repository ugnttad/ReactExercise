import React from 'react';
import { styles } from '../styles/styles';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const handleTabHover = (e, isActive) => {
    if (!isActive) {
      e.target.style.backgroundColor = '#f8f9fa';
    }
  };

  const handleTabLeave = (e, isActive) => {
    if (!isActive) {
      e.target.style.backgroundColor = 'transparent';
    }
  };

  return (
    <div style={styles.tabContainer}>
      <button
        onClick={() => setActiveTab('quiz')}
        style={{
          ...styles.tabButton,
          ...(activeTab === 'quiz' ? styles.tabButtonActive : styles.tabButtonInactive)
        }}
        onMouseEnter={(e) => handleTabHover(e, activeTab === 'quiz')}
        onMouseLeave={(e) => handleTabLeave(e, activeTab === 'quiz')}
      >
        🎯 Take Quiz
      </button>
      <button
        onClick={() => setActiveTab('add')}
        style={{
          ...styles.tabButton,
          ...(activeTab === 'add' ? styles.tabButtonActive : styles.tabButtonInactive)
        }}
        onMouseEnter={(e) => handleTabHover(e, activeTab === 'add')}
        onMouseLeave={(e) => handleTabLeave(e, activeTab === 'add')}
      >
        ➕ Add Questions
      </button>
    </div>
  );
};

export default TabNavigation;