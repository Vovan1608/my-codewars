/* 
that will find the smallest positive number that is evenly divisible by all of the numbers from 1 to n (n <= 40).
smallest(5) == 60 // 1 to 5 can all divide evenly into 60
smallest(10) == 2520
*/

function smallest(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
		ans = (ans * i) / (gcd(ans, i));
  }

  return ans;
}

function gcd(a, b) {
	return a % b ? gcd(b, a % b) : b;
}

console.log(smallest(5));