let myTodo = ['JS class', 'SOA comparator', 'Smoke']

//console.log(myTodo.indexOf('Smoke'))

const myTodoTwo = [ {
    title : 'Buy bread',
    isDone : true
}, {
    title : 'check JS class',
    isDone : false
}, {
    title : 'smoke',
    isDone : false
}]

// const index = myTodoTwo.findIndex(function(todo, index){
//     return todo.title === 'smoke'
// })

// console.log(index)

//Method 1
const findTodo = function(myTotdos, title){
    const index = myTotdos.findIndex(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTotdos[index]
}

let myPrint = findTodo(myTodoTwo, 'smoke')
console.log(myPrint)