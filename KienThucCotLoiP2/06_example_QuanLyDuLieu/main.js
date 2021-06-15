//Backend -> API -> Fetch -> JSON -> Parse -> JavaScript type -> render ra giao diện HTML
// fake API sever / Moc API, để tự tạo sever tự làm việc, trong khi chờ backend gửi API
// CRUD
// C: create: Tạo mới - POST phương thức
// R: read: lấy dữ liêụ - GET phương thức
// U: update: Chỉnh sửa - PUT/PATCH phương thức
// D: delete : Xóa - DELETE phương thức
// postman: 


start()

function start(){
    getWorks(renderWork)

    handleCreateForm()
}

function getWorks(callback){
    var workAPI = 'http://localhost:3000/work'
    fetch(workAPI)
        .then(function(response){
            return response.json()
        })
        .then(callback)
        .catch(function(){
            alert("Không thể tải được dữ liệu")
        })
}

function createWork(data, callback){
    var workAPI = 'http://localhost:3000/work'
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
    fetch(workAPI,options)
        .then(function(response){
            response.json()
        })
        .then(callback)
}

function handleDeleteWork(id){
    var workAPI = 'http://localhost:3000/work'
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(workAPI+'/'+id,options)
        .then(function(response){
            response.json()
        })
        .then(function(){
            var workItem = document.querySelector('.item-'+id)
            if (workItem){
                workItem.remove()
            }
            // getWorks(renderWork)
        })
}

function notification(){
    alert("Tính năng đang được cập nhật")
}

function renderWork(works){
    var listWorkBlock = document.querySelector("#list-work")
    var htmls = works.map(function(work){
        return `<li class="item-${work.id}" >
            <p class="time">${work.time}</p>
            <p class="name">${work.name}</p>
            <button onclick="handleDeleteWork(${work.id})" >Xóa</button>
            <button onclick="notification()">Chỉnh sửa</button>
        </li>`
    })
    listWorkBlock.innerHTML = htmls.join('')
}
function handleCreateForm(){
    var createBtn = document.querySelector("#add")
    createBtn.onclick = function(){
        var time = document.querySelector('input[name="time"]').value
        var name = document.querySelector('input[name="name"]').value
        var formData = {
            time: time,
            name: name,
        }
        createWork(formData,function(){
            getWorks(renderWork)
        });
 
    }
}

