var trial = 0;

var current_page = 1;

var records_per_page = 5;

var clickBtn = document.getElementById("submitBtn");

var inputField1 = document.getElementById("inputField")

var nextBtn = document.getElementById("btn_next");

var prevBtn = document.getElementById("btn_prev");

var pagenation = document.getElementById("pagenation");

var pageNo = document.getElementById("page");


var myRemainingVideos = [];

var myFirstData = [];

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

function removeRows(){
	let cols = document.querySelector(".row");
	console.log(cols)
	cols.remove();
	// for(let i of cols){
	// 	i.remove();
	// }
	// cols.remove();
}

var getData = function(){
	myRemainingVideos=[];
	if(trial>0){
		removeRows();
	}
	try{
		console.log("Hello world");
		let enteredText = inputField.value;
		enteredText = enteredText.trim();
		let text_length = enteredText.length
		inputField.value = "";
		if(text_length===0){
			console.log("Error occured");
			throw "Please enter something";
		}
		console.log(`Entered Text = ${enteredText}`);
		let apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAYpGAy_3C7wQ1d9tLnvi1j731TGaTw09I&type=video&part=snippet&maxResults=17&q=${enteredText}`;
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
			let numberOfVideos = 5;
			let i = 0;
			for(posts of myData){
				myRemainingVideos.push(posts);
				console.log("Came inside for loops");
				// if(i<numberOfVideos){
				// 	myFirstData.push(posts);
				// 	myRemainingVideos.push(posts);
				// 	console.log(i);
				// 	console.log(posts.id.videoId);
				// 	let colnum = addingImg(posts.snippet.title,posts.snippet.thumbnails.medium.url,posts.snippet.title,posts.snippet.publishedAt,posts.id.videoId);
				// 	mRow.appendChild(colnum);
				// 	i++;

				// }
				// else{
				// 	console.log("Added elements:"+myRemainingVideos.push(posts));
				// }
				
			}
			changePage(1);

			console.log("First page")
			console.log(myFirstData);
			console.log("Next pages");
			console.log(myRemainingVideos);
			trial++;
		})
	}catch(e){
		console.log(e);
	}
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


function prevPage()
{
	console.log("Triggered prevPage"+ current_page);
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
	console.log("Triggered nextPage"+ current_page);
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
	removeRows();
    var page_span = document.getElementById("page");
	let mRow = creatRow(); 
	document.querySelector(".part2").appendChild(mRow);
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
		console.log(i);
		let appendingData = myRemainingVideos[i].snippet;
		let colnum = addingImg(appendingData.title,appendingData.thumbnails.medium.url,appendingData.title,appendingData.publishedAt,myRemainingVideos[i].id.videoId);
		mRow.appendChild(colnum);
		console.log("Checking for new rows:");
		console.log(mRow);


        // listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
		prevBtn.style.visibility = "hidden";
		// document.getElementById("button").style.visibility = ""
    } else {
        prevBtn.style.visibility = "visible";
    }

    if (page == numPages()) {
        nextBtn.style.visibility = "hidden";
    } else {
        nextBtn.style.visibility = "visible";
    }
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

function numPages()
{
	console.log("Triggered numPages with total records"+ myRemainingVideos.length);
    return Math.ceil(myRemainingVideos.length / records_per_page);
}


clickBtn.addEventListener("click",getData);

prevBtn.addEventListener("click",prevPage);

nextBtn.addEventListener("click",nextPage);

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