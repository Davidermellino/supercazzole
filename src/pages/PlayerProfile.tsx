import React ,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { User } from 'lucide-react';
import getPlayers from "../utils/getPlayers";
import "./PlayerProfile.css";

const PlayerProfile = () => {
  const { playerId } = useParams();
  const players = getPlayers();
  const playerIndex = parseInt(playerId || "1") - 1;
  const player = players[playerIndex];

  if (!player) {
    return <div>Giocatore non trovato</div>;
  }

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])

  return (
    <div className="container py-5 mt-5 page">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <div className="player-image-container">
            {player.imgs ? (
              <img src={player.imgs} alt={player.name} className="player-image" />
            ) : (
              <User size={200} className="player-avatar" />
            )}
          </div>
        </div>
      </div>
        
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="player-card card h-100 shadow ">
            <div className="card-body text-center">
              <h1 className="card-title display-6 mb-3 fw-bold">{player.name}</h1>
              <span className="position-badge">{player.position}</span>
              <div className="player-username mt-4 pt-4">
                <p className="small text-uppercase mb-2">Per gli amici</p>
                <h2 className="h3 fw-bold">{player.username}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-12 col-lg-8">
          <div className="player-card card mb-4 shadow ">
            <div className="card-body">
              <h3 className="h5 mb-3 fw-bold">Nazionalità</h3>
              <div className="d-flex align-items-center">
                <span className="flag-icon">🇮🇹</span>
                <p className="mb-0 ms-3">Italiana</p>
              </div>
            </div>
          </div>

          <div className="player-card card shadow ">
            <div className="card-body">
              <h3 className="h5 mb-3 fw-bold">Chi sono</h3>
              <p className="mb-0 lead">{player.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
