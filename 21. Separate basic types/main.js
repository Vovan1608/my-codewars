/* 
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
*/

function separateTypes(input) {
  return input.reduce(
    (obj, next) => {
      obj[typeof next].push(next);
      return obj;
    },
    {
      number: [],
      string: [],
      boolean: [],
    }
  );
}

const input = ["a", 1, 2, false, "b"];
const res = separateTypes(input);
console.log(res);
