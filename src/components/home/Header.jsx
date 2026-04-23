// // import { useNavigate } from "react-router-dom";

// // function Header() {
// //   const navigate = useNavigate();

// //   return (
// //     <>
// //       <header className="top-header">
// //         <div className="logo">ShopKart</div>

// //         <div className="search-box">
// //           <input type="text" placeholder="Search products" />
// //           <button>🔍</button>
// //         </div>

// //         <div className="header-links">
// //           <span onClick={() => navigate("/login")}>Login</span>
// //           <span>Orders</span>
// //           <span>Cart</span>
// //         </div>
// //         <div onClick={() => navigate("/products")}>Products</div>
// //       </header>

// //       <nav className="sub-header">
// //         <span>All</span>
// //         <span>Groceries</span>
// //         <span>Mobiles</span>
// //         <span>Fashion</span>
// //         <span>Electronics</span>
// //         <span>Home</span>
// //       </nav>
// //     </>
// //   );
// // }

// // export default Header;


// import { useNavigate } from "react-router-dom";
// import "../../styles/home.css";

// function Header() {
//   const navigate = useNavigate();

//   return (
//     <header className="top-header">
//       <div
//         className="brand-section"
//         onClick={() => navigate("/home")}
//       >
//         <span className="logo-text">My Mart</span>
//       </div>

//       <div className="search-box">
//         <input placeholder="Search products..." />
//         <button>🔍</button>
//       </div>

//       <div className="header-right">
//         <button
//           className="auth-btn"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>

//         <button
//           className="auth-btn signup-btn"
//           onClick={() => navigate("/signup")}
//         >
//           Signup
//         </button>

//         <div
//           className="nav-item"
//           onClick={() => navigate("/products")}
//         >
//           Products
//         </div>

//         <div
//           className="nav-item"
//           onClick={() => navigate("/orders")}
//         >
//           Orders
//         </div>

//         <div
//           className="cart-box"
//           onClick={() => navigate("/cart")}
//         >
//           🛒 Cart
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="top-header">
      <div
        className="brand-section"
        onClick={() => navigate("/home")}
      >
        <span className="logo-text">My Mart</span>
      </div>

      <div className="search-box">
        <input placeholder="Search products..." />
        <button>🔍</button>
      </div>

      <div className="header-right">
        <button
          className="auth-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="auth-btn signup-btn"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
        <button
            className="nav-btn product-btn"
            onClick={() => navigate("/products")}
          >
            Products
          </button>

          <button
            className="nav-btn orders-btn"
            onClick={() => navigate("/orders")}
          >
            Orders
          </button>

          <button
            className="nav-btn cart-btn"
            onClick={() => navigate("/cart")}
          >
            🛒 Cart
          </button>
          </div>
    </header>
  );
}

export default Header;