var aElements = document.querySelectorAll("a")
for (let i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e){
        if (e.target.href.startsWith("https://www.24h.com.vn/")){
            e.preventDefault() // Ngăn không cho thực hiện prevent
        }
    }
}