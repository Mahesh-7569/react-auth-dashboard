const products = [
  { name: "Headphones", price: "₹1,999" },
  { name: "Chair", price: "₹4,500" },
  { name: "Mobile", price: "₹18,000" },
  { name: "Sofa", price: "₹25,000" },
];

function ProductSection() {
  return (
    <section className="product-section">
      <h2>Top Deals</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image"></div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;