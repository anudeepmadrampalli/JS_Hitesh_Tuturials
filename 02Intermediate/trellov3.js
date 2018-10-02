let myTodo = {
    day : 'Monday',
    mettings : 3,
    meetdone : 0,

    addMeeting : function(num){
        this.mettings = this.mettings + num
    },

    summary : function(){
        return this.mettings
    }

}

let myTodoTwo = {
    day : 'Tuesday',
    mettings : 2,
    meetdone : 0,

    addMeeting : function(){
        console.log(this)
    }
}

myTodo.addMeeting(1)
console.log(myTodo.summary())
myTodoTwo.addMeeting()