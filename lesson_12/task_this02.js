'use strict';

/**
 * Продолжим работу в cart.js из предыдущего урока
 * Методы объекта cart не должны обращаться к объекту по имени
 * В объект cart добавьте сеттер setDiscount и свойство discount
 * Сеттер setDiscount будет принимать promocode
 * если promocode будет строка METHED, то в discount будет добавляться
 * значение 15 если promocode будет строка NEWYEAR, то в discount будет
 * добавляться значение 21
 * метод calculateItemPrice должен учитывать скидку равную процентному
 * значению discount
 */

const cart = {
  items: [], // это товары
  count: 0, // количество товаров
  discount: 0, // скидка
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({
      name: itemName,
      price: itemPrice,
      count: itemCount,
    });
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
    if (this.discount > 0) {
      itemsPrice -= itemsPrice * this.discount / 100;
    }
    return itemsPrice;
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    console.log('items[]:', JSON.stringify(this.items));
    console.log('totalPrice:', this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
};

cart.add('table', 100, 3);
cart.print();
cart.add('chair', 50, 6);
cart.print();
cart.add('sofa', 300, 2);
cart.print();
cart.add('tv', 999.99);
cart.print();
cart.setDiscount = 'METHED';
cart.print();
