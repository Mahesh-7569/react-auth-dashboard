import "../styles/user.css";

function User() {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  return (
    <div className="user-page">
      <div className="user-card">
        <h1>My Profile</h1>

        <div className="user-info">
          <p>Name: {user.name || "Guest"}</p>
          <p>Email: {user.email || "-"}</p>
        </div>
      </div>
    </div>
  );
}

export default User;