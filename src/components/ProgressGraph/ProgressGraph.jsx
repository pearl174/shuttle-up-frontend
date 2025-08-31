// LineChart → container for a line chart.

// Line → the actual line that connects your data points.

// XAxis / YAxis → axes.

// Tooltip → hover info.

// ResponsiveContainer → auto-fits chart to parent div (so it scales nicely).

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
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
];

// Convert match history into winrate progression
const winrateData = matches.map((m, idx) => {
  const total = idx + 1;
  const wins = matches.slice(0, total).filter((x) => x.result === 1).length;
  return {
    date: m.date,
    winrate: Math.round((wins / total) * 100), // %
  };
});
// console.log(winrateData);

const ProgressGraph = () => {
  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={winrateData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--text-muted)" opacity={0.2} />
          <XAxis
            dataKey="date"
            stroke="var(--text-muted)"
            tickFormatter={(d) =>
              new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" })
            }
          />
          <YAxis
            domain={[0, 100]}
            stroke="var(--text-muted)"
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            formatter={(v) => `${v}%`}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="winrate"
            name="Winrate"
            stroke="var(--secondary)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressGraph;
