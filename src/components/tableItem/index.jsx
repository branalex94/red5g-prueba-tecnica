import { useState } from "react";
import "./tableItem.css";

export default function TableItem({ item }) {
  const [isActionsActive, setIsActionsActive] = useState(false);
  const showActionOptions = () => {
    setIsActionsActive(!isActionsActive);
  }
	return (
		<tr>
      <td>
        <input type="checkbox" className="table-item__checkbox" checked={item.checked} />
      </td>
      <td>{item.id}</td>
      <td>{item.placa}</td>
      <td>{item.marca}</td>
      <td>{item.modelo}</td>
      <td>{item.kilometraje}</td>
      <td>{item.transmision}</td>
      <td>{item.tipo}</td>
      <td>${item.precio}</td>
      <td className="table-item__buttons-container">
        <button className="table-item__new-button">
          NUEVO
          <i className="fa-regular fa-eye"></i>
        </button>
        <button className="table-item__actions-button" onClick={showActionOptions}>
          <span>Acciones</span>
          <i className="fa-solid fa-caret-down table-item__action-arrow"></i>
          <div className={`table-item__actions-options ${isActionsActive ? "active-option" : ""}`}>
            <button>Editar</button>
            <button>Almacenar</button>
          </div>
        </button>
      </td>
    </tr>
	);
}