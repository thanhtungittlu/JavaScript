//  
// ( Điều kiện ) ? (Kết quả 1) : (Kết quả 2)
//  Nếu điều kiện đúng thì ra kết quả 1, điều kiện sai thì ra kết quả sai

// for in : Duyệt các object, array, chuỗi

var myInf = {
    name: "Tung",
    age: 18,
    address: "Ha Noi",
}

for (var key in myInf){
    console.log(key," ",myInf[key])
}

// Tương tự với chuỗi và array



// For of : Array, chuỗi

var languages = [
    "java",
    "PHP",
    "C++"
]

for (var value of languages){
    console.log(value)
}

console.log(Object.values(myInf)) // trả về 1 mảng các values

for (var value of Object.values(myInf)){
    console.log(value)
}
