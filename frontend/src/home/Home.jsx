import React, { useState } from 'react';
import './home.css';

import castelulPelesImg from './homeImg/castelulPeles.jpg';
import laculIezerImg from './homeImg/laculIezer.jpg';
import mocanitaImg from './homeImg/mocanita.jpg';
import palatulParlamentuluiImg from './homeImg/palatulParlamentului.jpg';
import sfinxulBucegiImg from './homeImg/sfinxulBucegi.jpg';
import cimitirulVeselImg from './homeImg/cimitirulVesel.jpg';
import deltaDunariiImg from './homeImg/deltaDunarii.jpeg';
import salinaTurdaImg from './homeImg/salinaTurda.jpg';
import transfagarasanImg from './homeImg/transfagarasan.jpg';

const images = [
  { src: castelulPelesImg, alt: 'Castelul Peles' },
  { src: laculIezerImg, alt: 'Lacul Iezer' },
  { src: deltaDunariiImg, alt: 'Delta Dunării' },
  { src: mocanitaImg, alt: 'Mocănița' },
  { src: palatulParlamentuluiImg, alt: 'Palatul Parlamentului' },
  { src: sfinxulBucegiImg, alt: 'Sfinxul Bucegi' },
  { src: cimitirulVeselImg, alt: 'Cimitirul Vesel' },
  { src: salinaTurdaImg, alt: 'Salina Turda' },
  { src: transfagarasanImg, alt: 'Transfăgărășan' },
];

// Array cu URL-urile pentru fiecare atracție
const attractionsUrls = [
  'https://link-castelul-peles',
  'https://link-lacul-iezer',
  'https://link-mocanita',
  'https://link-palatul-parlamentului',
  'https://link-sfinxul-bucegi',
  'https://link-cimitirul-vesel',
  'https://link-delta-dunarii',
  'https://link-salina-turda',
  'https://link-transfagarasan'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalImages);
  };

  // Determină imaginile de afișat pe baza indexului curent
  const currentImages = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % totalImages;
    currentImages.push(images[index]);
  }

  return (
    <div className="home-container">
      <section className="home-destinations">
        <h2>Destinații populare</h2>
        <div className="carousel">
          <button className="carousel-btn left" onClick={handlePrev}>
            &#9664;
          </button>
          <div className="destination-list">
            {currentImages.map((image, index) => (
              <div className="destination-item" key={currentIndex + index}>
                <img src={image.src} alt={image.alt} />
                {/* Transformăm textul într-un link */}
                <a
                  href={attractionsUrls[currentIndex + index]} // Folosim URL-ul din array-ul attractionsUrls
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.alt}
                </a>
              </div>
            ))}
          </div>
          <button className="carousel-btn right" onClick={handleNext}>
            &#9654;
          </button>
        </div>
      </section>

      <section className="home-cta">
        <h2>Începe-ți aventura azi!</h2>
        <p>Plănuiește-ți excursia alături de noi pentru o experiență de neuitat.</p>
        <button>Explorează acum</button>
      </section>
    </div>
  );
};

export default Home;
