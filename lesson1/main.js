// array
// toString de convert tu mang sang chuoi
var ex1 = [
    'duong', 
    'huy',
    'nguyen'
]

console.log(ex1.toString()) //duong,huy,nguyen

//join de add them khoang cach, dau phay
console.log(ex1.join('-')) //duong-huy-nguyen

//pop de lay ra phan tu cuoi mang, tra ve so phan tu trong mang
console.log(ex1.pop())

//push de them mot phan tu vao mang
console.log(ex1.push('tom'))
console.log(ex1)

//shift xoa di phan tu o dau mang, va tra ve gia tri do
console.log(ex1.shift())

//unshift de them phan tu vao dau mang
console.log(ex1.unshift('duong'))

//splicing xoa, cat, chen phan tu moi vao mag
var ex2 = [
    'ga',
    'vit',
    'ngong'
]
console.log(ex2.slice(1, 1, "ngan")) //bdau vi tri 1, xoa 1 phan tu, them phan tu vao vi tri do

//concat dung de noi hai mang
console.log(ex1.concat(ex2))

//slice dung de cat mot so phan tu cua mang
console.log(ex2)
console.log(ex2.slice(1, 2))

// mang exercise
// Viết hàm tại đây
function getLastElement(animals) {
    return animals.slice(-1)
}


// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']