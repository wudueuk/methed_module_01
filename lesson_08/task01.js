'use strict';

/**
 * Первая задача:

Напишите функцию генератор массива случайных чисел в файле task01.js
Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;
 */

const getArray = count => {
	const newArray = [];

	for (let i = 0; i < count; i++) {
		newArray[i] = Math.floor(Math.random() * 100) + 1;
	}

	return newArray;
};

const myCount = prompt('Введите кол-во элементов в массиве');

console.log(getArray(myCount));