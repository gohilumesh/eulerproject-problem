"use strict";

const readlineSync = require('readline-sync');
const problems = require('./lib/problems');

const execute = () => {
  console.log()
  let problemsNo = ['Sum Square difference', 'Max Path Sum', 'Count Lychrel Numbers'],
  index = readlineSync.keyInSelect(problemsNo, 'Which problem you would like to execute, please enter ?');
  const triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ];

  if (index === 0) {
    let num = readlineSync.question('Enter No to find sum square difference -- Problem 5? ');
    let result = problems.sumSquareDiff(num);
    console.log(`Result of ${num} is ${result}`);

  } else if (index === 1) {
    console.log("Problem 18 triangle, Same solution applies for problem 67.");
    console.log(triangle);
    console.log("****************");
    let result = problems.maxPathSum();
    console.log(`Result is ${result}`)
  } else if (index === 2) {
    let num = readlineSync.question('Enter No to Count Lychrel Numbers -  Problem 55? ');
    let result = problems.countLychrelNumbers(num);
    console.log(`Result of ${num} is ${result}`);
  }
};

execute();
