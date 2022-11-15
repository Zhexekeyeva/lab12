document.getElementsByTagName("h1")[0].innerHTML = "Lab12 Assignment";
document.getElementsByTagName("h1")[0].style.color = "blue"; //Changing "Hello world" to "Lab Assignment 12"


var hr = document.createElement("hr");	//Adding horizontal rule
document.body.appendChild(hr);

var task = document.createElement("h2");		//creating two 'h2' for "task" and "submission"
var submission = document.createElement("h2");
task.innerHTML = "Task";
submission.innerHTML = "Submission";


document.body.appendChild(task);

var par1 = document.createElement("p");
par1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(par1);

var list = document.createElement("ul"); //first I fill the list, then append it to the body at the end


	var li1 = document.createElement("li");
	li1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
	li1.style.color = "green";
	list.appendChild(li1);		//first element of the list

	var li2 = document.createElement("li");
	li2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
	li2.style.color = "purple";
	list.appendChild(li2);		//second

	var li3 = document.createElement("li");
	li3.innerHTML = "change content of the elements (<b>5 points</b>);";
	li3.style.color = "green";
	list.appendChild(li3);		//third

	var li4 = document.createElement("li");
	li4.innerHTML = "change styles of the elements (<b>5 points</b>);";
	li4.style.color = "purple";
	list.appendChild(li4);		//fourth

	var li5 = document.createElement("li");
	li5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
	li5.style.color = "green";
	list.appendChild(li5);		//fifth

	var li6 = document.createElement("li");
	li6.innerHTML = "change classes of the elements (<b>5 points</b>).";
	li6.style.color = "purple";
	list.appendChild(li6);		//sixth


document.body.appendChild(list); //adding the list to the 'body'


var par2 = document.createElement("p");
par2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href=\"https://github.com/yessen/nu_web_programming/tree/main/week12\">link.</a>"
document.body.appendChild(par2);


var hr1 = document.createElement("hr");	//Adding horizontal rule
document.body.appendChild(hr1);


document.body.appendChild(submission); //<h2>Submission<\h2>


var par3 = document.createElement("p");
par3.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(par3);



var list1 = document.createElement("ul"); //first I fill the list, then append it to the body at the end


	var n_li1 = document.createElement("li");
	n_li1.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).";
	n_li1.style.color = "green";
	list1.appendChild(n_li1);		//first element of the list

	var n_li2 = document.createElement("li");
	n_li2.innerText = "Clone this repository to your local machine and work inside it.";
	n_li2.style.color = "purple";
	list1.appendChild(n_li2);		//second

	var n_li3 = document.createElement("li");
	n_li3.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).";
	n_li3.style.color = "green";
	list1.appendChild(n_li3);		//third

	var n_li4 = document.createElement("li");
	n_li4.innerHTML = " Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
	n_li4.style.color = "purple";
	list1.appendChild(n_li4);		//fourth

	var n_li5 = document.createElement("li");
	n_li5.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
	n_li5.style.color = "green";
	list1.appendChild(n_li5);		//fifth

	var n_li6 = document.createElement("li");
	n_li6.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
	n_li6.style.color = "purple";
	list1.appendChild(n_li6);		//sixth

	var n_li7 = document.createElement("li");
	n_li7.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
	n_li7.style.color = "green";
	list1.appendChild(n_li7);		//seventh


document.body.appendChild(list1); //adding the new list to the body

document.getElementsByTagName("h2")[0].style.color = "red"; //changing "Task" color to red
document.getElementsByTagName("h2")[1].style.color = "red"; //changing "Submission" color to red

var hr2 = document.createElement("hr");	//Adding horizontal rule
document.body.appendChild(hr2);
