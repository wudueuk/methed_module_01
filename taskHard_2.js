'use strict';

{
	const userProfit = +prompt('Введите свой годовой доход');
	let tax = 0;

	if (userProfit <= 15000) {
		tax = userProfit * 0.13;
	}
	if (userProfit > 15000 && userProfit <= 50000) {
		tax = 15000 * 0.13 + (userProfit - 15000) * 0.2;
	}
	if (userProfit > 50000) {
		tax = (userProfit - 50000) * 0.3 + 15000 * 0.13 + 35000 * 0.2;
	}

	console.log(`Сумма налога составляет ${tax} руб.`);
}