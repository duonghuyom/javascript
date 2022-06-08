//tao function de check xem mot so co phai number ko, loai NaN van duoc coi la mot so nen vi the can xu li de no khong
// duoc tinh la mot number
function isNumber(value) {
    if (typeof value == "number" && !isNaN(value)){
        return true
    }
    else{
        return false
    }
}

console.log(isNumber(NaN)); // false
