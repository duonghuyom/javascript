// arrow function
// goi mot function trong mot object
const course = {
    name: 'Javascript basic',
    getName: function() {
        return this.name //context, arrow function khong co context
    }
}

console.log(course.getName())

//khoi tao mot class

class lopHoc {
    constructor(mon, thay){
        this.mon = mon,
        this.thay= thay
    }
}

const lopToan = new lopHoc("toan", "tom")
const lopVan = new lopHoc("van", "huy")

console.log(lopToan)
console.log(lopVan)

//destructering
//array
var array = ['nguyen', 'duong', 'huy']

var [a, b, c] = array

console.log(a, b, c) //typeof string

var [a, ...rest] = array //rest parameter
console.log(rest) // array

//object
var nguoi = {
    ten: 'huy',
    tuoi: 21
}

var {ten, tuoi} = nguoi

console.log(ten, tuoi) //string

//...rest
function test(...params){
    console.log(params)
}

test(1,2,3,4, 'huy', 'tom')

//...spread
var so1 = {
    ten: 'huy'
}

var so2 = {
    ho: 'nguyen'
}

var so3 = {
    ...so1,
    ...so2
}

console.log(so3)