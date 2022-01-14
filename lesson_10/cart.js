'use strict';

const cart = {
  items: [], // это товары
  count: 0, // количество товаров
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({ name: itemName, price: itemPrice, count: itemCount });
    this.increaseCount(itemCount);
  },
  increaseCount(inCount) {
    // Увеличивает свойство count на это число
    this.count += inCount;
  },
  calculateItemPrice() {
    // пересчитывает стоимость всей корзины
    let itemsPrice = 0;
    this.items.forEach(item => {
      itemsPrice += item.price;
    });
    return itemsPrice;
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
    // this.totalPrice; -- оставим на будущее
  },
  print() {
    console.log('items[]:', JSON.stringify(this.items));
    console.log('totalPrice:', this.totalPrice);
  },
};

Object.defineProperty(cart, 'totalPrice', {
  get() {
    return this.calculateItemPrice();
  },
});

cart.add('table', 100, 3);
cart.print();
cart.add('chair', 50, 6);
cart.print();
cart.add('sofa', 300, 2);
cart.print();
cart.add('tv', 999.99);
cart.print();
