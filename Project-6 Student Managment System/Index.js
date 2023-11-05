var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    School.prototype.addStudent = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeacher = function (techObj) {
        this.teachers.push(techObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var School1 = new School("Vision");
var School2 = new School("Charter");
var s1 = new Student("Sufyan", 25, School1.name);
var s2 = new Student("Hanzala", 22, School2.name);
var s3 = new Student("Aimman", 21, School2.name);
var t1 = new Teacher("Sarwar", 42, School1.name);
var t2 = new Teacher("Sheeza", 29, School2.name);
var t3 = new Teacher("Chaman", 40, School2.name);
//add student
School1.addStudent(s1);
School2.addStudent(s2);
School2.addStudent(s3);
//add teacher
School1.addTeacher(t1);
School2.addTeacher(t2);
School2.addTeacher(t3);
// console.log(t1)
// console.log(t2)
// console.log(t3)
console.log(School1);
console.log(School2);
