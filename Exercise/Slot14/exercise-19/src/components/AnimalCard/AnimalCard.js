// src/components/AnimalCard/AnimalCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
    name,
    scientificName,
    size,
    diet,
    additional,
    showAdditional
}) {
    return (
        <div className="animal-card">
            <div className="animal-image">
                {name === 'Lion' && (
                    <img
                        src="image1.jpg"
                        alt="Lion"
                        className="card-image"
                    />
                )}
                {name === 'Gorilla' && (
                    <img
                        src="image2.jpg"
                        alt="Gorilla"
                        className="card-image"
                    />
                )}
                {name === 'Zebra' && (
                    <img
                        src="image3.jpg"
                        alt="Zebra"
                        className="card-image"
                    />
                )}
            </div>

            <div className="card-content">
                <h2 className="animal-name">{name}</h2>

                <div className="animal-info">
                    <p><strong>Scientific Name:</strong> {scientificName}</p>
                    <p><strong>Size:</strong> {size} kg</p>
                    <p><strong>Diet:</strong> {diet.join(', ')}</p>
                </div>

                <button
                    className="more-info-btn"
                    onClick={() => showAdditional(additional || AnimalCard.defaultProps.additional)}
                >
                    More Info
                </button>
            </div>
        </div>
    );
}

// PropTypes validation
AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
};

// Default props
AnimalCard.defaultProps = {
    additional: {
        notes: 'No Additional Information'
    }
};