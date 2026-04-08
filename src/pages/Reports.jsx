import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Reports() {

    const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };
    
  const reports = [
    {
      id: 1,
      name: "Monthly Sales Report",
      date: "April 2026",
      status: "Completed",
    },
    {
      id: 2,
      name: "Revenue Report",
      date: "April 2026",
      status: "Pending",
    },
    {
      id: 3,
      name: "Users Activity Report",
      date: "April 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Reports</h1>
        <button className="primary-btn">
          Download PDF
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Reports</h3>
          <p>24</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>18</p>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <p>6</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Recent Reports</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Reports;