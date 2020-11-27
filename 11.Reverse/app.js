"use strict";

/*
Impliment the reverse function, which takes in input n and reverses it. 
For instance, reverse(123) should return 321. You should do this without 
converting the inputted number into a string.

Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

function reverse(n) {
	let numDigit = [];
	
	while(n > 0) {
		numDigit[numDigit.length] = n % 10;
		n = Math.floor(n / 10); 
	}
	let i = 0,
			size = numDigit.length,
			num = 0;
	console.log(numDigit);
	for(i; i < size; i += 1) {
		num += numDigit[i] * (10 ** (size - i - 1));
	}
	return num;
}

// function reverse(n){
// 	let rev = 0;
// 	while (n) {
// 			rev = rev * 10 + n % 10;
// 			n = Math.floor(n/10);
// 	}
// 	return rev;
// }

console.log(reverse(123));