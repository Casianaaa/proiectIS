import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './countyDetail.css';

const CountyDetail = () => {
  const { locationName } = useParams();  // Schimbă de la 'name' la 'countyName'
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Numele județului:', locationName);  // Verifică valoarea 'countyName'

    if (locationName) {
      // Încarcă atracțiile turistice doar dacă 'countyName' este valid
      axios.get(`http://localhost:8080/attractions/county/${locationName}`)
        .then((response) => {
          setAttractions(response.data);  // Salvează atracțiile turistice în stare
          setLoading(false);
        })
        .catch((error) => {
          console.error('Eroare la încărcarea atracțiilor turistice', error);
          setLoading(false);
        });
    } else {
      console.error('Parametrul countyName este undefined!');
      setLoading(false);
    }
  }, [locationName]);

  if (loading) {
    return <div>Încărcare...</div>;
  }

  if (attractions.length === 0) {
    return <div>Nu au fost găsite atracții turistice pentru județul respectiv.</div>;
  }

  return (
    <div className="county-detail-container">
      <h2>Atracții turistice din județul {locationName}</h2>
      {attractions.map((attraction, index) => (
        <div key={index} className="attraction-card">
          <div className="attraction-image-container">
            <h3>{attraction.name}</h3>
            <img src={attraction.image} alt={attraction.name} className="attraction-image" />
          </div>
          <div className="attraction-description">
            <p>{attraction.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountyDetail;
