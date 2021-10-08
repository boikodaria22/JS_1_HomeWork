//function declaration
var wellcomeString = 'Nice to see you';
var name = 'Daria';

function wellcome(name, wellcomeString) {
	console.log(wellcomeString + ', ' + name);
	return (wellcomeString + ', ' + name);

}

wellcome(name, wellcomeString);

//function expression
var wellcome = function(wellcomeString, name) {
	console.log(wellcomeString + ', ' + name);
	return (wellcomeString + ', ' + name);
};

wellcome('Nice to see you', 'Daria');
