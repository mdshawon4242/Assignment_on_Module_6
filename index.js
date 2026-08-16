//Task 1 — Array Methods
let fruits = ['Apple', 'Mango', 'Banana'];

//add orange to the end;
fruits.push("Orange");

//remove the last item of fruits
fruits.pop();

//Display all fruits in the console using forEach;
const fruit = fruits.forEach(fruit => console.log(fruit));


/*-------------------------------
Task 2 — map() & filter()
---------------------------------*/
let numbers = [10, 20, 30, 40, 50];
// Add 10 to Each number using map
const addNumber = numbers.map(num => num + 10);
console.log(addNumber);

// Use filter() to get numbers greater than 30 from the array
let greaterThen30 = numbers.filter(num => num > 30);
console.log(greaterThen30);



/*-------------------------------
Task 3 — reduce(), find(), findIndex()
---------------------------------*/
let marks = [40, 55, 70, 85, 30];

//get the totalMarks using reduce() mathod;
let totalMark = marks.reduce((total, mark) => total += mark, 0);
console.log("Total Marks:", totalMark); 

//Find the first mark greater than 70 using find() mathod
let firstAbove70 = marks.find(mark => mark > 70);
console.log("First mark greater then 70:", firstAbove70)

//Find index of 85 using findIndex() mathod
let indexOf85 = marks.findIndex(mark => mark === 85);
console.log('index of 85 is', indexOf85);




/*-------------------------------
Task 4 — Object Methods
---------------------------------*/
let student = {
  name: 'Rahim',
  age: 22,
  city: 'Chittagong',
};

console.log("keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));
console.log("Does student have 'name' property?:", student.hasOwnProperty("name"));