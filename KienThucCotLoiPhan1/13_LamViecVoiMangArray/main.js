// forEach : Duyệt qua tất cả các phần tử của mảng.
// every() : Duyệt qua phần tử của mảng, và cho điều kiện  đúng của tất cả các phần tử. hàm này trả vể kết quả true, false
// some()  : Duyệt qua phần tử của mảng, và cho điều kiện  đúng của 1 phần tử, trả về kết quả true, false
// find() : Trả về 1 object phần tử đầu tiên có kết quả tìm kiếm
// filter() : Trả về 1 mảng các tất cả phần tử có kết quả tìm kiếm
// map(): trả về 1 mảng danh sách mới, và thêm tính chất, hoặc thay đổi dựa vào mảng cũ

// reduce()


var students = [
    {
        name: "Tung",
        age: 19,
        group: "SVTN",
    },
    {
        name: "Nam",
        age: 18,
        group: "SVTN",
    },
    {
        name: "Hung",
        age: 18,
        group: "SVTN",
    },
    {
        name: "Thuong",
        age: 19,
        group: "FTU",
    },
    {
        name: "Linh",
        age: 18,
        group: "SVTN",
    },
    {
        name: "Hung",
        age: 30,
        group: "SVTN",
    },
    {
        name: "Thuong",
        age: 19,
        group: "FTU",
    },
    {
        name: "Thuong",
        age: 19,
        group: "FTU",
    },
]

students.forEach(function(student, index){   // Trả về danh sách các object, và có thể thêm index
    console.log(index,student)
})

var isGroup = students.every(function(student,index){  
    console.log(index) 
    return student.group === "SVTN"                //Nếu toàn bộ group = "SVTN" thì trả về true, chỉ cần 1 cái sai thì vòng duyệt sẽ dừng lại và trả false
})
console.log(isGroup)

var isAge = students.some(function(student,index){  
    console.log(index) 
    return student.age == 18                //Nếu một phần tử trong mảng có age  = 18 thì hàm some cho kết quả true, rồi dừng lại, nếu không thì kết quả false
})
console.log(isAge)


var findName = students.find(function(student,index){  
    console.log(index) 
    return student.name === "Hung"               //Trả về phần tử đầu tiên có name = Hung
})
console.log(findName)

var findName = students.filter(function(student,index){  
    console.log(index) 
    return student.name === "Hung"               //Trả về mảng các object có name = Hung
})
console.log(findName)


