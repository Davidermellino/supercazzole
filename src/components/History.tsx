import React, { useEffect, useRef } from 'react';
import './History.css';

const History = () => {
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
    <section id="history" className="history" ref={sectionRef}>
      <div className="history-content">
        <h2 className="history-title">LA NOSTRA STORIA</h2>
        <p className="history-text">
          Fondata nel 1975, la nostra squadra universitaria ha radici profonde nella tradizione sportiva locale. Nata dalla passione di un gruppo di studenti determinati a eccellere sia nello sport che nello studio, siamo cresciuti fino a diventare una delle forze più competitive nel panorama universitario nazionale.
          
          Attraverso decenni di impegno, abbiamo formato non solo atleti eccezionali, ma anche individui di carattere, pronti ad affrontare le sfide della vita con lo stesso spirito che portiamo in campo ogni giorno.
          
          I nostri colori rappresentano l'orgoglio, la perseveranza e l'eccellenza che ci hanno guidato attraverso vittorie memorabili e sfide formative. Ogni trofeo nella nostra bacheca racconta una storia di sacrificio, lavoro di squadra e dedizione.
        </p>
      </div>
    </section>
  );
};

export default History;