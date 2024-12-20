const basePath = "https://finnhub.io/api/v1";
// * ctd7oj9r01qlc0v08h2gctd7oj9r01qlc0v08h30 => api key
export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${
    import.meta.env.VITE_API_KEY
  }`;
  console.log(url);
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${
    import.meta.env.VITE_API_KEY
  }`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${
    import.meta.env.VITE_API_KEY
  }`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${
    import.meta.env.VITE_API_KEY
  }`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
