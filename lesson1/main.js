// vi du ve truyen mot parameter vao function
function printconsolelog(message) { 
    console.log(message)
}

printconsolelog("hello")

// vi du ve print ra type
function printtype(type) { 
    console.log(typeof type)
}

printtype("huy")

// vi du ve truyen hai parameters vao function
function print2params(param1, param2){
    console.log(param1)
    console.log(param2)
}

print2params(1, 2)

// vi du trong function khong co params, ket qua tra ve se la mot array
function arguments() {
    console.log(arguments)
}

arguments('arg1', 'arg2', 'arg3')

// vi du su dung ham for of trong function
function forof() {
    for (var param of arguments){
        console.log(param)
    }
}

forof("thu1", "thu2", "thu3", "thu4")

// vi du khac su dung arguments, ket qua tra ve se them dau gach ngang
function arguments2() {
    var word = ''
    for (var param of arguments){
        word += `${param} _`
    }
    console.log(word)
}

arguments2("nguyen", "duong", "huy")