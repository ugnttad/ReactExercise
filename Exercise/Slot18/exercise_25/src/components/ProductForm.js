import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Actions/cartActions';
import { useNavigate, Link } from 'react-router-dom';

function ProductForm() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (product.id && product.name && product.price) {
      dispatch(addProduct({
        ...product,
        price: parseFloat(product.price),
        catalogs: product.catalogs.split(',').map(s => s.trim())
      }));
      navigate('/');
    }
  };

  return (
    <div className="container my-5">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light mt-4">
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input className="form-control" name="id" value={product.id} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" name="name" value={product.name} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input className="form-control" name="price" type="number" step="0.01" value={product.price} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={product.description} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Catalogs (comma separated)</label>
          <input className="form-control" name="catalogs" value={product.catalogs} onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-success me-2">Add Product</button>
        <Link to="/" className="btn btn-secondary">Back</Link>
      </form>
    </div>
  );
}

export default ProductForm;
