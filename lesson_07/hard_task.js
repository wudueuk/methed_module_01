'use strict';

/**
 * Напишите функцию getAveragePriceGoods 
для получения средней цены товара

Дан многомерный  массив:
const allСashbox = [
	[12, 4500], 
	[7, 3210], 
	[4, 650], 
	[3, 1250], 
	[9, 7830], 
	[1, 990], 
	[6, 13900], 
	[1, 370]
];
В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.
*/

const getAveragePriceGoods = arr => {
	let countProduct = 0, sumProduct = 0;

	for (let i = 0; i < arr.length; i++) {
		countProduct += arr[i][0];
		sumProduct += arr[i][0] * arr[i][1];
	}

	return sumProduct / countProduct;
};

const allСashbox = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370]
];

console.log(getAveragePriceGoods(allСashbox));
