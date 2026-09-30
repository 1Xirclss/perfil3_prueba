import { useCallback, useEffect, useMemo, useState } from "react";
import apiClient from "../utils/apiClient";

const removeTags = (html = "") => html.replace(/<[^>]*>/g, "").trim();

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiClient("/products");
      const formattedProducts = data.map((product) => ({
        ...product,
        description: removeTags(product.description) || "Sin descripción disponible.",
      }));
      setProducts(formattedProducts);
    } catch (requestError) {
      console.error("Error al consultar Fake Store API:", requestError);
      setError("No se pudieron cargar los productos. Revisa tu conexión e intenta otra vez.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term
      ? products.filter((product) => product.title?.toLowerCase().includes(term))
      : products;
  }, [query, products]);

  return {
    products: filteredProducts,
    total: filteredProducts.length,
    query,
    setQuery,
    loading,
    error,
    reload: loadProducts,
  };
};

export default useProducts;
