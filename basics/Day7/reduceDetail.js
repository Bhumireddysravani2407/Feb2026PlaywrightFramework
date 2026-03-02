const a = [2, 4, 6];

// Use reduce to calculate the sum
const sum = a.reduce((acc, x) => acc + x, 10);
//reduce() → loops through the array and accumulates values into a single result.
//acc is accumulator (stores the running total).
//x → current element from the array.
//0 → initial value of the accumulator

// Array: [2, 4, 6]
// Initial value of acc = 1

// First element: 2
// acc = 0 + 2 = 2

// Second element: 4
// acc = 2 + 4 = 6

// Third element: 6
// acc = 6 + 6 = 12

// Final result stored in sum = 12


console.log(sum);