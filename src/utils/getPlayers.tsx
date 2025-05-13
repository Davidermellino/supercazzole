// Importa le immagini dei giocatori
import player1 from '../assets/imgs/player_imgs/lucamedda.png';
import player2 from '../assets/imgs/player_imgs/dasr.png';
import player3 from '../assets/imgs/player_imgs/lucagus.png';
import player4 from '../assets/imgs/player_imgs/rudi.png';
import player5 from '../assets/imgs/player_imgs/loree.png';
import player6 from '../assets/imgs/player_imgs/mattipin.png';
import player7 from '../assets/imgs/player_imgs/maro.png';
import player8 from '../assets/imgs/player_imgs/gian.png';

const getPlayers = () => {
  const players = [
    {
      name: "LUCA MEDDA",
      position: "PORTIERE",
      username: "Il boy scout",
      description: "Sempre pronto e affidabile come un vero boy scout, Luca è il guardiano dei pali. Spirito di servizio e sangue freddo fanno di lui un porto sicuro per la squadra.",
      imgs: player1
    },
    {
      name: "DAVIDE ERMELLINO",
      position: "JOLLY",
      username: "El crack",
      description: "Classe pura e giocate da fuoriclasse: Davide è il talento che accende il gioco con colpi imprevedibili, scatti, salti, tiri ( in qualsiasi senso ). Ogni tocco racconta una storia di tecnica e istinto.",
      imgs: player2
    },
    {
      name: "LUCA AGUS",
      position: "JOLLY",
      username: "El pube de oro",
      description: "Genio precoce e stile irriverente, Luca incanta il campo con la sua fantasia. Freschezza e audacia sono il suo marchio di fabbrica.",
      imgs: player3
    },
    {
      name: "ALBERTO CORADDU",
      position: "JOLLY",
      username: "rudi",
      description: "Grinta senza compromessi e spirito ruvido: Alberto è l’anima operaia della squadra. Un combattente nato che non si risparmia mai.",
      imgs: player4
    },
    {
      name: "LORENZO SCALAS",
      position: "JOLLY",
      username: "anonymus",
      description: "Silenzioso fuori, esplosivo in campo. Lorenzo colpisce quando meno te lo aspetti, con incursioni rapide e giocate sorprendenti.",
      imgs: player5
    },
    {
      name: "MATTIA PINNA",
      position: "JOLLY",
      username: "Little endian",
      description: "Pensiero logico e precisione da programmatore: Mattia organizza il gioco con ordine e visione. È l’algoritmo vivente del centrocampo.",
      imgs: player6
    },
    {
      name: "LORENZO MARONGIU",
      position: "JOLLY",
      username: "Dj lopez",
      description: "Ritmo costante e vibrazioni giuste: Lorenzo è il metronomo della squadra. Sempre sul beat, tiene alta l’energia con un pressing incessante.",
      imgs: player7
    },
    {
      name: "GIANLUCA DASARA",
      position: "JOLLY",
      username: "sampei",
      description: "Come un pescatore paziente, Gianluca sa aspettare il momento giusto per colpire. Calma apparente e decisioni letali quando serve.",
      imgs: player8
    },
  ];
  
  return players;
};

export default getPlayers;