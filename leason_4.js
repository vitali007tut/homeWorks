//! 1) Какие бывают алгоритмы сортировок ?
//
//*  - Пузырьковая сортировка O(n2)
//      перебирает весь массив элементов, сравнивая два соседних элемента друг с другом и меняя их местами в соответствии с условиями
//*  - Сортировка выбором O(n2)
//      при каждой итерации проходит по неотсортированной части массива, находит минимальный элемент и переносит его в начало массива
//*  - Быстрая сортировка O(n * log n) в худшем случае: O(n2)
//      определяет так называемый 'стержень' и разбивает массив на подмассивы относительно «стержня», которые затем сортируются
//
//! 2) Прочитать про "Операторы и выражения, циклы в JS"
//*     Операторы рассполагаются между операндами (operand1 operator operand2) или унарных операциях до/после операнда (operator operand).
//      Бывают: 
//          - Операторы присваивания (знак "=")
//          - Операторы сравнения (>, <, ===, !==, ...)
//          - Арифметические операторы (+, -, ++, --, *, /, **, %)
//          - Битовые (поразрядные) операторы (&, |, ^, ~, <<, >>,  >>>)
//          - Логические операторы (&&, ||, !)
//          - Условный (тернарный) оператор (condition ? val1 : val2)
//          - Оператор запятая
//          - Унарные операторы (delete)
//          - Оператор typeof
//          - Оператор void
//          - Операторы отношения (in, instanceof)
//
//*     Выражения -- любой корректный блок кода, который возвращает значение
//      Типы выражений:
//      - присваивают переменной значение (x = 7)
//      - вычисляют значение без его присваивания (3 + 4)
//
//      Выражения делятся на категории:
//      - Арифметические -- вычисляются в число
//      - Строковые -- вычисляются в текстовую строку
//      - Логические -- вычисляются в true или false
//      - Основные выражения -- Оператор this
//      - Левосторонние выражения -- Значениям слева назначаются значения справа (new, super)
//
//*     Циклы - способ сделать какое-то действие несколько раз
//      - Базовые циклы: while, do..while и for(..;..;..)
//      - for…in для перебора свойств объекта
//      - for…of для перебора массивов и перебираемых объектов
//      
//      Директивы:
//      - Прерывание цикла: «break»
//      - Переход к следующей итерации: continue
//      Поддерживают метки, которые ставятся перед циклом.
//      Метки – единственный способ для break/continue выйти за пределы текущего цикла, 
//          повлиять на выполнение внешнего.

    // 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.
function Person(name, age) {
    this.name = name
    this.age = age
    this.sayHi = function () {
        console.log(`person ${this.name} age ${this.age} said "Hi"`);
    }
}

function Person2(name, age) {
    Person.call(this, name, age)
}
Person2.prototype = Object.create(Person.prototype)
// Person2.prototype = new Person() // аналог Object.create()
Person2.prototype.constructor = Person2
Person2.prototype.sayBye = function () {
    console.log(`person ${this.name} age ${this.age} said "Bye"`)
}

const person = new Person('AAA', 25)
const person2 = new Person2('Second', 22)

person.sayHi()
// обращение к унаследованному методу sayHi
person2.sayHi()
person2.sayBye()

// Add метод logInfo в прототип Person -- доступен всем объектам.
Person.prototype.logInfo = function () {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
}
person.logInfo()
person2.logInfo()

class PersonClass {
    constructor(name, age) {
    this.name = name
    this.age = age
}
    sayHi = function () {
        console.log(`person ${this.name} age ${this.age} said "Hi"`);
    }
}
// наследуем Person2Class от PersonClass
class Person2Class extends PersonClass{}
// создаём объекты
const personClass = new PersonClass('ClassPerson', 35)
const person2Class = new Person2Class('ClassPersonSecond', 33)
personClass.sayHi()
// обращение к унаследованному методу
person2Class.sayHi()
// Add метод logInfo в прототип класса Person -- доступен всем объектам.
PersonClass.prototype.logInfo = function () {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
}
personClass.logInfo()
person2Class.logInfo()

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree extends PersonClass{
    constructor(name, age) {
        super(name, age); // вызывает сеттер
    }
    get name() {
        // get вызывается всегда при обращении к this.name
        return this._name // используем _
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое.");
            return;
        }
        this._name = value; // используем _
    }
}
const personThree = new PersonThree('Vita', 30)
personThree.logInfo()
personThree.sayHi()
personThree.name = "New"
console.log(personThree.name)

// БОНУС: 
//! 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

 const firstSum = (arr, total) => {
     const result = []
     for (let i = 0; i < arr.length - 1; i++) {
         const start = arr[i]
         for (let j = i + 1; j < arr.length; j++) {
             if (total === start + arr[j]) {
                 result.push(start)
                 result.push(arr[j])
                 return result
             }
         }
     }
     return result
 }

console.log(firstSum(arr,total))

//! 2) Какая сложность у вашего алгоритма ?
//* O(n2) — квадратичная сложность -- цикл в цикле