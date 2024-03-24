// const date = new Date()
// console.log(date.getTime());
// console.log(Date.now());
// console.log(new Date('1950').getTime());

//Что выведет console.log и почему
// function makeWorker() {
//     let name = "Peter";
//     return function () {
//       console.log(name);
//     };
//   }
//   var name = "John";
//   let work = makeWorker();
//   work() // Peter

//? Что выведут console.log
// const obj2 = {
//     x: "yandex",
//     a: function f() {
//       console.log(this.x);
//     },
//     b: () => {
//       console.log("arrow", this.x);
//     },
//   };
//   obj2.a(); // yandex
//   obj2.b(); // undefined

// function makeCounter() {
//     let counter = 0;
//     return function () {
//       return ++counter;
//     };
//   }
//   let someCounter = makeCounter();
//   for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(someCounter())); // 2..11
//   }
//   console.log(someCounter()); // 1

// class Foo {
//     constructor() {
//       this.id = "foo";
//       this.print();
//     }
//     print() {
//       console.log("foo" + this.id);
//     }
//   }
//   class Bar extends Foo {
//     constructor() {
//         super();
//         this.id = "bar";
//         this.print();
//         super.print();
//     }
//     print() {
//       console.log("bar" + this.id);
//     }
//   }
//   new Bar();
// bar foo
// bar bar
// foo bar

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
// setTimeout(() => console.log('1'), 1000);
// myPromise(1000).then(res => console.log('2'));
// setTimeout(() => console.log('3'), 100);
// myPromise(2000).then(res => console.log('4')); 
// setTimeout(() => console.log('5'), 2000);
// myPromise(1000).then(res => console.log('6'));
// setTimeout(() => console.log('7'), 1000);
// myPromise(5000).then(res => console.log('8'));
// сновятся по очереди в очередь Macrotasks
// 3 1 2 6 7 4 5 8

// console.log("Start");
// const observer = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Observer: Событие произошло");
//     resolve("Success");
//   }, 2000);
// });
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 1: Событие произошло");
//     resolve("Success");
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 2: Событие произошло");
//     resolve("Success");
//   }, 1500);
// });
// observer.then(() => {
//   console.log("Observer: Обработка события");
// });

// Promise.all([promise1, promise2]).then(() => {
//   console.log("Promise: Все события обработаны");
// });
// console.log("End");
// setTimeout-ы стали в очередь макротасок с разной задержкой
// Start End
// Promise 1: Событие произошло
// Promise 2: Событие произошло
// Promise: Все события обработаны
// Observer: Событие произошло
// Observer: Обработка события

// queueMicrotask(() => {
//     console.log("1");
//   });
//   Promise.reject("2")
//     .catch((res1) => {
//       console.log("res1", res1);
//       return "4";
//     })
//     .then((res2) => {
//       console.log("res2", res2);
//     });
//   queueMicrotask(() => {
//     console.log("3");
//   });
// 1
// res1 2
// 3
// res2 4

// const myPromise = Promise.resolve(Promise.resolve("Promise!"));
// function funcOne() {
//     myPromise
//         .then((res) => res)
//         .then((res) => console.log(res, "Результат funcOne")); //Mi1
//     setTimeout(() => console.log("Timeout! 1", 0)); //Ma1
//     console.log("Last line! 1"); //S1
// }
// async function funcTwo() {
//     const res = await myPromise;
//     console.log(res, "Результат funcTwo"); //S2
//     setTimeout(() => console.log("Timeout! 2", 0)); //Ma2
//     console.log("Last line! 2"); //S3
// }
// funcOne();
// funcTwo();
// Last line! 1
// Promise! Результат funcTwo
// Last line! 2
// Promise! Результат funcOne
// Timeout! 1 0
// Timeout! 2 0


const foo = async () => {
    console.log("1");
    return 100;
};

const bar = async () => {
    console.log("2");
    const r = await foo();
    console.log(r);
    foo().then((res) => console.log(res));
    await console.log("3");
    console.log(await "4");
};
