// Mang advanced
var contacts = [
    {
        id: 1,
        name: 'Huy',
        so: 0,
        tien: 10
    },
    {
        id: 2,
        name: 'Duong',
        so: 9,
        tien: 50
    },
    {
        id: 3,
        name: 'Tom',
        so: 3,
        tien: 30
    },
    {
        id: 4,
        name: 'Tom',
        so: 10, 
        tien: 100
    },
]

// tinh tong so tien cua moi contact theo for loop

var totalTien = 0

for (var contact of contacts){
    totalTien = totalTien + contact.tien
}

console.log(totalTien)

// tinh tong so tien theo cach reduce()

var total = contacts.reduce(function(t, contact){
    return t += contact.tien
}, 0)

console.log(total)

