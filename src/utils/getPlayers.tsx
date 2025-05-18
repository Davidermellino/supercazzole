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
      nationality: {
        flag: "🇮🇹",
        country: "Italia"
      },
      presented: true,
      imgs: player1
    },
    {
      name: "DAVIDE ERMELLINO",
      position: "LO CHEF",
      username: "El crack",
      description: "Classe pura e giocate da fuoriclasse: Davide è il talento che accende il gioco con colpi imprevedibili, scatti, salti, tiri ( in qualsiasi senso ). Ogni tocco racconta una storia di tecnica e istinto.",
      nationality: {
        flag: "🇵🇹",
        country: "Portogallo"
      },
      presented: true,
      imgs: player2
    },
    {
      name: "LUCA AGUS",
      position: "PROFESSORE ASSOCIATO",
      username: "El pube de oro",
      description: "Genio precoce e stile irriverente, Luca incanta il campo con la sua fantasia. Freschezza e audacia sono il suo marchio di fabbrica.",
      nationality: {
        flag: "🇦🇷",
        country: "Argentina"
      },
      presented: true,
      imgs: player3
    },
{
      name: "GIANLUCA DASARA",
      position: "PROFESSORE DISSOCIATO",
      username: "sampei",
      description: "Come un pescatore paziente, Gianluca sa aspettare il momento giusto per colpire. Calma apparente e decisioni letali quando serve.",
      nationality: {
        flag: "🌊",
        country: "Oceano Pacifico"
      },
      presented: true,
      imgs: player8
    },
    {
      name: "ALBERTO CORADDU",
      position: "PENNA",
      username: "rudi",
      description: "Grinta senza compromessi e spirito ruvido: Alberto è l'anima operaia della squadra. Un combattente nato che non si risparmia mai.",
      nationality: {
        flag: "🇮🇹",
        country: "Italia"
      },
      presented: true,
      imgs: player4
    },
    {
      name: "LORENZO SCALAS",
      position: "JOLLY",
      username: "anonymus",
      description: "Silenzioso fuori, esplosivo in campo. Lorenzo colpisce quando meno te lo aspetti, con incursioni rapide e giocate sorprendenti.",
      nationality: {
        flag: "🇮🇹",
        country: "Italia"
      },
      presented: false,
      imgs: player5
    },
    {
      name: "MATTIA PINNA",
      position: "GIRAFFA",
      username: "Little endian",
      description: "Pensiero logico e precisione da programmatore: Mattia organizza il gioco con ordine e visione. È l'algoritmo vivente del centrocampo.",
      nationality: {
        flag: "🇮🇳",
        country: "India"
      },
      presented: true,
      imgs: player6
    },
    {
      name: "LORENZO MARONGIU",
      position: "IRIDE",
      username: "Dj lopez",
      description: "Ritmo costante e vibrazioni giuste: Lorenzo è il metronomo della squadra. Sempre sul beat, tiene alta l'energia con un pressing incessante.",
      nationality: {
        flag: "🇮🇹",
        country: "Italia"
      },
      presented: false,
      imgs: player7
    }
    
  ];
  
  return players;
};

export default getPlayers;
