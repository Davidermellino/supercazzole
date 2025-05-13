import React, { useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import getPlayers from '../utils/getPlayers';
import './Team.css';

const players = getPlayers(); // Ottieni la lista dei giocatori dal tuo fil

const Team = () => {
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
    <section id="team" className="team" ref={sectionRef}>
      <div className="team-content">
        <h2 className="team-title">LA SQUADRA</h2>
        <div className="team-grid">
          {players.map((player, index) => (
            <Link to={`/player/${index + 1}`} key={index} className="player-card">
              {player.imgs ? (
                <img src={player.imgs} alt={player.name} className="player-image" />
              ) : (
                <User size={64} className="player-icon" />
              )}
              <h3 className="player-name">{player.name}</h3>
              <p className="player-position">{player.position}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;