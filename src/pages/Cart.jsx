import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, qty: (item.qty || 1) + 1 }
        : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: item.qty > 1 ? item.qty - 1 : 1,
          }
        : item
    );
    updateCart(updated);
  };

  const placeOrder = () => {
    if (cart.length === 0) return;

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrders = [
      ...oldOrders,
      ...cart.map((item) => ({
        ...item,
        qty: item.qty || 1,
        orderDate: new Date().toLocaleString(),
        status: "Confirmed",
      })),
    ];

    localStorage.setItem(
      "orders",
      JSON.stringify(newOrders)
    );

    localStorage.removeItem("cart");
    setCart([]);
    navigate("/orders");
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <h2 className="no-cart">
          Your cart is empty
        </h2>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div
                className="cart-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p className="cart-price">
                  ₹{item.price}
                </p>

                <div className="qty-box">
                  <button
                    className="qty-btn"
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.qty || 1}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>
                </div>

                <p className="subtotal">
                  ₹
                  {item.price *
                    (item.qty || 1)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="total-box">
            <h2>Total: ₹{total}</h2>

            <button
              className="place-btn"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;