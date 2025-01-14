import { useContext, useEffect, useState } from "react";
import {
  converUnixTimestampToDate,
  convertDateToUnixTimestamp,
  createDate,
} from "../helpers/date-helper";
import Card from "./Card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { chartConfig } from "../constants/config";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
// import { fetchHistoricalData } from "../api/stock-api";
import { mockHistoricalData } from "../constants/mock";

export default function Chart() {
  const { stockSymbol } = useContext(StockContext);
  const [data, setData] = useState(mockHistoricalData[`${stockSymbol}`]);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: converUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    setData(mockHistoricalData[`${stockSymbol}`]);
  }, [stockSymbol]);
  // const formatData = (data) => {
  //   return data.c.map((item, index) => {
  //     return {
  //       value: item.toFixed(2),
  //       date: converUnixTimestampToDate(data.t[index]),
  //     };
  //   });
  // };

  // useEffect(() => {
  //   const getDateRange = () => {
  //     const { days, weeks, months, years } = chartConfig[filter];
  //     const endDate = new Date();
  //     const startDate = createDate(endDate, -days, -weeks, -months, -years);

  //     const startTimestampUnix = convertDateToUnixTimestamp(startDate);
  //     const endTimestampUnix = convertDateToUnixTimestamp(endDate);

  //     return { startTimestampUnix, endTimestampUnix };
  //   };

  //   const updateChartData = async () => {
  //     try {
  //       const { startTimestampUnix, endTimestampUnix } = getDateRange();
  //       const resolution = chartConfig[filter].resolution;
  //       const result = await fetchHistoricalData(
  //         stockSymbol,
  //         resolution,
  //         startTimestampUnix,
  //         endTimestampUnix
  //       );

  //       console.log("Fetched Data:", result); // Debugging step

  //       if (result && result.c && result.t) {
  //         // Update the data state only if the result structure is valid
  //         setData(formatData(result));
  //       } else {
  //         console.error("Invalid data structure:", result);
  //       }
  //       // setData(formatData(result));
  //     } catch (error) {
  //       // setData([]);
  //       console.log(error);
  //     }
  //   };
  //   // updateCharData();
  //   if (stockSymbol) {
  //     updateChartData(); // Only update when stockSymbol is available
  //   }
  // }, [stockSymbol, filter]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40 ">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />{" "}
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
