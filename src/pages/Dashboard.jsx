import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";

import {
  useNavigate,
  NavLink
} from "react-router-dom";

import "../styles/dashboard.css";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 }
];

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>

        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Analytics
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Analytics Dashboard</h1>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </header>

        {/* KPI Cards */}
        <section className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>1200</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>₹2,45,000</p>
          </div>

          <div className="card">
            <h3>Orders</h3>
            <p>340</p>
          </div>
        </section>

        {/* Bar Chart */}
        <section className="chart-section">
          <h2>Monthly Sales Report</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Line Chart */}
        <section className="chart-section">
          <h2>Sales Trend</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
              />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;