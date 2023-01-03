import { useEffect, useState } from "react";
import {gameCovers} from './covers.jsx'
import {getRandom} from './random.jsx'
import './Card.css'

export function Card() {
  let [random, setRandom] = useState(0);
  let [games, setGames] = useState([]);

  useEffect(() => {
    try {
      fetch("https://zelda.fanapis.com/api/games")
        .then((res) => res.json())
        .then((data) => data.data)
        .then((games) => setGames(games));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="card">
      <img src={gameCovers[random]} alt="cover" />
      <div className="text-container">
        <h2>{JSON.stringify(games[random]?.name)}</h2>
        <p>{JSON.stringify(games[random]?.released_date)}</p>
      </div>
      <button onClick={() => setRandom(getRandom(20))}>Get a Game</button>
    </div>
  );
}
