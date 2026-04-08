import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendResetLink = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email) {
      localStorage.setItem("resetEmail", email);
      alert("Reset link sent successfully");
      navigate("/reset-password");
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSendResetLink}>
          Send Reset Link
        </button>

        <p className="auth-text">
          Back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;