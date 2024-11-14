import React from 'react';
import { useParams } from 'react-router-dom';
import './countyDetail.css'

import albaImg from '../counties/countiesImg/Alba/alba.jpeg';
import aradImg from '../counties/countiesImg/Arad/arad.jpg';
import argesImg from '../counties/countiesImg/Arges/arges.jpg';
import bacauImg from '../counties/countiesImg/Bacau/bacau.jpg';
import bihorImg from '../counties/countiesImg/Bihor/bihor.jpg';
import bistritaNasaudImg from '../counties/countiesImg/BistritaNasaud/bistritaNasaud.jpg';
import botosaniImg from '../counties/countiesImg/Botosani/botosani.jpg';
import brailaImg from '../counties/countiesImg/Braila/braila.jpg';
import brasovImg from '../counties/countiesImg/Brasov/brasov.jpg';
import bucurestiImg from '../counties/countiesImg/Bucuresti/bucuresti.jpg';
import buzauImg from '../counties/countiesImg/Buzau/buzau.jpg';
import calarasi1Img from '../counties/countiesImg/Calarasi/calarasi.jpg';
import carasSeverinImg from '../counties/countiesImg/CarasSeverin/carasSeverin.jpg';
import clujImg from '../counties/countiesImg/Cluj/cluj.jpg';
import constantaImg from '../counties/countiesImg/Constanta/constanta.jpg';
import covasnaImg from '../counties/countiesImg/Covasna/covasna.jpeg';
import dambovitoaImg from '../counties/countiesImg/Dambovita/dambovita.png';
import doljImg from '../counties/countiesImg/Dolj/dolj.jpeg';
import galatiImg from '../counties/countiesImg/Galati/galati.jpg';
import giurgiuImg from '../counties/countiesImg/Giurgiu/giurgiu.jpg';
import gorjImg from '../counties/countiesImg/Gorj/gorj.jpg';
import harghitaImg from '../counties/countiesImg/Harghita/harghita.jpg';
import hunedoaraImg from '../counties/countiesImg/Hunedoara/hunedoara.jpg';
import ialomitaImg from '../counties/countiesImg/Ialomita/ialomita.jpg';
import iasiImg from '../counties/countiesImg/Iasi/iasi.jpeg';
import ilsovImg from '../counties/countiesImg/Ilfov/ilfov.jpg';
import maramuresImg from '../counties/countiesImg/Maramures/maramures.jpg';
import mehedinti1Img from '../counties/countiesImg/Mehedinti/mehedinti.jpg';
import muresImg from '../counties/countiesImg/Mures/mures.jpeg';
import neamtImg from '../counties/countiesImg/Neamt/neamt.jpeg';
import oltImg from '../counties/countiesImg/Olt/olt.jpg';
import prahovaImg from '../counties/countiesImg/Prahova/prahova.jpg';
import salajImg from '../counties/countiesImg/Salaj/salaj.jpg';
import satuMareImg from '../counties/countiesImg/SatuMare/satuMare.png';
import sibiuImg from '../counties/countiesImg/Sibiu/sibiu.jpg';
import suceavaImg from '../counties/countiesImg/Suceava/suceava.jpg';
import teleormanImg from '../counties/countiesImg/Teleorman/teleorman.jpg';
import timisImg from '../counties/countiesImg/Timis/timis.jpg';
import tulceaImg from '../counties/countiesImg/Tulcea/tulcea.jpg';
import valsaeImg from '../counties/countiesImg/Valcea/valcea.jpg';
import vasluiImg from '../counties/countiesImg/Vaslui/vaslui.jpg';
import vranceaImg from '../counties/countiesImg/Vrancea/vrancea.jpg';


// Datele despre atracții turistice
const attractionsData = {
  Alba: [
    {
      name: 'Cetatea Alba Carolina',
      description: 'O fortăreață impresionantă în stil Vauban, ce a avut un rol strategic important în istoria Transilvaniei.',
      image: albaImg,
    },
    {
      name: 'Peștera Huda lui Papară',
      description: 'Cea mai lungă peșteră din Munții Trascău, cunoscută pentru coloniile de lilieci și formațiunile spectaculoase de stalactite.',
      image: albaImg,
    },
    {
      name: 'Peștera Ghețarul de la Scărișoara',
      description: 'Adăpostește unul dintre cei mai vechi ghețari subterani din lume, cu o vechime de peste 3.500 de ani.',
      image: albaImg,
    },
  ],
  Arad: [
    {
      name: 'Teatrul de Stat Arad',
      description: 'Un teatru cu o arhitectură impresionantă.',
      image: aradImg,
    },
    {
      name: 'Cetatea Aradului',
      description: 'O cetate istorică în Arad.',
      image: aradImg,
    },
  ],
};

const CountyDetail = () => {
  const { countyName } = useParams();
  const attractions = attractionsData[countyName] || [];

  return (
    <div className="county-detail-container">
      <h2>Atracții turistice din {countyName}</h2>
          {attractions.map((attraction, index) => (
      <div key={index} className="attraction-card">
        {/* Colțul din stânga: titlu deasupra imaginii */}
        <div className="attraction-image-container">
          <h3>{attraction.name}</h3>
          <img src={attraction.image} alt={attraction.name} className="attraction-image" />
        </div>
        
        {/* Colțul din mijloc: descriere */}
        <div className="attraction-description">
          <p>{attraction.description}</p>
        </div>
        
        {/* Colțul din dreapta: radio buttons */}
        <div className="radio-options">
          <label>
            <input type="radio" name={attraction.name} value="visit" /> Vreau să vizitez
          </label>
          <label>
            <input type="radio" name={attraction.name} value="not-visit" /> Nu vreau să vizitez
          </label>
          <label>
            <input type="radio" name={attraction.name} value="visited" /> Am vizitat
          </label>
        </div>
      </div>
    ))}
    </div>
  );
};

export default CountyDetail;