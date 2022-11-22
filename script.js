let cardBody = document.getElementsByClassName("product-card-main__item");
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
let nextbutton = document.querySelector(".next-btn");
let previousbutton = document.querySelector(".previous-btn");
let submit_btn = document.querySelector(".submit-btn");

// previousbutton.style.display = "none";

const some_func = (data) => {
	return (e) => {
		console.log();
		if (document.querySelector(".active") !== null) {
			console.log(document.querySelector(".active").childNodes[3].innerText == "");
			previousbutton.style.display = "block";
			if (document.querySelector(".active").childNodes[3].innerText == "") {
				alert("Please choose a serveice");
			} else {
				document.querySelector(".active").classList.remove("active");
				sidebar[data].classList.add("active");
				console.log(data);
				if (data == 1) {
					formsectionbody.style.display = "none";
					deliverytime.style.display = "block";
					uploadimage.style.display = "none";
				} else if (data == 2) {
					deliverytime.style.display = "none";
					uploadimage.style.display = "block";
					formsectionbody.style.display = "none";
				} else if (data == 3) {
					// before.style.setProperty("--width", "1150px");
					// before.style.setProperty("--height", "1150px");
					// percentage.innerText = "100%";
					formsectionbody.style.display = "none";
					uploadimage.style.display = "none";
					contactinformation.style.display = "block";
					nextbutton.style.display = "none";
					submit_btn.style.display = "block";
				} else {
					formsectionbody.style.display = "block";
					deliverytime.style.display = "none";
					uploadimage.style.display = "none";
					previousbutton.style.display = "none";
				}
			}
		}

		// e.target.className = "active"
	};
};

for (let i = 0; i < sidebar.length; i++) {
	sidebar[i].addEventListener("click", some_func(i));
}

// console.log(sidebar[i].childNodes[3].innerText);

const btnClick = (i) => {
	return (e) => {
		if (sidebar[i].childNodes[3].innerText !== "") {
			document.querySelector(".active").classList.remove("active");
			sidebar[i].nextSibling.nextSibling.classList.add("active");
			console.log(sidebar[0]);
			previousbutton.style.display = "block";
			if (i == 0) {
				formsectionbody.style.display = "none";
				deliverytime.style.display = "block";
			} else if (i == 1) {
				deliverytime.style.display = "none";
				uploadimage.style.display = "block";
			} else if (i == 2) {
				uploadimage.style.display = "none";
				contactinformation.style.display = "block";
				nextbutton.style.display = "none";
				submit_btn.style.display = "block";
			}
		}
	};
};
for (let i = 0; i < sidebar.length; i++) {
	nextbutton.addEventListener("click", btnClick(i));
}
const preBtnClick = (i) => {
	return (e) => {
		console.log(sidebar[i].classList.length);
		if (sidebar[i].classList.length == 2) {
			// previousbutton.style.opacity = "1"
			nextbutton.style.display = "block";
			document.querySelector(".active").classList.remove("active");
			sidebar[i].previousSibling.previousSibling.classList.add("active");
			if (i == 0) {
				// formsectionbody.style.display = "none";
				// deliverytime.style.display = "block";
			} else if (i == 1) {
				formsectionbody.style.display = "block";
				deliverytime.style.display = "none";
				previousbutton.style.display = "none";
			} else if (i == 2) {
				deliverytime.style.display = "block";
				uploadimage.style.display = "none";
			} else if (i == 3) {
				uploadimage.style.display = "block";
				contactinformation.style.display = "none";
			}
		}
	};
};
for (let i = 0; i < sidebar.length; i++) {
	previousbutton.addEventListener("click", preBtnClick(i));
}

const mufunc = (product) => {
	return (e) => {
		cardBody[product].childNodes[1].childNodes[1].checked = true;
		console.log();
		if (cardBody[product].childNodes[1].childNodes[1].name == "form") {
			before.style.setProperty("--width", "300px");
			before.style.setProperty("--height", "300px");
			percentage.innerText = "25%";
		} else if (cardBody[product].childNodes[1].childNodes[1].name == "time") {
			before.style.setProperty("--width", "550px");
			before.style.setProperty("--height", "550px");
			percentage.innerText = "50%";
		}

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
	file = this.files;
	dropArea.classList.add("active");
	before.style.setProperty("--width", "850px");
	before.style.setProperty("--height", "850px");
	percentage.innerText = "75%";
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
	before.style.setProperty("--width", "850px");
	before.style.setProperty("--height", "850px");
	percentage.innerText = "75%";
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
						count = count - 1;
						console.log(count);
						countfunc(count);
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
							count = count - 1;
							console.log(count);
							countfunc(count);
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
	if (count == 0) {
		image_num.innerHTML = "";
		dragText.innerText = "Drag & drop files here or";
		before.style.setProperty("--width", "550px");
		before.style.setProperty("--height", "550px");
		percentage.innerText = "50%";
	}
}

//contact form section //

let primaryinput = document.querySelectorAll(".contact-input");
console.log(primaryinput);
const requiredInputValue = (i) => {
	return (e) => {
		console.log(primaryinput[i].value);
		if (primaryinput[i].value !== null) {
			if(i == 0){
				before.style.setProperty("--width", "900px");
				before.style.setProperty("--height", "900px");
				percentage.innerText = "81%";
			}else if(i == 1){
				before.style.setProperty("--width", "950px");
				before.style.setProperty("--height", "950px");
				percentage.innerText = "87%";
			}else if(i == 2){
				before.style.setProperty("--width", "1000px");
				before.style.setProperty("--height", "1000px");
				percentage.innerText = "93%";
			}else if(i == 3){
				before.style.setProperty("--width", "1100px");
				before.style.setProperty("--height", "1100px");
				percentage.innerText = "99%";
				if(primaryinput[i].value == ""){
					primaryinput[i].value = "+1"
				}
			}
		}
			
	};
};
for (let i = 0; i < primaryinput.length; i++) {
	primaryinput[i].addEventListener("change", requiredInputValue(i));
}


