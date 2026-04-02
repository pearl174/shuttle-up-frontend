// LineChart → container for a line chart.

// Line → the actual line that connects your data points.

// XAxis / YAxis → axes.

// Tooltip → hover info.

// ResponsiveContainer → auto-fits chart to parent div (so it scales nicely).

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";
import "./ProgressGraph.css";

// Dummy matches: 1 = win, 0 = loss
const matches = [
  { date: "2025-08-01", result: 1 },
  { date: "2025-08-02", result: 0 },
  { date: "2025-08-03", result: 1 },
  { date: "2025-08-04", result: 1 },
  { date: "2025-08-05", result: 0 },
  { date: "2025-08-06", result: 1 },
  { date: "2025-08-20", result: 1 },
  { date: "2025-09-05", result: 0 },
  { date: "2025-09-06", result: 1 },
  { date: "2025-12-12", result: 1}
];

let wins = 0;
// Convert match history into winrate progression
const winrateData = matches.map((m, idx) => {
  const total = idx + 1;
  if (m.result === 1) wins += 1;
  return {
    match: idx + 1,      
    winrate: Math.round((wins / total) * 100),
  };
});
console.log(winrateData);

const ProgressGraph = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={winrateData}>
          <XAxis
            dataKey="match"
            axisLine={{ stroke: "var(--text-muted)" }}
            tickLine={false}
            label={{ value: "Past Ten Matches", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            domain={[0, 100]}
            axisLine={{ stroke: "var(--text-muted)" }}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <CartesianGrid strokeDasharray="3 3" /> {/*3px drawn, 3px dash*/}
          <Tooltip formatter={(v) => `${v}%`}
            labelFormatter={(label) => `Match ${label} · ${new Date(matches[label - 1].date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`} />
          <Line 
            type="monotone"
            dataKey="winrate"
            stroke="#3b7dd8"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6}}
          />
          <ReferenceLine y={50} strokeDasharray="4 4" stroke="#888" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProgressGraph;