var myVideos = [
	{
		name : "Title1",
		imgUrl : "./images/video2.png",
		imgLink : "http://google.com/",
		content : "Hello world"

	},
	{
		name : "Title2",
		imgUrl : "./images/video2.png",
		imgLink : "http://google.com/",
		content : "Hello world"
	},
	{
		name : "Title3",
		imgUrl : "./images/video2.png",
		imgLink : "http://google.com/",
		content : "Hello world"
	}

]; 

function creatRow(){
	let newDiv = document.createElement("div");
	newDiv.classList.add("row");
	return newDiv;
	// console.log(newDiv); 
}

function addingImg(){
	let colDiv = document.createElement("div");
	colDiv.classList.add("col3");
	let imageTag = document.createElement("img");
	imageTag.setAttribute("src","./images/video2.png");
	imageTag.setAttribute("alt","content");
	colDiv.appendChild(imageTag);
	return colDiv;

}

function display(){
	console.log("Hello world");
	let enteredText = inputField.value;
	inputField.value = "";
	console.log(enteredText);
	var para = document.createElement("p");
	var node = document.createTextNode("Welcome to videos");
	para.appendChild(node);
	var part2Tag = document.querySelector(".part2");
	console.log(part2Tag);
	part2Tag.appendChild(para);


}

var clickBtn = document.getElementById("submitBtn");

var inputField1 = document.getElementById("inputField")

clickBtn.addEventListener("click",display);

console.log(myVideos);

for(let obj of myVideos){
	console.log(`name = ${obj.name}, content = ${obj.content}`);

}

let mRow = creatRow();
console.log( mRow);

let colnum = addingImg();
mRow.appendChild(colnum);


console.log(mRow);

