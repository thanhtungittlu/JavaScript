var languges = [
    "Javascipt",
    "C++",
    "Python",
    "Golang",
    null,
    undefined,
];

//  cách 2: var languges = new Array(
//     "Javascipt",
//     "C++",
//     "Python",
//     "Golang",
//     null,
//     undefined,
// );

// Kiểu này là kiểu object, hạn chế sử dụng

// Có thế đưa bất kỳ kiểu dữ liệu bất kỳ vào mảng
console.log(languges)
console.log(Array.isArray(languges)) // Kiểu tra xem có phải kiểu array hay không, vì khi dùng typeof thì nó sẽ ra kiểu object
console.log(languges.length)// Độ dài
console.log(languges[1])// Lấy giá trị theo index




// Làm việc với mảng
// 1. toString -> Biển mảng thành chuỗi

console.log(languges.toString())

// 2. join -> Biến mảng thành chuỗi, nhưng có thể bỏ hoặc thêm ký tự giữa các phần tử

console.log(languges.join(' '))

// 3. pop -> Xóa phần tử cuối của mảng, và trả về chính phần tử đã xóa. // Sau khi mảng hết phần tử thì sẽ trả về undefined

console.log(languges.pop())
console.log(languges)
console.log(languges.pop())
console.log(languges)
console.log(languges.pop())
console.log(languges)
console.log(languges.pop())
console.log(languges)
console.log(languges.pop())
console.log(languges)
console.log(languges.pop())
console.log(languges)
console.log(languges.pop())
console.log(languges)

// 4. push -> Thêm phần tử vào cuối mảng rồi trả về độ dài mảng theo kiểu number

console.log(languges.push( "Javascipt")) // trả về 1
console.log(languges)
console.log(languges.push(  "C++","Python","Golang")) // trả về 4
console.log(typeof languges.push())
console.log(languges)



// 5. shift -> Xóa phần tử đầu của mảng, và trả về chính phần tử đã xóa  // Sau khi mảng hết phần tử thì sẽ trả về undefined

console.log(languges.shift())
console.log(languges)
console.log(languges.shift())
console.log(languges)
console.log(languges.shift())
console.log(languges)
console.log(languges.shift())
console.log(languges)
console.log(languges.shift())
console.log(languges)
console.log(languges.shift())
console.log(languges)


// 6. unshift ->Thêm phần tử vào đầu mảng  rồi trả về độ dài mảng theo kiểu number


console.log(languges.unshift("Javascipt"))  // trả về 1
console.log(typeof languges.unshift())
console.log(languges)
console.log(languges.unshift("C++","Python","Golang"))  // trả về 4
console.log(languges)


// 7. splice -> Thêm, xóa vào bất kỳ chỗ nào trong mảng rồi trả về chính phần tử đã bị xóa theo kiểu mảng
console.log(languges)
console.log(languges.splice(1,1)) // Đặt tại index 1, rồi xóa 1 phần tử, trả về chính pần  tử đã xóa
console.log(languges)
// console.log(languges.splice(1)) // Đặt tại index 1, rồi xóa hết các phần tử phía sau
console.log(languges.splice(1,0,"python new")) // Đặt tại index 1, rồi xóa 1 phần tử, rồi thêm 1 phần tử "python new" , trả về mảng rỗng, vì k xóa phần tử nào
console.log(languges)

// 8. concat -> Ghép 2 mảng

var a = ['Tung','Thuong','le','nam','hoang'],
    b = ['Nam', 'Hang'];

console.log(a.concat(b))


// 9. slice -> lấy bất kỳ phần tử của mảng
console.log(a)
console.log(a.slice(1,4)) // Lấy các phần tử thứ từ index 1 đến 4, trong ví dụ trên là ['Thuong','le','nam']
console.log(a)

