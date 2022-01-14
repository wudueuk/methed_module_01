'use strict';

const cart = {
	items: [], //это товары
	count: 0, // количество товаров
	add(itemName, itemPrice, itemCount = 1) {
		/**
		этот метод формирует объект из полученных параметров и добавляет его в свойство items
		так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
		 */
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
		// Очищает полностью нашу корзину, возвращает все значения в изначальные
		this.items.length = 0;
		this.count = 0;
		//this.totalPrice; -- оставим на будущее
	},
	print() {
		/** Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины */
		console.log('items[]:', JSON.stringify(this.items));
		console.log('totalPrice:', this.totalPrice);
	},
};

Object.defineProperty(cart, 'totalPrice', {
	get() {
		return this.calculateItemPrice();
	}
});
/**
 * Для проверки работы функционала добавить 3 или более товаров в корзину
	После вызвать метод print для вывода информации в консоль
 */

cart.add('table', 100, 3);
cart.print();
cart.add('chair', 50, 6);
cart.print();
cart.add('sofa', 300, 2);
cart.print();
cart.add('tv', 999.99);
cart.print();