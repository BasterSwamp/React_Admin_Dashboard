import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";
import { useState } from "react";

export default function Bar({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedKey, setSelectedKey] = useState(null);
  const keys = selectedKey
    ? [selectedKey]
    : ["bitcoin", "ethereum", "solana", "cardano"];

  const keyColors = {
    bitcoin: "#f7931a",
    ethereum: "#20B2AA",
    solana: "#FFB6C1",
    cardano: "#3e84c9",
  };

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={keys}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.2}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ id }) => keyColors[id]}
      tooltip={({ id, value, indexValue, color }) => (
        <div
          style={{
            padding: "8px",
            background: colors.primary[900],
            border: `1px solid ${color}`,
            borderRadius: "3px",
            color: colors.grey[100],
          }}
        >
          <strong>{id}</strong>: {value}
          <br />
          Country: {indexValue}
        </div>
      )}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Country",
        legendPosition: "middle",
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Coin",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 5,
          itemWidth: 100,
          itemHeight: 15,
          itemDirection: "left-to-right",
          itemOpacity: 0.75,
          symbolSize: 12,
          onClick: (legend) => {
            setSelectedKey((prev) => (prev === legend.id ? null : legend.id));
          },
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
}
