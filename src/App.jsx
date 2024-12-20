import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}
