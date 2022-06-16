// promise

var promise = new Promise(
   function(resolve, reject) {
        resolve("Success")
        // reject('Eror')
    }
)

//reject() resolve()
promise
    .then(function(result){
        console.log('result: ' + result)
    })
    .catch(function(error){
        console.log('error: ' + error)
    })

//all()

var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3])
    }, 5000)
})

var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1])
    }, 2000)
})

Promise.all([promise1, promise2]) 
    .then(function([result1, result2]) {
        console.log(result1.concat(result2))
    })