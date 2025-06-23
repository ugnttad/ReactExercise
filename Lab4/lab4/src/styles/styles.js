// ===========================================
// FILE: src/styles/styles.js  
// ===========================================
export const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  mainWrapper: {
    maxWidth: '1000px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    animation: 'fadeInDown 1s ease-out'
  },
  tabContainer: {
    display: 'flex',
    marginBottom: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  },
  tabButton: {
    flex: 1,
    padding: '1rem',
    textAlign: 'center',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem'
  },
  tabButtonActive: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)'
  },
  tabButtonInactive: {
    backgroundColor: 'transparent',
    color: '#666'
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    marginBottom: '1.5rem',
    animation: 'fadeInUp 0.8s ease-out'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
    borderBottom: '3px solid #667eea',
    paddingBottom: '0.5rem'
  },
  inputGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#555',
    marginBottom: '0.5rem'
  },
  input: {
    width: '100%',
    padding: '0.875rem',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none'
  },
  select: {
    width: '100%',
    padding: '0.875rem',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none'
  },
  button: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  buttonPrimary: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  },
  buttonSuccess: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'white'
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    color: '#666',
    cursor: 'not-allowed'
  },
  questionCard: {
    marginBottom: '1.5rem',
    padding: '1.5rem',
    border: '2px solid #f0f0f0',
    borderRadius: '12px',
    backgroundColor: '#fafafa',
    transition: 'all 0.3s ease'
  },
  questionTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333'
  },
  answerOption: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid transparent'
  },
  answerDefault: {
    backgroundColor: '#f8f9fa'
  },
  answerSelected: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3'
  },
  answerCorrect: {
    backgroundColor: '#e8f5e8',
    borderColor: '#4caf50'
  },
  answerIncorrect: {
    backgroundColor: '#ffebee',
    borderColor: '#f44336'
  },
  radio: {
    marginRight: '1rem',
    transform: 'scale(1.2)'
  },
  answerText: {
    flex: 1,
    fontSize: '1rem',
    color: '#555'
  },
  statusIcon: {
    marginLeft: 'auto',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  resultCard: {
    marginTop: '1.5rem',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
  },
  resultTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem'
  },
  resultScore: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '0.5rem'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap'
  }
};