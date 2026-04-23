// import { useState } from "react";
// import "../styles/products.css";

// const productsData = [
//   {
//     id: 1,
//     name: "Fresh Tomatoes",
//     price: 40,
//     category: "Groceries",
//     rating: 4.5,
//     image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400",
//   },
//   {
//     id: 2,
//     name: "Rice Bag 25kg",
//     price: 1200,
//     category: "Groceries",
//     rating: 4.2,
//     image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 1999,
//     category: "Electronics",
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
//   },
//   {
//     id: 4,
//     name: "Smartphone",
//     price: 15000,
//     category: "Electronics",
//     rating: 4.3,
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
//   },
// ];

// function Products() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const filtered = productsData.filter((item) => {
//     return (
//       (category === "All" || item.category === category) &&
//       item.name.toLowerCase().includes(search.toLowerCase())
//     );
//   });

//     const handleAddToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(product.name + " added to cart");
//   };

//   return (
//     <div className="products-page">
//       <h1>All Products</h1>

//       {/* Filters */}
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search products..."
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select onChange={(e) => setCategory(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Groceries">Groceries</option>
//           <option value="Electronics">Electronics</option>
//         </select>
//       </div>

//       {/* Products */}
//       <div className="products-grid">
//         {filtered.map((item) => (
//           <div className="product-card" key={item.id}>
//             <img src={item.image} alt={item.name} />

//             <h3>{item.name}</h3>
//             <p className="price">₹{item.price}</p>

//             <div className="rating">⭐ {item.rating}</div>

//             <button onClick={() => handleAddToCart(item)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;


import { useState } from "react";
import "../styles/products.css";

const productsData = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 40,
    category: "Groceries",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400",
  },
  {
    id: 2,
    name: "Rice Bag 25kg",
    price: 1200,
    category: "Groceries",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
  },
  {
    id: 3,
    name: "Headphones",
    price: 1999,
    category: "Electronics",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 4,
    name: "Smartphone",
    price: 15000,
    category: "Electronics",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState("All");

  const filtered = productsData.filter(
    (item) =>
      (category === "All" ||
        item.category === category) &&
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleAddToCart = (product) => {
    let cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      cart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              qty:
                (item.qty || 1) + 1,
            }
          : item
      );
    } else {
      cart.push({
        ...product,
        qty: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(
      product.name +
        " added to cart"
    );
  };

  return (
    <div className="products-page">
      <h1>All Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          <option value="All">
            All
          </option>
          <option value="Groceries">
            Groceries
          </option>
          <option value="Electronics">
            Electronics
          </option>
        </select>
      </div>

      <div className="products-grid">
        {filtered.length === 0 ? (
          <h2>
            No Products Found
          </h2>
        ) : (
          filtered.map((item) => (
            <div
              className="product-card"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p className="price">
                ₹{item.price}
              </p>

              <div className="rating">
                ⭐ {item.rating}
              </div>

              <button
                onClick={() =>
                  handleAddToCart(
                    item
                  )
                }
              >
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;