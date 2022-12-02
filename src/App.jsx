import { useState } from "react";
import { useGetData } from "./hooks/useGetData";
import { data } from "./data";
import Header from "./components/Header";
import ProductsTable from "./components/ProductsTable";
import SearchFilter from "./components/SearchFilter";
import LoadingModal from "./components/LoadingModal";
import "./App.css";

function App() {
  const { isLoading, products, fetchData, setProducts } = useGetData(data);
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(10);
  const [indexes, setIndexes] = useState([0, amountPerPage]);
  const pages = Math.ceil(products.length / amountPerPage);

  const sliceResults = (arr) => {
    return arr.slice(indexes[0], indexes[1]);
  }

  return (
    <div className="app-wrapper">
      <Header />
      <ProductsTable
        products={products}
        indexes={indexes}
        sliceResults={sliceResults}
      />
      <SearchFilter
        fetchData={fetchData}
        products={products}
        setProducts={setProducts}
        pages={pages}
        setAmountPerPage={setAmountPerPage}
        amountPerPage={amountPerPage}
        page={page}
        setPage={setPage}
        indexes={indexes}
        setIndexes={setIndexes}
      />
      {isLoading && <LoadingModal />}
    </div>
  );
}

export default App;
