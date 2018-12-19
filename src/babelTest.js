//ES6 코드 작성

let [a,,b] = [1,2,3];

let myName = "홍길동";

console.log(`Hello ${myName}`);

class Student {
    constructor(sName) {
        this.sName = sName;
    }
}
let stu = new Student("Moon");
console.log(stu.sName);