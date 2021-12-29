'use strict';

/**
 * Первая задача:

Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

1 евро = 1.2 доллара,

1 доллар = 73 рубля.
 */

const getCostRub = costEuro => {
	const dollarRate = 73;
	const euroRate = dollarRate * 1.2;

	const costRub = costEuro * euroRate;

	return costRub;
};

const costEuro = +prompt('Введите цену товара');

console.log('Цена товара в рублях - ' + getCostRub(costEuro));