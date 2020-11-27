"use strict";

/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:
-There must be a function for each number from 0 ("zero") to 9 ("nine")
-There must be a function for each of the following mathematical operations: 
	plus, minus, times, dividedBy.
-Each calculation consist of exactly one operation and two numbers
-The most outer function represents the left operand, the most inner function
represents the right operand
-Division should be integer division. For example, this should return 2, 
	not 2.666666...:

https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
*/

function plus(func) {
	return ["+", func];
}

function minus(func) {
	return ["-", func];
}

function times(func) {
	return ["*", func];
}

function dividedBy(func) {
	return ["/", func];
}

function zero() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 0 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 0 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 0 * arguments[0][1];
    } else {
      return Math.floor(0 / arguments[0][1]);
    }
  } else {
    return 0;
  }
}

function one() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 1 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 1 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 1 * arguments[0][1];
    } else {
      return Math.floor(1 / arguments[0][1]);
    }
  } else {
    return 1;
  }
}

function two() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 2 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 2 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 2 * arguments[0][1];
    } else {
      return Math.floor(2 / arguments[0][1]);
    }
  } else {
    return 2;
  }
}

function three() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 3 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 3 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 3 * arguments[0][1];
    } else {
      return Math.floor(3 / arguments[0][1]);
    }
  } else {
    return 3;
  }
}

function four() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 4 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 4 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 4 * arguments[0][1];
    } else {
      return Math.floor(4 / arguments[0][1]);
    }
  } else {
    return 4;
  }
}

function five() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 5 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 5 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 5 * arguments[0][1];
    } else {
      return Math.floor(5 / arguments[0][1]);
    }
  } else {
    return 5;
  }
}

function six() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 6 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 6 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 6 * arguments[0][1];
    } else {
      return Math.floor(6 / arguments[0][1]);
    }
  } else {
    return 6;
  }
}

function seven() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 7 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 7 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 7 * arguments[0][1];
    } else {
      return Math.floor(7 / arguments[0][1]);
    }
  } else {
    return 7;
  }
}

function eight() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 8 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 8 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 8 * arguments[0][1];
    } else {
      return Math.floor(8 / arguments[0][1]);
    }
  } else {
    return 8;
  }
}

function nine() {
  if(arguments[0]) {
    
    if(arguments[0][0] === "+"){
      return 9 + arguments[0][1];
    } else if(arguments[0][0] === "-") {
      return 9 - arguments[0][1];
    } else if(arguments[0][0] === "*") {
      return 9 * arguments[0][1];
    } else {
      return Math.floor(9 / arguments[0][1]);
    }
  } else {
    return 9;
  }  
}
console.log( four( plus( nine() ) ) );


//! other solution
// function zero(operator) {
//   return operator ? operator(0) : 0;
// }

// function one(operator) {
//   return operator ? operator(1) : 1;
// }

// function two(operator) {
//   return operator ? operator(2) : 2;
// }

// function three(operator) {
//   return operator ? operator(3) : 3;
// }

// function four(operator) {
//   return operator ? operator(4) : 4;
// }

// function five(operator) {
//   return operator ? operator(5) : 5;
// }

// function six(operator) {
//   return operator ? operator(6) : 6;
// }

// function seven(operator) {
//   return operator ? operator(7) : 7;
// }
// function eight(operator) {
//   return operator ? operator(8) : 8;
// }

// function nine(operator) {
//   return operator ? operator(9) : 9;
// }

// function plus(rightVal) {
//   return function(leftVal) {
//     return leftVal + rightVal;
//   }
// }

// function minus(rightVal) {
//   return function(leftVal) {
//     return leftVal - rightVal;
//   }
// }

// function times(rightVal) {
//   return function(leftVal) {
//     return leftVal * rightVal;
//   }
// }

// function dividedBy(rightVal) {
//   return function(leftVal) {
//     return leftVal / rightVal;
//   }
// }