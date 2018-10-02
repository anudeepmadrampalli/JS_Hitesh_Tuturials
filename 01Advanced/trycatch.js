const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
       return dollar * 68
    }else{
        throw Error('input invalid :(')
    }
}



try {
    console.log(convertToRs('adbjaskdasj'))    
} catch (error) {
    console.log(error);   
}

console.log('I will not run if the program crashes')