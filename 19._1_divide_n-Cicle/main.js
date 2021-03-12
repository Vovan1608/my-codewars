/* 
Let be n an integer prime with 10 e.g. 7.

1/7 = 0.142857 142857 142857 ....
We see that the decimal part has a cycle: 142857. The length of this cycle is 6. In the same way:
1/11 = 0.09 09 09 .... Cycle length is 2.
Task
Given an integer n (n > 1) the function cycle(n) returns the length of the cycle if there is one otherwise (n and 10 not coprimes) return -1.
Examples:
cycle(5) = -1
cycle(13) = 6 -> 0.076923 076923 0769
cycle(21) = 6 -> 0.047619 047619 0476
 */

function cycle(n) {
  if (n % 5 === 0 || n % 2 === 0) {
    return -1;
  }

  let shortestPeriodLength = 0;
  const TEN = 10;
  let dev = TEN;

  while (dev % n !== 1) {
    dev *= TEN;
    shortestPeriodLength += 1;
  }

  return shortestPeriodLength + 1;
}

const res = cycle(197);
document.writeln(res);
