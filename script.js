let userName = "Ayo";

console.log(userName);

userName = "Kunle";

console.log(userName);

const userAge = 30;

console.log(userAge);

// primitive data types

let userClass = "Myclass";
let userGender = "Female";
let userHeight = 5.8;
let userData;
// string
console.log(typeof userClass);
// number
console.log(typeof userHeight);
// boolean
console.log(typeof true);
// null
console.log(typeof null);
// undefined
console.log(typeof userData);

// non-primitive

let students = ["Maryam", "Wale", "Daniel"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

let tech = ["Python", "Javascript", "Cybersecurity", "HTML", "C++", "Java"];
console.log(tech[0]);
console.log(tech[1]);
console.log(tech[2]);
console.log(tech[3]);
console.log(tech[4]);
console.log(tech[5]);

// objects

const user = {
  name: "Badejo Maryam",
  age: 20,
  class: "Frontend",
};

console.log(user["class"]);

const users = [
  {
    name: "Badejo Maryam",
    course: "Techmaster",
    career: "Software Engineer",
    gender: "Female",
    weight: "67",
  },
  {
    name: "Adebayo faith",
    course: "Full Stack",
    career: "Cyber Security",
    gender: "Male",
    weight: "34",
  },
  {
    name: "Ogunleye Maryam",
    course: "UI/UX Design",
    career: "Data Anlysis",
    gender: "Female",
    weight: "17",
  },
  
];

console.log(users[0].course);
console.log(users[1].course);
console.log(users[2].course);
console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);
console.log(users[0].career);
console.log(users[1].career);
console.log(users[2].career);

const myJson = JSON.stringify(users[0]);

const myObject = JSON.parse(myJson);

console.log(myJson);

console.log(myObject);

const myJson2 = JSON.stringify(users[1]);

const myObject2 = JSON.parse(myJson2);

console.log(myJson2);

console.log(myObject2);

const myJson3 = JSON.stringify(users[2]);

const myObject3 = JSON.parse(myJson3);

console.log(myJson3);

console.log(myObject3);

function myFunc() {
  let color = "white";
  console.log("Javascript");
  console.log("Engineer");
  console.log(color);
}

myFunc();
myFunc();

// alert("Welcome "+ users[0].name + " " + users[0].gender)

// alert(`Welcome ${users[0].name} ${users[0].gender}`)
function addNum(num1, num2) {
  let sum = num1 + num2;

  return sum;
}

console.log(addNum(600, 400));

// alert(addNum(64, 36))

// comparison operators > < == != === !==

console.log(10 > 200);

console.log(23 < 10);

num1 = "600";
num2 = "230";

console.log(600 == num1);

console.log(420 != num2);

console.log(230 === 230);

console.log(50 !== 50);

// // control flow

// // conditionals

// // if else
if (users[0].weight > 50) {
  console.log("Overweight");
} else if (users[0].weight <= 50) {
  console.log("Normal");
} else {
  console.log("Underweight");
}

if (users[1].weight > 50) {
  console.log("Overweight");
} else if (users[1].weight <= 50) {
  console.log("Normal");
} else {
  console.log("Underweight");
}

if (users[2].weight > 50) {
  console.log("Overweight");
} else if (users[2].weight >=20) {
  console.log("Normal");
} else {
  console.log("Underweight");
}

// ternary operators

let userPosition = users[0].gender ==="Female" ? "Princess" : "Prince";

console.log(userPosition);
let userPosition1 = users[1].gender ==="Female" ? "Princess" : "Prince";

console.log(userPosition1);
let userPosition2 = users[2].gender ==="Female" ? "Princess" : "Prince";

console.log(userPosition2);

let userNames = users[0].gender == "Female" ? "Blue" : "Pink";

console.log(userNames);
let userNames1 = users[1].gender == "Female" ? "Blue" : "Pink";

console.log(userNames1);
let userNames2 = users[2].gender == "Female" ? "Blue" : "Pink";

console.log(userNames2);




// switch

switch (users[0].career) {
  case "Software Engineer":
    console.log("You are a Software Engineer");
    break;
  case "Cyber Security":
    console.log("You are a CyberSecurity Personell");
    break;
  case "Data Anlysis":
    console.log("You are a Data Analyst");
    break;
  default:
    console.log("You are not a Software Engineer");
    break;
} 




users.push({
    name: "Badero Faizah",
    course: "Frontend Designer",
    career: "Tailor",
    gender: "Male",
    weight: "54",
  }  
  )

// loops

// for

for (let p = 0; p <= users.length ; p++) {
  console.log(p);
}

for(let index = 0; index < users.length; index++){
  console.log(`Welcome to the class ${users[index].name}`)
}

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
    console.log(`${i} is an even number`)
} else{
  console.log(`${i} is an odd number`)
}
}

// while

while (users[0].weight < 50) {
  console.log("Underweight");
}

users.map((eachUser) => {
console.log(eachUser.name)

})

// array methods 

let phones = ["Nokia", "Samsung", "Tecno"]

phones.push("Redmi")
phones.pop()

phones.unshift("Iphone")
phones.shift()

phones.splice(1, 0, "Honors")


console.log(phones)

// arithmetic operator + - * / % ++ --

console.log(4+5)
console.log(45-9)
console.log(76*2)
console.log(890/2)
console.log(40%7)
let num = 123
num++
num++
num--
console.log(num)

let jay = 11

while(jay <= 16){
  console.log("user is eligible for voting")
jay++
}

const singles = ["Maryam", "Khadijah", "Firdaus"]

const couples = ["Habeebah", "Aleezah", "Yusrah"]

const menRied = [...singles, ...couples]

menRied.map((lets) => {
  console.log(lets)
 })

 