
//  es6 k dùng được objhect contrustor

function sumes5(a,b) {
    return a+b
}

var sumes6 = (a,b) => (a+b)  // es6

var object6 = (a,b) => ({name:a, age:b})


function notifies5(a){
    return console.log(a)
}

var notifies6 = a => console.log(a)

console.log(sumes5(5,6))
console.log(sumes6(10,6))
console.log(object6(10,20))
notifies5(5)
notifies6(6)