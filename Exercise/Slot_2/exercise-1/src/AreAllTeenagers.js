import React from 'react';

function AreAllTeenagers() {
    const people = [
        { name: "Truong", age: 18, occupation: "Engineer" },
        { name: "Quang", age: 18, occupation: "Designer" },
        { name: "Huy", age: 18, occupation: "Engineer" },
        { name: "Khai", age: 18, occupation: "Student" }
    ];

    const tableStyle = {
        border: '1px solid #4b5563',
        borderCollapse: 'collapse',
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif'
    };
    
    const tdStyle = {
        border: '1px solid #4b5563',
        padding: '12px',
        textAlign: 'left',
        color: '#374151'
    };

    const areAllTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                Are All Teenagers?
            </h2>
            <table style={tableStyle}>
                <tbody>
                    <tr>
                        <td style={tdStyle}>
                            {areAllTeenagers 
                                ? "Yes, all people are teenagers" 
                                : "No, not all people are teenagers"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AreAllTeenagers;