import React from 'react';

function SortByOccupationAndAge() {
    const people = [
        { name: "Truong", age: 21, occupation: "Engineer" },
        { name: "Quang", age: 22, occupation: "Designer" },
        { name: "Huy", age: 25, occupation: "Engineer" },
        { name: "Khai", age: 29, occupation: "Student" }
    ];

    const tableStyle = {
        border: '1px solid #4b5563',
        borderCollapse: 'collapse',
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif'
    };
    
    const thStyle = {
        border: '1px solid #4b5563',
        padding: '12px',
        backgroundColor: '#f3f4f6',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#1f2937'
    };
    
    const tdStyle = {
        border: '1px solid #4b5563',
        padding: '12px',
        textAlign: 'left',
        color: '#374151'
    };

    const sortedPeople = [...people].sort((a, b) => {
        if (a.occupation < b.occupation) return -1;
        if (a.occupation > b.occupation) return 1;
        return a.age - b.age;
    });

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                Sorted by Occupation and Age
            </h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Age</th>
                        <th style={thStyle}>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPeople.map((person, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{person.name}</td>
                            <td style={tdStyle}>{person.age}</td>
                            <td style={tdStyle}>{person.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SortByOccupationAndAge;