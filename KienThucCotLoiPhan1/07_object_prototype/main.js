
function User (fistName, lastName, age){// tên quy ước chung là viêt hoa chữ đầu
    this.fistName = fistName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function(){
        return `${this.fistName} ${this.lastName}`
    }
    
} 

User.prototype.className = "SVTN";
User.prototype.getClassName = function () {
    return this.className
}

var user1 = new User("Tung" , "Le" , 22)
var user2 = new User("Hung" , "Pham" , 21)
var user3 = new User("Nam" , "Duc" , 20)




console.log(user1.className)

console.log(user2.getClassName())

console.log(user3)

