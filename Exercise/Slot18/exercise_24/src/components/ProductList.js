import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../actions/cartActions';

const product = {
  id: '123456',
  name: 'Example Product',
  price: 9.99,
  description: 'This is an example product.',
  catalogs: ['catalog1', 'catalog2'],
};

function ProductList() {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateCart({ ...product, quantity: 2 }));
  };

  return (
    <div className="product-card">
      <div className="product-title">{product.name}</div>
      <div>ID: {product.id}</div>
      <div className="product-catalogs">Catalogs: {product.catalogs.join(', ')}</div>
      <div className="product-price">Price: ${product.price}</div>
      <div>{product.description}</div>
      <div className="product-btns">
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        <button onClick={handleUpdate}>Update to Cart</button>
        <button onClick={() => dispatch(deleteFromCart(product.id))} style={{background:'#c0392b'}}>Delete from Cart</button>
      </div>
    </div>
  );
}

export default ProductList;
