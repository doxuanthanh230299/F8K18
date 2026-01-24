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
    if (productId === null || orderQuantity === null || orderQuantity <= 0) {
        console.error("Invalid value");
        return;
    }
    const product = products.find((product) => product.id === productId);
    if (!product) {
        console.error("Product not found");
        return;
    }
    if (product.remaining < orderQuantity) {
        console.error("Out of stock");
    }
    const order = {
        id: orderId++,
        productId,
        quantity: orderQuantity,
    };
    orders.push(order);
    return orders;
};

console.log(createOrder(3, 10));
console.log(createOrder(3, 10));
console.log(createOrder(3, 9));
console.log(createOrder(3, 3));
console.log(createOrder(1, 3));
console.log(createOrder(2, 13));
console.log(createOrder(5, 30));
console.log(orders);
console.log(products);
console.log('==================');

const updateOrder = (orderId, quantity) => {
    const order = orders.find((order) => order.id === orderId);
    if (!order) {
        console.error("Order not found");
        return;
    }

    const product = orders.find((order) => order.id === orderId);
    if (!product) {
        console.error("Product not found");
        return;
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

updateOrder(1, 1);
console.log(products);
console.log(orders);

updateOrder(20, 19);
console.log(products);
console.log(orders);
console.log('==========');

const deleteOrder = (orderId) => {
    const orderIndex = orders.findIndex(order => order.productId === orderId);

    if (orderIndex === -1) {
        console.error("Order not found");
        return;
    }

    const product = products.find(
        (product) => product.id === orders[orderIndex].productId
    );
    if (!product) {
        console.error("Product is not exist");
    }
    product.remaining += orders[orderIndex].quantity;
    orders.splice(orderIndex, 1);
    return orders;
};

createOrder(1, 4);
updateOrder(1, 4);
deleteOrder(1);
