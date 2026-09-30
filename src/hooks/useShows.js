import { useCallback, useEffect, useMemo, useState } from 'react';

const API_URL = 'https://api.tvmaze.com/shows';
const removeTags = (html = '') => html.replace(/<[^>]*>/g, '').trim();

export default function useShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const loadShows = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
      const data = await response.json();
      setShows(data.map((show) => ({
        ...show,
        summary: removeTags(show.summary) || 'Sin descripción disponible.',
      })));
    } catch (requestError) {
      setError('No se pudieron cargar las series. Revisa tu conexión e intenta otra vez.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadShows();
  }, [loadShows]);

  const filteredShows = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term
      ? shows.filter((show) => show.name.toLowerCase().includes(term))
      : shows;
  }, [query, shows]);

  return {
    shows: filteredShows,
    total: filteredShows.length,
    query,
    setQuery,
    loading,
    error,
    reload: loadShows,
  };
}
