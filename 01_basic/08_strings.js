const name="Aditya"
const repoCount=50

// new way to intialize the string in modern js
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//new way to declare the strings
const Game= new String("hello")
console.log(Game);
console.log(Game.__proto__) //it gives me the object prototype
console.log(Game.toUpperCase);// to convert in capital letters


const newString="hitesh"
console.log(newString.substring(0,5)) // break into some parts

console.log(newString.slice(0,-3)) // you can give the negative values also in this

const valueName="    aditya     "
console.log(valueName.trim()) //remove the unwnated spaces 

//replace (search value , replace value)
