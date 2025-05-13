import React, { useEffect, useRef } from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <footer id="footer" className="footer" ref={sectionRef}>
      <div className="footer-content">
        <div className="cta-section">
          <div className="cta-block info-text">
            <h3>SEGUICI</h3>
            <div className="social-icons info-text">
              <a href="https://www.instagram.com/supercazzole_official/" className="social-icon">
                <Instagram className='info-text' size={24} />
              </a>
            </div>
          </div>
          
          <div className="cta-block">
            <h3>CONTATTI</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span className='info-text'>Via Ospedale 71, Palazzo delle scienze Cagliari</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span className='info-text'>+39 070 123 4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span className='info-text'>info@supercazzole.it</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-info">
          <p className='info-text'>© 2025 SUPERCAZZOLE. TUTTI I DIRITTI RISERVATI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;