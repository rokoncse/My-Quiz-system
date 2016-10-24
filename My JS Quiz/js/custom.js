var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0; // steep 1
var questions = [
	["1. What is 10 + 4 ?", " 12", " 14", " 16", " 18", "B"],
	["2. What is 20 - 9 ?", " 7", " 13", " 11", " 9", "C"],
	["3. What is 7 x 3 ?", " 21", " 24", " 25", " 20", "A"],
	["4. What is 8 / 2 ?", " 10", " 3", " 4", " 6", "C"],
	["5. What is 100 - 20 ?", " 83", " 80", " 79", " 85", "B"],   //steep 2
	["6. What is 20 + 6 ?", " 25", " 23", " 26", " 28", "C"],
	["7. What is 40 x 3 ?", " 120", " 124", " 125", " 110", "A"],
	["8. What is 30 / 2 ?", " 10", " 13", " 15", " 16", "C"],
	["9. What is 10 + 4 ?", " 12", " 14", " 16", " 18", "B"],
	["10. What is 20 - 9 ?", " 7", " 13", " 11", " 9", "C"],
	["11. What is 7 x 3 ?", " 21", " 24", " 25", " 20", "A"],
	["12. What is 8 / 2 ?", " 10", " 3", " 4", " 6", "C"],
	["13. What is 100 - 20 ?", " 83", " 80", " 79", " 85", "B"],   //steep 2
	["14. What is 20 + 6 ?", " 25", " 23", " 26", " 28", "C"],
	["15. What is 40 x 3 ?", " 120", " 124", " 125", " 110", "A"],
	["16. What is 30 / 2 ?", " 10", " 13", " 15", " 16", "C"],
	["17. What is the Capital City in Bangladesh ?", " Chittagong", " Khulna", " Rajshahi", " Dhaka", "D"],
];


function _(x){
	return document.getElementById(x); // steep 3
}


function renderQuestion(){   //steep 4
	test = _("test");

	if(pos >=questions.length){  // steep 10
		test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct.</h2>";
		_("test_status").innerHTML = "Your Results Below Here :";
		pos = 0;
		correct = 0;
		return false;
	}

	_("test_status").innerHTML = "Question: " + (pos+1) + " of " + questions.length;  // steep 5

	question = questions[pos][0]; //steep 6
		chA = questions[pos][1];
		chB = questions[pos][2];
		chC = questions[pos][3];
		chD = questions[pos][4];

	test.innerHTML = "<h3>" + question + "</h3>";  // steep 7
	test.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'>" + chD + "<br><br>";
	test.innerHTML += "<button id='subbutton' onclick='checkAnswer()'>Submit Answer</button>"; 
}

function checkAnswer(){  // steep 8
  	var	choices = document.getElementsByName("choices"); 
	for(i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][5]){
		correct++;
	}
	pos++;
	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);   // steep 9