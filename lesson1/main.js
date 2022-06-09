//object trong javascript

var info = {
    name: 'duong huy',
    age: 20,
    email: 'duonghuy38@gmail.com',
    hobby: 'gym',
    getName: function() {
        return this.name
    } // function de lay ra ten trong mang
}

info.dob = '3/8/2001'
info['home-address'] = 'ha noi'

console.log(info)

var hobby = 'hobby'

console.log(info)
console.log(info.email)
console.log(info['age'])
console.log(info.getName())