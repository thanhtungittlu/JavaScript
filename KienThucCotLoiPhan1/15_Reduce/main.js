// forEach : Duyệt qua tất cả các phần tử của mảng.
// every() : Duyệt qua phần tử của mảng, và cho điều kiện  đúng của tất cả các phần tử. hàm này trả vể kết quả true, false
// some()  : Duyệt qua phần tử của mảng, và cho điều kiện  đúng của 1 phần tử, trả về kết quả true, false
// find() : Trả về 1 object phần tử đầu tiên có kết quả tìm kiếm
// filter() : Trả về 1 mảng các tất cả phần tử có kết quả tìm kiếm
// map(): trả về 1 mảng danh sách mới, và thêm tính chất, hoặc thay đổi dựa vào mảng cũ
// reduce() : Trả về 1 kết quả tính toán


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


var result = students.reduce(function(totalAge,student,x,y){
    return totalAge + student.age
},0) // 0 là tham số khởi tạo 
//totalAge là biế khởi taojm student, thành phần của mảng
// x: index
// y: Phần tử của mảng gốc
console.log(result);

//// Tự tạo 1 phương thức reduce2


Array.prototype.reduce2 = function (callback, result){
    let i = 0 
    if (arguments.length < 2){
        i=1
        result = this[0]
    }
    for (; i < this.length ; i ++){
        result = callback(result,this[i],i,this)
    }
    return result
}


function sumNumbers(inputs) {

    return inputs.reduce2(function(total,PhanTu,index){
        console.log(index)
        console.log(Number.isFinite(PhanTu))
        if (Number.isFinite(PhanTu)){
            return total + PhanTu
        } else {
            return total
        }
        // return total + PhanTu
        
    },0)
}

function sumNumbers2(inputs) {
    total = 0
    for (var i= 0 ; i < inputs.length ; i ++){
        if (Number.isFinite(inputs[i])){
            total += inputs[i]
        }
    }
    return total
}


console.log(sumNumbers([1, 2, 3,4 , 4.5 , "hi"]))


