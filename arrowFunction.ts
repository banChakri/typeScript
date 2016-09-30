var getFunction = function(){
	return 10;
}

console.log(getFunction());

const getArrowValue = (m) => 10 * m;

console.log(getArrowValue(5));

const getArrowValueTwo = (m, bonus) => m * bonus;

console.log(getArrowValueTwo(5, 100));

console.log(typeof getArrowValue);

