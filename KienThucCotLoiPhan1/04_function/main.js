function showMessage(){
    alert('Học JS tại F8')
}
showMessage()

function writeLog(prefix,message){
    console.log(prefix + ": " + message)
}
writeLog("Tung","Thuong")

function agr(){
    for (var param of arguments) {
        console.log(param)
    }
}

agr(1,2,3,4,"5")

function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
    {
        if (isNaN(a) || isNaN(b)) return false;
        return a + b;
    }
    return false;
}

console.log(sum(5,6))
console.log(sum(5,"0") )// trả về false


function checkPositiveInteger (number){                //Kiểm tra xem phải số nguyên dương không
    return (Number.isInteger(number) && number >0) 
}
