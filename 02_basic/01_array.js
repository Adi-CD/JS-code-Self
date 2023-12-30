// declaring an array
const myArr=[1,2,3,4,5]
console.table(myArr);

const myArr2= new Array("a",'b','c','d')
console.table(myArr2);

// array method
//push => adding an element
//pop => removing an last element
//unshift => adding an element on first
//shift => removing the unshift element

myArr.push(6);
myArr.pop();
myArr.unshift();
myArr.shift();
console.table(myArr)

//includes() => boolean return type or yeh questioning ke lia use krte 
//indexof() => it just tells the index if not found gives -1
//join()=> binded the array and also in string datatype

//*********IMP*******
//slice and splice

console.log("A",myArr)
//A [1,2,3,,4,5]

const myN1= myArr.slice(1,3)
console.log(myN1);
[2,3] //also not includes the -1 value of last one

console.log('B',myArr)

const myN2= myArr.splice(1,3)
//splice remove the ya manupulate the array 
console.log('C',myArr)
console.log(myN2);

//**************** new concepts ********************* */

const marvel_heroes=["ironman","Captainamerica","thor"]
const dc_heroes=["batman","flash","wonderwoman"]

marvel_heroes.push(dc_heroes)
//gives me the array of array

 const allHeroes= marvel_heroes.concat(dc_heroes)
 //it gives me the value on a single array by binding it
console.log(allHeroes);

//spread operator => ... gives the indivual values of everything in array
const all_hero=[...marvel_heroes,...dc_heroes]
console.log(all_hero);


