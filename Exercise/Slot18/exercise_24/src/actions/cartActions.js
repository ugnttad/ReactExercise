export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateCart = (product) => ({
  type: UPDATE_CART,
  payload: product,
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  payload: id,
});
