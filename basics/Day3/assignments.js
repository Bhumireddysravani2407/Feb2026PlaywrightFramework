//Write a while loop to find the sum of numbers from 1 to 100

let n = 1;
let sum = 0;

while (n <= 100) {
  sum += n;
  n++;
}

console.log("Sum:" + sum);

//Create a for loop to print the multiplication table of 5

for (let i = 1; i <= 10; i++) 
    {
  console.log("5 x " + i + " = " + (5 * i));
}

//Write a loop to count vowels in a string

let str = "Welcome to playwright training";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    count++;
  }
}



console.log("Number of vowels:", count);

//Create a loop to reverse a number
// rounds a number down to the nearest whole integer.

let num = 1234;
let reversed = 0;

for (let i = num; i > 0; i = Math.floor(i / 10)) {
  reversed = reversed * 10 + (i % 10);//0*10+1234%10=4//in first iteration it is 4 and i will become 123
}

console.log("Reversed number:", reversed);