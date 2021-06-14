// Call back

// Là hàm
// Được truyềnqua đối số

// some . 1 cái đúng thì trả về true, tất cả đều sai thì trả về false
var courses = [
    {
       name: "JS",
       coin: 660    
    },
    {
        name: "PHP",
        coin: 810   
     },
     {
        name: "Ruby",
        coin: 960    
     },]

Array.prototype.some2 = function(callback){
    for (var i in this){
        if (this.hasOwnProperty(i)){
            result = callback(this[i],i,this)
            if (result == true){
                break
            }
        }
    }
    return result
}

var result = courses.some2(function(value,index,array){
    return value.coin > 900    
})

console.log(result)
