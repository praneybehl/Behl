module.exports =  {
	description: 'this is a test',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
		validate: function (value) {
			if ((/.+/).test(value)) { return true; }
			return 'name is required';
		}
	},{
		type: 'confirm',
		name: 'wantTacos',
		message: 'Do you want tacos?'
	}],
	actions: function(data) {
		var actions = [];

		if(data.wantTacos) {
			actions.push({
				type: 'add',
				path: 'folder/{{dashCase name}}.txt',
				templateFile: 'templates/tacos.txt'
			});
		} else {
			actions.push({
				type: 'add',
				path: 'folder/{{dashCase name}}.txt',
				templateFile: 'templates/burritos.txt'
			});
		}

		return actions;
	}
};