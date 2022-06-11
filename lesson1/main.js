// vong lap while

var myarray = [
    'js',
    'c+',
    'c++'
]

var i = 0
while (i < myarray.length){
    console.log(myarray[i])
    i++
}

// vong lap do/while

var i = 0

do {
    i++
    console.log(i)
}while (i < 10)

console.log(i)

// break = continue
// chay tu 1 den 10 chi in ra so chan
var i = 0
for(i; i <= 10; i++){
    if (i%2 !== 0){
        continue
    }
    console.log(i)
}

// vong lap long nhau - nested loop
var mymang = [
    [1, 2],
    [3, 4],
    [5, 6]
]

for (var i=0; i < mymang.length; i++)
{
    console.log(mymang[i])
    for(var z = 0; z < mymang[i].length; z++)
    {
        console.log(mymang[i][z])
    }
}