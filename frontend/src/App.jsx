import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './home/Home';
import Counties from './counties/Counties';
import TopAttractions from './topAttractions/TopAttractions';
import About from './about/About';
import Map from './map/Map';
import Login from './login/Login';
import CountyDetail from './counties/CountyDetail';
import WelcomePage from './welcomePage/WelcomePage';
import AdminLogin from './adminLogin/AdminLogin'; // Pagina de login pentru admin
import AdminHome from './adminHome/AdminHome'; // Pagina principală pentru admin
import MyAccount from './myAccount/MyAccount';

import Header from './header/Header';
import Footer from './footer/Footer';

import MaybeShowHeader from './maybeShowHeader/MaybeShowHeader';

const App = () => {
  
  return (
    <Router>
      <div>

        <MaybeShowHeader>
          <Header />
        </MaybeShowHeader>

        <Routes>
          <Route path = "/" element={<WelcomePage />} />
          <Route path = "/home" element={<Home />} />
          <Route path="/counties" element={<Counties />} />
          <Route path = "/county/:countyName" element = {<CountyDetail />} />
          <Route path = "/topAttractions" element= {<TopAttractions />} />
          <Route path = "/about" element= {<About />} />
          <Route path = "/map" element= {<Map />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/adminLogin" element= {<AdminLogin />} />
          <Route path = "/adminHome" element = {<AdminHome />} />
          <Route path = "/myAccount" element = {<MyAccount />} />
        </Routes>
        <MaybeShowHeader>
          <Footer />
        </MaybeShowHeader>
      </div>
    </Router>
  );
};

export default App;
