import { API_BASE_URL } from "../config/apiConfig";

// Cliente reutilizable para las peticiones HTTP de la aplicación.
export const apiClient = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    ...options,
    headers: {
      Accept: "application/json",
      ...options.headers,
    },
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudieron obtener los datos.`);
  }

  return data;
};

export default apiClient;
