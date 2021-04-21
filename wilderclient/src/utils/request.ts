import axios from 'axios';
import { ChangeEvent, useEffect } from 'react';

export const GetRequest = (url: string, setData: any) => {
  useEffect(() => {
    const getWilder = async () => {
      const result = await axios.get(url);
      setData(result.data);
    };
    getWilder();
  }, []);
};

export const PostRequest = async (
  e: ChangeEvent<HTMLInputElement>,
  url: string,
  name: string,
  city: string,
  skills: any,
  error: any,
  setError: any,
  setLoading: any,
) => {
  setLoading(+true);
  e.preventDefault();
  const result = await axios.post(
    url,
    {
      name,
      city,
      skills,
    },
  );
  if (result.data.success) {
    setLoading(+false);
    setError('');
  } else if (error) {
    const err = result.data.result.message;
    setLoading(+false);
    setError(err);
  }
};
