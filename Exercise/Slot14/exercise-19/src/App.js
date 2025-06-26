import React from 'react';
import AnimalCard from './components/AnimalCard/AnimalCard';
import animalsData from './data/animalsData';
import './App.css';

export default function App() {
  // Function to show additional data
  const showAdditionalData = (additional) => {
    const data = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(data);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Animals</h1>
      </header>
      
      <main className="animals-container">
        {animalsData.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditionalData}
          />
        ))}
      </main>
    </div>
  );
}