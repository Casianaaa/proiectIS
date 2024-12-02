import React, { useState } from 'react';
import './AddAttraction.css';

const AddAttraction = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Lista cu județe și București
  const counties = [
    'București',
    'Alba',
    'Arad',
    'Argeș',
    'Bacău',
    'Bihor',
    'Bistrița-Năsăud',
    'Botoșani',
    'Brașov',
    'Brăila',
    'Buzău',
    'Caraș-Severin',
    'Călărași',
    'Cluj',
    'Constanța',
    'Covasna',
    'Dâmbovița',
    'Dolj',
    'Galați',
    'Giurgiu',
    'Gorj',
    'Harghita',
    'Hunedoara',
    'Ialomița',
    'Iași',
    'Ilfov',
    'Maramureș',
    'Mehedinți',
    'Mureș',
    'Neamț',
    'Olt',
    'Prahova',
    'Satu Mare',
    'Sălaj',
    'Sibiu',
    'Suceava',
    'Teleorman',
    'Timiș',
    'Tulcea',
    'Vaslui',
    'Vâlcea',
    'Vrancea',
  ];

  const handleAddAttraction = async (e) => {
    e.preventDefault();
  
    const attractionData = {
      name: name,
      location: location, // Adaugăm județul selectat
      description: description, // Adaugăm descrierea
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    };
  
    try {
      const response = await fetch('http://localhost:8080/attractions/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attractionData),
      });
  
      if (response.ok) {
        setSuccess('Atractie adaugata cu succes!');
        setError('');
        setName('');
        setLocation('');
        setDescription('');
        setLatitude('');
        setLongitude('');
        setImage(null);
      } else if (response.status === 409) {
        setError('Atractia deja exista!');
        setSuccess('');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to add attraction.');
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="add-attraction-container">
      <h2>Add New Attraction</h2>

      {/* Afișare mesaj eroare */}
      {error && <div className="error">{error}</div>}

      {/* Afișare mesaj succes */}
      {success && <div className="success">{success}</div>}

      <form onSubmit={handleAddAttraction} className="attraction-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter attraction name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          placeholder="Enter attraction description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label>Latitude:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
        <label>Longitude:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
        <label>County (Județ):</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a county
          </option>
          {counties.map((locationName, index) => (
            <option key={index} value={locationName}>
              {locationName}
            </option>
          ))}
        </select>
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Add Attraction</button>
      </form>
    </div>
  );
};

export default AddAttraction;