// callback()
// la ham
// duoc truyen qua doi so

function myFunction(param){
    param('OM')
}

function callBack(value){
    console.log('Day la:', value)
}

myFunction(callBack)

//
var courses = [
    'JS',
    'C',
    'Python'
]

var htmls = courses.map(function(course){
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''))