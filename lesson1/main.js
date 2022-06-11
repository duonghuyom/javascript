//for in loop
var nha = {
    dc: "hai",
    loai: 'chungcu',
    quan: "hai ba trung"
}

for (var key in nha){
    console.log(nha[key])
}

var languages = [
    'english',
    'german',
    'vietnamese'
]

for (var key in languages){
    console.log(languages[key])
}

//in ra mot array co cac gia tri nhu ben duoi
function run(object) {
    var result = []
    for (var key in object){
        result.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return result
}


// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));