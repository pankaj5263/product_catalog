import { useState } from 'react';
import axiosInstance from '@/lib/axiosInstance';

export function usePost(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(url, payload);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
      console.error("Error posting data:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
}
