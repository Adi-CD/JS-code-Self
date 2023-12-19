let score="23bcd"

console.log(typeof score); //method 1 of typeof
console.log(typeof (score)); //method 2 of typeof to put in a method 

let valueIsConversion= Number(score);
//in js when you converted the datatype it converted into another 
//but not the value is converted 
console.log(valueIsConversion); 

//whole conversion of values 
//values
// "33" => 33
// "33bcd"=> NAN
//undefinded => NAN
// boolean => 1/0
//Null =>0

let isLogged=0

let isBoolean= Boolean(isLogged)
console.log(isBoolean);

//boolean
//1=>true
//0=>false
//""=>false
//"name"=>true

let digit=12

let numberToString=String(digit)
console.log( typeof numberToString); 

//string
//string
//33=>33
//typeof =>string