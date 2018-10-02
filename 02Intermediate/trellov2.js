let myTodos  = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0
}

let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone + meet
    todo.meetings = todo.meetings - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let daySummary = function(todo){
    let meetingsLeft = todo.meetings - todo.meetDone
    return `meetings left for the day are ${meetingsLeft}`
}

addMeeting(myTodos, 2)


console.log(addMeeting(myTodos, 3))
console.log(myTodos)
console.log(daySummary(myTodos))

