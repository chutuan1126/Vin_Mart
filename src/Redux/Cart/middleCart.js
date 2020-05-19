export const editCart = (state, obj) => {
    if (obj.amount === 0) {
        return state.Cart.filter(item => item.idProduct !== obj.idProduct);
    }

    const index = state.Cart.findIndex(item => item.idProduct === obj.idProduct);
    return [
        ...state.Cart.slice(0, index),
        {
            ...state.Cart[index],
            amount: obj.amount
        },
        ...state.Cart.slice(index + 1)
    ];
}