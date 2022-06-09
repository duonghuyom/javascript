// object constructor

function User(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.getName = function() {
        return `${firstName} ${lastName}`
    }
}

var user1 = new User('Huy', 'Nguyen', 20)
user1.hobby = 'gym'
var user2 = new User('Huy', "Tom", 2)
user2['school'] = 'vins'

console.log(user1)
console.log(user1.hobby)
console.log(typeof user1)
console.log(user1.constructor)
console.log(user2)
console.log(user2.getName())