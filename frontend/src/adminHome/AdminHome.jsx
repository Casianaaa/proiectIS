// frontend/src/admin/AdminHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adminHome.css'; // Stiluri pentru pagina de admin home

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/'); // Redirecționează înapoi la pagina de bun venit
  };

  return (
    <div className="admin-home">
      <h1>Bine ai venit, Admin!</h1>
      <p>Aceasta este zona de administrare a site-ului.</p>
      <button onClick={handleLogoutClick} className="btn logout-btn">
        Logout
      </button>
    </div>
  );
};

export default AdminHome;