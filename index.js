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

