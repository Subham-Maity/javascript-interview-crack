// Chapter 1
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

// Chapter 2

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


// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = arr.filter((value, index, array) => {
//     let sum = array.reduce((acc, curr) => acc + curr)
//     let avg = sum / array.length
//     return value > avg
// })
// console.log(arr)
// console.log(newArr)


// //Reduce
// let arr = [45, 46, 89, 82, 79]
//
// let reduces = (acc, value) => {
//     return acc + value
// }
// let sum = arr.reduce(reduces)
// console.log(arr)
// console.log(sum)


//Practice
// 1. Add number to array
// let a = 45;
// let arr = [1, 2, 3, 4, 5]
// // a = Number.parseInt(a) -> We will use this if we want to convert string to number
// arr.push(a)
// console.log(arr)

//2. Filter for divisible by 10 and print the array

// let arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]
//
// let divFilter = arr.filter((a)=>{
//     return a % 10 === 0
// })
//
// console.log(divFilter)

// let arr = [1, 2, 3, 4, 5]
//
// let multiply = arr.reduce((x, y) => {
//     return x * y
// })
//
// console.log(multiply)

// Chapter 3

//Method 1
const calculate = (a, b, needFunction) => {
    return needFunction(a, b)
}

const addition = calculate(2, 3, (a, b) => {
    return a + b
})


console.log(addition)

const subtraction = calculate(2, 3, (a, b) => {
        return a - b
    }
)

console.log(subtraction)

//Method 2

const multiply = (a, b) => {
    return a * b
}

const multiplyResult = calculate(6, 3, multiply)
console.log(multiplyResult)

//Method 3

const divide = (a, b) => {
    return a / b;
}

const divisionResult = calculate(6, 3, divide);
console.log(divisionResult);
