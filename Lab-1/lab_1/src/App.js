import React, { useState } from 'react';
import './App.css';

function App() {
  // Common employee data used across exercises
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  // Exercise 1 - Object Destructuring
  function Exercise1() {
    const employee = { name: "John Doe", age: 30, department: "IT" };
    // Using destructuring to extract properties
    const { name, age, department } = employee;
    
    return (
      <div className="exercise">
        <h2>Exercise 1 - Object Destructuring</h2>
        <div className="exercise-content">
          <h1>{name}</h1>
          <p>Age: {age}</p>
          <p>Department: {department}</p>
        </div>
      </div>
    );
  }

  // Exercise 2 - Map through employees
  function Exercise2() {
    return (
      <div className="exercise">
        <h2>Exercise 2 - Display List Using map()</h2>
        <div className="exercise-content">
          <ul>
            {employees.map((employee, index) => (
              <li key={employee.id || index}>
                {employee.name} - {employee.department}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Exercise 3 - Table of employees
  function Exercise3() {
    return (
      <div className="exercise">
        <h2>Exercise 3 - Employee Table</h2>
        <div className="exercise-content">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id || index}>
                  <td>{employee.id || index}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Exercise 4 - Average Age using rest parameters
  function Exercise4() {
    // ES6 rest parameters to collect ages
    const averageAge = (...ages) => {
      if (ages.length === 0) return 0;
      const sum = ages.reduce((total, age) => total + age, 0);
      return sum / ages.length;
    };

    const employeeAges = employees.map(emp => emp.age);
    const avgAge = averageAge(...employeeAges);

    return (
      <div className="exercise">
        <h2>Exercise 4 - Average Age Using Rest Parameters</h2>
        <div className="exercise-content">
          <p>Employee ages: {employeeAges.join(", ")}</p>
          <p className="result">Average Age: {avgAge.toFixed(2)}</p>
        </div>
      </div>
    );
  }

  // Exercise 5 - Dropdown of employee names
  function Exercise5() {
    const [selectedEmployee, setSelectedEmployee] = useState("");

    const handleChange = (e) => {
      setSelectedEmployee(e.target.value);
    };

    return (
      <div className="exercise">
        <h2>Exercise 5 - Employee Name Dropdown</h2>
        <div className="exercise-content">
          <select 
            value={selectedEmployee}
            onChange={handleChange}
          >
            <option value="">-- Select an employee --</option>
            {employees.map((employee, index) => (
              <option key={employee.id || index} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
          
          {selectedEmployee && (
            <p className="selection">You selected: {selectedEmployee}</p>
          )}
        </div>
      </div>
    );
  }

  // Exercise 6 - Filter IT department employees
  function Exercise6() {
    const itEmployees = employees.filter(emp => emp.department === "IT");
    
    return (
      <div className="exercise">
        <h2>Exercise 6 - Filter IT Department Employees</h2>
        <div className="exercise-content">
          <h3>IT Department Employees:</h3>
          {itEmployees.length > 0 ? (
            <ul>
              {itEmployees.map((employee, index) => (
                <li key={employee.id || index}>
                  {employee.name} - {employee.age} years old
                </li>
              ))}
            </ul>
          ) : (
            <p>No employees found in IT department.</p>
          )}
        </div>
      </div>
    );
  }

  // Exercise 7 - Sort by department, then by name
  function Exercise7() {
    // Create a copy of employees to avoid modifying the original array
    const sortedEmployees = [...employees].sort((a, b) => {
      // First sort by department
      const deptComparison = a.department.localeCompare(b.department);
      
      // If departments are the same, sort by name
      if (deptComparison === 0) {
        return a.name.localeCompare(b.name);
      }
      
      return deptComparison;
    });
    
    return (
      <div className="exercise">
        <h2>Exercise 7 - Sort by Department then Name</h2>
        <div className="exercise-content">
          <ul>
            {sortedEmployees.map((employee, index) => (
              <li key={employee.id || index}>
                <strong>{employee.department}</strong>: {employee.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Exercise 8 - Group employees by department
  function Exercise8() {
    // Group employees by department
    const groupedEmployees = employees.reduce((acc, employee) => {
      // If the department doesn't exist in our accumulator, create it
      if (!acc[employee.department]) {
        acc[employee.department] = [];
      }
      
      // Add the employee to their department
      acc[employee.department].push(employee);
      return acc;
    }, {});
    
    return (
      <div className="exercise">
        <h2>Exercise 8 - Group by Department</h2>
        <div className="exercise-content">
          {Object.entries(groupedEmployees).map(([department, deptEmployees]) => (
            <div key={department} className="department-group">
              <h3>{department}</h3>
              <ul>
                {deptEmployees.map((employee, index) => (
                  <li key={employee.id || index}>{employee.name} - {employee.age} years old</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Exercise 9 - Check if there are any teenagers
  function Exercise9() {
    const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);
    
    const teenagers = employees.filter(e => e.age >= 10 && e.age <= 20);
    
    return (
      <div className="exercise">
        <h2>Exercise 9 - Check for Teenagers</h2>
        <div className="exercise-content">
          <p>Are there any employees who are teenagers? <strong>{isTeenager ? "Yes" : "No"}</strong></p>
          
          {isTeenager && (
            <div className="teenagers">
              <p>Teenage employees:</p>
              <ul>
                {teenagers.map((employee, index) => (
                  <li key={employee.id || index}>{employee.name} - {employee.age} years old</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Exercise 10 - Search employees by name
  function Exercise10() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
    
    const matchingEmployees = employees.filter(employee => 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
      <div className="exercise">
        <h2>Exercise 10 - Search Employees by Name</h2>
        <div className="exercise-content">
          <input
            type="text"
            placeholder="Search employees by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          
          <div className="search-results">
            {searchTerm && (
              <p>
                Search results for: <strong>"{searchTerm}"</strong>
              </p>
            )}
            
            {matchingEmployees.length > 0 ? (
              <ul>
                {matchingEmployees.map((employee, index) => (
                  <li key={employee.id || index}>
                    {employee.name} - {employee.department} ({employee.age} years old)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No matching employees found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management Exercises</h1>
      </header>
      <main className="App-main">
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
        <Exercise5 />
        <Exercise6 />
        <Exercise7 />
        <Exercise8 />
        <Exercise9 />
        <Exercise10 />
      </main>
    </div>
  );
}

export default App;