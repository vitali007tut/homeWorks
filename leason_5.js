// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(json => console.log(json))

// console.log('111')
// setTimeout(() => console.log('222'), 0)
// Promise.resolve('333')
//     .then((val) => console.log(val))
// console.log('444')
// Promise.resolve('555')
//     .then((val) => console.log(val))
// 1 4 3 5 2

// Promise.reject('a')
//     .catch(p => p + 'b') // возвращается промис resolve
//     .catch(p => p +'c')
//     .then(p => p + 'd')
//     .then(p => p + 'f')
//     .catch(p => p + 'h')
//     .finally(p => p + 'e')// ничего из цепочки не принимает
//     .then(p => console.log(p))
// abdf

// console.log('1')
// setTimeout(() => console.log('2'), 1)
// let promise = new Promise((resolve) => {
//     console.log('3') // выполняется синхронно
//     resolve()
// })
// promise.then(() => console.log('4'))
// setTimeout(() => console.log('5'))
// console.log('6')
// 1 3 6  4  2 5

// setTimeout(() => console.log('a')) // macrotask
// Promise.resolve()// microtask
//     .then((first) => { // first === underfined
//         console.log('first:', first)
//         return 'b'
//     })
//     .then(
//         Promise.resolve().then((second) => {
//             console.log('second:', second) // выполняется тело промиса синхронно second === underfined
//             return 'c'
//         }) // проваливание промиса === then(null)
//     )
//     .then((third) => console.log('third:', third))
// console.log('d') // синхронно
// d first: underfined second: underfined third: b a

// let a = 5
// console.log(a) // синхронно
// setTimeout(() => { // macrotask
//     console.log(a)
//     a = 10
// }, 0)
// Promise.resolve().then(() => { // microtask
//     console.log(a)
//     a = 15
// })
// console.log(a) // синхронно
// 5 5 5 15

//************
// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):
//
// 1)
let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
    .then((res) => { // res = 'a' статус resolve
        return res + "b";
    })// возвращает 'ab'
    .then((res) => { // res = 'ab' статус resolve
        return res + "с";
    }) // возвращает 'abc'
    .finally((res) => { // finally ничего из цепочки не принимает => цепочка не модифицируется
        return res + "!!!!!!!";
    })
    .catch((res) => { // в catch не заходим, т.к. статус resolve
        return res + "d";
    })
    .then((res) => { // res = 'abc' статус resolve => выводим в консоль 'abc'
        console.log(res);
    });
// abc

// 2)
function doSmth() {
    return Promise.resolve("123");
}

doSmth()// ф-ия возвращает Промис статус resolve with value '123'
    .then(function (a) { // a = '123'
        console.log("1", a); // в консоль выводится '1' '123'
        return a;
    })// возвращается '123' Промис статус resolve
    .then(function (b) { // b = '123'
        console.log("2", b); // в консоль выводится '2' '123'
        return Promise.reject("321");
    }) // возвращается '321' Промис статус reject
    .catch(function (err) { // err = '321' заходим в catch, т.к. статус reject
        console.log("3", err); // в консоль выводится '3' '321'
    }) // возвращается undefined Промис статус resolve
    .then(function (c) { // c = undefined
        console.log("4", c); // в консоль выводится '4' undefined
        return c;
    }); // возвращается undefined Промис статус resolve
//'1' '123'
//'2' '123'
//'3' '321'
//'4' undefined

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
//     Входные данные: [10, 12, 15, 21]
// Используем setInterval
const timerFromArrayInterval = function (array) {
    const end = array.length - 1
    let current = 0

    let timerId = setInterval(function () {
        console.log(current)
        if (current === end) {
            clearInterval(timerId)
        }
        current++
    }, 3000)
}
timerFromArrayInterval([10, 12, 15, 21])

// Используем рекурсивный setTimeout без изначальной задержки
// const timerFromArrayTimeout = function (array) {
//     const end = array.length - 1
//     let current = 0
//     function go() {
//         console.log(current)
//         current++
//         if (current <= end) {
//             setTimeout(go, 3000)
//         }
//     }
//     go() // вызываем функцию сразу чтобы первый элемент появился без задержки 3000мс
// }
// timerFromArrayTimeout([10, 12, 15, 21])

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)
// (await верхнего уровня, «глобальный» await)
//  -- Это позволит модулям получать готовые к использованию ресурсы и блокировать модули, импортирующие их. Модули, которые импортируют ожидаемые ресурсы, смогут запускать выполнение кода только после получения ресурсов и их предварительной подготовки к использованию.
// Глобальный await работает только с ES модулями
// добавить тегу «script» атрибут «type» со значением «module»:
// <script type="module" src="./index.js"></script>
// https://habr.com/ru/articles/524068/

// БОНУС ЗАДАНИЕ
// /* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
//     .then(...)
//     .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl
