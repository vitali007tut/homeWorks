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
