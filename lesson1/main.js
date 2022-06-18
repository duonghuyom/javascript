//tagged template literals
function highlight(...rest){
    console.log(rest)
}

var ten = 'huy'
var ho = 'nguyen'

highlight`ten cua toi la ${ten} va ho cua toi la ${ho} !` //tra ve mot array chứa giá trị nội suy và text

