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

//forEach() in ra cac phan tu
var contact = contacts.forEach(function(contact){
    console.log(contact)
})

//every() tim xem so moi nguoi co phai 0 ko
var is0 = contacts.every(function(contact){
    return contact.so === 0
})

console.log(is0)

//some() chi can mot phan tu thoa man thi se dung
var some = contacts.some(function(contact){
    return contact.so === 0
})

console.log(some)

//find() tim phan tu theo gia tri yeu cau, chi tra ve mot phan tu tim dc dau tien
var find = contacts.find(function(contact){
    return contact.name === "Huy"
})

console.log(find)
 
//filter() tim phan tu theo gia tri yeu cau, tra lai tat ca phan thu thoa man
var filter = contacts.filter(function(contact){
    return contact.name === "Tom"
})

console.log(filter)