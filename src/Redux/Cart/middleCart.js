export const addToCart = (Cart, obj) => {
    const product = Cart.find(item => item.data.id === obj.id);
    const index = Cart.findIndex(item => item.data.id === obj.id);

    if (product === undefined) {
        return [
            ...Cart,
            {
                data: obj,
                quantity: 1
            },
        ]
    } else {
        return [
            ...Cart.slice(0, index),
            {
                data: product.data,
                quantity: product.quantity + 1
            },
            ...Cart.slice(index + 1)
        ];
    }
}