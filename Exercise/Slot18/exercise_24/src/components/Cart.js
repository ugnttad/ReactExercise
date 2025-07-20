import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cartState.cart);

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-card">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 && <div>Your cart is empty.</div>}
        {cart.map((item) => (
          <div key={item.id} className="cart-item-title">
            {item.name} - ${item.price} x {item.quantity}
          </div>
        ))}
      </div>
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
