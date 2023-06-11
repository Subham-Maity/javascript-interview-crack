## TOC
- [Chapter 1: Basic of JavaScript](#chapter-1-basic-of-javascript)

- [Chapter 2 (Loops, Array.form , Map , Filter , Reduce )](#chapter-2-loops-arrayform--map--filter--reduce--parseint-push-and-prompt)

- [Chapter 3 (Callbacks , Promises and Async/Await)](#chapter-3-callbacks--promises-and-asyncawait)
________
## Chapter 1: Basic of JavaScript

**Basic Chapters (HandWrittenNotes):** [**Here**](./HandWrittenNotes/README.md)

[**Setup, Const, Let , Var , Primitives and Object, Operators and Expressions, Conditional Expression, Operators and Conditional, For Loops, While Loops , Function , String , Array**]

___

## Chapter 2 (Loops, Array.form , Map , Filter , Reduce , parseInt, push and prompt)

### Short Article

- [**Hashnode**](https://codexam.hashnode.dev/how-to-use-loops-arrayfrom-map-filter-and-reduce-in-javascript)
- [**Dev.to**](https://dev.to/codexam/how-to-use-loops-arrayfrom-map-filter-and-reduce-in-javascript-1f8l)

### TOC
- [Syntax of All](#-syntax-of-all)
- [Normal for loop](#-normal-for-loop)
- [forEach loop](#-foreach-loop)
- [for...of loop](#-forof-loop)
- [for...in loop](#-forin-loop)
- [Array.from() method](#-arrayfrom)
- [map() method](#-map)
- [filter() method](#-filter)
- [reduce() method](#-reduce)
- [parseInt, push and prompt](#-parseint-push-and-prompt)

#### 🔗 Syntax of All

- Normal for loop:
```javascript
for (let i = 0; i < array.length; i++) {
    // code
}
```

- forEach loop:
```javascript
array.forEach(function(element) {
    // code
});
```

- for...of loop:
```javascript
for (const element of array) {
    // code
}
```

- for...in loop:
```javascript
for (const key in object) {
    // code
}
```

- Array.from() method:
```javascript
Array.from(object, mapFunction, thisValue)
```

- map() method:
```javascript
array.map(function(currentValue, index, arr), thisValue)
```

- filter() method:
```javascript
array.filter(function(currentValue, index, arr), thisValue)
```

- reduce() method:
```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

- parseInt:
```javascript
parseInt(string, radix)
```

- push:
```javascript
array.push(item1, item2, ..., itemX)
```

- prompt:
```javascript
prompt("Text", "DefaultText")
```


### 📝 Explanation
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

another example:
```js
//Square of each element
let arr = [45, 46, 89, 82, 79]
let newArr = arr.map((value, index, array) => {
    return value * value
})
console.log(arr)
console.log(newArr)
// Output: [45, 46, 89, 82, 79]
// Output: [2025, 2116, 7921, 6724, 6241]
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

Another Example
```js
// Filter for divisible by 10 and print the array

let arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

const filters = (a) => {

    return a % 10 === 0;

}

let divFilter = arr.filter(filters)

console.log(divFilter)


// _______________________________________________________
// or, 
// _______________________________________________________

let arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

let divFilter = arr.filter((a)=>{
    return a % 10 === 0
})

console.log(divFilter)

// Output: [10, 20, 30, 40, 50]
```

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

Another Example
```js
//Multiply all the elements in the array

let arr = [1, 2, 3, 4, 5]

let multiply = arr.reduce((x, y) => {
    return x * y
})

console.log(multiply)

// Output: 120
```



#### 🔗 parseInt, push and prompt

↠  `parseInt()` method - It is used to parse a string argument and return an integer of the specified radix (the base in mathematical numeral systems).

↠  `push()` method - It is used to add one or more elements to the end of an array and return the new length of the array.

↠  `prompt()` method - It is used to display a dialog box that prompts the user for input and returns the entered value or null if the user clicks cancel.

```js
// Example of using parseInt, push and prompt in a single example

// Declare an empty array to store numbers
let numbers = [];

// Prompt the user for a number and parse it as an integer
let number = parseInt(prompt("Enter a number"));

// Push the number to the end of the array
numbers.push(number);

// Display the number and the array
console.log("Your input number was: " + number);
console.log("The array is: " + numbers);

// Repeat until the user enters 0
while (number != 0) {
  // Prompt the user for another number and parse it as an integer
  number = parseInt(prompt("Enter another number"));

  // Push the number to the end of the array
  numbers.push(number);

  // Display the number and the array
  console.log("Your input number was: " + number);
  console.log("The array is: " + numbers);
}
```

> - Declare an empty array called `numbers` using `let` keyword.
> - Call the `prompt()` method with a string argument `"Enter a number"` and assign the returned value to a variable called `number`.
> - Call the `parseInt()` method with two arguments: `number` and `10`. The first argument is the string to be parsed and the second argument is the radix (base) of the number system. In this case, we use `10` for decimal numbers. The `parseInt()` method returns an integer or `NaN` if it cannot parse the string. Assign the returned value to `number`.
> - Call the `push()` method on `numbers` and pass it `number` as an argument. This method adds `number` to the end of the `numbers` array and returns its new length. We don't need to store this value, so we ignore it.
> - Use `console.log()` to display `"Your input number was: "` followed by `number`, and `"The array is: "` followed by `numbers`.
> - Use a `while` loop to repeat this process until the user enters `0`. The loop condition is `number != 0`, which means that as long as `number` is not equal to zero, the loop will continue.
> - Inside the loop, we repeat steps 2 to 5 with a different string argument for `prompt()`: `"Enter another number"`.

____________________________

## Chapter 3 (Callbacks , Promises and Async/Await)

### TOC

- [Callbacks](#-callbacks)

#### 🔗 Callbacks
A callback is a function passed as an argument to another function.

Syntax
```js
function myCallback(result) {
    console.log(result);
}

function myFunction(callback) {
    let result = 1 + 1;
    callback(result);
}

myFunction(myCallback);

```

**Example**

```js
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
```

##### ⌚ Array Callback Methods

| Method        | Description                                                                                  |
|---------------|----------------------------------------------------------------------------------------------|
| `find()`      | Returns the first value of an array element that passes a test                               |
| `findIndex()` | Returns the first index of an array element that passes a test                               |
| `forEach()`   | Calls a function for each element                                                            |
| `map()`       | Creates a new array with the results of calling a function for every array element           |
| `filter()`    | Returns a new array with all elements that pass the test defined by the given function       |
| `every()`     | Check whether all the elements of the array satisfy the given condition or not               |
| `some()`      | Check whether at least one of the elements of the array satisfies the given condition or not |



##### ⌚ `find()` method
```js
//First Negative Number

const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const firstNeg = (num) => {
    return num < 0;
}
const result = a.find(firstNeg)

console.log(result)

//Output: -2
```

##### ⌚ `findIndex()` method
```js
const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const firstNeg = (num) => {
    return num < 0;
}
const result = a.findIndex(firstNeg)

console.log(result)

//Output: 3
```
##### ⌚ `forEach()` method
```js

const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const result = a.forEach((num) => {
    console.log(num)
})

//Output: 4

//Output: 1

//Output: 6

//Output: -2
//....

// You can also print the index of the array

const result = a.forEach((num, index) => {
    console.log(num, index)
})

//Output: 4 0

//Output: 1 1

//Output: 6 2

//Output: -2 3

//....
```

##### ⌚ `map()` method
```js

const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const result = a.map((num) => {
    return num * 2
})

console.log(result)

//Output: [ 8, 2, 12, -4, -10, -6, 4, 16, 12, 14, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36 ]
```

##### ⌚ `filter()` method
```js

const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const result = a.filter((num) => {
    return num > 0
})

console.log(result)

//Output: [ 4, 1, 6, 2, 8, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
```

##### ⌚ `every()` method
```js

const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const result = a.every((num) => {
    return num > 0
})

console.log(result)

//Output: false
```

##### ⌚ `some()` method
```js

const a = [4, 1, 6, -2, -5, -3, 2.,8, 6,7 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const result = a.some((num) => {
    return num > 0
})

console.log(result)

//Output: true
```



#### 🔗 Callbacks Hell

A callback is a function passed as an argument to another function, and `callback hell` is a situation where you have a lot of callbacks inside callback.

##### Syncronous 

```js
console.log('1')
console.log('2')
console.log('3')
```
> - Here first `1` will be printed then `2` and then `3` will be printed. This is called `Syncronous` execution means one after another execution.

##### Asyncronous

###### setTimeout Function

- The setTimeout() method calls a function after a number of milliseconds.
- The setTimeout() method executes a block of code after the specified time.
- The method executes the code only once.
- setTimeout() is an asynchronous function, meaning that the timer function
- will not pause the execution of other functions in the function's stack. The
- commonly used syntax of JavaScript setTimeout is: `setTimeout(function, milliseconds);`

Simple Example

Syntax: `setTimeout(function, milliseconds);`
```js
setTimeout(() => {
    console.log('Hello')
}
, 2000)

console.log('Subham')

//Output: Subham
//Output: Hello

// You can also use function instead of arrow function

setTimeout(function() {
    console.log('Hello')
}
, 2000)

console.log('Subham')

//Output: Subham
```

another example

```js
const mul = (a, b) => {
  console.log(a * b);
}

const mul2 = (c, d) => {
  console.log(c * d);
}

setTimeout(() => {
  mul2(4, 5);
}, 2000);

mul(2, 4);
```

> - Here first `mul(2, 4)` will be printed then after 2 seconds `mul2(4, 5)` will be printed. This is called `Asyncronous` execution means not one after another execution.
