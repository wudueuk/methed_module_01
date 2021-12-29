'use strict';

/**
 * Получите от пользователя 2 числа

Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов

Не используйте Math.max и Math.min
 */

const getMinNum = (a, b) => {
	const aa = Math.sqrt(b - a);
	const resultA = aa && a;

	const bb = Math.sqrt(a - b);
	const resultB = bb && b;

	return resultA || resultB;
};

const numOne = +prompt('Введите первое число');
const numTwo = +prompt('Введите второе число');

console.log(getMinNum(numOne, numTwo));