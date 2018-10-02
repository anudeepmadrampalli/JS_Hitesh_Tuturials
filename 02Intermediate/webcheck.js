let userName = 'lco123'
let pwd = '1234'

let userChecker = function(myString){
    if(myString.includes(123)){
        return true
    }else{
        return false
    }
}

console.log(userChecker(userName))