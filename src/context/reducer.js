
export const initialState = {
    bag: [],
    user: null
};

// Selector
export const getBasketTotal = (bag) => 
    bag?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                bag: [...state.bag, action.item]
            };
        default:
            return state;
    }
};

export default reducer;