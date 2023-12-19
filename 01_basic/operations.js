let somenumber=33

let convertString=String(somenumber)
// console.log(typeof convertString);
// console.log(convertString);

/***********operations****************/

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);

console.log("2"+3);
// bcoz in if string is firt then it converted into string
// if string is in last then string performed after the operations

console.log(1+"2"+3);
console.log(1+2+3+"4");

//prefix and post increment

//psotfix
let x = 3;
const y = x++;

//If used postfix, with operator after operand (for example, x++), 
//the increment operator increments and returns the value before incrementing.

 //prefix
//If used prefix, with operator before operand (for example, ++x),
//the increment operator increments and returns the value after incrementing.
let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 3n