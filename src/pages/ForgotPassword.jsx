import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.setItem("resetEmail", email);
    navigate("/reset-password");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset}>Continue</button>
      </div>
    </div>
  );
}

export default ForgotPassword;