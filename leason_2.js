/* Для выполнения задания создаем новую ветку в вашем репозитории с именованием - homeWork_02, после выполнения д/з - прикрепляем ссылку к сдаче задания.

Задание 1 – Создать объект counter всеми возможными способами;

const counter = {
    value: 0,
    name: "Vitali",
    sayHello: function() { console.log(`Hello, ${this.name}!`)}
}

class Counter  {
    constructor(value) {
        this.value = value
    }
}
const counter = new Counter(5)

const counter = Object.create({}, {
    value: {
        value: 7
    }
})

const counter = Object.assign({}, {
    value: 9
})

Задание 2 – Скопировать объект counter всеми
возможными способами;

const counterCopy = Object.assign({}, counter)
const counterCopy = {...counter}
const counterCopy = JSON.parse(JSON.stringify(counter)) // не работает с функциями -- функции не копируются
const _ = require('lodash')
const counterCopy = _.cloneDeep(counter)

Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

Задание 4 - прочитать и описать работу глобальной функции structuredClone()

Бонус
Задание 1 –
Написать функцию глубокого сравнения двух объектов:


const obj1 = { here: { is:
"on", other: "3" }, object: "Y" };

const obj2 = { here: { is:
"on", other: "2" }, object: "Y" };

const deepEqual =
(obj1, obj2) => {};


Бонус 
Задание 2 –
Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return …
} */

const counter = { 
    value: 0,
    name: "Vitali",
    sayHello: function() { console.log(`Hello, ${this.name}!`)}
}
const counterCopy = structuredClone(counter)
console.log(counter, counterCopy)
counter.sayHello()
counterCopy.sayHello()