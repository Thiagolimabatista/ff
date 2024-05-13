import { useState, useEffect, useCallback } from 'react';
import { Cotacao } from 'src/documents/Cotacao';

const useCotacoes = () => {
  const [cotacoes, setCotacoes] = useState<{ [key: string]: Cotacao }>({});
  const [loading, setLoading] = useState(true);

  const fetchCotacoes = useCallback(async () => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
      const data = await response.json();
      setCotacoes(data as { [key: string]: Cotacao });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cotacoes:', error);
      setCotacoes({});
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCotacoes();
  }, [fetchCotacoes]);

  return { cotacoes, loading };
};

export default useCotacoes;
