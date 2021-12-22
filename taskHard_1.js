'use strict';

{
	const userProfit = +prompt('Введите свой годовой доход');
	let taxRate = 0;

	if (userProfit <= 15000) {
		taxRate = 0.13;
	}
	if (userProfit > 15000 && userProfit <= 50000) {
		taxRate = 0.2;
	}
	if (userProfit > 50000) {
		taxRate = 0.3;
	}

	console.log(`Сумма налога составляет ${userProfit * taxRate} руб.`);
}