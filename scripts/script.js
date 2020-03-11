var clickBtn = document.getElementById("submitBtn");

var inputField1 = document.getElementById("inputField")

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

var getData = function(){

	console.log("Hello world");
	let enteredText = inputField.value;
	inputField.value = "";
	console.log(enteredText);
    let apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAYpGAy_3C7wQ1d9tLnvi1j731TGaTw09I&type=video&part=snippet&maxResults=5&q=${enteredText}`;
    let text = inputField1.nodeValue;
    console.log("here is your data "+ text);
    fetch(apiUrl).then(response =>{
        return response.json();
    }).then(responseData =>{
        console.log("Printing");
        console.log(responseData);
		myData = responseData.items;
		let mRow = creatRow();
		var part2Tag = document.querySelector(".part2");
		// part2Tag.remove(mRow);
		part2Tag.appendChild(mRow);
        for(posts of myData){
			console.log(posts.id.videoId);
			let colnum = addingImg(posts.snippet.title,posts.snippet.thumbnails.medium.url,posts.snippet.title,posts.snippet.publishedAt,posts.id.videoId);
			mRow.appendChild(colnum);

		}
    })

}

function creatRow(){
	let newDiv = document.createElement("div");
	newDiv.classList.add("row");
	return newDiv;
	// console.log(newDiv); 
}

function videoDescription(myUploadTime){
	let dateAndAuthor = document.createElement("p");
	let myAuthor = document.createElement("p");
	let dateTag = document.createElement("span");
	let uploadDate = document.createTextNode(`${myUploadTime}`);
	dateTag.appendChild(uploadDate);
	let author = document.createTextNode("Author");
	myAuthor.appendChild(author)
	dateAndAuthor.appendChild(dateTag);
	dateAndAuthor.appendChild(myAuthor);
	console.log(dateAndAuthor);
	return dateAndAuthor;


}

function addingImg(title,imageUrl,content,uploadTime,vid){
	console.log("Came here");
	let colDiv = document.createElement("div");
	let videoTitle = document.createElement("h4");
	let anchor = document.createElement("a");
	let textNode = document.createTextNode(`${title}`);
	anchor.appendChild(textNode);
	anchor.style.textDecoration = "none";
	anchor.style.color = "white";
	videoTitle.appendChild(anchor);
	anchor.href =`https://www.youtube.com/watch?v=${vid}`;
	colDiv.classList.add("col3");
	let imageTag = document.createElement("img");
	imageTag.setAttribute("src",`${imageUrl}`);
	imageTag.setAttribute("alt",`${content}`);
	colDiv.appendChild(imageTag);
	colDiv.appendChild(videoTitle);
	console.log(colDiv);
	console.log("VideoDescription");
	videoDescription();
	colDiv.appendChild(videoDescription(uploadTime));
	return colDiv;

}

// function display(){
// 	console.log("Hello world");
// 	let enteredText = inputField.value;
// 	inputField.value = "";
// 	console.log(enteredText);
// 	var para = document.createElement("p");
// 	var node = document.createTextNode("Welcome to videos");
// 	para.appendChild(node);
// 	var part2Tag = document.querySelector(".part2");
// 	console.log(part2Tag);
// 	part2Tag.appendChild(para);


// }

clickBtn.addEventListener("click",getData);

// console.log(myVideos);

// for(let obj of myVideos){
// 	console.log(`name = ${obj.name}, content = ${obj.content}`);

// }

// let mRow = creatRow();
// var part2Tag = document.querySelector(".part2");
// part2Tag.appendChild(mRow);

// console.log("Printing mRow");
// console.log( mRow);
// var totalCols = prompt("Enter how many videos you want in a row");

// for(let i = 0 ;i<5 ; i++){
// 	let colnum = addingImg(i);
// 	mRow.appendChild(colnum);
// }

// let colnum2 = addingImg();
// mRow.appendChild(colnum2);
// mRow.appendChild(colnum);

// console.log("Printing mRow");
// console.log(mRow);

// getData();