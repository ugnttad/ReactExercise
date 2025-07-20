import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '../Actions/cartActions';
import { Link } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cartState.products);

  useEffect(() => {
    // Chỉ fetch nếu products chưa có
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Product List</h2>
        <Link to="/add" className="btn btn-success">Add New Product</Link>
      </div>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <span className="badge bg-primary mb-2">{product.catalogs.join(', ')}</span>
                <p className="card-text">{product.description}</p>
                <p><strong>Price: </strong>${product.price}</p>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => dispatch(addToCart(product))}
                >Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <Link to="/cart" className="btn btn-warning">Go to Cart</Link>
      </div>
    </div>
  );
}

export default ProductList;
