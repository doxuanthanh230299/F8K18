const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 },
];

const orders = [];
let orderId = 1;
const createOrder = (productId, orderQuantity) => {
    if (productId === null || orderQuantity === null) {
        console.error("Invalid value");
        return;
    }
    if (!productId) {
        console.error("Product not found");
        return;
    }

    const order = {
        id: orderId++,
        productId,
        quantity: orderQuantity,
    };

    orders.push(order);
    for (product of products) {
        if (product.id === productId) {
            product.remaining = product.remaining - orderQuantity;
        }
    }
    return orders;
};

const updateOrder = (orderId, quantity) => {
    let order;
    for (orderItem of orders) {
        if (orderItem.id === orderId) order = orderItem;
    }
    if (!order) {
        console.error("Order not found");
        return;
    }
    let product;
    for (productItem of products) {
        if (productItem.id === order.productId) product = productItem;
    }
    if (!product) {
        console.error("Product not found");
    }
    const diff = quantity - order.quantity;
    if (diff > 0) {
        if (product.remaining < diff) {
            console.log("Out of stock");
            return;
        }
        product.remaining -= diff;
    }
    if (diff < 0) {
        product.remaining += Math.abs(diff);
    }
    order.quantity = quantity;
    return order;
};

const deleteOrder = (orderId) => {
    let index;
    for (i = 0; i < orders.length; i++) {
        if (orders[i].id === orderId) {
            index = i
        }
    }
    
    if (index === undefined) {
        console.error("Not found");
        return;
    }
    const order = orders[index];
    let product
    for (productItem of products) {
        if (productItem.id === order.productId) product = productItem
    }
    if (product) {
        product.remaining += order.quantity;
    }
    orders.splice(index, 1);
    return orders
};

createOrder(1, 4);
updateOrder(1, 4);
deleteOrder(1)



