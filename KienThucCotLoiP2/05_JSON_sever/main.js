//Backend -> API -> Fetch -> JSON -> Parse -> JavaScript type -> render ra giao diện HTML
// fake API sever / Moc API, để tự tạo sever tự làm việc, trong khi chờ backend gửi API
// CRUD
// C: create: Tạo mới - POST phương thức
// R: read: lấy dữ liêụ - GET phương thức
// U: update: Chỉnh sửa - PUT/PATCH phương thức
// D: delete : Xóa - DELETE phương thức
// postman: 


var courseAPI = 'http://localhost:3000/courses'
fetch(courseAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(course){
        console.log(course)
    })