//revised an promise concept
//async function always return promise
// in async when run is always parrllely and when we want to stop one thing then we use await buy which ehen one is complete then 
//other will executed

let promise1= new Promise (function(resolve,reject){
	setTimeout(function(){
		console.log("promise 1 is resolved");
		reject(new Error("agye hume"));
	},1000)
})

promise1.then ((value) => {
   console.log(value);
}) 

promise1.catch((error) =>{
	console.log("recieved an error");
})

let promise2= new Promise (function(resolve,reject){
	setTimeout(function(){
		console.log("promise 2 is resolved");
		resolve();
	},1000)
})

let waada1= new Promise (function(resolve,reject){
	setTimeout(function(){
    console.log("setimeout1 has started");
	resolve()
	},2000)
})

waada1.then(()=>{
	let waada2= new Promise(function(resolve,reject){
		setTimeout(()=>{
			console.log("setimout2 has started")
		},2000)
		resolve("waada 2 has resolved")
		return waada2;
	})
}).then((value)=>{
	console.log(value);
})


async function utility(){
let delhiWeather =new Promise (function(resolve,reject){
	setTimeout(function(){
		resolve("delhi is getting hot")
	},4000)
})

let mumWeather = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve("mum is very hot")
	},2000)
})

let dm=  delhiWeather
let mm=mumWeather

return [dm, mm]
}