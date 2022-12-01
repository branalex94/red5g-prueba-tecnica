import "./filters.css";

export default function Filters() {
  return (
    <ul className="filters">
      <li className="filters__item filters__item--active">
        <i className="fa-solid fa-car"></i>
        Preparación
      </li>
      <li className="filters__item">
        <i className="fa-solid fa-warehouse"></i>
        Almacenamiento
      </li>
      <li className="filters__item">
        <i className="fa-solid fa-tags"></i>
        En venta
      </li>
      <li className="filters__item">
      <i className="fa-regular fa-money-bill-1"></i>
        Vendidos
      </li>
    </ul>
  );
}
