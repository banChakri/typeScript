let getValue = function(value = 10, bonus = 5){
	console.log(value + bonus);
};

getValue();
getValue(10);
getValue(undefined, undefined);