import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './countyDetail.css';

const CountyDetail = ({ isAuthenticated }) => {  // Adaugă prop-ul isAuthenticated
  const { locationName } = useParams();
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selections, setSelections] = useState({});

  useEffect(() => {
    if (locationName) {
      axios.get(`http://localhost:8080/attractions/county/${locationName}`)
        .then((response) => {
          setAttractions(response.data);
          setLoading(false);

          const initialSelections = {};
          response.data.forEach((attraction) => {
            initialSelections[attraction.id] = null;
          });
          setSelections(initialSelections);
        })
        .catch((error) => {
          console.error('Eroare la încărcarea atracțiilor turistice', error);
          setLoading(false);
        });
    } else {
      console.error('Parametrul locationName este undefined!');
      setLoading(false);
    }
  }, [locationName]);

  const handleSelectionChange = (attractionId, value) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [attractionId]: value,
    }));
  };

  if (loading) {
    return <div>Încărcare...</div>;
  }

  if (attractions.length === 0) {
    return <div>Nu au fost găsite atracții turistice pentru județul respectiv.</div>;
  }

  return (
    <div className="county-detail-container">
      <h2>Atracții turistice din județul {locationName}</h2>
      {attractions.map((attraction) => (
        <div key={attraction.id} className="attraction-card">
          <div className="attraction-image-container">
            <h3>{attraction.name}</h3>
            <img src={attraction.image} alt={attraction.name} className="attraction-image" />
          </div>
          <div className="attraction-description">
            <p>{attraction.description}</p>
          </div>

          {/* Renderizăm opțiunile radio doar dacă utilizatorul este logat */}
          {isAuthenticated && (
            <div className="radio-options">
              <fieldset>
                <legend>Opțiuni:</legend>
                <label>
                  <input
                    type="radio"
                    name={`visit-${attraction.id}`}
                    value="visited"
                    checked={selections[attraction.id] === 'visited'}
                    onChange={() => handleSelectionChange(attraction.id, 'visited')}
                  />
                  Am vizitat
                </label>
                <label>
                  <input
                    type="radio"
                    name={`visit-${attraction.id}`}
                    value="wantToVisit"
                    checked={selections[attraction.id] === 'wantToVisit'}
                    onChange={() => handleSelectionChange(attraction.id, 'wantToVisit')}
                  />
                  Vreau să vizitez
                </label>
                <label>
                  <input
                    type="radio"
                    name={`visit-${attraction.id}`}
                    value="notInterested"
                    checked={selections[attraction.id] === 'notInterested'}
                    onChange={() => handleSelectionChange(attraction.id, 'notInterested')}
                  />
                  Nu vreau să vizitez
                </label>
              </fieldset>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountyDetail;
