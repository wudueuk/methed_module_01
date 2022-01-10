'use strict';

const cart = {
	items: [], //это товары
	totalPrice: 0, // общая стоимость корзины
	count: 0, // количество товаров
	getTotalPrice() {
		// метод возвращает значение свойства totalPrice
		return this.totalPrice;
	},
	add(itemName, itemPrice, itemCount = 1) {
		/**
		этот метод формирует объект из полученных параметров и добавляет его в свойство items
		так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
		 */
		this.items.push({ name: itemName, price: itemPrice, count: itemCount });
		this.increaseCount(itemCount);
		this.calculateItemPrice(itemPrice);
	},
	increaseCount(inCount) {
		// Увеличивает свойство count на это число
		this.count += inCount;
	},
	calculateItemPrice() {
		// пересчитывает стоимость всей корзины и записывает значение в totalPrice 
		this.totalPrice = 0;
		this.items.forEach(item => {
			this.totalPrice += item.price;
		});
	},
	clear() {
		// Очищает полностью нашу корзину, возвращает все значения в изначальные
		this.items.length = 0;
		this.totalPrice = 0;
		this.count = 0;
	},
	print() {
		/** Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины */
		console.log(JSON.stringify(this));
	},
};

/**
 * Для проверки работы функционала добавить 3 или более товаров в корзину
	После вызвать метод print для вывода информации в консоль
 */

cart.add('table', 100, 3);
cart.add('chair', 50, 6);
cart.add('sofa', 300, 2);
cart.add('tv', 999.99);

cart.print();