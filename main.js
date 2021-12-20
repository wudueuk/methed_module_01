'use strict';

{
	const productName = "Холодильник";
	let productCount = 9;
	const productCategory = "Бытовая техника";
	let productCost = 33000;

	console.log('productName: ', productName);

	console.log(`Общая сумма товаров ${productCount * productCost}`);
}

{
	const productName = "Монитор BenQ";
	let productCount = 6;
	const productCategory = "Компьтерная переферия";
	let productCost = 18000;

	console.log('productName: ', productName);

	console.log(`Общая сумма товаров ${productCount * productCost}`);
}

{
	const productName = prompt('Введите наименование товара');
	console.log('productName: ', typeof (productName));

	const productCount = +prompt('Введите количество товара');
	console.log('productCount: ', typeof (productCount));

	const productCategory = prompt('Введите категорию товара');
	console.log('productCategory: ', typeof (productCategory));

	const productPrice = +prompt('Введите цену товара');
	console.log('productPrice: ', typeof (productPrice));

	console.log(`На складе ${productCount} единицы товара "${productName}" на сумму ${productCount * productPrice} деревянных`);
}
