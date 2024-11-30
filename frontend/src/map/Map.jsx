import React from 'react';
import './map.css';

// Dacă vrei să folosești Leaflet.js pentru harta interactivă
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Harta = () => {
  const locations = [
    {
        name: 'Castelul Peleș',
        coordinates: [45.3996, 25.5403],
        description: 'Un castel renumit din Munții Carpați.',
        url: 'https://link-castelul-peles'
    },
    {
        name: 'Delta Dunării',
        coordinates: [45.1679, 29.6581],
        description: 'Un loc unic, perfect pentru iubitorii de natură.',
        url: 'https://link-delta-dunarii'
    },
    {
        name: 'Palatul Parlamentului',
        coordinates: [44.4268, 26.1025],
        description: 'Un simbol al capitalei României, București.',
        url: 'https://link-palatul-parlamentului'
    },
    {
        name: 'Lacul Iezer',
        coordinates: [47.59806, 24.64620],
        description: 'Un lac glaciar pitoresc situat în Munții Rodnei, aproape de vârful Pietrosul Rodnei.',
        url: 'https://link-lacul-iezer'
    },
    {
        name: 'Mocănița din Maramureș',
        coordinates: [47.7097, 24.4318],
        description: 'Un tren cu aburi care oferă o călătorie pitorească prin peisaje tradiționale.',
        url: 'https://link-mocanita'
    },
    {
        name: 'Sfinxul din Bucegi',
        coordinates: [45.3963, 25.5168],
        description: 'O formațiune stâncoasă misterioasă cu aspect antropomorf, situată în Munții Bucegi.',
        url: 'https://link-sfinxul-bucegi'
    },
    {
        name: 'Cimitirul Vesel',
        coordinates: [47.9739, 23.6920],
        description: 'Un cimitir unic, renumit pentru crucile colorate și inscripțiile umoristice.',
        url: 'https://link-cimitirul-vesel'
    },
    {
        name: 'Salina Turda',
        coordinates: [46.5865, 23.7845],
        description: 'O mină de sare transformată într-o atracție turistică impresionantă.',
        url: 'https://link-salina-turda'
    },
    {
        name: 'Transfăgărășan',
        coordinates: [45.5982, 24.6165],
        description: 'Un drum spectaculos care traversează Munții Făgăraș, oferind peisaje de vis.',
        url: 'https://link-transfagarasan'
    }
  ];

  return (
    <div className="harta-container">
      <h2>Harta Turistică a României</h2>
      <p>Aici poți descoperi locațiile de interes turistic din România.</p>
      <div className="map">
        <MapContainer center={[45.0, 25.0]} zoom={6} style={{ width: '100%', height: '500px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((location, index) => (
            <Marker key={index} position={location.coordinates}>
              <Popup>
                <a 
                  href={location.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  {location.name}
                </a>
                <br />
                {location.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Harta;
