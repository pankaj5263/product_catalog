import { useState, useEffect } from 'react';
import axiosInstance from '@/lib/axiosInstance';

export function useGet(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error in fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
}
