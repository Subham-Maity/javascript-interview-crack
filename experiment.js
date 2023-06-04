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

let arr = [45, 46, 89, 82, 79]
let newArr = arr.map((value, index, array) => {
    return `Index: ${index} and Value: ${value} and Array: ${array}`;
        })
console.log(arr)
console.log(newArr)
