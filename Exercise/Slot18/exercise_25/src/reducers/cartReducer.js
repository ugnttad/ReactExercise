import { ADD_TO_CART, SET_PRODUCTS } from '../Actions/cartActions';

const initialState = {
    products: [],
    cart: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ADD_TO_CART:
            // Nếu đã có thì tăng số lượng
            const exists = state.cart.find(p => p.id === action.payload.id);
            if (exists) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: (item.quantity || 1) + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                };
            }
        default:
            return state;
    }
}
