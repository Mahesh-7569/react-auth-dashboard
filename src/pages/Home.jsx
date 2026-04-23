import "../styles/home.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const dealCards = [
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      {
        name: "Air Conditioners",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
      },
      {
        name: "Refrigerators",
        image:
          "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
      },
      {
        name: "Microwaves",
        image:
          "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400",
      },
      {
        name: "Washing Machines",
        image:
          "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
      },
    ],
  },
  {
    title: "Revamp your home in style",
    items: [
      {
        name: "Bedsheets",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      },
      {
        name: "Decor",
        image:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400",
      },
      {
        name: "Storage",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      },
      {
        name: "Lighting",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400",
      },
    ],
  },
  {
    title: "Bulk order discounts",
    items: [
      {
        name: "Laptops",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      },
      {
        name: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400",
      },
      {
        name: "Furniture",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      },
      {
        name: "Business",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      },
    ],
  },
  {
    title: "Starting ₹49 | Deals",
    items: [
      {
        name: "Cleaning",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
      },
      {
        name: "Bathroom",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400",
      },
      {
        name: "Tools",
        image:
          "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      },
      {
        name: "Wallpaper",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      },
    ],
  },
];

const trendingProducts = [
  "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
];

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home-page">
//       {/* Advanced Header */}
//       <header className="top-header">
//         <div
//           className="brand-section"
//           onClick={() => navigate("/home")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={logo} alt="My Mart Logo" className="site-logo" />

//           <div className="brand-text">
//             <h2>My Mart</h2>
//             <span>Village Store</span>
//           </div>
//         </div>

//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search groceries, electronics, essentials"
//           />
//           <button>🔍</button>
//         </div>

//         <div className="header-right">
//           <div className="offer-badge">🔥 Deals</div>

//           {/* ✅ FIXED */}
//           <button
//             className="auth-btn"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>

//           <button
//             className="auth-btn signup-btn"
//             onClick={() => navigate("/signup")}
//           >
//             Signup
//           </button>

//           <div className="profile-box">👤 User</div>

//           {/* ✅ ADDED PRODUCTS */}
//           <div
//             className="nav-item"
//             onClick={() => navigate("/products")}
//           >
//             Products
//           </div>

//           <div
//             className="nav-item"
//             onClick={() => navigate("/orders")}
//           >
//             Orders
//           </div>

//           <div
//             className="cart-box"
//             onClick={() => navigate("/cart")}
//           >
//             🛒 Cart
//             <span className="cart-count">2</span>
//           </div>
//         </div>
//       </header>


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="top-header">
        <div
          className="brand-section"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" className="site-logo" />
          <div className="brand-text">
            <h2>My Mart</h2>
            <span>Village Store</span>
          </div>
        </div>

        <div className="search-box">
          <input placeholder="Search products..." />
          <button>🔍</button>
        </div>

        <div className="header-right">
          <div className="offer-badge">🔥 Deals</div>

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

          {/* ✅ UPDATED BUTTONS */}
          <button className="nav-btn user-btn">
            👤 User
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
            🛒 Cart <span className="cart-count">2</span>
          </button>
        </div>
      </header>


      {/* Hero */}
        <section className="hero-banner">
        <div className="marquee-wrapper">
            <div className="marquee-content">
            <span className="offer-red">
                🔥 Mega Festival Sale - Up to 70% off
            </span>

            <span className="offer-green">
                ⚡ Fast Village Delivery - 30 minutes
            </span>

            <span className="offer-yellow">
                🛒 Fresh vegetables & groceries available
            </span>

            <span className="offer-pink">
                🎉 Special village offers today only
            </span>

            <span className="offer-blue">
                💥 Buy 1 Get 1 on daily essentials
            </span>
            </div>
        </div>

        <div className="hero-center">
            <h1>Welcome to My Mart</h1>
            <p>Fresh groceries, home essentials & electronics</p>
            <button className="shop-btn">Shop Now</button>
        </div>
        </section>

      {/* Main cards */}
      <section className="home-grid">
        {dealCards.map((card, index) => (
          <div className="deal-card" key={index}>
            <h2>{card.title}</h2>

            <div className="deal-items">
              {card.items.map((item, idx) => (
                <div className="deal-item" key={idx}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <a href="/">See more</a>
          </div>
        ))}
      </section>

      {/* Trending row */}
      <section className="offer-row">
        <h2>Trending products</h2>

        <div className="offer-products">
          {trendingProducts.map((image, index) => (
            <img key={index} src={image} alt="product" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;




// import "../styles/home.css";
// import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";

// const dealCards = [
//   {
//     title: "Appliances for your home | Up to 55% off",
//     items: [
//       {
//         name: "Air Conditioners",
//         image:
//           "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
//       },
//       {
//         name: "Refrigerators",
//         image:
//           "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
//       },
//       {
//         name: "Microwaves",
//         image:
//           "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400",
//       },
//       {
//         name: "Washing Machines",
//         image:
//           "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
//       },
//     ],
//   },
//   {
//     title: "Revamp your home in style",
//     items: [
//       {
//         name: "Bedsheets",
//         image:
//           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
//       },
//       {
//         name: "Decor",
//         image:
//           "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400",
//       },
//       {
//         name: "Storage",
//         image:
//           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
//       },
//       {
//         name: "Lighting",
//         image:
//           "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400",
//       },
//     ],
//   },
// ];

// const trendingProducts = [
//   "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
//   "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
//   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
// ];

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home-page">
//       {/* HEADER */}
//       <header className="top-header">
//         <div
//           className="brand-section"
//           onClick={() => navigate("/home")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={logo} alt="logo" className="site-logo" />
//           <div className="brand-text">
//             <h2>My Mart</h2>
//             <span>Village Store</span>
//           </div>
//         </div>

//         <div className="search-box">
//           <input placeholder="Search products..." />
//           <button>🔍</button>
//         </div>

//         <div className="header-right">
//           <div className="offer-badge">🔥 Deals</div>

//           <button
//             className="auth-btn"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>

//           <button
//             className="auth-btn signup-btn"
//             onClick={() => navigate("/signup")}
//           >
//             Signup
//           </button>

//           {/* ✅ UPDATED BUTTONS */}
//           <button className="nav-btn user-btn">
//             👤 User
//           </button>

//           <button
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
//             🛒 Cart <span className="cart-count">2</span>
//           </button>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="hero-banner">
//         <h1>Welcome to My Mart</h1>
//         <p>Fresh groceries, home essentials & electronics</p>
//         <button className="shop-btn">Shop Now</button>
//       </section>

//       {/* CARDS */}
//       <section className="home-grid">
//         {dealCards.map((card, index) => (
//           <div className="deal-card" key={index}>
//             <h2>{card.title}</h2>

//             <div className="deal-items">
//               {card.items.map((item, idx) => (
//                 <div className="deal-item" key={idx}>
//                   <img src={item.image} alt={item.name} />
//                   <p>{item.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* TRENDING */}
//       <section className="offer-row">
//         <h2>Trending products</h2>

//         <div className="offer-products">
//           {trendingProducts.map((img, i) => (
//             <img key={i} src={img} alt="product" />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;