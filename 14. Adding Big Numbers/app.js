"use strict";

/* 
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

add("123", "321"); -> "444"
add("11", "99");   -> "110"
add('63829983432984289347293874', '90938498237058927340892374089'); -> "91002328220491911630239667963"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  const bigInt = Number.MAX_SAFE_INTEGER;
  if (Number(a) <= bigInt && Number(b) <= bigInt) {
    return (Number(a) + Number(b)).toString();
  } else {
    a = [...a];
    b = [...b];
    console.log(a);
    console.log(b);
  }
}

const a = "63829983432984289347293874";
const b = "90938498237058927340892374089";

console.log(add(a, b));
