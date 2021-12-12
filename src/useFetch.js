import { useEffect, useState } from "react";
import cartItems from "./data";
export const useFetch = (url, setData) => {
  const [isLoading, setLoading] = useState(true);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      console.log(e, cartItems);
      setData(cartItems);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { isLoading };
};
