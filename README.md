## TOC
- [Chapter 1: Basic of JavaScript](#chapter-1-basic-of-javascript)

- [Chapter 2 (Loops, Array.form , Map , Filter , Reduce )](#chapter-2-loops-arrayform--map--filter--reduce-)

________
## Chapter 1: Basic of JavaScript

**Basic Chapters (HandWrittenNotes):** [**Here**](./HandWrittenNotes/README.md)

[**Setup, Const, Let , Var , Primitives and Object, Operators and Expressions, Conditional Expression, Operators and Conditional, For Loops, While Loops , Function , String , Array**]

___

## Chapter 2 (Loops, Array.form , Map , Filter , Reduce )

### Short Article

- [**Hashnode**](https://codexam.hashnode.dev/how-to-use-loops-arrayfrom-map-filter-and-reduce-in-javascript)
- [**Dev.to**](https://dev.to/codexam/how-to-use-loops-arrayfrom-map-filter-and-reduce-in-javascript-1f8l)

### TOC
- [Normal for loop](#-normal-for-loop)
- [forEach loop](#-foreach-loop)
- [for...of loop](#-forof-loop)
- [for...in loop](#-forin-loop)
- [Array.from() method](#-arrayfrom)
- [map() method](#-map)
- [filter() method](#-filter)
- [reduce() method](#-reduce)


- For Loops With Arrays

`let num = [1, 2, 3, 4, 5]`

#### 🔗 Normal for loop

↠ **Normal for loop** - Print the number
```js
// Use let i instead of let a for clarity and consistency
// Use i < num.length instead of i <= num.length to avoid out-of-bounds error
for (let i = 0; i < num.length; i++){
     console.log(num[i]) // Use num[i] instead of i to print the number
}
// Output: 1 2 3 4 5
```
#### 🔗 forEach loop

↠ **forEach loop** - Print square of each element
```js
num.forEach((element) => {
        console.log(element * element)
    }
 )
// Output: 1 4 9 16 25
```
> Here element is a parameter of the function, and it is a callback function

#### 🔗 for...of loop

↠ **for...of loop** - Print the number
```js
for (let element of num){
    console.log(element) // Use element instead of a for consistency
}
// Output: 1 2 3 4 5
```
> Better than normal for loop

#### 🔗 for...in loop

↠ **for...in loop** - Print the index of the number
```js
for (let index in num){
    console.log(index) // Use index instead of a for clarity
}
// Output: 0 1 2 3 4
```
> It will print the index of the number or key of the object

#### 🔗 Array.from

↠ **Array.from() method** - It is used to convert an object into an array

- Open a webpage then open inspect element and go to console and write the following code
- Go to Element tab and take any class name for example: `sentence-words ng-tns-c2546395954-1 ng-star-inserted ng-animating`
- Now, if you do this in your console tab you will get a collection of elements
```js
let a = document.getElementsByClassName("sentence-words ng-tns-c2546395954-1 ng-star-inserted ng-animating")
```
Now if you do `typeof a` you will get `object` as output
- Now if you do `a.forEach()` you will get an error `a.forEach is not a function` so we have to convert it into an array
- Now if you do `Array.from(a)` you will get an array of all the elements

Another example:
> String to Array
```js
let a = "Subham"
let b = Array.from(a)
console.log(b)
// Output: ["S", "u", "b", "h", "a", "m"]
```

#### 🔗 map


↠  **map() method** - It is used to create a new array from an existing array and apply a function to it
```js
let arr = [45, 46, 89, 82, 79]
let newArr = arr.map((value) => {
    return value + 5
})
console.log(arr)
console.log(newArr)
// Output: [45, 46, 89, 82, 79]
// Output: [50, 51, 94, 87, 84]
```
> - Call the `map` method on `arr` and pass it a function as an argument. This function takes a `value` as an input and returns `value + 5`.
> - The `map` method iterates over each element in the `arr` array and applies the provided function to it.
> - For each element in `arr`, the function takes the element as an input (`value`), adds 5 to it, and returns the result.
> - The returned values are used to create a new array `newArr`, which has the values `[50, 51, 94, 87, 84]`.
> - The original `arr` array remains unchanged.



**map() method with index and value**
> similarly forEach() method also works like this
```js
let arr = [45, 46, 89, 82, 79]
let newArr = arr.map((value, index, array) => {
    return `Index: ${index} and Value: ${value} and Array: ${array}`;
})
console.log(arr)
console.log(newArr)

// Output: [45, 46, 89, 82, 79]
// 'Index: 0 and Value: 45 and Array: 45,46,89,82,79',
// 'Index: 1 and Value: 46 and Array: 45,46,89,82,79',
// 'Index: 2 and Value: 89 and Array: 45,46,89,82,79',
// 'Index: 3 and Value: 82 and Array: 45,46,89,82,79',
// 'Index: 4 and Value: 79 and Array: 45,46,89,82,79'
```

another example:
```js
let arr = [45, 46, 89, 82, 79]
let newArr = arr.map((value, index, array) => {
    return `The sum of ${value} and ${index} is ${value + index} and the array is ${array}` 
})

console.log(arr)
console.log(newArr)

// 'The sum of 45 and 0 is 45 and the array is 45,46,89,82,79',
// 'The sum of 46 and 1 is 47 and the array is 45,46,89,82,79',
// 'The sum of 89 and 2 is 91 and the array is 45,46,89,82,79',
// 'The sum of 82 and 3 is 85 and the array is 45,46,89,82,79',
// 'The sum of 79 and 4 is 83 and the array is 45,46,89,82,79'
```
#### 🔗 filter

↠  filter() method - It is used to filter out the elements from an array based on a condition and create a new array 

```js
let arr = [45, 46, 89, 82, 79]
let newArr = arr.filter((value) => {
    return value > 50
})
console.log(arr)
console.log(newArr)
// Output: [45, 46, 89, 82, 79]
// Output: [89, 82, 79]
```
> - Call the `filter` method on `arr` and pass it a function as an argument. This function takes a `value` as an input and returns `value > 50`.
> - The `filter` method iterates over each element in the `arr` array and applies the provided function to it.
> - For each element in `arr`, the function takes the element as an input (`value`), checks if it is greater than 50, and returns the result.
> - The returned values are used to create a new array `newArr`, which has the values `[89, 82, 79]`.
> - The original `arr` array remains unchanged.



**filter() method with index and value**
> In this example uses the `filter` method and all three of its arguments (`value`, `index`, and `array`) to create a new array that only includes elements from the original `arr` array that are greater than its average.

```js
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.filter((value, index, array) => {
    let sum = array.reduce((acc, curr) => acc + curr)
    let avg = sum / array.length
    return value > avg
})
console.log(arr)
console.log(newArr)

    // [
    // 2, 3, 4,  5, 6,
    //     7, 8, 9, 10
    // ]
    // [ 7, 8, 9, 10 ]

```
- `newArr` is a new array created using the `filter` method on `arr`.
- The `filter` method takes a function as an argument and applies it to each element in `arr`.
- The function calculates the average of all elements in `arr` and checks if the current element is greater than the average.
- If the current element is greater than the average, it is included in `newArr`.
- The original `arr` array remains unchanged.


Sure! Here's an explanation of the `reduce` method with an example:

#### 🔗 reduce

↠  reduce() method - It is used to apply a function to each element in an array and reduce the array to a single value and returns a single value

```js
let arr = [45, 46, 89, 82, 79]
let sum = arr.reduce((acc, value) => {
    return acc + value
}, 0)
console.log(arr)
console.log(sum)
// Output: [45, 46, 89, 82, 79]
// Output: 341
```

> - Call the `reduce` method on `arr` and pass it a function as an argument. This function takes two arguments: `acc` and `value`. The `acc` argument represents the accumulated value returned in the last invocation of the function. The `value` argument represents the current element being processed in the array.
> - The `reduce` method also takes an optional second argument that represents the initial value of the accumulator. In this case, we pass `0` as the initial value of the accumulator.
> - The `reduce` method iterates over each element in the `arr` array and applies the provided function to it.
> - For each element in `arr`, the function takes the accumulated value (`acc`) and the current element (`value`) as inputs, adds them together, and returns the result.
> - The returned values are accumulated and used to calculate the final result of the `reduce` method.
> - The final result of the `reduce` method is assigned to the variable `sum`, which has the value `341`.
> - The original `arr` array remains unchanged.

You can write separate function also and then pass it to reduce method

```js
let arr = [45, 46, 89, 82, 79]

let reduces = (acc, value) => {
    return acc + value
}
let sum = arr.reduce(reduces)
console.log(arr)
console.log(sum)

//Output: [45, 46, 89, 82, 79]
```
