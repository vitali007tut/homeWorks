//! 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько
//!     структур данных? Какие ?
//
//     Массив -- неизменная по длинне структура, и когда мы производим добаления/удаления элементов
//     создаётся массив новой длинны и в него копируется старый массив с/без новым элементом.
//     На основе массивов строятся следующие структуры данных:
//        - Матрица - массив массивов
//        - Stack (стек)
//        - Queue (очередь)
//        - Hash table (хеш-таблица) -- ассоциативный массив вместо индекса -- ключ
//        - Linked list (связный список)

//! 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.bind(obj)()
logger.call(obj)
logger.apply(obj)

// 3.1 Массивы:
//
// - Создайте массив чисел и найдите его сумму.
// - Создайте массив строк и объедините их в одну строку.
// - Найдите максимальный и минимальный элементы в массиве чисел.
//
// 3.2 Stack (стек):
// - Реализуйте стек с использованием массива.
//
// 3.3 Queue (очередь):
//
// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.
//
//!  Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

const person = {
    name: 'Vitali',
    age: 35,
    logInfo: function(tel, city) {
        console.log(`Name is ${this.name} Age is ${this.age}, tel:${tel}, city:${city}`)
    }
}
const hero = {
    name: "Hero",
    age: 25
}

person.logInfo.bind(hero)('123456', 'Gomel')
person.logInfo.bind(hero, '123456')('Gomel')
person.logInfo.bind(hero,'123456', 'Gomel')()
console.log('*************************');

Function.prototype.myBind = function (context, ...rest)  {

    const uniqID = Date.now().toString()
    context[uniqID] = this

    return function(...args) {
        const result = context[uniqID](...rest.concat(args))
        delete context[uniqID]

        return result
}
}

person.logInfo.myBind(hero)()
person.logInfo.myBind(hero)('123456', 'Gomel')
person.logInfo.myBind(hero, '123456')('Gomel')
person.logInfo.myBind(hero,'123456', 'Gomel')()