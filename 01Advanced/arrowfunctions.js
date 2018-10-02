const myfunction = (name) => `Hey there ${name}`

console.log(myfunction('Anudeep'))

const todos = [{
    title : 'Buy Bread',
    isdone : true
},{
    title : 'Complete Hitesg JS class',
    isdone : false
},{
    title : 'go to office',
    isdone : true
}]

const myTodos = todos.filter((todo) => todo.isdone ? todo.title : todo.isdone )

console.log(myTodos);
