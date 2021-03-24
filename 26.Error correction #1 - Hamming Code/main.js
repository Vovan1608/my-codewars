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

Task 2: Decode function:
Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:

111 --> 101 : this can and will happen
111 --> 11 : this cannot happen
Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.

Steps:

Split the input into groups of three characters;
Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
Take each group of 8 characters and convert that binary number;
Convert the binary values to decimal (ASCII);
Convert the ASCII values to characters and concatenate the result
For example:

input: "100111111000111001000010000111111000000111001111000111110110111000010111"
--> 100, 111, 111, 000, 111, 001, ...  // triples
-->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
--> 01101000, 01100101, 01111001       // bytes
--> 104, 101, 121                      // ASCII values
--> "hey"
*/

// Utility function to pad byte strings.
const leftPad = (str) => "0".repeat(8 - str.length) + str;

// Utility function to triple each character in a string.
const triple = (str) =>
  str
    .split("")
    .map((char) => char.repeat(3))
    .join("");

// Utility function to encode a single character into a trippled byte.
const encodeChar = (char) => triple(leftPad(char.charCodeAt(0).toString(2)));

// Utility function to chop strings into n-sized chunks.
const chop = (str, n) => str.match(new RegExp(`.{1,${n}}`, "g"));

// Utility function to detect and correct bit errors.
const correctBit = (triad) => (triad.split("0").length > 2 ? "0" : 1);

// Utility function to decode a byte into a character.
const decodeByte = (byte) => String.fromCharCode(parseInt(byte, 2));

// Solutions.
const encode = (text) => text.split("").map(encodeChar).join("");
const decode = (bits) =>
  chop(chop(bits, 3).map(correctBit).join(""), 8).map(decodeByte).join("");

// const text = "hey";
const text = "The Sensei told me that i can do this kata";
// const text = "The";

const bits =
  "100111111000111001000010000111111000000111001111000111110110111000010111"; // "hey"

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

const res = document.createElement("div");
res.innerText = decode(bits);

const fragment = document.createDocumentFragment();
fragment.append(el, res);

add.append(fragment);
