
// Có 2 loại: innerText và textContent
//  innerText hiển thị ra những gì như trên web thấy
// textContent hiển thị ra những text trong file code

var getH1 = document.querySelector("h1")
console.log(getH1.innerText)
var getH2 = document.querySelector("h2")
console.log(getH2.innerText)
console.log(getH2.textContent)

// getH1.innerText = `

// New


// `

//getH1.innerText  thì web cũng hiển thị ra những gi trong code

// getH1.textContent = `

// New


// `

// getH1.textContent  code hiển thị