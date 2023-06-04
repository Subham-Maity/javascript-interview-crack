## Chapter 1: Basic of JavaScript

**Basic Chapters (HandWrittenNotes):** [**Here**](./HandWrittenNotes/README.md)

[**Setup, Const, Let , Var , Primitives and Object, Operators and Expressions, Conditional Expression, Operators and Conditional, For Loops, While Loops , Function , String , Array**]

## Chapter 2 (Loops, Array.form , Map , Filter , Reduce )
- For Loops With Arrays

`let num = [1, 2, 3, 4, 5]`

↠ Normal for loop - Print the number
```js
// Use let i instead of let a for clarity and consistency
// Use i < num.length instead of i <= num.length to avoid out-of-bounds error
for (let i = 0; i < num.length; i++){
     console.log(num[i]) // Use num[i] instead of i to print the number
}
// Output: 1 2 3 4 5
```
↠ forEach loop - Print square of each element
```js
num.forEach((element) => {
        console.log(element * element)
    }
 )
// Output: 1 4 9 16 25
```
> Here element is a parameter of the function, and it is a callback function

↠ for...of loop - Print the number
```js
for (let element of num){
    console.log(element) // Use element instead of a for consistency
}
// Output: 1 2 3 4 5
```
> Better than normal for loop

↠ for...in loop - Print the index of the number
```js
for (let index in num){
    console.log(index) // Use index instead of a for clarity
}
// Output: 0 1 2 3 4
```
> It will print the index of the number or key of the object

↠ Array.from() method - It is used to convert an object into an array
- Open a webpage then open inspect element and go to console and write the following code
- Go to Element tab and take any class name for example: `sentence-words ng-tns-c2546395954-1 ng-star-inserted ng-animating`
- Now, if you do this in your console tab you will get a collection of elements
```js
let a = document.getElementsByClassName("sentence-words ng-tns-c2546395954-1 ng-star-inserted ng-animating")
```
Now if you do `typeof a` you will get `object` as output
- Now if you do `a.forEach()` you will get an error `a.forEach is not a function` so we have to convert it into an array
- Now if you do `let b = Array.from(a)` you will get an array of all the elements in b

Another example:
> String to Array
```js
let a = "Subham"
let b = Array.from(a)
console.log(b)
// Output: ["S", "u", "b", "h", "a", "m"]
```


