//1- Write a program that allow to user enter number then print it

/*let userInput = Number(prompt("Enter a number: "));
console.log(userInput);*/

/*
2 - Write a program that take number from user then
print yes if that number can divide by 3 
and 4 otherwise print no
 */

/*let userInput = Number(prompt("Enter a number: "));
if (userInput % 3 === 0 && userInput % 4 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}*/

/* 3- Write a program that allows the user 
to insert 2 integers then print the max*/

/*let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));

if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else {
    console.log(secondNumber);
}*/

/*4- Write a program that allows the user to
insert an integer then print negative if it is 
negative number otherwise print positive.*/

/*let userInput = Number(prompt("Enter a number: "));

if (userInput < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}*/


/*5- Write a program that take 3 integers
from user then print the max element 
and the min element. */

/*let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));
let thirdNumber = Number(prompt("Enter the third number: "));
let maxEl, minEl;
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    maxEl = firstNumber;
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    maxEl = secondNumber;
} else {
    maxEl = thirdNumber;
}

if (firstNumber < secondNumber && firstNumber < thirdNumber) { 
    minEl = firstNumber;
} else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
    minEl = secondNumber;
} else {
    minEl = thirdNumber;
}

console.log(`Max = ${maxEl}`);
console.log(`Min = ${minEl}`);*/

/*6- Write a program that allows
the user to insert integer number then 
check If a number is oven or odd*/

/*let userInput = Number(prompt("Enter a number: "));

if (userInput % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}*/

/*7- Write a program that take character
from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant*/

/*let userInputChar = prompt("Enter a character: ");
let vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(userInputChar.toLowerCase())) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}*/

/*Write a program that allows user to
insert integer then print all numbers between 1 to 
that’s number*/

/*let userInput = Number(prompt("Enter a number: "));
for (let i = 1; i <= userInput; i++) {
    console.log(i);
}*/

/*10- Write a program that allows user to
insert integer then print a multiplication
table up to 12.*/

/*let userInput = Number(prompt("Enter a number: "));

for (let i = 1; i <= 12; i++) {
    console.log(userInput * i);
}*/


/*11- Write a program that allows user to insert
number then print all even numbers 
between 1 to this number 
*/

/*let userInput = Number(prompt("Enter a number: "));

for (let i = 1; i <= userInput; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}*/

/*12- Write a program that take two integers then print the power*/

/*let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));

console.log(firstNumber ** secondNumber);
console.log(Math.pow(firstNumber, secondNumber));*/

/*13- Write a program to enter marks of five subjects and calculate total, average and 
percentage.*/

/*let totalMarks = 0;
let numberOfSubjects = 5;

for (let i = 1; i <= numberOfSubjects; i++) {
    let marks = Number(prompt(`Enter the marks of subject: `));
    if (parseInt(marks) >= 0) {
        totalMarks += parseInt(marks);
    } else {
        console.log("Invalid marks");
        i--;
    }
}

let average = totalMarks / numberOfSubjects;
let percentage = (totalMarks / (numberOfSubjects * 100)) * 100;

console.log(`Total Marks = ${totalMarks}`);
console.log(`Average = ${average}`);
console.log(`Percentage = ${percentage}`);*/