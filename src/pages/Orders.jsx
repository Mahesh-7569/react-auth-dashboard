import { useState } from "react";
import "../styles/orders.css";

function Orders() {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  const cancelOrder = (id, orderDate) => {
    const updated = orders.filter(
      (item) =>
        !(
          item.id === id &&
          item.orderDate === orderDate
        )
    );

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h2 className="no-orders">
          No Orders Found
        </h2>
      ) : (
        <div className="orders-grid">
          {orders.map((item, index) => (
            <div
              className="order-card"
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p className="order-price">
                ₹{item.price}
              </p>

              <p className="order-qty">
                Qty: {item.qty || 1}
              </p>

              <p className="order-total">
                Total: ₹
                {item.price *
                  (item.qty || 1)}
              </p>

              <span className="order-status">
                {item.status ||
                  "Delivered"}
              </span>

              <p className="order-date">
                {item.orderDate ||
                  "Today"}
              </p>

              <button
                className="cancel-btn"
                onClick={() =>
                  cancelOrder(
                    item.id,
                    item.orderDate
                  )
                }
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;