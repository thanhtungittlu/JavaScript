// listen event hữu hiệu hơn dom event lúc phải thực hiện nhiều tác vụ và dừng lại kho có điều kiện

var btElement = document.querySelector("button")

function viec1(){
    console.log("Viec1")
}
function viec2(){
    console.log("Viec2")
}
btElement.addEventListener("click",viec1)
btElement.addEventListener("click",viec2)

setTimeout(function() {
    btElement.removeEventListener("click",viec1)
}, 3000); // sau 3000s thì k thực hiện event này nữa