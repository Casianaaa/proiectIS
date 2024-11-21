import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css'; // Stiluri pentru pagina de login admin

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/adminHome'); // Redirect la pagina de admin
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('A apărut o eroare. Te rugăm să încerci mai târziu.');
    }
  };

  const handleLoginClick = () => {
    // Poți să pui logica pentru a loga direct adminul, de exemplu
    navigate('/adminHome');
  };

  return (
    <div className="login-admin-page">
      <h1>Autentificare Admin</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="login-admin-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login Admin</button>
      </form>
      <button onClick={handleLoginClick} className="btn admin-login-btn">
        Login Direct Admin
      </button>
    </div>
  );
};

export default AdminLoginPage;
