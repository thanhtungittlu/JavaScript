// Call back

// Là hàm
// Được truyềnqua đối số

// find . tìm điều kiều kiện và trả về object đầu tiên có điều kiện đấy
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

Array.prototype.find2 = function(callback){
    var output 
    for (var i in this) {                               // tránh lặp các phần tử rỗng
        if (this.hasOwnProperty(i)) {  // tránh  lặp find2
            result = callback(this[i],i,this)
            if (result){
                output = this [i]   
            }
        }
    }
    return output
}


var result = courses.find2(function(value,index,array){
    return value.coin > 1000        // Trả về 1 object đầu tiên có kết quả trùng với kết quả tìm kiếm
})

console.log(result)
