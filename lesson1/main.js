import fetch from "node-fetch";
// fetch() dung de goi api va tra ra du lieu
var api = "https://jsonplaceholder.typicode.com/posts"

fetch(api)
    .then(function(response){
        return response.json(); // goi api tra ve gia tri json convert sang javascript type
    })
    .then(function(posts){
        console.log(posts)
    })
    .catch(function(error){
        console.log(error)
    })