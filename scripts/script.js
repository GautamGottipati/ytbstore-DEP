function display(){
	console.log("Hello world");
	let enteredText = inputField.value;
	inputField.value = "";
	console.log(enteredText);


}

var clickBtn = document.getElementById("submitBtn");

var inputField1 = document.getElementById("inputField")

clickBtn.addEventListener("click",display);
