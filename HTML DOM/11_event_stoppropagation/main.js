var divElement = document.querySelector("div")
divElement.onclick = function(e){
    console.log(e.target.innerText)
}

// Nếu đề như thế này thì nó sẽ thực hiện cả divElement.onlick
// var btElement = document.querySelector("button")
// btElement.onclick = function(e){
//     console.log(e.target.innerText)  
// }

var btElement = document.querySelector("button")
btElement.onclick = function(e){
    e.stopPropagation()  // Cầu này để ngăn các cha, ông nội k làm
    console.log(e.target.innerText)  
}

