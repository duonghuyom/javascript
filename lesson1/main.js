function test(param1, param2) {
    console.log(`${param1} ${param2}`)
}

test('huy', 'duong')

var test2 = [
    'ga',
    'tom'
]
var result = test2.concat('huy')
console.log(result)
// ['ga', 'tom', 'huy']

var test3 = [
    'xanh',
    'hong',
    'tim'
]
var result2 = test3.splice(2, 0, 'trang')
console.log(test3)
// []