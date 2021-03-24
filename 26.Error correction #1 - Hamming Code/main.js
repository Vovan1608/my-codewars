"use strict";

/*
Implement the encode function, using the following steps:

convert every letter of the text to its ASCII value;
convert ASCII values to 8-bit binary;
triple every bit;
concatenate the result;
For example:

input: "hey"
--> 104, 101, 121                  // ASCII values
--> 01101000, 01100101, 01111001   // binary
--> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
--> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated
*/

function encode(text) {
  console.log([...text].map((el) => el.charCodeAt().toString(2)));
  return [...text].map((el) => [...el.charCodeAt().toString(2)]);
  // return bits;
}

function decode(bits) {
  return text;
}

const text = "hey";

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	border-radius: 5px;
	border: 2px solid #000;
	text-align: center;
	font-size: 36px;
`;

const el = document.createElement("div");
el.innerText = encode(text);

add.append(el);
