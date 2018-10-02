// const days = ['mon', 'tues', 'wed', 'thurs','fri','sat','sun']

// //console.log(days[0])

// //This is one way to use or
// // let sayHello = function(name){
// //     console.log('Hello there !')
// //     console.log(`welcome: ${name}`)
// // }

// // days.forEach(sayHello)

// days.forEach(function(name){
//         console.log(`Hello there, Welcome :: ${name}`)
//  })

//  days.forEach(function(day, index){
//     console.log(`starts from ${index+1} :: ${day}`)
//  })

//Trello or our normal todo list

const myTodo = []

myTodo.push('clean bike')
myTodo.push('Record video for youtube')
myTodo.push('buy a lighter')

myTodo.forEach(function(todo, index){
    console.log(`Task ${index+1}. ${todo}`)
})