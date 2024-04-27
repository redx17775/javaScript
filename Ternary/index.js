// var ? if true : if false
// use console

let age = 15;
let msg = age >= 18 ? "you are adult" : "you are not an adult";
console.log(msg);

let time = 16;
let greeting = time < 12 ? "good morning" : "good afternoon";
console.log(greeting);

let student = true;
let message = student ? "U are Student" : "U are not Student";
console.log(student);

let amount = 125;
let discount = amount >= 100 ? 10 : 0;
console.log(`Your total is ${(amount = amount - amount * 0.1)}`);
