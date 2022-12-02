import { useState } from "react";
import ActionsButton from "../ActionsButton";
import "./searchFilter.css";

export default function SearchFilter({
  products,
  fetchData,
  pages,
  setAmountPerPage,
  amountPerPage,
  page,
  setPage,
  indexes,
  setIndexes,
}) {
  const [isActionsActive, setIsActionsActive] = useState(false);

  const showActionOptions = () => {
    setIsActionsActive(!isActionsActive);
  };

  const loadData = () => {
    fetchData();
    setIsActionsActive(!isActionsActive);
  };

  const handleChange = (e) => {
    setAmountPerPage(Number(e.currentTarget.value));
  };

  const handlePrev = () => {
    setIndexes((state) => [state[0] - amountPerPage, state[1] - amountPerPage]);
    setPage(page--);
  };

  const handleNext = () => {
    setIndexes((state) => [state[0] + amountPerPage, state[1] + amountPerPage]);
    setPage(page++);
  };

  const handlePageCounter = (e) => {
    setPage(Number(e.currentTarget.value));
  }

  return (
    <footer className="footer">
      {/* Search bar start */}
      <div className="footer__filter-controller footer__search-input-container">
        <input
          type="text"
          placeholder="Busqueda Por Coincidencia"
          className="footer__input footer__search-input"
        />
        <i className="fa-solid fa-magnifying-glass footer__magnifier-icon"></i>
      </div>
      {/* Search bar end */}
      {/* Results amount select tag start */}
      <div className="footer__filter-controller footer__results-dropdown-container">
        <label htmlFor="results" className="footer__results-label">
          Resultados
        </label>
        <select
          id="results"
          className="footer__results-amount"
          onChange={handleChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      {/* Results amount select tag end */}
      {/* page selector start */}
      <div className="footer__filter-controller footer__total-results-filter">
        <button
          className={`foooter__total-results__button ${
            indexes[0] === 0 ? "foooter__total-results__button--disabled" : ""
          }`}
          onClick={handlePrev}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <input
          type="text"
          className="footer__results-page"
          placeholder={page}
          onChange={handlePageCounter}
          value={page}
        />
        <span>De </span>
        <span>{pages}</span>
        <button className="foooter__total-results__button" onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      {/* page selector end */}
      <div className="footer__filter-controller footer__actions-container">
        {products.length < 1 ? (
          <div
            className={`footer__actions-options ${
              isActionsActive ? "active" : ""
            }`}
          >
            <ActionsButton onClick={loadData} text="Cargue masivo" />
            <ActionsButton text="Nuevo Registro" />
          </div>
        ) : (
          <div
            className={`footer__actions-options footer__actions-filled-table ${
              isActionsActive ? "active" : ""
            }`}
          >
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
