'use strict';

/**
 * Создайте файл game01.js
Написать простой игровой бот, который умеет следующее:
Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.
 */

const getUserValue = () => {
	let inputValue = prompt('Введите число от 1 до 100');
	/* console.log('inputValue: ', inputValue); */
	if (inputValue === '') {
		alert('Введите число');
		return getUserValue();
	}
	if (inputValue === null || inputValue >= 1 && inputValue <= 100) {
		return inputValue;
	} else {
		return getUserValue();
	}
};

const checkUserValue = (a, b) => {
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

const game = (rand) => {

	let userValue = getUserValue(); // Получаем число от пользователя

	if (userValue === null) {
		alert('Пока!!'); // Пользователь нажал отмена
		return;
	}

	const checkResult = checkUserValue(userValue, rand); // Получаем результат проверки числа

	if (checkResult === 0) {
		return game(rand);
	} else {
		alert('Пока!'); // Пользователь угадал число
		return;
	}
}

const bot = () => {
	const rnd = Math.round(Math.random() * 100); // получаем случайное число
	console.log('Случайное число: ', rnd);
	return game(rnd);
};

bot();