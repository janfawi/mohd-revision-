const student = {
  id: 1,
  name: "Mohd",
  hobbies: ["art", "reading", "coding", "writing"],
  favIntructor: { name: "Mshary", nickname: "MshMsh" },
  favFood: [
    { name: "pick", meal: "brew mi" },
    { name: "pick", meal: "brew mi2" },
  ],
};

//log favFood (meals only)
console.log(student.favFood.map((returnmeal) => returnmeal.meal));

//log favInsructor name
console.log(student.favIntructor.name);

//log the last elemnt in hobbies in an array
console.log(student.hobbies.splice(-1));

//log the last elemnt onlyyyyyy as a string
console.log(student.hobbies[student.hobbies.length - 1]);

//last char in the last element of array hobbies
let lastElement = student.hobbies[student.hobbies.length - 1];
console.log(lastElement[lastElement.length - 1]);

//any iteration method
//array.iterationmethod(callback function)
// callback function (parameters) => { your code here}
