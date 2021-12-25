'use strict';

/**
 * Получите от пользователя 2 числа

Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов

Не используйте Math.max и Math.min
 */

const getMinNum = (a, b) => {
	const c = a - b;
	return Math.sqrt(c) ? b : a;
};

const numOne = +prompt('Введите первое число');
const numTwo = +prompt('Введите второе число');

console.log(getMinNum(numOne, numTwo));