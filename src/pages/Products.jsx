import { useState } from "react";
import "../styles/products.css";

const productsData = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 40,
    category: "Groceries",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400",
  },
  {
    id: 2,
    name: "Rice Bag 25kg",
    price: 1200,
    category: "Groceries",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
  },
  {
    id: 3,
    name: "Headphones",
    price: 1999,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 4,
    name: "Smartphone",
    price: 15000,
    category: "Electronics",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = productsData.filter((item) => {
    return (
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleAddToCart = (product) => {
    alert(product.name + " added to cart");
  };

  return (
    <div className="products-page">
      <h1>All Products</h1>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Groceries">Groceries</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Products */}
      <div className="products-grid">
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>

            <div className="rating">⭐ {item.rating}</div>

            <button onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;