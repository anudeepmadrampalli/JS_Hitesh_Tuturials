document.title = 'My Learn code online'

const myEle = document.querySelectorAll('p')

myEle.forEach(function(p){
    p.textContent = 'Replaced data'
})

const myNewEle = document.createElement('p')
myNewEle.textContent = 'This is created using the JS'

document.querySelector('button').addEventListener('click',(event))
console.log(event)

document.querySelector('body').appendChild(myNewEle)
