// JSON là 1 định dạng dữ liệu (chuỗi). (1 quy ước)
// JavaScript Object Notation 
// JSON thể hiện  được các kiểu dữ liệu như: 
// number: '16'
// string: '"chuỗi"'
// boolean: 'true' 'false'
// null: 'null'
// array: '["js","c++","PHP"]'
// object: '{"NAME":"SonDang", "age":18}'

// Stringify: JavaScript types -> JSON
// parse: từ JSON -> JavaScript types

var jsonString = '"Tuổi 16"' // string
console.log(JSON.parse(jsonString))
var jsonArray = '["js","c++","PHP"]' // array
console.log(JSON.parse(jsonArray))
var jsonObject = '{"NAME":"SonDang", "age":18}'
console.log(JSON.parse(jsonObject))

console.log(JSON.stringify(16))
console.log(JSON.stringify(["js","alo"]))
console.log(JSON.stringify({NAME:"SonDang", age:18}))
