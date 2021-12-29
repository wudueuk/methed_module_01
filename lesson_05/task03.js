'use strict';

/**
 * Третья задача:




Напишите функцию, которая принимает строку и возвращает обратную строку


Пример: "Привет мир" => "рим тевирП"
 */

const getReplaceStr = str => {
	let replaceStr = '';

	for (let i = str.length - 1; i >= 0; i--) {
		replaceStr += str[i]
	}

	return replaceStr;
};

const myStr = prompt('Введите текст');

console.log(getReplaceStr(myStr));