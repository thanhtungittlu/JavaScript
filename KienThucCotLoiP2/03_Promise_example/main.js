var users = [
    {
        id: 1,
        name: "Thanh Tung"
    },
    {
        id: 2,
        name: "Hoai Thuong"
    },
    {
        id: 3,
        name: "Hung Pham"
    },  
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Alo, I love you",
    },
    {
        id: 2,
        user_id:2,
        content: "Blo, oh my god",
    },
    {
        id: 3,
        user_id:2,
        content: "Really",
    },
    {
        id: 4,
        user_id:1,
        content: "Yes",
    }
]

// 1. Lay comment
// 2. Tu comment lay ra user_id
// 3. Tu user_id lay ra user tuong ung

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}

function getUsersByIds(userIDs){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIDs.includes(user.id)
        })
        setTimeout(function(){
            resolve(result)
        },1000)
    })
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
                    commments: comments,
                }
            })

    })
    .then(function(data){
        var commentBlock = document.getElementById("comment-box")
        var html = ""
        data.commments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })

        commentBlock.innerHTML = html
    })






