'use strict';

import { listIPv4 } from './ipv4.js';

const getLength = (arr) => {
	const newArr = new Set([...arr.values()]);
	return newArr.size;
}



console.log('Количество уникальных ip-адресов - ', getLength(listIPv4));

