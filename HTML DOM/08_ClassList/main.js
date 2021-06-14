var data_box = document.querySelector(".box")

console.log(data_box.classList.length)
console.log(data_box.classList.value)

// add : thêm vào 1 class
// contains: kiểm tra xem có class đấy chưa, kết quả trả về true false
// remove: xóa class
// toggle : có thì xóa, mà k có thì thêm vào. dùng để làm đèn nhấp nháy blabla

console.log(data_box.classList.add("red"))
console.log(data_box.classList.contains("red"))
console.log(data_box.classList.remove("red"))
setInterval(() => {
    data_box.classList.toggle("red")
}, 1000);
