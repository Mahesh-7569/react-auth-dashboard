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
      <Route path="/orders" element={<h1>Orders Page</h1>} />
      <Route path="/cart" element={<h1>Cart Page</h1>} />
    </Routes>
  );
}

export default App;