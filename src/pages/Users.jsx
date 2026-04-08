import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Users() {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };
  const users = [
    {
      id: 1,
      name: "Mahesh",
      role: "Admin",
      email: "mahesh@gmail.com",
    },
    {
      id: 2,
      name: "John",
      role: "User",
      email: "john@gmail.com",
    },
    {
      id: 3,
      name: "Ravi",
      role: "Manager",
      email: "ravi@gmail.com",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Users Management</h1>
        <button className="primary-btn">
          Add User
        </button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="secondary-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>
                </td>
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

export default Users;