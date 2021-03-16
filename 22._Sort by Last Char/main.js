/* 
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
x = 'man i need a taxi up to ubud';// ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
*/

function last(x) {
  return x
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      return 0;
    })
    .map((el) => [...el].reverse().join(""))
    .join(" ");
}

const x = "man i need a taxi up to ubud";
const y = "what time are we climbing up the volcano";
const res = last(x);

const add = document.querySelector(".add");
const elem = document.createElement("div");
elem.innerText = res;
elem.style = "background: #61dafb";

add.appendChild(elem);
