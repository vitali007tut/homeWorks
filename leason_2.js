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

FD
function makeCounter() {
    console.log('counter is ready')
    return 'counter'
}

FE
const makeCounter = function() {
    console.log('counter is ready')
    return 'counter'
}

NFE
const makeCounter = function innerFunc(who) {
    if (who) {
        console.log(`Counter ${who}`)
    } else {
        console.log('counter is ready without who')
    }
}

Arrow function
const makeCounter = () => console.log('counter is ready')

Задание 4 - прочитать и описать работу глобальной функции structuredClone()

    structuredClone() может:
        - Клонировать бесконечно вложенные объекты и массивы.
        - Клонировать циклические ссылки.
        - Клонировать широкий спектр типов JavaScript, таких как: Date, Set, Map, Error, RegExp, ArrayBuffer, Blob, File, ImageData и многие другие.
        - Передавать любые передаваемые объекты.

    structuredClone не может клонировать:
        - Функции
        - Узлы DOM
        - Дескрипторы свойств, сеттеры и геттеры
        - Прототипы объектов (экземпляры классов)

     structuredClone(value) -- value - Объект, который нужно клонировать
     structuredClone(value, options) -- options - Объект со свойствам transfer - массив объектов которые будут перемещены

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

//! Задание 1 – Написать функцию глубокого сравнения двух объектов:
const obj1 = { 
    here: { is: "on", 
            other: "3" }, 
    object: "Y",
    call: function() {alert('im func')} };
    
    const obj2 = { 
        here: { is: "on", 
                other: "3" }, 
        object: "Y",
        call: function() {alert('im func')} };
    
    const deepEqual = (obj1, obj2) => {

        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

        for (const key in obj1) {

            if (typeof obj1[key] === 'object') {
                if (!deepEqual(obj1[key], obj2[key])) {
                    return false
                }
            } else if (typeof obj1[key] === 'function') {
                if (obj1[key].toString() !== obj2[key].toString()) {
                    return false
                }
            } else if (obj1[key] !== obj2[key]) {
                console.log('false', obj1[key], obj2[key]);
                return false
            }
        }
        return true
    }

    console.log(deepEqual(obj1, obj2));

    //! Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:
    const  reverseStr = (str) => str.split('').reverse().join('')