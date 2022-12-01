import { useState, useEffect } from "react";
import { useGetData } from "./hooks/useGetData";
import { data } from "./data";
import Header from "./components/Header";
import ProductsTable from "./components/ProductsTable";
import SearchFilter from "./components/SearchFilter";
import LoadingModal from "./components/LoadingModal";
import "./App.css";

function App() {
  const { isLoading, products, fetchData } = useGetData(data);

  return (
    <div className="app-wrapper">
      <Header />
      <ProductsTable products={products} />
      <SearchFilter fetchData={fetchData} products={products} />
      {isLoading && <LoadingModal />}
    </div>
  );
}

export default App;
