// Chapter 2
// let num = [1, 2, 3, 4, 5]


// //↠ Print the number
// for (let a = 1 ;  a<= num.length ; a++){
//     console.log(a)
// }

// //↠ Print square of each element
// num.forEach((element) => {
//         console.log(element * element)
//     }
// )

// Chapter 3

// let arr = [45, 46, 89, 82, 79]
// let newArr = arr.map((value, index, array) => {
//     return `Index: ${index} and Value: ${value} and Array: ${array}`;
//         })
// console.log(arr)
// console.log(newArr)


// let arr = [45, 46, 89, 82, 79]
// let newArr = arr.filter((value) => {
//     return value > 50
// })
// console.log(arr)
// console.log(newArr)
// // Output: [45, 46, 89, 82, 79]
// // Output: [89, 82, 79]


let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.filter((value, index, array) => {
    let sum = array.reduce((acc, curr) => acc + curr)
    let avg = sum / array.length
    return value > avg
})
console.log(arr)
console.log(newArr)

