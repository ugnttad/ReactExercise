import React from 'react';

function GroupByOccupation() {
    const people = [
        { name: "Truong", age: 21, occupation: "Engineer" },
        { name: "Quang", age: 21, occupation: "Designer" },
        { name: "Huy", age: 21, occupation: "Engineer" },
        { name: "Khai", age: 21, occupation: "Student" }
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

    const groupedByOccupation = people.reduce((acc, person) => {
        acc[person.occupation] = acc[person.occupation] || [];
        acc[person.occupation].push(person);
        return acc;
    }, {});

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                Grouped by Occupation
            </h2>
            {Object.entries(groupedByOccupation).map(([occupation, persons], index) => (
                <div key={index}>
                    <h3 style={{ fontFamily: 'Arial, sans-serif', margin: '20px 0 10px', textAlign: 'center'}}>
                        {occupation}
                    </h3>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Name</th>
                                <th style={thStyle}>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person, idx) => (
                                <tr key={idx}>
                                    <td style={tdStyle}>{person.name}</td>
                                    <td style={tdStyle}>{person.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default GroupByOccupation;