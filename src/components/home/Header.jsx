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
//         <button
//             className="nav-btn product-btn"
//             onClick={() => navigate("/products")}
//           >
//             Products
//           </button>

//           <button
//             className="nav-btn orders-btn"
//             onClick={() => navigate("/orders")}
//           >
//             Orders
//           </button>

//           <button
//             className="nav-btn cart-btn"
//             onClick={() => navigate("/cart")}
//           >
//             🛒 Cart
//           </button>
//           </div>
//     </header>
//   );
// }

// export default Header;




// import {
//   useNavigate,
//   Link,
// } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "../../styles/home.css";

// function Header() {
//   const navigate = useNavigate();

//   const [search, setSearch] =
//     useState("");

//   const [cartCount, setCartCount] =
//     useState(() => {
//       const cart =
//         JSON.parse(
//           localStorage.getItem("cart")
//         ) || [];

//       return cart.reduce(
//         (sum, item) =>
//           sum + (item.qty || 1),
//         0
//       );
//     });

//   const [username, setUsername] =
//     useState(() => {
//       const user =
//         JSON.parse(
//           localStorage.getItem("user")
//         ) || null;

//       return user?.name || "";
//     });

//   const [showUserMenu, setShowUserMenu] =
//     useState(false);

//   useEffect(() => {
//     const interval =
//       setInterval(() => {
//         const cart =
//           JSON.parse(
//             localStorage.getItem(
//               "cart"
//             )
//           ) || [];

//         const user =
//           JSON.parse(
//             localStorage.getItem(
//               "user"
//             )
//           ) || null;

//         const totalQty =
//           cart.reduce(
//             (sum, item) =>
//               sum +
//               (item.qty || 1),
//             0
//           );

//         setCartCount(totalQty);
//         setUsername(
//           user?.name || ""
//         );
//       }, 500);

//     return () =>
//       clearInterval(interval);
//   }, []);

//   const goPage = (path) => {
//     setShowUserMenu(false);
//     navigate(path);
//   };

//   const handleSearch = () => {
//     goPage(
//       `/products?search=${search}`
//     );
//   };

//   const logout = () => {
//     localStorage.removeItem(
//       "user"
//     );

//     setUsername("");
//     setShowUserMenu(false);

//     navigate("/login");
//   };

//   return (
//     <header className="top-header">
//       {/* Logo */}
//       <div
//         className="brand-section"
//         onClick={() =>
//           goPage("/home")
//         }
//       >
//         <span className="logo-text">
//           My Mart
//         </span>
//       </div>

//       {/* Search */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) =>
//             setSearch(
//               e.target.value
//             )
//           }
//           onKeyDown={(e) =>
//             e.key === "Enter" &&
//             handleSearch()
//           }
//         />

//         <button
//           onClick={handleSearch}
//         >
//           🔍
//         </button>
//       </div>

//       {/* Right Menu */}
//       <div className="header-right">
//         {username ? (
//           <div className="user-menu-box">
//             <button
//               type="button"
//               className="nav-btn user-btn"
//               onClick={() =>
//                 setShowUserMenu(
//                   !showUserMenu
//                 )
//               }
//             >
//               👤 {username}
//             </button>

//             {showUserMenu && (
//               <div className="user-dropdown">
//                 <Link
//                   to="/user"
//                   onClick={() =>
//                     setShowUserMenu(
//                       false
//                     )
//                   }
//                 >
//                   My Profile
//                 </Link>

//                 <Link
//                   to="/orders"
//                   onClick={() =>
//                     setShowUserMenu(
//                       false
//                     )
//                   }
//                 >
//                   My Orders
//                 </Link>

//                 <Link
//                   to="/cart"
//                   onClick={() =>
//                     setShowUserMenu(
//                       false
//                     )
//                   }
//                 >
//                   My Cart
//                 </Link>

//                 <button
//                   type="button"
//                   onClick={logout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             <button
//               className="auth-btn"
//               onClick={() =>
//                 goPage("/login")
//               }
//             >
//               Login
//             </button>

//             <button
//               className="auth-btn signup-btn"
//               onClick={() =>
//                 goPage("/signup")
//               }
//             >
//               Signup
//             </button>
//           </>
//         )}

//         <button
//           className="nav-btn product-btn"
//           onClick={() =>
//             goPage("/products")
//           }
//         >
//           Products
//         </button>

//         <button
//           className="nav-btn orders-btn"
//           onClick={() =>
//             goPage("/orders")
//           }
//         >
//           Orders
//         </button>

//         <button
//           className="nav-btn cart-btn"
//           onClick={() =>
//             goPage("/cart")
//           }
//         >
//           🛒 Cart

//           {cartCount > 0 && (
//             <span className="cart-count">
//               {cartCount}
//             </span>
//           )}
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/home.css";

function Header() {
  const [search, setSearch] =
    useState("");

  const [username, setUsername] =
    useState("");

  const [cartCount, setCartCount] =
    useState(0);

  useEffect(() => {
    const loadData = () => {
      const user =
        JSON.parse(
          localStorage.getItem("user")
        ) || {};

      const cart =
        JSON.parse(
          localStorage.getItem("cart")
        ) || [];

      setUsername(
        user.name || ""
      );

      const total =
        cart.reduce(
          (sum, item) =>
            sum +
            (item.qty || 1),
          0
        );

      setCartCount(total);
    };

    loadData();

    const interval =
      setInterval(loadData, 500);

    return () =>
      clearInterval(interval);
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "user"
    );

    window.location.href =
      "/login";
  };

  return (
    <header className="top-header">
      {/* Logo */}
      <Link
        to="/home"
        className="brand-section"
      >
        <span className="logo-text">
          My Mart
        </span>
      </Link>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            (window.location.href =
              `/products?search=${search}`)
          }
        />

        <Link
          to={`/products?search=${search}`}
        >
          <button type="button">
            🔍
          </button>
        </Link>
      </div>

      {/* Right Menu */}
      <div className="header-right">
        {username ? (
          <>
            <button
              type="button"
              className="nav-btn user-btn"
              onClick={() =>
                window.location.href =
                  "/profile"
              }
            >
              👤 {username}
            </button>

            <button
              type="button"
              className="auth-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button
                type="button"
                className="auth-btn"
              >
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button
                type="button"
                className="auth-btn signup-btn"
              >
                Signup
              </button>
            </Link>
          </>
        )}

        <Link to="/products">
          <button
            type="button"
            className="nav-btn product-btn"
          >
            Products
          </button>
        </Link>

        <Link to="/orders">
          <button
            type="button"
            className="nav-btn orders-btn"
          >
            Orders
          </button>
        </Link>

        <Link to="/cart">
          <button
            type="button"
            className="nav-btn cart-btn"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;