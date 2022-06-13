// Mang advanced
var contacts = [
    {
        id: 1,
        name: 'Huy',
        so: 0
    },
    {
        id: 2,
        name: 'Duong',
        so: 9
    },
    {
        id: 3,
        name: 'Tom',
        so: 3
    },
    {
        id: 4,
        name: 'Tom',
        so: 10
    },
]

// map()

function editArray(contacts) {
    return {
        id: contacts.id,
        name: `Ten la: ${contacts.name}`,
        so: `Sdt: ${contacts.so}`
    }
}

var editContact = contacts.map(editArray)

console.log(editContact)