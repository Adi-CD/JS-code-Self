// in objects when we declaed literals so in this no singleton objects maked
// but in constructor it makes singleton


//Q=> take an symbol and insert in object and print ir on by console log
const mySym=Symbol["mykey"];

//object literals
const jsUser={
    name:"aditya",
    //mysym:"mykey"  //wrong method to put it...
    [mySym]:"mykey",  // correct method to put it...
    email:"aditya@google.com",
    location:"delhi",
    isLoggedIn:true,
}

//accessing method
// console.log(jsUser.email);  //first
// console.log(jsUser["email"]) //second method

// console.log( jsUser[mySym]);

// by overwiting the values by using =
jsUser.email="aditya@gamil.com"
// by feeezing the value that no one can change it..
//Object.freeze(jsUser)

//by function  greeting
jsUser.greeting=function(){
    console.log("hello js ")
}
jsUser.greetingTwo=function(){
    console.log('hello js, ${this.location}');
}
console.log(jsUser.greeting); // by this we get the function reference 
console.log(jsUser.greeting()); // by this u get the function value and also the undefined

console.log(jsUser.greetingTwo());