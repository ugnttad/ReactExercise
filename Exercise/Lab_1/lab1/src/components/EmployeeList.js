import { useState } from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { id: 4, name: "Ann", department: "Finance", age: 22 },
  { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  //   { name: "Ann", department: "Finance", age: 22 },
  //   { name: "Elisabeth", department: "HR", age: 16 }
];

const tableStyle = {
  border: "1px solid #4b5563",
  borderCollapse: "collapse",
  width: "100%",
  maxWidth: "600px",
  margin: "20px auto",
  fontFamily: "Arial, sans-serif",
};

const thStyle = {
  border: "1px solid #4b5563",
  padding: "12px",
  backgroundColor: "#f3f4f6",
  textAlign: "left",
  color: "#1f2937",
};

const tdStyle = {
  border: "1px solid #4b5563",
  padding: "12px",
  textAlign: "left",
  color: "#374151",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  margin: "20px 0",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
};

const liStyle = {
  padding: "8px",
  borderBottom: "1px solid #e5e7eb",
};

const sectionStyle = {
  marginBottom: "24px",
};

// Exercise 4: Average Age
const averageAge = (...ages) =>
  ages.length
    ? (ages.reduce((sum, age) => sum + age, 0) / ages.length).toFixed(2)
    : 0;

const AverageAgeDisplay = () => {
  const ages = employees.map((e) => e.age);
  return <p style={{ margin: "10px 0" }}>Average Age: {averageAge(...ages)}</p>;
};

// Exercise 5: Dropdown Menu
const EmployeeDropdown = () => (
  <select
    style={{
      padding: "8px",
      border: "1px solid #4b5563",
      borderRadius: "4px",
      maxWidth: "600px",
      width: "100%",
      margin: "10px 0",
    }}
  >
    <option value="">Select an employee</option>
    {employees.map((employee, index) => (
      <option key={employee.id || index} value={employee.name}>
        {employee.name}
      </option>
    ))}
  </select>
);

// Exercise 6: IT Employees
const ITEmployees = () => (
  <ul style={listStyle}>
    {employees
      .filter((employee) => employee.department === "IT")
      .map((employee, index) => (
        <li key={employee.id || index} style={liStyle}>
          {employee.name} - {employee.department} - {employee.age}
        </li>
      ))}
  </ul>
);

// Exercise 7: Sorted Employees
const SortedEmployees = () => {
  const sorted = [...employees].sort(
    (a, b) =>
      a.department.localeCompare(b.department) || a.name.localeCompare(b.name)
  );
  return (
    <ul style={listStyle}>
      {sorted.map((employee, index) => (
        <li key={employee.id || index} style={liStyle}>
          {employee.name} - {employee.department} - {employee.age}
        </li>
      ))}
    </ul>
  );
};

// Exercise 8: Grouped Employees
const GroupedEmployees = () => {
  const grouped = employees.reduce((acc, employee) => {
    const dept = employee.department;
    acc[dept] = acc[dept] || [];
    acc[dept].push(employee);
    return acc;
  }, {});
  return (
    <div>
      {Object.keys(grouped).map((dept) => (
        <div key={dept} style={{ marginBottom: "16px" }}>
          <h3
            style={{ fontSize: "1.25rem", fontWeight: "600", margin: "10px 0" }}
          >
            {dept}
          </h3>
          <ul style={listStyle}>
            {grouped[dept].map((employee, index) => (
              <li key={employee.id || index} style={liStyle}>
                {employee.name} - {employee.department} - {employee.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Exercise 9: Teenager Check
const TeenagerCheck = () => {
  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);
  return (
    <p style={{ margin: "10px 0" }}>Has teenager: {isTeenager.toString()}</p>
  );
};

// Exercise 10: Employee Search
const EmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #4b5563",
          borderRadius: "4px",
          maxWidth: "600px",
          width: "100%",
          margin: "10px 0",
          fontFamily: "Arial, sans-serif",
        }}
      />
      <ul style={listStyle}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee, index) => (
            <li key={employee.id || index} style={liStyle}>
              {employee.name} - {employee.department} - {employee.age}
            </li>
          ))
        ) : (
          <li style={liStyle}>No employees found</li>
        )}
      </ul>
    </div>
  );
};

// Main Component: EmployeeList (Exercises 2-10)
const EmployeeList = () => (
  <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
    <h1
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "24px",
        textAlign: "center",
      }}
    >
      Employee Exercises (2-10)
    </h1>

    {/* Exercise 2: Unordered List */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 2: Employee List
      </h2>
      <ul style={listStyle}>
        {employees.map((employee, index) => (
          <li key={employee.id || index} style={liStyle}>
            {employee.name} - {employee.department} - {employee.age}
          </li>
        ))}
      </ul>
    </section>

    {/* Exercise 3: Table */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 3: Employee Table
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id || index}>
              <td style={tdStyle}>{employee.id || index + 1}</td>
              <td style={tdStyle}>{employee.name}</td>
              <td style={tdStyle}>{employee.department}</td>
              <td style={tdStyle}>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    {/* Exercise 4: Average Age */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 4: Average Age
      </h2>
      <AverageAgeDisplay />
    </section>

    {/* Exercise 5: Dropdown */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 5: Employee Dropdown
      </h2>
      <EmployeeDropdown />
    </section>

    {/* Exercise 6: IT Employees */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 6: IT Department Employees
      </h2>
      <ITEmployees />
    </section>

    {/* Exercise 7: Sorted Employees */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 7: Sorted Employees
      </h2>
      <SortedEmployees />
    </section>

    {/* Exercise 8: Grouped Employees */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 8: Grouped by Department
      </h2>
      <GroupedEmployees />
    </section>

    {/* Exercise 9: Teenager Check */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 9: Teenager Check
      </h2>
      <TeenagerCheck />
    </section>

    {/* Exercise 10: Employee Search */}
    <section style={sectionStyle}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}
      >
        Exercise 10: Employee Search
      </h2>
      <EmployeeSearch />
    </section>
  </div>
);

export default EmployeeList;
