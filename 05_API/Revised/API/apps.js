//fetch api is like interface between the two networks
// sender and reciever
//fetch always return the promise

async function utility(){
	let content =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
	let output =  await content.json();
	console.log(output)
}
utility();

//creating a post call
async function helper(){
let options = {
  method: "POST",
  body: JSON.stringify({
    title: "aditya",
    body: "sexy ",
    userId: 1998,
    weight: 90,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

let content = await fetch("https://jsonplaceholder.typicode.com/posts", options);
let resposne = content.json();
return resposne;
}

async function utility(){
   let ans=await helper();
   console.log(ans);
}
utility();


// closures

