"use strict";

/* 
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x){
  const total1 = getSum(doStringOfUNICode(x));
  const total2 = getSum(doOneFromSeven(doStringOfUNICode(x)));
  return total1 - total2;
}

const doStringOfUNICode = (str) => [...str].map(el => el.charCodeAt()).join("");

const getSum = (str) => [...str].reduce( (sum, next) => Number(sum) + Number(next));

const doOneFromSeven = (str) => [...str].map(el => el === 7 ? 1 : el).join("");

const x = "ABC";

document.body.style.backgroundColor = "#61dafb";

const add = document.querySelector("#add");
add.style = `
	background-color: #f1f5f8;
	text-align: center;
	width: 50%;
	margin: 10px auto;
	font-size: 36px;
	border: 2px solid #000;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = (doOneFromSeven(doStringOfUNICode(x)));

add.append(el);