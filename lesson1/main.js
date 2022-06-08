// Chuoi trong javascript

// Tao chuoi
var fullName1 = 'Duong Huy' //cach 1
var fullName2 = new String('Duong Huy'); //cach 2: khoi tao ra mot doi tuong

//kiem tra do dai chuoi
console.log(fullName2.length)

//viet theo kieu template
var firstName = 'huy'
var name = 'duong'

console.log(`toi la ${firstName} ${name}`)

// tim vi tri cua mot chuoi
console.log(fullName1.indexOf('Duong'))

// tim vi tri mot tu o trong chuoi nhieu tu
var chuoidai = "  duong huy Duong huy dUong huy"
console.log(chuoidai.indexOf('huy', 8))

// tim vi tri cua mot tu o vi tri cuoi
console.log(chuoidai.lastIndexOf('huy'))

// tim vi tri cua mot tu
console.log(chuoidai.search('huy'))

// cat chuoi tu trai sang phai
console.log(chuoidai.slice(5, 10))

// cat chuoi tu phai sang trai
console.log(chuoidai.slice(-4, -1))

// replace
console.log(chuoidai.replace('huy', 'Huy'))

// bieu thuc chinh quy de tim tat ca cac tu huy trong chuoi
console.log(chuoidai.replace(/huy/g, 'Huy'))

//convert thanh chu in hoa
console.log(chuoidai.toUpperCase())

//convert thanh chu in thuong
console.log(chuoidai.toLowerCase())

//trim
console.log(chuoidai.trim().length)

//split: cat chuoi thanh mot array
var language = "javascript, ruby, phh"
console.log(language.split(' '))

// lay ra ki tu theo vi tri
console.log(chuoidai.charAt(5))
console.log(chuoidai.charAt(40)) // tra ve chuoi rong vi khong co du lieu
console.log(chuoidai.charAt[5])