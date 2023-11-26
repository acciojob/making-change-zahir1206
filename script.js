const makeChange = (c) => {
  // your name here
	let output={};
	for(let i in units){
		let currentUnit=units[i];
		output[i]=parseInt(c/currentUnit);
		c=c-currentUnit*output[i];
	}
	console.log(output);
};

// Do not the change the code below
// const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
