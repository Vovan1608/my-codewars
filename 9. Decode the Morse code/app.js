"use strict";

/*
In this kata you have to write a simple Morse 
code decoder. While the Morse code is now mostly 
superseded by voice and digital data communication 
channels, it still has its use in some applications 
around the world.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
*/
const MORSE_CODE = {
    "-----" :  "0",
    ".----" :  "1",
    "..---" :  "2",
    "...--" :  "3",
    "....-" :  "4",
    "....." :  "5",
    "-...." :  "6",
    "--..." :  "7",
    "---.." :  "8",
    "----." :  "9",
    ".-"    :  "a",
    "-..."  :  "b",
    "-.-."  :  "c",
    "-.."   :  "d",
    "."     :  "e",
    "..-."  :  "f",
    "--."   :  "g",
    "...."  :  "h",
    ".."    :  "i",
    ".---"  :  "j",
    "-.-"   :  "k",
    ".-.."  :  "l",
    "--"    :  "m",
    "-."    :  "n",
    "---"   :  "o",
    ".--."  :  "p",
    "--.-"  :  "q",
    ".-."   :  "r",
    "..."   :  "s",
    "-"     :  "t",
    "..-"   :  "u",
    "...-"  :  "v",
    ".--"   :  "w",
    "-..-"  :  "x",
    "-.--"  :  "y",
    "--.."  :  "z",
    "/"     :  " ",
    "-·-·--":  "!",
    "·-·-·-":  ".",
    "--··--":  ","
}

function decodeMorse(str) {
    // ...
    return str.split(" ").map(element => {
        return MORSE_CODE[element];
    }).join(" ");
}

let st = decodeMorse('.... . -.--   .--- ..- -.. .'); // "HEY JUDE"
console.log(st);