import { useState } from "react";
import TableItem from "../TableItem";
import "./productsTable.css";

export default function ProductsTable({ products, sliceResults }) {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const paginatedProducts = sliceResults(products);

  if (paginatedProducts.length < 1) {
    return (
      <div className="table-wrapper table-wrapper--empty">
        <p>No existen datos para mostrar</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__header">
          <tr>
            <th>
              <input
                type="checkbox"
                className="table__checkbox"
                defaultChecked={defaultChecked}
              />
            </th>
            <th>
              ID
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Placa
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Marca
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Modelo
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Kilometraje
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Transmisión
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Tipo
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Precio de compra
              <i className="fa-solid fa-up-down"></i>
            </th>
            <th>
              Provinencia
              <i className="fa-solid fa-up-down"></i>
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          {paginatedProducts.map((item) => (
            <TableItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
