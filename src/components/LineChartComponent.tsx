"use client";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", value: 86 },
  { month: "Feb", value: 105 },
  { month: "Mar", value: 37 },
  { month: "Apr", value: 73 },
  { month: "May", value: 59 },
  { month: "Jun", value: 14 },
];

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#C0C0C9" }}
        />
        <Line
          type="linear"
          dataKey="value"
          stroke="#3B82F4"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
