import React, { useRef } from 'react';
import logo from '../assets/imgs/logo.png';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="hero-title">SUPERCAZZOLE</h1>
        <p className="hero-subtitle">TRADIZIONE • PASSIONE • VITTORIA</p>
        <button 
          className="cta-button" 
          onClick={() => scrollToSection('history')}
        >
          SCOPRI DI PIÙ
        </button>
      </div>
    </section>
  );
};

export default Hero;