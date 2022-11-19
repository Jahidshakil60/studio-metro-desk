let cardBody = document.getElementsByClassName("product-card-main__item");
// let newtag = document.createElement("p");
// let element1 = document.getElementById("services");
// let element2 = document.getElementById("delivery");
// newtag.classList.add("item-name");
// element1.appendChild(newtag);
// element2.appendChild(newtag);
let circleFill = document.querySelectorAll("circle");
let active = document.querySelector(".active");
let inputimage = document.getElementById("image-input");

//for sidebar functionality//

let sidebar = document.getElementsByClassName("sidebar-item-wrapper");
let percentage = document.getElementById("percentage");
const before = document.querySelector(".wave");
let formsectionbody = document.querySelector(".formsection-main__body");
let deliverytime = document.querySelector(".delivery-time");
let uploadimage = document.querySelector(".upload-image");
let contactinformation = document.querySelector(".contact-information");

const some_func = (data) => {
	return (e) => {
		console.log();
		if (document.querySelector(".active") !== null) {
			console.log(document.querySelector(".active").childNodes[3].innerText == "");
			if (document.querySelector(".active").childNodes[3].innerText == "") {
				alert("Please choose a serveice");
			} else {
				document.querySelector(".active").classList.remove("active");
				sidebar[data].classList.add("active");

				if (data == 1) {
					before.style.setProperty("--width", "550px");
					before.style.setProperty("--height", "550px");
					percentage.innerText = "50%";
					formsectionbody.style.display = "none";
					deliverytime.style.display = "block";
				} else if (data == 2) {
					before.style.setProperty("--width", "850px");
					before.style.setProperty("--height", "850px");
					percentage.innerText = "75%";
					deliverytime.style.display = "none";
					uploadimage.style.display = "block";
				} else if (data == 3) {
					before.style.setProperty("--width", "1150px");
					before.style.setProperty("--height", "1150px");
					percentage.innerText = "100%";
					uploadimage.style.display = "none"
					contactinformation.style.display = "block"
				} else {
					before.style.setProperty("--width", "300px");
					before.style.setProperty("--height", "300px");
				}
			}
		}

		// e.target.className = "active"
	};
};

for (let i = 0; i < sidebar.length; i++) {
	sidebar[i].addEventListener("click", some_func(i));
}

const mufunc = (product) => {
	return (e) => {
		cardBody[product].childNodes[1].childNodes[1].checked = true;

		if (sidebar[0].classList[1] == "active") {
			sidebar[0].childNodes[3].innerHTML =
				'<span class="material-symbols-outlined">check_circle</span>' + cardBody[product].childNodes[1].childNodes[1].value;
		} else if (sidebar[1].classList[1] == "active") {
			sidebar[1].childNodes[3].innerHTML =
				'<span class="material-symbols-outlined">check_circle</span>' + cardBody[product].childNodes[1].childNodes[1].value;
		}

		// const sidebar_func = (i) =>{
		//     return(e) =>{

		//     }
		// }

		// for(let i=0;i<sidebar.length; i++){
		//     sidebar[i].addEventListener("click", sidebar_func(i))
		// }
	};
	// let circleFill = document.querySelectorAll("circle");
	// if (event.path[0].children[0]) {
	// 	event.path[0].children[0].checked = true;
	// 	event.path[5].children[0].children[0].children[1].innerHTML =
	// 		'<span class="material-symbols-outlined">check_circle</span>' + event.path[0].children[0].value;
	// } else if (event.path[2].children[0].children[0]) {
	// 	event.path[2].children[0].children[0].checked = true;
	// 	event.path[6].children[0].children[0].children[1].innerHTML =
	// 		'<span class="material-symbols-outlined">check_circle</span>' + event.path[2].children[0].children[0].value;
	// }

	// console.log(event);
};

for (let i = 0; i < cardBody.length; i++) {
	cardBody[i].addEventListener("click", mufunc(i));
}

// image upload//

// document.querySelector("#files").addEventListener("change", (e) => {
// 	//CHANGE EVENT FOR UPLOADING PHOTOS
// 	if (window.File && window.FileReader && window.FileList && window.Blob) {
// 		//CHECK IF FILE API IS SUPPORTED
// 		const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
// 		const output = document.querySelector("#result");
// 		output.innerHTML = "";
// 		for (let i = 0; i < files.length; i++) {
// 			// LOOP THROUGH THE FILE LIST OBJECT
// 			if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
// 			const picReader = new FileReader(); // RETRIEVE DATA URI
// 			picReader.addEventListener("load", function (event) {
// 				// LOAD EVENT FOR DISPLAYING PHOTOS
// 				const picFile = event.target;
// 				const div = document.createElement("div");
// 				div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
// 				output.appendChild(div);
// 				// console.log(files);
// 			});
// 			picReader.readAsDataURL(files[i]); //READ THE IMAGE
// 			//   console.log(x);
// 			// let images= document.getElementsByClassName('image-input')

// 			// for(let i=0;i<)
// 		}
// 	} else {
// 		alert("Your browser does not support File API");
// 	}
// });

//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
	dragText = dropArea.querySelector("header"),
	button = dropArea.querySelector("button"),
	input = dropArea.querySelector("input");
const output = document.querySelector("#result");
let file; //this is a global variable and we'll use it inside multiple functions
button.onclick = () => {
	input.click(); //if user click on the button then the input also clicked
};

input.addEventListener("change", function (event) {
	//getting user select file and [0] this means if user select multiple files then we'll select only the first one
	file = this.files;
	dropArea.classList.add("active");
	let x = showFile(event); //calling function
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
	event.preventDefault(); //preventing from default behaviour
	dropArea.classList.add("active");
	dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
	dropArea.classList.remove("active");
	dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
	event.preventDefault(); //preventing from default behaviour
	//getting user select file and [0] this means if user select multiple files then we'll select only the first one
	file = event.dataTransfer.files[0];
	dragText.textContent = "Your file has been Uploaded";
	console.log(file);
	console.log(event);
	showFile(event, file); //calling function
});
let count = 0;
let image_num = document.querySelector(".image_number");
let classes;

function showFile(e, file) {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		//CHECK IF FILE API IS SUPPORTED
	
		let button;
		let delete_btn = document.getElementsByClassName("image_button");

		if (file != null) {
			let fileReader = new FileReader(); //creating new FileReader object
			fileReader.onload = () => {
				let fileURL = fileReader.result; //passing user file source in fileURL variable
				const div = document.createElement("div");
				div.classList.add("button-container");
				div.innerHTML = `<img src="${fileURL}" alt="image">`;
				const button = document.createElement("button");
				button.classList.add("image_button");
				button.innerText = "+";
				div.appendChild(button);
				output.appendChild(div);
				countfunc();
				const deleteImage = (i) => {
					return (e) => {
						output.removeChild(classes[i]);
						count = count-1
						console.log(count);
						countfunc(count)


					};
				};

				for (let i = 0; i < delete_btn.length; i++) {
					delete_btn[i].addEventListener("click", deleteImage(i));
				}
			};
			fileReader.readAsDataURL(file);
		} else {
			const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
			for (let i = 0; i < files.length; i++) {
				// LOOP THROUGH THE FILE LIST OBJECT
				if (!files[i].type.match("image.*|application.*")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
				const picReader = new FileReader(); // RETRIEVE DATA URI
				picReader.addEventListener("load", function (event) {
					// LOAD EVENT FOR DISPLAYING PHOTOS
					const picFile = event.target;
					const div = document.createElement("div");
					div.classList.add("button-container");
					div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
					button = document.createElement("button");
					button.classList.add("image_button");
					button.innerText = "+";
					div.appendChild(button);
					output.appendChild(div);
				
					countfunc();
					const deleteImage = (i) => {
						return (e) => {
							output.removeChild(classes[i]);
							count = count-1
							console.log(count);
							countfunc(count)


						};
					};

					for (let i = 0; i < delete_btn.length; i++) {
						delete_btn[i].addEventListener("click", deleteImage(i));
					}
				});
				picReader.readAsDataURL(files[i]); //READ THE IMAGE
				// console.log(files[i]);
			}
		}

		
	} else {
		alert("This is not an Image File!");
		dropArea.classList.remove("active");
		dragText.textContent = "Drag & Drop to Upload File";
		console.log(fileType);
	}
}

function countfunc(count) {
	classes = document.querySelectorAll(".button-container");
	count = classes.length;
	image_num.innerHTML = '<span class="material-symbols-outlined">check_circle</span>' + count + " Images uploaded";
	if(count == 0){
		image_num.innerHTML = ""
		dragText.innerText = "Drag & drop files here or"
	}
}
