import { useState, useEffect } from "react";
import TableItem from "../tableItem";
import "./productsTable.css";

export default function ProductsTable({ products }) {
  if(products.length < 1) {
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
              <input type="checkbox" className="table__checkbox" />
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
          {products.map(item => <TableItem item={item} />)}
        </tbody>
      </table>
    </div>
  );
}
