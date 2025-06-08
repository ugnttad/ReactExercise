import './App.css';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <EmployeeDetails/>
      <br/>
      <EmployeeList/>
    </div>
  );
}

export default App;
