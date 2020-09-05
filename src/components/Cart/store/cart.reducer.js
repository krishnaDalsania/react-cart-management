
const initialState = {
    cartList: [
    ],
    amountToPay: 0
};

const setCartData = (state, payload) => {
    let cartData = {
        amount: 0,
        cartList: [...state, ...payload]
    }
    cartData.cartList.map(item => {
        cartData.amount += item.price
        return item
    })
    return cartData
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TO_BASKET':
            let cartData = setCartData(state.cartList, payload)
            return {
                ...state,
                cartList: cartData.cartList,
                amountToPay: cartData.amount
            };
        default:
            return state;
    }
}
