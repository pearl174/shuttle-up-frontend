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
          <CartesianGrid strokeDasharray="1 1" />
          <Tooltip
            formatter={(v) => [`${v}%`, "Win Rate"]}
            labelFormatter={(label) => `Match ${label} · ${new Date(matches[label - 1].date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`}
            contentStyle={{ backgroundColor: "var(--bg-alt)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text)" }}
            labelStyle={{ color: "var(--text-muted)", marginBottom: "4px" }}
            itemStyle={{ color: "var(--secondary)" }}
          />
          <Line 
            type="monotone"
            dataKey="winrate"
            stroke="var(--secondary)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProgressGraph;