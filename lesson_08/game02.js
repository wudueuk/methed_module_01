'use strict';

/**
 * Усовершенствуйте игру
бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
бот запоминает каждое число которое ввел пользователь и записывает в массив
бот отграничивает количество попыток до 30% от количества цифр в диапазоне
если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
если диапазон от 50 до 100, то попыток бот даёт 15
если попытки закончились игра прекращается
 */

const valueArray = [];
let attempt = 0;

const getUserValue = (min, max) => {
	let inputValue = prompt(`Введите число от ${min} до ${max} (осталось попыток - ${attempt})`);
	/* console.log('inputValue: ', inputValue); */
	if (inputValue === '') {
		alert('Введите число');
		return getUserValue(min, max);
	}

	if (inputValue === null) return null; // Пользователь нажал отмену

	if (inputValue >= min && inputValue <= max) {
		// Проверяем на повторы
		if (valueArray.indexOf(inputValue) < 0) {
			valueArray.push(inputValue);
			console.log('valueArray: ', valueArray);
			attempt--;
			return inputValue;
		} else {
			alert('Это число вы уже вводили');
			return getUserValue(min, max);
		}
	} else {
		return getUserValue(min, max);
	}
};

const checkUserValue = (a, b) => {
	// Сверяем числа
	if (a === b) {
		alert('Верно!');
		return 1;
	}
	if (a > b) {
		alert('Меньше!');
		return 0;
	}
	if (a < b) {
		alert('Больше!');
		return 0;
	}
};

const game = (rand, min, max) => {

	let userValue = 0;

	// Проверяем попытки
	if (attempt > 0) {
		userValue = getUserValue(min, max); // Получаем число от пользователя
	} else {
		alert('Вы исчерпали все свои попытки'); // Пользователь нажал отмена
		return;
	}

	if (userValue === null) {
		alert('Пока!!'); // Пользователь нажал отмена
		return;
	}

	const checkResult = checkUserValue(userValue, rand); // Получаем результат проверки числа

	if (checkResult === 0) {
		return game(rand, min, max);
	} else {
		alert('Ура, вы победили!'); // Пользователь угадал число
		return;
	}
}

const bot = () => {
	const startPos = +prompt('Введите начальное число');
	const finishPos = +prompt('Введите конечное число');

	const rnd = Math.floor(Math.random() * (finishPos - startPos + 1)) + startPos; // получаем случайное число

	if ((finishPos - startPos) >= 50 && (finishPos - startPos) <= 100) {
		attempt = 15;
	} else {
		attempt = Math.floor((finishPos - startPos) * 0.3);
	}

	console.log('Случайное число: ', rnd);

	return game(rnd, startPos, finishPos);
};

bot();