'use strict';

/**
 * Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие



Пример:  "привет Мир" => "Привет мир"
 */

const getModifyString = str => {
	let modifyStr = str.toLowerCase();

	const firstLetter = modifyStr[0].toUpperCase();
	const otherStr = modifyStr.substring(1, modifyStr.length);

	modifyStr = firstLetter + otherStr;

	return modifyStr;
};

const myStr = prompt('Введите текст');

console.log(getModifyString(myStr));