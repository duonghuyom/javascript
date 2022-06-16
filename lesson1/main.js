var users = [
    {
        name: 'HUY',
        id: 1
    },
    {
        name: 'TOM',
        id: 2
    }
]

var comments = [
    {
        id: 1,
        content: "rat hay",
        user_id: 1
    },
    {
        id: 2,
        content: "rat rat hay",
        user_id: 2
    }
]

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        resolve(result)
    }, 1000)
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id
        })
        
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(users){
        console.log(users)
    })
