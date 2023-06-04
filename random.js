let arr = [45, 46, 89, 82, 79]
let newArr = arr.map((value, index, array) => {
    return `The sum of ${value} and ${index} is ${value + index} and the array is ${array}`
})

console.log(arr)
console.log(newArr)
