import './Structure.css'
import logo from '../img/The_Legend_of_Zelda_Logo.webp'

export function Header() {
  return (
    <header>
    <img src={logo} alt="zelda-title" />
    <h1>Get random Zelda Game</h1>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <h4>Created by JunhyV</h4>
    </footer>
  );
} 
