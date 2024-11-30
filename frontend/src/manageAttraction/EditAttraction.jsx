import React, { useState, useEffect } from 'react';

const EditAttraction = ({ attractionId, onSave }) => {
  const [attraction, setAttraction] = useState({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
    image: null,
  });

  // Simulează preluarea datelor atracției dintr-un API
  useEffect(() => {
    // Fetch the attraction details (simulate with hardcoded data or an API call)
    const fetchAttraction = async () => {
      const data = {
        name: 'Peleș Castle',
        description: 'A beautiful castle in Sinaia, Romania.',
        latitude: '45.3591',
        longitude: '25.5421',
        image: null,
      };
      setAttraction(data);
    };

    fetchAttraction();
  }, [attractionId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttraction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setAttraction((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trimite datele modificate către backend sau API
    console.log('Updated Attraction:', attraction);
    onSave(attraction); // Callback pentru a salva modificările
  };

  return (
    <div className="edit-attraction-container">
      <h2>Edit Attraction</h2>
      <form className="edit-attraction-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Attraction Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={attraction.name}
          onChange={handleChange}
          placeholder="Enter attraction name"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={attraction.description}
          onChange={handleChange}
          placeholder="Enter attraction description"
        ></textarea>

        <label htmlFor="latitude">Latitude:</label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          value={attraction.latitude}
          onChange={handleChange}
          placeholder="Enter latitude"
        />

        <label htmlFor="longitude">Longitude:</label>
        <input
          type="text"
          id="longitude"
          name="longitude"
          value={attraction.longitude}
          onChange={handleChange}
          placeholder="Enter longitude"
        />

        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditAttraction;
