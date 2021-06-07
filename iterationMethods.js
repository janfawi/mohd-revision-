const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);

//iteration methods : forEach , map , filter

//forEach no return, you are looping over the array elemnts
// arrayName.forEach(callBack function looks like (parameters if needed) => {
//your code here})

let sum = 0;
numbers.forEach((number) => {
  sum = sum + number;
});

//map
const newNumbers = numbers.map((number) => number + 2);

//filter
const filetred = numbers.filter((number) => number > 3);
