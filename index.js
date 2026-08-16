//Task 1 — Array Methods
let fruits = ['Apple', 'Mango', 'Banana'];

//add orange to the end;
fruits.push('Orange');

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
let totalMark = marks.reduce((total, mark) => (total += mark), 0);
console.log('Total Marks:', totalMark);

//Find the first mark greater than 70 using find() mathod
let firstAbove70 = marks.find(mark => mark > 70);
console.log('First mark greater then 70:', firstAbove70);

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

console.log('keys:', Object.keys(student));
console.log('Values:', Object.values(student));
console.log('Entries:', Object.entries(student));
console.log(
  "Does student have 'name' property?:",
  student.hasOwnProperty('name'),
);

/*-------------------------------
Task 5 — Set
---------------------------------*/
let set_numbers = new Set([10, 20, 30]);

//Add number in set using add() mathod
set_numbers.add(40);

//Delete number in set using delete() mathod
set_numbers.delete(20);

console.log('Does set_number have 30?', set_numbers.has(30));

//Display all value in the console using forEach
set_numbers.forEach(num => console.log(num));

/*-------------------------------
Task 6 — Map
---------------------------------*/
let map_student = new Map();

//Add a property to Map using set()
map_student.set('name', 'Rahim');
map_student.set('age', 22);

//get the name property to Map using get()
console.log(map_student.get('name'));

//Get the total length of map_student using size
console.log('map_student lenght size is', map_student.size);

/*-------------------------------
Task 7 — Spread & Rest
---------------------------------*/
//Spread
let a = [1, 2, 3];
let b = [4, 5, 6];
//Merge arrays a and b using spread operator
let margeArray = [...a, ...b];
console.log(margeArray);

//Rest
function sum(...rest) {
  let sum = 0;
  for (num of rest) {
    sum += num;
  }
  return sum;
}
console.log('Total sum is:', sum(10, 20, 30));

/*-------------------------------
Task 8 — Class & Constructor
---------------------------------*/
// Create a Class Object
class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

let student1 = new Student('Rahim', 22, 'JavaScript');
let student2 = new Student('Karim', 23, 'React');

console.log(student1);
console.log(student2);

/*-------------------------------
Task 9 — Inheritance & Overriding
---------------------------------*/
// Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
  }
}

//Child Class
class Student_Child extends Person {
  constructor(name, age, course) {
    super(name, age); // parent constructor call
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello, I am ${this.name}, ${this.age} years old, studying ${this.course}.`,
    );
  }
}

let person_1 = new Person('Rahim', 22);
let student_1 = new Student_Child('Shawon', 26, 'React');

person_1.introduce();
student_1.introduce();


/*-------------------------------
Task 10 — Small OOP Project
---------------------------------*/
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount} deposited. Current Balance: ${this.balance}`);
    } else {
      console.log("Invalid deposit amount!");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. Current Balance: ${this.balance}`);
    } else {
      console.log("Invalid withdraw amount or insufficient balance!");
    }
  }

  //static method
  static bankInfo() {
    console.log("Welcome to Islamic Bank! Open 24/7 service.");
  }
}


let account = new BankAccount("Rahim", 5000);
account.deposit(1000);
account.withdraw(500);

//static method call 
BankAccount.bankInfo();

console.log(`Account Holder: ${account.name}, Current Balance: ${account.balance}`);