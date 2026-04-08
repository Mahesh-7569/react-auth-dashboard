// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/auth.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     console.log("Saved User:", savedUser);
//     console.log("Entered Email:", email);
//     console.log("Entered Password:", password);

//     if (
//       savedUser &&
//       savedUser.email === email &&
//       savedUser.password === password
//     ) {
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="auth-box">
//         <h2>Login</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit">Login</button>
//         </form>

//         <p className="auth-text">
//           New user? <Link to="/">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit">Login</button>

          {/* Forgot Password Link */}
          <div className="forgot-link">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          
        </form>

        <p className="auth-text">
          New user? <Link to="/">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;