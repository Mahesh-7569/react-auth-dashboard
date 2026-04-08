import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const analyticsData = [
  { name: "Sales", value: 400 },
  { name: "Revenue", value: 300 },
  { name: "Users", value: 200 },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
];

function Analytics() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Analytics</h1>
      </div>

      <div className="chart-section">
        <h2>Business Insights</h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <PieChart>
            <Pie
              data={analyticsData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {analyticsData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <button
          className="back-btn"
          onClick={handleBack}
        >
          ← Back
        </button>
    </div>
    
  );
}

export default Analytics;