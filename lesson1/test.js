// tinh giai thua
function giaiThua(num){
    var output = 1
    for (var i = num; i > 0; i--){
        output = output * i
    }
    return output
}
console.log(giaiThua(6))

//tim cac mon the thao co so like nhieu hon 5
const thethao = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(thethao) {
    var monnhieulike = thethao.filter(function(a){
        return a.like > 5
    })
    return monnhieulike
}


// Expected results:
console.log(getMostFavoriteSport(thethao)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// tinh so huan chuong theo ham reduce()
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports){ 
    return sports.reduce( (a, c) => a + c.gold , 0);
}

// Expected results:
console.log(getTotalGold(sports))