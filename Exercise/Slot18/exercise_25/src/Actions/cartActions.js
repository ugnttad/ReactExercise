export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Thunk action để fetch product giả lập bất đồng bộ
export const fetchProducts = () => async (dispatch) => {
  // Có thể thay bằng fetch API thật
  const fakeProducts = [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
    {
      id: '654321',
      name: 'React Shirt',
      price: 20,
      description: 'Shirt with React logo.',
      catalogs: ['shirt', 'react'],
    }
  ];
  // Giả lập delay
  await new Promise(r => setTimeout(r, 500));
  dispatch({ type: SET_PRODUCTS, payload: fakeProducts });
};

// Action thêm sản phẩm mới (ProductForm)
export const addProduct = (product) => (dispatch, getState) => {
  const { cartState } = getState();
  const newProducts = [...cartState.products, product];
  dispatch({ type: SET_PRODUCTS, payload: newProducts });
};

    