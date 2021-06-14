// HTML DOM : DOM: document object model
//  3 thành phần: elenment - attribute - text

// Element: 
//  ID - Class - tag - CSS selector - HTML collection

console.log(document.getElementById("title")) // Trả về duy nhất 1 ID 

console.log(document.getElementsByClassName("class-child")) // Trả về 1 element HTML colection: bao gồm các class cùng tên

console.log(document.getElementsByTagName("p"))  // Trả về 1 element HTML colection: bao gồm các tag: ví dụ như h1, p, div,...

console.log(document.querySelector("#title")) // Dùng css trả về duy nhất 1 element, nếu có nhiều element sẽ chọn cái đầu tiên

console.log(document.querySelectorAll(".class-child")) // Trả về 1 node list: bao gốm các element đấy

console.log(document.forms) // Trả về 1 HTML collection các form, form phải có name
console.log(document.forms.test1) // Trả về duy nhất 1 form, form phải có name

console.log(document.anchors) // Trả về các thẻ a có name

h1Element = document.getElementsByTagName("h1")  
h2Element = document.getElementsByTagName("h2")
h3Element = document.getElementsByTagName("h3")

console.log(h1Element)
console.log(h2Element)
console.log(h3Element)

var boxElement = document.querySelector('.box')  // Dùng query selector
var childrenElements = boxElement.querySelectorAll('.children') // thay documen bằng boxelemet

console.log(boxElement)
console.log(childrenElements)