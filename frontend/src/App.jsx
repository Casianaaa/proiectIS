import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Counties from './counties/Counties';
import TopAttractions from './topAttractions/TopAttractions';
import About from './about/About';
import Map from './map/Map';
import Login from './login/Login';
import CountyDetail from './counties/CountyDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Header isAuthenticated={false} onLogout={() => {}} />
        <Routes>
        <Route path = "/" element={<Home />} />
          <Route path="/counties" element={<Counties />} />
          <Route path = "/county/:countyName" element = {<CountyDetail />} />
          <Route path = "/topAttractions" element= {<TopAttractions />} />
          <Route path = "/about" element= {<About />} />
          <Route path = "/map" element= {<Map />} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
