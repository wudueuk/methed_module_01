'use strict';

{
	const productName = prompt('Введите наименование товара');

	const productCount = +prompt('Введите количество товара');

	const productCategory = prompt('Введите категорию товара');

	const productPrice = +prompt('Введите цену товара');

	if (Number.isNaN(productCount) || Number.isNaN(productPrice)) {
		console.log('Вы ввели некорректные данные');
	} else {
		console.log(`На складе ${productCount} единицы товара "${productName}" на сумму ${productCount * productPrice} деревянных`);
	}
}
