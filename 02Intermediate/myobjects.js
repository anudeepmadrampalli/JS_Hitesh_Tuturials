let myYouTubeVideosOne = {
    title : 'loops in Javascript',
    videoLength : 15,
    videoDescription : 'This is video description'
}

let myYouTubeVideosTwo = {
    title : 'loops in Javascript',
    videoLength : 10,
    videoDescription : 'This is video description'
}

// let changeVideoLength = function(myObject){
//     console.log(`time of video is : ${myObject.videoLength + 2}`)
// }

let changeVideoLength = function(myObject){
    return{
        formatOne : `time of video is : ${myObject.videoLength + 1}`,
        formatTwo : `time of video is : ${myObject.videoLength + 2}`
    }
}

let addOne = changeVideoLength(myYouTubeVideosTwo)
console.log(addOne.formatOne)
