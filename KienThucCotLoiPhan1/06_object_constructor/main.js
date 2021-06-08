
function User (fistName, lastName, age){// tên quy ước chung là viêt hoa chữ đầu
    this.fistName = fistName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function(){
        return `${this.fistName} ${this.lastName}`
    }
} 

var user1 = new User("Tung" , "Le" , 22)
var user2 = new User("Hung" , "Pham" , 21)
var user3 = new User("Nam" , "Duc" , 20)

user3.address = "haNoi"


console.log(user1)

console.log(user2.age)

console.log(user3)

console.log(user1.getName())