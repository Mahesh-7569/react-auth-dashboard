const categories = [
  "Groceries",
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home Decor",
  "Furniture",
];

function CategorySection() {
  return (
    <section className="category-section">
      {categories.map((item, index) => (
        <div key={index} className="category-card">
          {item}
        </div>
      ))}
    </section>
  );
}

export default CategorySection;