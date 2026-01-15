const products = [
    { id: 1, name: "iPhone", price: 2000 },
    { id: 2, name: "Samsung", price: 1500 },
    { id: 3, name: "Xiaomi", price: 1000 },
    { id: 4, name: "Oppo", price: 1200 },
];

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 },
        ],
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 },
        ],
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 },
        ],
    },
];

const getMaxProduct = (products, orders) => {
    const productsQtyMap = {};
    for (const product of products) {
        productsQtyMap[product.id] = 0;
    }

    for (const order of orders) {
        for (const orderItem of order.items) {
            productsQtyMap[orderItem.productId] += orderItem.quantity;
        }
    }

    for (i = 0; i < products.length; i++) {
        products[i].total = productsQtyMap[products[i].id] * products[i].price;
    }
    
    let maxProduct = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].total > maxProduct.total) {
            maxProduct = products[i];
        }
    }
    return maxProduct
};

console.log(getMaxProduct(products, orders));
