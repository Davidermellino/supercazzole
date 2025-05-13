import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aggiungi event listener per chiudere il menu quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element;
      if (isMenuOpen && 
          !target.closest('.navigation') && 
          !target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    
    // Se il menu è aperto, imposta overflow hidden sul body per evitare lo scrolling
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string): void => {
    setIsMenuOpen(false); // Chiude il menu
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funzione per gestire tutti i click sui link
  const handleLinkClick = (sectionId?: string): void => {
    setIsMenuOpen(false); // Chiude sempre il menu quando si clicca su un link
    
    // Se è stato fornito un ID di sezione, scorri fino ad essa
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Piccolo timeout per assicurarsi che la transizione del menu sia iniziata
    }
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Overlay scuro quando il menu è aperto */}
        {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => handleLinkClick('hero')}>HOME</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('history')}>STORIA</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('team')}>SQUADRA</Link></li>
            <li><Link to="/blog" onClick={() => handleLinkClick()}>BLOG</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('footer')}>CONTATTI</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;