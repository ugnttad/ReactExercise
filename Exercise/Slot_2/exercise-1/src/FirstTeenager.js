import React from 'react';

function FirstTeenager() {
    const people = [
        { name: "Truong", age: 18, occupation: "Engineer" },
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

    const teenager = people.find(person => person.age >= 13 && person.age <= 19);

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                First Teenager
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
                    {teenager ? (
                        <tr>
                            <td style={tdStyle}>{teenager.name}</td>
                            <td style={tdStyle}>{teenager.age}</td>
                            <td style={tdStyle}>{teenager.occupation}</td>
                        </tr>
                    ) : (
                        <tr>
                            <td style={tdStyle} colSpan="3">No teenagers found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default FirstTeenager;