import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './attractionsByCounty.css';

const AttractionsByCounty = () => {
  const { countyName } = useParams(); // Obține numele județului din URL
  const [attractions, setAttractions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch atracțiile din județul selectat
    const fetchAttractions = async () => {
      try {
        const response = await fetch(`http://localhost:8080/attractions/${countyName}`);
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Eroare la obținerea atracțiilor:', error);
      }
    };

    fetchAttractions();
  }, [countyName]);

  const handleEditClick = (attractionId) => {
    navigate(`/manage-attractions/edit/${countyName}/${attractionId}`); // Navighează la pagina de editare pentru atracția selectată
  };

  return (
    <div className="attractions-container">
      <h2>Atracții din județul {countyName}</h2>
      {attractions.length === 0 ? (
        <p>Nu există atracții pentru județul {countyName}.</p>
      ) : (
        <div className="attractions-list">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="attraction-card">
              <img src={attraction.imageUrl} alt={attraction.name} />
              <div className="attraction-details">
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
                <button onClick={() => handleEditClick(attraction.id)}>Editează</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttractionsByCounty;
