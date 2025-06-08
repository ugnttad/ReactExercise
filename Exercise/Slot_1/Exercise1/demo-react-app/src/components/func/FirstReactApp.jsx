import React from 'react';

const FirstReactApp = () => {
  const name = 'Le Nhat Truong';
  const role = 'FPTU Student';
  const mission = 'Aspiring to become a Bridge Japanese Software Engineer';
  const hobbies = ['Football', 'Learning new technologies', 'Exploring the universe'];

  const styles = {
    container: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      maxWidth: '450px',
      margin: '40px auto',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    containerHover: {
      transform: 'translateY(-5px)',
    },
    heading: {
      color: '#1a202c',
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '10px',
    },
    roleText: {
      color: '#4a5568',
      fontSize: '1.1rem',
      margin: '10px 0',
      fontWeight: '500',
    },
    missionText: {
      color: '#718096',
      fontSize: '1rem',
      margin: '15px 0',
      lineHeight: '1.5',
    },
    hobbiesTitle: {
      color: '#2d3748',
      fontSize: '1.2rem',
      fontWeight: '600',
      margin: '20px 0 10px',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      color: '#2b6cb0',
      fontSize: '1rem',
      margin: '8px 0',
      transition: 'color 0.2s ease-in-out',
    },
    listItemHover: {
      color: '#1a4971',
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={(e) => (e.currentTarget.style.transform = styles.containerHover.transform)}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
    >
      <h1 style={styles.heading}>Hello, I'm {name}</h1>
      <p style={styles.roleText}>A dedicated {role}</p>
      <p style={styles.missionText}>{mission}</p>
      <h3 style={styles.hobbiesTitle}>My Interests: </h3>
      <ul style={styles.list}>
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            style={styles.listItem}
            onMouseEnter={(e) => (e.currentTarget.style.color = styles.listItemHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = styles.listItem.color)}
          >
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstReactApp;