let progressbar = document.querySelectorAll(".progressbar-single");
let cardBody = document.getElementsByClassName("product-card-main__item");
let upload_image = document.querySelector(".upload-image__main");
let servicesection = document.querySelector(".service-section__main");
let contact_information = document.querySelector(".contact-information__main");

const progressbarClick = (i) => {
	return (e) => {
		document.querySelector(".active").classList.remove("active");
		progressbar[i].classList.add("active");
		nextSlide(i);
		previousSlide(i);
	};
};

for (let i = 0; i < progressbar.length; i++) {
	progressbar[i].addEventListener("click", progressbarClick(i));
}

const cardSelect = (product) => {
	return (e) => {
		cardBody[product].childNodes[1].childNodes[1].checked = true;
		console.log();
	};
};

for (let i = 0; i < cardBody.length; i++) {
	cardBody[i].addEventListener("click", cardSelect(i));
}

function nextSlide(i) {
	if (i == 1) {
		upload_image.style.display = "block";
		servicesection.style.display = "none";
		contact_information.style.display = "none";
		document.querySelector(".active").classList.remove("active");
		progressbar[i].classList.add("active");
	} else if (i == 2) {
		contact_information.style.display = "block";
		upload_image.style.display = "none";
		servicesection.style.display = "none";
		document.querySelector(".active").classList.remove("active");
		progressbar[i].classList.add("active");
	} else if (i == 0) {
		servicesection.style.display = "block";
		upload_image.style.display = "none";
		contact_information.style.display = "none";
	}
}

function previousSlide(i) {
	document.querySelector(".active").classList.remove("active");
	progressbar[i].classList.add("active");
	if (i == 1) {
		upload_image.style.display = "block";
		servicesection.style.display = "none";
		contact_information.style.display = "none";
	} else if (i == 0) {
		servicesection.style.display = "block";
		upload_image.style.display = "none";
		contact_information.style.display = "none";
	}
}

// image upload section

const dropArea = document.querySelector(".drag-area"),
	dragText = dropArea.querySelector("header"),
	button = dropArea.querySelector("button"),
	input = dropArea.querySelector("input");
const output = document.querySelector(".result");
let file; //this is a global variable and we'll use it inside multiple functions
button.onclick = () => {
	input.click(); //if user click on the button then the input also clicked
};

input.addEventListener("change", function (event) {
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
					const deleteImage = (i) => {
						return (e) => {
							output.removeChild(classes[i]);
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

// country code api
var codeinput = document.querySelector(".phone");
window.intlTelInput(codeinput, {});
