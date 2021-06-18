class Course {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getName(){return this.name}
    getprice(){return this.price}
}

const phpCourses = new Course('PHP',1000);
const c_Courses = new Course('C++',2000);
console.log(phpCourses)
console.log(c_Courses.getName())