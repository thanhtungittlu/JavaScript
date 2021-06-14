// Call back

// Là hàm
// Được truyềnqua đối số

// every . tất cả điều kiện đều đúng thì trả về true, 1 cái sai thì trả về false
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

Array.prototype.every2 = function(callback){
    for (var i in this){
        if (this.hasOwnProperty(i)){
            result = callback(this[i],i,this)
            if (result == false){
                break
            }
        }
    }
    return result
}

var result = courses.every2(function(value,index,array){
    return value.coin > 600     
})

console.log(result)
