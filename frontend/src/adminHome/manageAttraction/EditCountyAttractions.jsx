import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './editCountyAttractions.css';

const EditCountyAttractions = () => {
  const navigate = useNavigate();
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch('http://localhost:8080/attractions');
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      }
    };

    fetchAttractions();
  }, []);

  const handleEdit = (id, locationName) => {
    navigate(`/manage-attractions/edit/${locationName}/${id}`);
  };

  return (
    <div className="edit-attraction-container">
      <h2>Edit Attractions</h2>
      {attractions.length === 0 ? (
        <p>No attractions available.</p>
      ) : (
        <ul className="attractions-list">
          {attractions.map((attraction) => (
            <li key={attraction.idAttraction} className="attraction-item">
              <div>
                <h3>{attraction.name}</h3>
                <p>
                  <strong>County:</strong> {attraction.location}
                </p>
                <p>{attraction.description}</p>
                {attraction.image && (
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="attraction-image"
                  />
                )}
              </div>
              <button
                className="edit-button"
                onClick={() => handleEdit(attraction.idAttraction, attraction.location)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EditCountyAttractions;
