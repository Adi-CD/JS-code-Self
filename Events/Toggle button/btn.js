let nwbtn=document.querySelector("#mode")
let currMode="light" //dark 

nwbtn.addEventListener('click',function(e){
	if (currMode==="light") {
	currMode="dark"
	document.querySelector("body").style.backgroundColor="black";
	}else{
		currMode="light"
			document.querySelector("body").style.backgroundColor="white";
	}
	console.log(currMode);
},false)