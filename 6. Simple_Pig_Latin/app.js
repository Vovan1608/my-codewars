"use strict";

/*
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation 
marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
    //Code here
    return str.split(" ").map( i => {
        if( !["!", ",", ".", "?"].includes(i) ) {
            return (i.slice(1) + i[0] + "ay");
        } else {
            return i;
        }
    }).join(" ");
}

let st = pigIt('Pig latin is cool');
console.log(st);

let st1 = pigIt('Hello world !');
console.log(st1);