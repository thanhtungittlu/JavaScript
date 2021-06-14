// Call back

// Là hàm
// Được truyềnqua đối số

// filter . tìm điều kiều kiện và trả về các object có điều kiện đấy
var courses = [
    {
       name: "JS",
       coin: 860    
    },
    {
        name: "PHP",
        coin: 760   
     },
     {
        name: "Ruby",
        coin: 960    
     },]

Array.prototype.filter2 = function(callback){ // Sẽ tạo phương thức filter2 trong proto
    output = []
    for (var i in this){             // Dùng vòng lặp for in sẽ duyệt qua cả các elenmen trong proto, tức là nó duyệt cả forEach2
        if (this.hasOwnProperty(i)){ // Lọc những phần tử ở proto
            var result = callback(this[i],i,this)
            if (result){
                output.push(this[i])
            }
        }   
    }
   return output
}


var result = courses.filter2(function(value,index){
    return value.coin > 800           // Trả về 1 mảng object có kết quả trùng với kết quả tìm kiếm
})

console.log(result)
