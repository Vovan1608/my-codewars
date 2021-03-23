"use strict";

/* 

*/

function evenOrOdd(str) {
  let diff = [...str].map(el => Number(el)).reduce((a, b) => b % 2 ? a - b : a + b, 0);

  if (diff < 0) {
    return "Odd is greater than Even";
  }

	if (diff > 0) {
    return "Even is greater than Odd";
  }

  return "Even and Odd are the same";
}

const str = "12"; // -> 