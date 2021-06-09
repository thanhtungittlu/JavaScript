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

var result = students.map(function(x){
    return {
        name: `Họ và tên: ${x.name}` ,
        age: `Tuổi: ${x.age}`,
        group: `Group: ${x.group}`,
        address: "Hà Nội"
    }
})

console.log(result)