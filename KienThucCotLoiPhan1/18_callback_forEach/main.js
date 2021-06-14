// Call back

// Là hàm
// Được truyềnqua đối số

// forEach(duyệt qua tất cả các phần tử của mảng)
var number = ["JS", "PHP", "Ruby"]


Array.prototype.forEach2 = function(callback){ // Sẽ tạo phương thức forEach2 trong proto
    // var result = []
    for (var i in this){             // Dùng vòng lặp for in sẽ duyệt qua cả các elenmen trong proto, tức là nó duyệt cả forEach2
        if (this.hasOwnProperty(i)){ // Lọc những phần tử ở proto
            callback(this[i],i,this)
        }   
    }
   
}

number.forEach2(function(value,index,array){
    console.log(value,index,array)
})
