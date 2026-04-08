import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  return isLoggedIn ? children : <Navigate to="/Login" />
}

export default PrivateRoute