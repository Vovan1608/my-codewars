/*
Write a function that takes an integer as input, 
and returns the number of bits that are equal to 
one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 
is 10011010010, so the function should return 5 
in this case
*/

var countBits = function(n) {
    // Program Me
    count = 0;
    if(isPositive(n)) {
        while(n > 0) {
            if(n % 2 === 1 || n === 1) {
                count++;
            }
            n = parseInt(n / 2);
        }
        return count;
    }
}

function isPositive(n) {
    return (n >= 0) ? true : false;
}

//countBits = n => n.toString(2).split('0').join('').length;

var co = countBits(1234);
console.log(co);