// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/auth.css";

// function ResetPassword() {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] =
//     useState("");

//   const navigate = useNavigate();

//   const handleResetPassword = () => {
//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     const resetEmail =
//       localStorage.getItem("resetEmail");

//     if (
//       savedUser &&
//       savedUser.email === resetEmail
//     ) {
//       const updatedUser = {
//         ...savedUser,
//         password: newPassword,
//       };

//       localStorage.setItem(
//         "user",
//         JSON.stringify(updatedUser)
//       );

//       localStorage.removeItem("resetEmail");

//       alert("Password reset successful");
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="auth-box">
//         <h2>Reset Password</h2>

//         <input
//           type="password"
//           placeholder="New password"
//           value={newPassword}
//           onChange={(e) =>
//             setNewPassword(e.target.value)
//           }
//         />

//         <input
//           type="password"
//           placeholder="Confirm password"
//           value={confirmPassword}
//           onChange={(e) =>
//             setConfirmPassword(e.target.value)
//           }
//         />

//         <button onClick={handleResetPassword}>
//           Reset Password
//         </button>

//         <p className="auth-text">
//           Back to <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;



import { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import "../styles/auth.css";

function ResetPassword() {
  const [newPassword, setNewPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const navigate =
    useNavigate();

  const handleResetPassword =
    () => {
      const resetEmail =
        localStorage.getItem(
          "resetEmail"
        );

      const savedUser =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

      if (!resetEmail) {
        alert(
          "Reset session expired"
        );

        navigate(
          "/forgot-password"
        );
        return;
      }

      if (!newPassword.trim()) {
        alert(
          "Enter new password"
        );
        return;
      }

      if (
        newPassword.length < 4
      ) {
        alert(
          "Password must be minimum 4 characters"
        );
        return;
      }

      if (
        confirmPassword.trim() ===
        ""
      ) {
        alert(
          "Confirm password"
        );
        return;
      }

      if (
        newPassword !==
        confirmPassword
      ) {
        alert(
          "Passwords do not match"
        );
        return;
      }

      if (
        savedUser &&
        savedUser.email ===
          resetEmail
      ) {
        const updatedUser = {
          ...savedUser,
          password:
            newPassword,
        };

        localStorage.setItem(
          "user",
          JSON.stringify(
            updatedUser
          )
        );

        localStorage.removeItem(
          "resetEmail"
        );

        alert(
          "Password reset successful"
        );

        navigate("/login");
      } else {
        alert(
          "User not found"
        );

        navigate(
          "/signup"
        );
      }
    };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New password"
          value={
            newPassword
          }
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={
            confirmPassword
          }
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={
            handleResetPassword
          }
        >
          Reset Password
        </button>

        <p className="auth-text">
          Back to{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;