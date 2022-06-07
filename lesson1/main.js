var result = null || null || null || null

console.log(result) // null

var result1 = "A" || null || "B" || "C"

console.log(result1) // A boi vi khi no so sanh A khong nam trong cac Falsy thi se lay A luon

var result2 = "A" && null && "C" && "D"

console.log(result2) // null vi chi can mot cai trong danh sach falsy thi se lay

var result3 = "A" && "B" && "C" && "D"

console.log(result3) // D vi no se chay so sanh ve trai voi ve phai, den khi khong con so sanh duoc nua thi lay gia tri cuoi cung