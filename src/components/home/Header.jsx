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




import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/home.css";

function Header() {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [cartCount, setCartCount] =
    useState(() => {
      const cart =
        JSON.parse(
          localStorage.getItem("cart")
        ) || [];

      return cart.reduce(
        (sum, item) =>
          sum + (item.qty || 1),
        0
      );
    });

  const [username, setUsername] =
    useState(() => {
      const user =
        JSON.parse(
          localStorage.getItem("user")
        ) || null;

      return user?.name || "";
    });

  const [showUserMenu, setShowUserMenu] =
    useState(false);

  useEffect(() => {
    const interval =
      setInterval(() => {
        const cart =
          JSON.parse(
            localStorage.getItem(
              "cart"
            )
          ) || [];

        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          ) || null;

        const totalQty =
          cart.reduce(
            (sum, item) =>
              sum +
              (item.qty || 1),
            0
          );

        setCartCount(totalQty);
        setUsername(
          user?.name || ""
        );
      }, 500);

    return () =>
      clearInterval(interval);
  }, []);

  const goPage = (path) => {
    navigate(path);
    setShowUserMenu(false);
  };

  const handleSearch = () => {
    navigate(
      `/products?search=${search}`
    );
  };

  const logout = () => {
    localStorage.removeItem(
      "user"
    );

    setUsername("");
    setShowUserMenu(false);

    navigate("/login");
  };

  return (
    <header className="top-header">
      {/* Logo */}
      <div
        className="brand-section"
        onClick={() =>
          goPage("/home")
        }
      >
        <span className="logo-text">
          My Mart
        </span>
      </div>

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
            handleSearch()
          }
        />

        <button
          onClick={handleSearch}
        >
          🔍
        </button>
      </div>

      {/* Right Menu */}
      <div className="header-right">
        {username ? (
          <div className="user-menu-box">
            <button
              className="nav-btn user-btn"
              onClick={() =>
                setShowUserMenu(
                  !showUserMenu
                )
              }
            >
              👤 {username}
            </button>

            {showUserMenu && (
              <div className="user-dropdown">
                <p
                  onClick={() =>
                    goPage("/user")
                  }
                >
                  My Profile
                </p>

                <p
                  onClick={() =>
                    goPage(
                      "/orders"
                    )
                  }
                >
                  My Orders
                </p>

                <p
                  onClick={() =>
                    goPage("/cart")
                  }
                >
                  My Cart
                </p>

                <p
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              className="auth-btn"
              onClick={() =>
                navigate("/login")
              }
            >
              Login
            </button>

            <button
              className="auth-btn signup-btn"
              onClick={() =>
                navigate("/signup")
              }
            >
              Signup
            </button>
          </>
        )}

        <button
          className="nav-btn product-btn"
          onClick={() =>
            goPage("/products")
          }
        >
          Products
        </button>

        <button
          className="nav-btn orders-btn"
          onClick={() =>
            goPage("/orders")
          }
        >
          Orders
        </button>

        <button
          className="nav-btn cart-btn"
          onClick={() =>
            goPage("/cart")
          }
        >
          🛒 Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;