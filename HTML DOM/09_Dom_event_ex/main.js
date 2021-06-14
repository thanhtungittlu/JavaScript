var textElement = document.querySelector('input[type="text"]')

textElement.onchange = function(e){  // Thay đổi
    console.log(e.target.value)
}

var checkboxElement = document.querySelector('input[type="checkbox"]')
checkboxElement.onchange = function(e){  
    console.log(e.target.checked) // Trả về true false
}

var selectElement = document.querySelector('select')
selectElement.onchange = function(e){ 
    console.log(e.target.value) 
}

var text2Element = document.querySelector('input[type="text2"]')

text2Element.onkeypress = function(e){  // Thay đổi
    console.log(e.which) // Kiểm tra xem phím thuộc số nào
    switch (e.which) {
        case 13:
            console.log("Bạn đã nhấn enter")
            break
    }
}
