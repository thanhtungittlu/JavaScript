// Call back

// Là hàm
// Được truyềnqua đối số

function myFunction (param){
    param (7)
}

myFunction(myCallBack)

function myCallBack(x){
    console.log(x)
}

//

var courses = [
    "JS",
    "PHP",
    "Ruby",
]

Array.prototype.map2 = function(callback){
    var arrayLength = this.length, output = []
    for (var i =  0 ; i < arrayLength ; ++i){
        var result = callback(this[i],i)
        output.push(result)
    }
    return output
}


var result = courses.map(function(course){
   return `<h2>${course}</h2>`
})
console.log(result.join(" - "))

var result = courses.map2(function(course){
    return `<h2>${course}</h2>`
 })
 console.log(result.join(" - "))