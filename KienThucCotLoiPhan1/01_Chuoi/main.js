// Làm việc với chuỗi

var myString = "Le Thanh Tung hoc JS"


// 1. length

// console.log(myString.length)


// 2. find index

// console.log(myString.indexOf("Tung")) // Nếu không có thì giá trị indexOf = -1

// // trả về vị trí đầu tiên tìm được
// console.log(myString.lastIndexOf("T")) // Tìm vị trí cuối cùng có T

// console.log(myString.search("Tung")) // Dùng search có thể áp dụng vào biểu thức chính quy

// 3. cut string

// console.log(myString.slice(3,8)) // Cắt bắt đầu từ vị trí số 3 đến 8 (K lấy 8)
// console.log(myString.slice(3))  // Cắt bắt đầu từ vị trí số 3 đến hết
// console.log(myString.slice(-4,-1))  // Cắt bắt đầu từ vị trí số 3 đến hết (Lấy từ cuối mạng)


// 4. replace

// console.log(myString.replace("JS", "JavaScript"))

// 5. convert to upper case

// console.log(myString.toUpperCase())

// 6. convert to lower case 

// console.log(myString.toLowerCase())


// 7. trim // Loại bỏ khoảng trắng 2 đầu chuỗi

// console.log(myString.trim())

// 8. Split // Tách từ chuỗi thành 1 array

// var chuoi = "a,b,c"
// console.log(chuoi.split(','))


// 9. Get a character by index // Lấy được 1 ký tự bởi 1 indexx

// console.log(myString.charAt(5)) // Nếu truyền 1 index không hợp lệ vào thì sẽ trả về 1 chuỗi rỗng

// console.log(myString[5]) // // Nếu truyền 1 index không hợp lệ vào thì sẽ trả về 1 

