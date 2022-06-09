// function getRandNumbers(min, max, length){
//     var num = []
//     for (var i = 0; i < length; i++){
//         num[i] = Math.round(Math.random() * (max - min) + min)
//     }
//     return num
// }
// getRandNumbers(1, 10, 5)

// function getTotal(arr) {
//     var total = 0
//     for(var i = 0; i < arr.length; i++){
//         total += arr[i]
//     }
//     return total
// }

// console.log(getTotal([1,2,3,4]))

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){
    var total = 0
    for (var i = 0; i < orders.length; i++){
        total += orders[i].price;
    }
    return total
}
console.log(getTotal(orders))