const math = (a , b , addFunction) => {
    return addFunction(a,b)
}

//multiply function
const multiplys = (num1 , num2) => {
    return num1 * num2
}

// calling
const multiply = math(2 , 3 , multiplys)

console.log(multiply)


