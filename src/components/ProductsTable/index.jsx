import { useEffect, useState } from "react";
import TableHeader from "../TableHeader";
import TableItem from "../TableItem";
import "./productsTable.css";

export default function ProductsTable({ products, amountPerPage, page }) {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [paginatedProducts, setPaginatedProducts] = useState(products);
  const [orientation, setOrientation] = useState("DESC");
  const [sortedArr, setSortedArr] = useState(paginatedProducts);
  const offset = (page - 1) * amountPerPage;

  const sortByNum = (arr, ori, col) => {
    if (ori === "DESC") {
      const sortedArr = arr.sort((a, b) => {
        if (Number(a[col]) > Number(b[col])) {
          return -1;
        } else if (Number(a[col]) < Number(b[col])) {
          return 1;
        } else return 0;
      });
      return sortedArr;
    } else {
      const sortedArr = arr.sort((a, b) => {
        if (Number(a[col]) < Number(b[col])) {
          return -1;
        } else if (Number(a[col]) > Number(b[col])) {
          return 1;
        } else return 0;
      });
      return sortedArr;
    }
  };

  const handleSortNumber = (col) => {
    const newArr = sortByNum(paginatedProducts, orientation, col);
    setSortedArr(newArr);
    if (orientation === "ASC") setOrientation("DESC");
    else setOrientation("ASC");
  };

  const sortByString = (arr, ori, col) => {
    if (ori === "DESC") {
      const sortedArr = arr.sort((a, b) => {
        if (a[col] > b[col]) {
          return -1;
        } else if (a[col] < b[col]) {
          return 1;
        } else return 0;
      });
      return sortedArr;
    } else {
      const sortedArr = arr.sort((a, b) => {
        if (a[col] < b[col]) {
          return -1;
        } else if (a[col] > b[col]) {
          return 1;
        } else return 0;
      });
      return sortedArr;
    }
  };

  const handleSortString = (col) => {
    const newArr = sortByString(paginatedProducts, orientation, col);
    setSortedArr(newArr);
    if (orientation === "ASC") setOrientation("DESC");
    else setOrientation("ASC");
  };

  useEffect(() => {
    setPaginatedProducts(products.slice(offset, offset + amountPerPage));
  }, [products, amountPerPage, offset]);

  useEffect(() => {}, [sortedArr]);

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
            <TableHeader text="ID" onClick={() => handleSortNumber("id")} />
            <TableHeader
              text="Placa"
              onClick={() => handleSortString("placa")}
            />
            <TableHeader
              text="Marca"
              onClick={() => handleSortString("marca")}
            />
            <TableHeader
              text="Modelo"
              onClick={() => handleSortString("modelo")}
            />
            <TableHeader
              text="Kilometraje"
              onClick={() => handleSortNumber("kilometraje")}
            />
            <TableHeader
              text="Transmisión"
              onClick={() => handleSortString("transmision")}
            />
            <TableHeader text="Tipo" onClick={() => handleSortString("tipo")} />
            <TableHeader
              text="Precio de compra"
              onClick={() => handleSortNumber("precio")}
            />
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
