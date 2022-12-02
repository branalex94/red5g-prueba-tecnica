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
  const pages = Math.ceil(products.length / amountPerPage);
  
  return (
    <div className="app-wrapper">
      <Header />
      <ProductsTable
        products={products}
        amountPerPage={amountPerPage}
        page={page}
      />
      <SearchFilter
        fetchData={fetchData}
        products={products}
        setProducts={setProducts}
        pages={pages}
        setAmountPerPage={setAmountPerPage}
        page={page}
        setPage={setPage}
      />
      {isLoading && <LoadingModal />}
    </div>
  );
}

export default App;
