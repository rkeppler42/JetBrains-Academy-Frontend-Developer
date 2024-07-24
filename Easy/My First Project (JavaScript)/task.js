const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

console.log("Earned amount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");

let income = 202 + 118 + 2250 + 1680 + 1075 + 80;

console.log();
console.log("Income: $" + income);

let staffExpenses = input("Staff expenses:\n");
let otherExpenses = input("Other expenses:\n");
let netIncome = income - staffExpenses - otherExpenses;

console.log(`Net income: ${netIncome}`);
