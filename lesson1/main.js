//date
var date = new Date()

console.log(date.getFullYear())

var random = Math.random() * 5

console.log(random)

// random mot so tu 1 den 10
function randomso(value) {
    return value[Math.floor(Math.random() * value.length)]
}

console.log(randomso([1,2,3,4,5,6,7,8,9,10]))