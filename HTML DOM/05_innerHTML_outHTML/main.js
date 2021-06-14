//innerHTML : thêm vào trong
//outerHTML : thêm vào ngoài // ghi đè lên luôn

var data_div1 = document.querySelector(".first")
data_div1.innerHTML = "<h1>Hôm nay tôi yêu đời</h1>"

var data_div2 = document.querySelector(".f")
data_div2.innerHTML = "<h1>Hôm nay </h1>"

var data_div3 = document.querySelector(".s")
data_div3.outerHTML = "<h1>Hôm nay </h1>"

