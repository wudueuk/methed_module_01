'use strict';

/**
 * Скопируйте код task01.js в task02.js

Продолжаем работать с предыдущей функцией
Функция принимает еще два параметра n и m
Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
 */

const getArray = (count, n, m) => {
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

	return newArray;
};

const myCount = +prompt('Введите кол-во элементов в массиве');
const startPos = +prompt('Введите начальное число');
const finishPos = +prompt('Введите конечное число');

console.log(getArray(myCount, startPos, finishPos));