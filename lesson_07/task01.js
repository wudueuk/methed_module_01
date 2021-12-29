'use strict';

/**
 * Напишите функцию filter()
функция принимает в параметрах 2 массива
Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
Результат функции: массив из всех студентов, которые сдали экзамен.
 */

const filter = (arrayAll, arrayFailed) => {
	const successStudents = [];

	for (const student of arrayAll) {
		if (!arrayFailed.includes(student)) {
			successStudents.push(student);
		}
	}

	return successStudents;
};

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));