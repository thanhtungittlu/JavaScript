var data_h3 = document.querySelectorAll("h3")
for (let i = 0; i < data_h3.length; i++) {
    data_h3[i].onclick = function(e){
        console.log(Math.random())
        console.log(e.target) // Lấy ra 1 element
        console.log(e.target.innerText)
    }
}