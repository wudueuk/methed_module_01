'use strict';

/**
 * Напишите функцию, вычисляющую наибольший общий делитель двух чисел
 */

const getDivider = (minNum, maxNum) => {

	if (maxNum % minNum === 0) {
		return minNum;
	} else {
		let divider = minNum;
		while (minNum % divider > 0 || maxNum % divider > 0 && divider > 1) {
			console.log('divider: ', divider);
			divider--;
		}
		return divider;
	}

};

const numOne = +prompt('Введите первое число');
const numTwo = +prompt('Введите второе число');

if (numOne > numTwo) {
	console.log(`Общий делитель равен ${getDivider(numTwo, numOne)}`);
} else {
	console.log(`Общий делитель равен ${getDivider(numOne, numTwo)}`);
}
