// import { Routes, Route, Navigate } from "react-router-dom";

// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import Home from "./pages/Home";
// import Products from "./pages/Products";

// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <Routes>
//       {/* Start page */}
//       <Route path="/" element={<Signup />} />

//       {/* Auth pages */}
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPassword />} />

//       {/* Protected Home */}
//       <Route
//         path="/home"
//         element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         }
//       />

//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//       <Route path="/products" element={<Products />} />

//     </Routes>
//   );
// }

// export default App;



import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      {/* redirect root to home */}
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />

      {/* temporary */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;