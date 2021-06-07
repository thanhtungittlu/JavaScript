/*
    falsy: 
    1: false
    2: 0
    3: ""
    4: NaN
    5: null
    6. Undefined
 */

    var result = "A" && 0 && NaN 

    console.log("result", result)

    if (result){
        console.log("Dieu kien dung")
    }else{
        console.log("Dieu kien Sai")
    }

    // Phép && sẽ so sánh từ trái qua phải, nếu GẶP 1 trong 6 kiểu falsy thì sẽ gán  giá trị đấy cho result, 
    // nếu không gặp thì sẽ gán giá trị cuối cùng chô result
    // Nếu tất cả giá trị đều là giá tị falsy thì sẽ nhận giá trị đầu tiên

    var result2 = null ||  0 || 0 || "C"

    console.log("result2", result2)

    if (result2){
        console.log("Dieu kien dung")
    }else{
        console.log("Dieu kien Sai")
    }

    // Phép || sẽ so sánh từ trái qua phải, nếu  KHÔNG gặp 1 trong 6 kiểu falsy thì sẽ gán  giá trị đầu tiên cho result, 
    // nếu  Gặp 1 trong 6 thì sẽ lấy giá trị tiếp theo. 
    // Nếu tất cả giá trị đều là giá tị falsy thì sẽ nhận giá trị cuối cùng
