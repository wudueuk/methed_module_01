'use strict';

/**
 * Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться
 */

const calculate = (totalSum, productCount, promo) => {
	let discount = 0;

	if (productCount > 10) discount = 3;
	console.log('discount1: ', discount);

	if (totalSum > 30000) discount += 15;
	console.log('discount2: ', discount);

	if (promo === 'METHED') discount += 10;
	console.log('discount3: ', discount);

	let calcSum = totalSum - totalSum * discount / 100;
	console.log('calcSum: ', calcSum);

	if (calcSum > 2000 && promo === 'G3H2Z1') {
		calcSum -= 500;
	}
	console.log('calcSum: ', calcSum);
	return calcSum;

}

const userSum = 50000;
const userCount = 11;
const userCode = 'G3H2Z1';


const resultSum = calculate(userSum, userCount, userCode);
console.log('resultSum: ', resultSum);

