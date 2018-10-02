
let results = function(marks){

    const totalMarks = 100;
    if(marks != undefined){
        var grade = ''
        if(marks > totalMarks){
            console.log('marks cannot be greater than total marks')
        }else if(marks >= 75){
            grade = 'A'
        }else if(marks >= 50 || marks <= 75){
            grade = 'B'
        }else{
            grade = 'c'
        }
        return grade
    }else{
        console.log('Please provide marks to caluculate your grade.')
    }

}



console.log(results(54))