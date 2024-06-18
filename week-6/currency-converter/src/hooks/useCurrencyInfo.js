import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async (currency) => {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );

      const exchange = await res.json();

      setData(exchange[currency]);
    };
    fetchData(currency);
  }, [currency]);

  return data;
}
