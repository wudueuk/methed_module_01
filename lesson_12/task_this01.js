'use strict';

/**
 * Создать объект rectangle, который описывает ширину и высоту
 * (свойства width и height) прямоугольника
 * Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера
 * для получения периметра и площади прямоугольника
 * Сеттеры могут принимать только числа
 * Геттеры возвращают строку число + "см"
 * пример "40см"
 * По умолчанию значения высоты и ширины заданы 5 см
 */

const rectangle = {
  width: 5,
  height: 5,
  get mathSquare() {
    return `Площадь прямоугольника равна ` +
      `${this.width * this.height} см в квадрате`;
  },
  get mathPer() {
    return `Периметр прямоугольника равен ` +
      `${(this.width + this.height) * 2} см`;
  },
  set setWidth(value) {
    this.width = value;
  },
  set setHeight(value) {
    this.height = value;
  },
};

rectangle.setWidth = 10;
rectangle.setHeight = 10;

console.log(rectangle.mathSquare);
console.log(rectangle.mathPer);
