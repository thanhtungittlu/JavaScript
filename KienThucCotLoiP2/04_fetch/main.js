//Backend -> API -> Fetch -> JSON -> Parse -> JavaScript type -> render ra giao diện HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then(function(response){
        return response.json()
        // JSON.parse: JSON -> js type
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`                            // trả về các mảng
        })
        var html = htmls.join("") // biến mảng thành chuỗi
        document.getElementById("post").innerHTML = html
    })