// Array reduce() continue

//flat ca mang ben duoi
var listNum = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatten = listNum.reduce(function(list, num){ // su dung ham reduce de lay ra tung gia tri trong mang
    return list.concat(num) //concat de noi lai cac gia tri trong mang
}, []) // initial value o day la mot mang rong de luu cac gia tri vao ben trong

console.log(flatten)

//lay ra mot array trong mot object su dung reduce()
var hocSinh = [
    {
        name: 'Huy',
        monHoc: [
            {
                id: 1,
                mon: 'Toan'
            },
            {
                id: 2,
                mon: 'Van'
            }

        ]
    },
    {
        name: 'Tom',
        monHoc: [
            {
                id: 3,
                mon: 'Anh'
            },
            {
                id: 4,
                mon: 'Ly'
            }

        ]
    }
]

var monHoc = hocSinh.reduce(function(id, mon){
    return id.concat(mon.monHoc)
}, [])

console.log(monHoc)