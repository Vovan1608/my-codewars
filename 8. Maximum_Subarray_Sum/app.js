/*
The maximum sum subarray problem consists in 
finding the maximum sum of a contiguous 
subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only 
positive numbers and the maximum sum is the sum 
of the whole array. If the list is made up of 
only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. 
Note that the empty list or array is also a valid 
sublist/subarray.
*/

var maxSequence = function(arr) {
    // ...
    let maxSum = 0;
    let partialSum = 0;
    
    for (let item of arr) { // для каждого элемента массива
        partialSum += item; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
    return maxSum;
}

console.log( maxSequence([-1, 2, 3, -9]) ); // 5
console.log( maxSequence([-1, 2, 3, -9, 11]) ); // 11
console.log( maxSequence([-2, -1, 1, 2]) ); // 3
console.log( maxSequence([100, -9, 2, -3, 5]) ); // 100
console.log( maxSequence([1, 2, 3]) ); // 6
console.log( maxSequence([-1, -2, -3]) ); // 0