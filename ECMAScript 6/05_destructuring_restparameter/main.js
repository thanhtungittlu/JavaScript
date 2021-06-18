var array = ["Dữ liệu 1","Dữ liệu 2","Dữ liệu 3","Dữ liệu 4","Dữ liệu 5"];

var [a,b,c,...rest] = array // Lưu lượt các dữ liêu vào biến a,b,c

console.log(array)
console.log(a)
console.log(b)
console.log(c)
console.log(rest)


var object1 = {
    name: "Tùng",
    age: 18,
    add: "Hà Nội",

}
var {name:h, age:g,...rest1} = object1

console.log(h)
console.log(rest1)

// ... rest trả về 1 mảng các phần tử  còn lại