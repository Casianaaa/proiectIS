import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './myAccount.css';

const MyAccount = ({ onLogout }) => {
  const [visitedCounties, setVisitedCounties] = useState(['Brașov', 'Cluj']);
  const [countiesToVisit, setCountiesToVisit] = useState(['Sibiu', 'Timișoara']);
  const [countiesNotInterested, setCountiesNotInterested] = useState(['Vaslui']);
  //const navigate = useNavigate();
  const location = useLocation();
  const navigate = useNavigate();

  // Obține județul selectat din navigare
  const selectedCounty = location.state?.selectedCounty || 'Niciun județ selectat';

  const handleLogout = () => {
    //onLogout(); //MOMENTAN NU NE TREBE
    navigate('/'); // Redirecționează utilizatorul la pagina de acasă
  };

  return (
    <div className="my-account-page">
      <h1>My Account</h1>
      <div className="county-lists">
        {/* Lista cu județe vizitate */}
        <div className="list visited-list">
          <h2>Vizitate</h2>
          <ul>
            {visitedCounties.map((county, index) => (
              <li key={index}>{county}</li>
            ))}
          </ul>
        </div>

        {/* Lista cu județe de vizitat */}
        <div className="list to-visit-list">
          <h2>De vizitat</h2>
          <ul>
            {countiesToVisit.map((county, index) => (
              <li key={index}>{county}</li>
            ))}
          </ul>
        </div>

        {/* Lista cu județe pe care nu le vizităm */}
        <div className="list not-to-visit-list">
          <h2>Nu vreau să vizitez</h2>
          <ul>
            {countiesNotInterested.map((county, index) => (
              <li key={index}>{county}</li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default MyAccount;
