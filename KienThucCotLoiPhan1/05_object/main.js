// object có 2 giá trị là key và value

var myInf = {
    name: "tung",
    age: 18,
    phone: "0364 959 199",
    getName: function(){
        return this.name
    }
}
console.log(myInf)

myInf.address = "Ha Noi" // Thêm 1 giá trị
console.log(myInf)

console.log(myInf.name) // lấy value
console.log(myInf.getName()) // Vì value là function nên phải dùng  getName()

// function : Phương thức -> method
// others : thuộc tính -> property