const employee = { name: "John Doe", age: 30, department: "IT" };

const EmployeeDetails = () => {
  // const { name, age, department } = employee;

  console.log(employee);

  return (
    <div>
      <h1>Exer 1</h1>
      <h2>{employee.name}</h2>
      <p>Age: {employee.age}</p>
      <p>Department: {employee.department}</p>

      <div>
        <ul>
          <li>
            {employee.name} - {employee.age} - {employee.department}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetails;
