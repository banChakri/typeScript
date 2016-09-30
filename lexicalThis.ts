var employee = {
	id: 1,
	greet: function(){
		setTimeout(function(){
			console.log(this.id);
			//It will be undefined
		}, 1000);
	}
};

var employee1 = {
	id: 1,
	greet: function(){
		var _self = this;
		setTimeout(function(){
			console.log(_self.id);
			//It will be 1
		}, 1000);
	}
};

var employee2 = {
	id: 1,
	greet: function(){
		setTimeout(() => {
			console.log(this.id);
			//It will be 1
		}, 1000);
	}
};


employee.greet();
employee1.greet();
employee2.greet();