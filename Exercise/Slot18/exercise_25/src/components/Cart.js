import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector(state => state.cartState.cart);
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      {cart.length === 0 && <div className="alert alert-info mt-3">Cart is empty!</div>}
      <ul className="list-group mb-4 mt-3">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <b>{item.name}</b>
              <span className="badge bg-secondary mx-2">{item.catalogs.join(', ')}</span>
              <br />
              <span className="text-muted">${item.price} x {item.quantity}</span>
            </div>
            <span className="text-success fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <h4>Total: <span className="text-danger">${total.toFixed(2)}</span></h4>
      </div>
      <Link to="/" className="btn btn-outline-secondary">Back to Product List</Link>
    </div>
  );
}

export default Cart;
