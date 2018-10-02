let name = function(inp){
    console.log('Anudeep')
    console.log({inp})
    console.log(inp)
}

console.log(name);
name('check this')

let myMultiplier = function(num1, num2){
    return num1*num2
}

//The assignment of paramters in function signature is called the default parameters
let guestUser = function(name = 'uname', courseCount = '0'){
    return "Hello " + name + " your course count is :" + courseCount
}

console.log(guestUser('Anudeep', '4'))
console.log(guestUser())