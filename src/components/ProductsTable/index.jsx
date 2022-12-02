import { useEffect, useState } from "react";
import TableItem from "../TableItem";
import "./productsTable.css";

export default function ProductsTable({ products, amountPerPage, page }) {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [paginatedProducts, setPaginatedProducts] = useState(products);
  const offset = (page - 1) * amountPerPage;

  useEffect(() => {
    setPaginatedProducts(products.slice(offset, offset + amountPerPage));
  }, [products, amountPerPage, offset]);

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
              Proviniencia
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
