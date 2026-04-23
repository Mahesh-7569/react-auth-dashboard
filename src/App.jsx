// import { Routes, Route, Navigate } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import ResetPassword from "./pages/ResetPassword";
// import ForgotPassword from "./pages/ForgotPassword";
// import User from "./pages/User";

// function App() {
//   return (
//     <Routes>
//       {/* redirect root to home */}
//       <Route path="/" element={<Navigate to="/home" />} />

//       <Route path="/home" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/products" element={<Products />} />

//       {/* temporary */}
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/cart" element={<Cart />} />

//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPassword />} />

//       <Route path="/user" element={<User />} />
//     </Routes>
//   );
// }

// export default App;


import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/home" />}
      />

      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />
      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      <Route
        path="/profile"
        element={<User />}
      />
    </Routes>
  );
}

export default App;