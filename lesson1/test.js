// cong cac so trong mang
var number = [1,2,3,4,5]

var result = number.reduce(function(a,b){
    return a += b
}, 0)

console.log(result)

// thay doi cac mang trong mang thanh mot object
function arrToObj(arr){
    var result = arr.reduce(function(a, b){
        a[b[0]] = b[1]
        return a
    }, {})
    return result
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }