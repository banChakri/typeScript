function greetPerson(name) {
	let greet;
	if(name === 'kalyan'){
		greet = "Hello Kalyan";
	}else{
		greet = "Hi There";
	}
	console.log(greet);
}

greetPerson('kalyan');

var a = 1;
var b = 2;

if(a === 1){
	var a = 10;
	let b = 20;
	console.log(a);
	console.log(b);
}

console.log(a);
console.log(b);

var c = 1;
var c = 2;