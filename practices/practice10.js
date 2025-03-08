import orders from "./orders.js";

// Завдання 1. Кількість замовлень кожного користувача
// 1. Використовуйте reduce, щоб створити об’єкт:
function countOrdersByReduce(object) {
  let countOrders = object.reduce((lastIter, userOrder) => {
    if (!lastIter[userOrder.user]) {
      lastIter[userOrder.user] = 1;
    } else {
      lastIter[userOrder.user]++;
    }
    return lastIter;
  }, {});
  return countOrders;
}
// console.log(countOrdersByReduce(orders));

// 2. Використовуйте Map
function countOrdersByMap(object) {
  const countOrders = new Map();
  object.forEach((userOrder) =>
    countOrders.set(userOrder.user, (countOrders.get(userOrder.user) || 0) + 1)
  );
  return countOrders;
}
// console.log(countOrdersByMap(orders));


// Завдання 2. Сума замовлень кожного користувача
// 1. Використати map + reduce, щоб створити об’єкт
function countCostsByMapReduce(object) {
  let countCosts = object.map((order) => ({
    user: order.user,
    total: order.items.reduce((sum, item) => sum + item.price, 0),
  }))
  .reduce((acc, {user, total}) => {
    acc[user] = (acc[user] || 0)  + total;
    return acc;
  }, {});
  return countCosts;
}
// console.log(countCostsByMapReduce(orders));

// 2. Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
function countCostsByMap(object){
    const countCosts = new Map();
    object.forEach(order => {
        let total = order.items.reduce((sum, item) => sum + item.price, 0);
        countCosts.set(order.user, (countCosts.get(order.user) || 0) + total);
    })
    return countCosts;
}
// console.log(countCostsByMap(orders));


// Завдання  3. Унікальні товари
function unicPurchase(object){
  const purchase = new Set()
  object.forEach(order => {
    order.items.forEach(item => purchase.add(item.name))
  })
return purchase;
}
// console.log(unicPurchase(orders));


// Завдання 4. Хто витратив більше за всіх?
function theBiggectReceipt(object) {
  let receiptsMap = Object.entries(countCostsByMapReduce(object));
  let receiptMax = receiptsMap.reduce((max, receipt) => receipt[1] > max[1] ? receipt : max);
  console.log(`${receiptMax[0]} витратив більше за всіх: $${receiptMax[1]}`);
}
// theBiggectReceipt(orders);
