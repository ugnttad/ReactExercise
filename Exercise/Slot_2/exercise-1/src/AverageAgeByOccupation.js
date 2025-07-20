import React from 'react';

function AverageAgeByOccupation() {
    const people = [
        { name: "Truong", age: 20, occupation: "Engineer" },
        { name: "Quang", age: 21, occupation: "Designer" },
        { name: "Huy", age: 21, occupation: "Engineer" },
        { name: "Khai", age: 20, occupation: "Student" }
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

    const averageAges = people.reduce((acc, person) => {
        if (!acc[person.occupation]) {
            acc[person.occupation] = { sum: 0, count: 0 };
        }
        acc[person.occupation].sum += person.age;
        acc[person.occupation].count += 1;
        return acc;
    }, {});

    const averageAgeData = Object.entries(averageAges).map(([occupation, data]) => ({
        occupation,
        averageAge: (data.sum / data.count).toFixed(1)
    }));

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                Average Age by Occupation
            </h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Occupation</th>
                        <th style={thStyle}>Average Age</th>
                    </tr>
                </thead>
                <tbody>
                    {averageAgeData.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.occupation}</td>
                            <td style={tdStyle}>{item.averageAge}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AverageAgeByOccupation;