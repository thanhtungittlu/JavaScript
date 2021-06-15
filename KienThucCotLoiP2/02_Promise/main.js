// promise
//  sync
//  async
//  pain, lý thuyết, cách hoạt động
//  thực hành

// sync: Đồng bộ., chạy theo luồng. 
// async: Bất đồng bộ. 
//  async: setTimeout, setInterval, fetch, 
//       XMLHttpRequest, file reading
//       request animation frame
// PAIN
//  callback hell
//  pyramid of doom

// 1. new Promise : để xử lý các vấn đề bất đồng bộ, được sinh ra trong es6+, để khắc phục callback hell

// 2. executor: resolve (): thành công
//                reject (): thất bại

// 3 trang thái: 1. pendding // trang thai cho`
//               2. Fulfilled // thanh cong
//               3. Rejected // that bai


var promise = new Promise(
    // executor
    function(resolve, reject){
        // logic
        resolve(123) // khi thanh cong se vao resolve
        // reject() Khi that bai se vao catch
    }
)
promise
    .then(function(e){
        console.log(e,"success")
        return "Data từ then 1";
    })
    .then(function(data){ // Có thể viết nhiều lệnh then, câu lệnh then trước trả về return gì thì then sau sẽ lấy data đấy
        console.log(data)
    })
    .catch(function(){
        console.log("false")
    })
    .finally(function(){
        console.log("done")
    })


function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

sleep(1000) // đây là 1 promise
    .then(function(){
        console.log(1)
        return sleep(1000) // return là 1 promie thì .then kế tiếp sẽ .then của promise này
    })
    .then(function(){
        console.log(2)
        return sleep(1000)       
    })
    .then(function(){
        console.log(3)
        return sleep(1000)       
    })
    .then(function(){
        console.log(4)
        return new Promise(function(resolve,reject){
            reject()
        })      
    })
    .then(function(){
        console.log(5)
        return sleep(1000)       
    })
    .then(function(){
        console.log(6)
        return sleep(1000)       
    })
    .finally(function(){
        console.log("done")
    })
    .catch(function(){
        console.log("Có lỗi")
    })


    // Promise.resolve // luôn đúng
    var luondung = Promise.resolve("Truyền dữ liệu")
    // Promise.reject // luôn sai
    // Promise.all // Chạy song song các promise

    var promise1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve([1])
        },1000)
    })
    var promise2 = new Promise(function(resolve){
        setTimeout(function(){
            resolve([2,3])
        },6000)
    })

    Promise.all([promise1,promise2])
        .then(function([result1,result2]){
            console.log(result1.concat(result2))
        })