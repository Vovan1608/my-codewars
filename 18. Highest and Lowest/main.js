/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
  const num = numbers.split(" ");
  return `${Math.max(...num)} ${Math.min(...num)}`;
}

const res = highAndLow("1 9 3 4 -5");

const add = document.querySelector(".add");
const div = document.createElement("div");
div.innerText = res;
add.appendChild(div);
