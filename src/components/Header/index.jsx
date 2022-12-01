import Filters from "../Filters";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__menu-container">
            <div className="header__menu-hamburger"></div>
          </li>
          <li className="header__logo">Wiicar</li>
          <li className="header__button-container">
            <button className="header__button">
              <i className="fa-solid fa-power-off"></i>
              <span>Salir</span>
            </button>
          </li>
        </ul>
      </nav>
      <Filters />
    </header>
  );
}
