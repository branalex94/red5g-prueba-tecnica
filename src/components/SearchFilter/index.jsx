import { useState } from "react";
import ActionsButton from "../ActionsButton";
import "./searchFilter.css";

export default function SearchFilter({ products, fetchData }) {
  const [isActionsActive, setIsActionsActive] = useState(false);

  const showActionOptions = () => {
    setIsActionsActive(!isActionsActive);
  }

  const loadData = () => {
    fetchData();
  }

  return (
    <footer className="footer">
      <div className="footer__filter-controller footer__search-input-container">
        <input type="text" placeholder="Busqueda Por Coincidencia" className="footer__input footer__search-input" />
        <i className="fa-solid fa-magnifying-glass footer__magnifier-icon"></i>
      </div>
      <div className="footer__filter-controller footer__results-dropdown-container">
        <label htmlFor="results" className="footer__results-label">Resultados</label>
        <select id="results" className="footer__results-amount">
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="footer__filter-controller footer__total-results-filter">
        <button className="foooter__total-results__button foooter__total-results__button--disabled">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <input type="text" className="footer__results-page" placeholder="1" />
        <span>De </span>
        <span>1000</span>
        <button className="foooter__total-results__button">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="footer__filter-controller footer__actions-container">
        {products.length < 1 
          ? (
          <div className={`footer__actions-options ${isActionsActive ? "active" : ""}`}>
            <ActionsButton onClick={loadData} text="Cargue masivo" />
            <ActionsButton text="Nuevo Registro" />
          </div>
          )
          : (
            <div className={`footer__actions-options footer__actions-filled-table ${isActionsActive ? "active" : ""}`}>
              <ActionsButton text="Almacenar" />
              <ActionsButton text="Cargue masivo" />
              <ActionsButton text="Descargar excel" />
              <ActionsButton text="Nuevo registro" />
              <ActionsButton text="Eliminar" warning={true} />
            </div>
          )}
        <button className="footer__actions-button" onClick={showActionOptions}>
          <span>Acciones</span>
          <i className="fa-solid fa-caret-down footer__action-arrow"></i>
        </button>
      </div>
    </footer>
  );
}
