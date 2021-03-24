"use strict";

/* 
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  return [...s.sort()[0]].join("***");
}

const s = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]; // -> 'b***i***t***c***o***i***n'

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	text-align: center;
	border: 1px solid #000;
	font-size: 36px;
`;

const el = document.createElement("div");
el.innerText = twoSort(s);

add.append(el);
