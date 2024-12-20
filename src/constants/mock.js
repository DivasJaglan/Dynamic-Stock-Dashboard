export const mockSearchResults = {
  count: 5,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
      d: 2.29,
      dp: 0.88,
    },
    {
      description: "MICROSOFT CORP",
      displaySymbol: "MSFT",
      symbol: "MSFT",
      type: "Common Stock",
      d: 3.45,
      dp: 1.12,
    },
    {
      description: "GOOGLE INC",
      displaySymbol: "GOOGL",
      symbol: "GOOGL",
      type: "Common Stock",
      d: 1.76,
      dp: 0.92,
    },
    {
      description: "AMAZON.COM INC",
      displaySymbol: "AMZN",
      symbol: "AMZN",
      type: "Common Stock",
      d: 4.22,
      dp: 1.48,
    },
    {
      description: "TESLA INC",
      displaySymbol: "TSLA",
      symbol: "TSLA",
      type: "Common Stock",
      d: 6.89,
      dp: 2.34,
    },
  ],
};

export const mockCompanyDetails = {
  AAPL: {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "1980-12-12",
    marketCapitalization: 1415993,
    name: "Apple Inc",
    phone: "14089961010",
    shareOutstanding: 4375.47998046875,
    ticker: "AAPL",
    weburl: "https://www.apple.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  },
  MSFT: {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "1986-03-13",
    marketCapitalization: 2100000,
    name: "Microsoft Corp",
    phone: "14089961010",
    shareOutstanding: 7527.47998046875,
    ticker: "MSFT",
    weburl: "https://www.microsoft.com/",
    logo: "https://static.finnhub.io/logo/8b6c4f64-c01e-47da-a3e2-b241839fa48f.png",
    finnhubIndustry: "Technology",
  },
  GOOGL: {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "2004-08-19",
    marketCapitalization: 1800000,
    name: "Google Inc",
    phone: "14089961010",
    shareOutstanding: 3000.47998046875,
    ticker: "GOOGL",
    weburl: "https://www.google.com/",
    logo: "https://static.finnhub.io/logo/d0d593c5-e41b-4428-a234-b5cae06f3c8e.png",
    finnhubIndustry: "Technology",
  },
  AMZN: {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "1997-05-15",
    marketCapitalization: 1500000,
    name: "Amazon.com Inc",
    phone: "14089961010",
    shareOutstanding: 3500.47998046875,
    ticker: "AMZN",
    weburl: "https://www.amazon.com/",
    logo: "https://static.finnhub.io/logo/9c9c49ab-58c6-40e3-b0e1-e9fca24c235d.png",
    finnhubIndustry: "E-commerce",
  },
  TSLA: {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "2010-06-29",
    marketCapitalization: 800000,
    name: "Tesla Inc",
    phone: "14089961010",
    shareOutstanding: 1200.47998046875,
    ticker: "TSLA",
    weburl: "https://www.tesla.com/",
    logo: "https://static.finnhub.io/logo/8c9f68c8-60c4-4f33-9a44-3f9e54552831.png",
    finnhubIndustry: "Automotive",
  },
};

export const mockStockQuote = {
  AAPL: {
    c: 261.74,
    h: 263.31,
    l: 260.68,
    o: 261.07,
    pc: 259.45,
    t: 1582641000,
    d: 2.29,
    dp: 0.88,
  },
  MSFT: {
    c: 300.45,
    h: 303.56,
    l: 298.12,
    o: 299.6,
    pc: 297.0,
    t: 1582641000,
    d: 3.45,
    dp: 1.12,
  },
  GOOGL: {
    c: 2800.67,
    h: 2850.23,
    l: 2770.5,
    o: 2795.3,
    pc: 2770.12,
    t: 1582641000,
    d: 1.76,
    dp: 0.92,
  },
  AMZN: {
    c: 3500.32,
    h: 3550.0,
    l: 3480.23,
    o: 3495.0,
    pc: 3460.1,
    t: 1582641000,
    d: 4.22,
    dp: 1.48,
  },
  TSLA: {
    c: 650.23,
    h: 660.12,
    l: 640.3,
    o: 645.45,
    pc: 640.0,
    t: 1582641000,
    d: 6.89,
    dp: 2.34,
  },
};
export const mockHistoricalData = {
  AAPL: {
    c: Array.from(
      { length: 365 },
      (_, i) => 175 + 20 * Math.sin(i / 25) + Math.random() * 5
    ),
    h: Array.from(
      { length: 365 },
      (_, i) => 180 + 20 * Math.sin(i / 25) + Math.random() * 5
    ),
    l: Array.from(
      { length: 365 },
      (_, i) => 170 + 20 * Math.sin(i / 25) - Math.random() * 5
    ),
    o: Array.from(
      { length: 365 },
      (_, i) => 175 + 20 * Math.sin(i / 25) + Math.random() * 5
    ),
    t: Array.from({ length: 365 }, (_, i) => 1609459200 + i * 86400),
    v: Array.from({ length: 365 }, () =>
      Math.floor(25000000 + Math.random() * 5000000)
    ),
  },
  MSFT: {
    c: Array.from(
      { length: 365 },
      (_, i) => 310 + 15 * Math.cos(i / 30) + Math.random() * 5
    ),
    h: Array.from(
      { length: 365 },
      (_, i) => 315 + 15 * Math.cos(i / 30) + Math.random() * 5
    ),
    l: Array.from(
      { length: 365 },
      (_, i) => 305 + 15 * Math.cos(i / 30) - Math.random() * 5
    ),
    o: Array.from(
      { length: 365 },
      (_, i) => 310 + 15 * Math.cos(i / 30) + Math.random() * 5
    ),
    t: Array.from({ length: 365 }, (_, i) => 1609459200 + i * 86400),
    v: Array.from({ length: 365 }, () =>
      Math.floor(18000000 + Math.random() * 7000000)
    ),
  },
  TSLA: {
    c: Array.from(
      { length: 365 },
      (_, i) => 720 + 50 * Math.sin(i / 15) + Math.random() * 20
    ),
    h: Array.from(
      { length: 365 },
      (_, i) => 740 + 50 * Math.sin(i / 15) + Math.random() * 20
    ),
    l: Array.from(
      { length: 365 },
      (_, i) => 700 + 50 * Math.sin(i / 15) - Math.random() * 20
    ),
    o: Array.from(
      { length: 365 },
      (_, i) => 720 + 50 * Math.sin(i / 15) + Math.random() * 20
    ),
    t: Array.from({ length: 365 }, (_, i) => 1609459200 + i * 86400),
    v: Array.from({ length: 365 }, () =>
      Math.floor(30000000 + Math.random() * 10000000)
    ),
  },
  GOOGL: {
    c: Array.from(
      { length: 365 },
      (_, i) => 2800 + 30 * Math.cos(i / 20) + Math.random() * 10
    ),
    h: Array.from(
      { length: 365 },
      (_, i) => 2830 + 30 * Math.cos(i / 20) + Math.random() * 10
    ),
    l: Array.from(
      { length: 365 },
      (_, i) => 2770 + 30 * Math.cos(i / 20) - Math.random() * 10
    ),
    o: Array.from(
      { length: 365 },
      (_, i) => 2800 + 30 * Math.cos(i / 20) + Math.random() * 10
    ),
    t: Array.from({ length: 365 }, (_, i) => 1609459200 + i * 86400),
    v: Array.from({ length: 365 }, () =>
      Math.floor(1200000 + Math.random() * 300000)
    ),
  },
  AMZN: {
    c: Array.from(
      { length: 365 },
      (_, i) => 3500 + 25 * Math.sin(i / 18) + Math.random() * 15
    ),
    h: Array.from(
      { length: 365 },
      (_, i) => 3525 + 25 * Math.sin(i / 18) + Math.random() * 15
    ),
    l: Array.from(
      { length: 365 },
      (_, i) => 3475 + 25 * Math.sin(i / 18) - Math.random() * 15
    ),
    o: Array.from(
      { length: 365 },
      (_, i) => 3500 + 25 * Math.sin(i / 18) + Math.random() * 15
    ),
    t: Array.from({ length: 365 }, (_, i) => 1609459200 + i * 86400),
    v: Array.from({ length: 365 }, () =>
      Math.floor(4000000 + Math.random() * 2000000)
    ),
  },
};
