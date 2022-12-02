import { useState, useEffect } from "react";

export function useGetData(data) {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = () => {
		setIsLoading(true);
		setProducts(data);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}

	return { fetchData, isLoading, products, setProducts };
}