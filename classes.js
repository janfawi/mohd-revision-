class Student {
  constructor(id, name, hobbies) {
    this.id = id; //this.id is the class property you have to use "this"
    this.name = name;
    this.hobbies = hobbies;
  }
  sayHello = () => {
    console.log(`Hello ${this.name}`);
  };
}

const mohd = new Student(1, "Mohd", ["writing", "codding"]); //new instance of the class that you can use
const abdullah = new Student(2, "abdullah", ["coding"]); //new instance of the class that you can use
console.log(mohd.name);
console.log(abdullah.sayHello()); //console.log cannot print console.log

//******************* */
class FreshMen extends Student {
  constructor(id, name, hobbies, gpa) {
    super(id, name, hobbies);
    this.gpa = gpa;
  }
}
const salwa = new FreshMen(4, "Salwa", ["coding"], 4);

console.log(salwa.name);
salwa.sayHello();
