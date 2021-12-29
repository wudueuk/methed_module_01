'use strict';

/**
 * Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
 */

const getAverageValue = arr => {
	let sumArray = 0;
	for (let i = 0; i < arr.length; i++) {
		sumArray += arr[i];
	}
	return Math.floor(sumArray / arr.length);
};

const getAverageValue_1 = arr => {

	const sumArray = arr.reduce((previousValue, currentValue) => previousValue + currentValue);

	return Math.floor(sumArray / arr.length);
};

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allСashbox));
console.log(getAverageValue_1(allСashbox));