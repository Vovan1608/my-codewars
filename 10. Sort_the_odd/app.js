"use strict";

/*
You have an array of numbers.
Your task is to sort ascending odd numbers 
but even numbers must be on their places.

Zero isn't an odd number and you don't 
need to move it. If you have an empty array, 
you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
	let i = 0,
			j = 0,
			size = array.length,
			arrayForOdd = [];
	
	for(i; i < size; i+= 1) {

		if(array[i] % 2 !== 0) {
			arrayForOdd.push(array[i]);
		}
	}
	arrayForOdd.sort( (a, b) => {
		return a - b;
	});
	
	for(j; j < size; j += 1) {
		
		if(array[j] % 2 !== 0) {
			array[j] = arrayForOdd.shift();
		}
	}
	return array;
}

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }

let arr = [5, 3, 2, 8, 1, 4];
sortArray(arr);
console.log(arr);