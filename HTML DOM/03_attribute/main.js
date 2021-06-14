var title_h1 = document.querySelector("h1")
title_h1.style.color = "#ccc";
title_h1.setAttribute("class","title-class")   // Thiết lập thuộc tính. 
// Hoặc cách 2: title_h1.className = "title-class"
var dataTitle = title_h1.getAttribute("style") // Lấy thuộc tính
console.log(dataTitle)