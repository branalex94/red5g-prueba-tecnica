import { useEffect, useState } from "react";
import TableHeader from "../TableHeader";
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
            <TableHeader text="ID" />
            <TableHeader text="Placa" />
            <TableHeader text="Marca" />
            <TableHeader text="Modelo" />
            <TableHeader text="Kilometraje" />
            <TableHeader text="Transmisión" />
            <TableHeader text="Tipo" />
            <TableHeader text="Precio de compra" />
            <TableHeader text="Proviniencia" />
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
