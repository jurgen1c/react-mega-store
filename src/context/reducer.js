
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
        case 'REMOVE_FROM_BAG':
            const index = state.bag.findIndex((bagItem) => bagItem.id === action.id)
            let newBag = [...state.bag];

            if(index >= 0) {
                newBag.splice(index, 1);
            } else {
                console.warn(
                    `Cant't remove product (id: ${action.id}) as its not in Bag!`
                )
            }
            return {...state, bag: newBag }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;