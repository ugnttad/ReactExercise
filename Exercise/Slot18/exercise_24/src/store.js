import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cartState: cartReducer,
});

const store = createStore(rootReducer);

export default store;
