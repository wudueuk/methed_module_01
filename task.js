'use strict';

console.log(Math.round(Math.random()) ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');

{
	const MIN_RESULT = 265;

	const resultMath = +prompt('Введите кол-во баллов по математике');
	const resultRussian = +prompt('Введите кол-во баллов по русскому языку');
	const resultImformation = +prompt('Введите кол-во баллов по информатике');

	if (resultMath + resultRussian + resultImformation >= MIN_RESULT) {
		console.log('Поздравляю, вы поступили на бюджет!')
	}
}

{
	const userMoney = +prompt('Сколько Вы хотите снять денег');

	if (userMoney % 100 === 0) {
		console.log('Вы можете получить запрашиваемую сумму');
	} else {
		console.log('Вы не можете получить запрашиваемую сумму');
	}
}