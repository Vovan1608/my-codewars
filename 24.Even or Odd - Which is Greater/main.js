"use strict";

/* 

*/

function evenOrOdd(str) {
  let odd = 0;
  let even = 0;
  
  [...str].forEach(el => {
    el = Number(el);
    el % 2 === 0 ? even += el : odd += el;
  });
  
  if (odd > even) {
    return "Odd is greater than Even";
  } else if (odd < even) {
    return "Even is greater than Odd";
  } else {
    return "Even and Odd are the same";
  }
  
}