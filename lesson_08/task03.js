'use strict';

/**
 * Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции
4-ый опциональный параметр это строка:
если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел
 */

const getArray = (count, n, m, arrFilter) => {
	const newArray = [];
	let min = 0, max = 100;
	if (n < m) {
		min = n;
		max = m;
	} else {
		min = m;
		max = n;
	}

	for (let i = 0; i < count; i++) {
		newArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	if (arrFilter === 'even') {
		return newArray.filter(item => item % 2 === 0);
	}
	if (arrFilter === 'odd') {
		return newArray.filter(item => item % 2 !== 0);
	}
};

const myCount = +prompt('Введите кол-во элементов в массиве');
const startPos = +prompt('Введите начальное число');
const finishPos = +prompt('Введите конечное число');
const myFilter = prompt('Введите even (четные) или odd (нечетные)');

console.log(getArray(myCount, startPos, finishPos, myFilter));