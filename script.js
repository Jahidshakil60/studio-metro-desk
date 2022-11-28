let cardBody = document.getElementsByClassName("product-card-main__item");
let circleFill = document.querySelectorAll(".circle");
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
let barsectionpera = document.querySelectorAll('.item-name')
let rightarrow = document.querySelector('.right-arrow')

//submit button animation

let submit_button = document.querySelector('.button-sub')
let contact_input = document.querySelectorAll('.contact-input')

submit_button.onclick = function (){
	if(contact_input[0].value !== ""){
		this.innerHTML = "<div class='loader'></div>"
		setTimeout(()=>{
			window.location.reload();
		}, 1000)
	
	}

}

// previousbutton.style.display = "none";

const some_func = (data) => {
	return (e) => {
		console.log();
		if (document.querySelector(".active") !== null) {
			if (document.querySelector(".active").childNodes[3].innerText == "") {
				alert("Please choose a serveice");
			} else {
				document.querySelector(".active").classList.remove("active");
				sidebar[data].classList.add("active");
				rightarrow.style.color = '#9e9e9e'
				if (data == 1) {
					formsectionbody.style.display = "none";
					deliverytime.style.display = "block";
					uploadimage.style.display = "none";
					contactinformation.style.display = "none";
					nextbutton.style.display = "block";
					previousbutton.style.display = "block";
					rightarrow.style.color = '#7a80bd';
				} else if (data == 2) {
					deliverytime.style.display = "none";
					uploadimage.style.display = "block";
					formsectionbody.style.display = "none";
					contactinformation.style.display = "none";
					nextbutton.style.display = "block";
					previousbutton.style.display = "block";
					rightarrow.style.color = '#7a80bd';
				} else if (data == 3) {
					// before.style.setProperty("--width", "1150px");
					// before.style.setProperty("--height", "1150px");
					// percentage.innerText = "100%";
					formsectionbody.style.display = "none";
					uploadimage.style.display = "none";
					contactinformation.style.display = "block";
					nextbutton.style.display = "none";
					previousbutton.style.display = "block";
					submit_btn.style.display = "block";
					sidebar[3].childNodes[3].innerHTML = '<span class="material-symbols-outlined">check_circle</span>' + "Plese fill up this form"
				} else {
					formsectionbody.style.display = "block";
					deliverytime.style.display = "none";
					uploadimage.style.display = "none";
					contactinformation.style.display = "none";
					previousbutton.style.display = "none";
					nextbutton.style.display = "block";
					rightarrow.style.color = '#7a80bd';
				}
			}
		}

		// e.target.className = "active"
	};
};

for (let i = 0; i < sidebar.length; i++) {
	sidebar[i].addEventListener("click", some_func(i));
}
const nextBtnClick = () => {
	return (e) => {
		    rightarrow.style.color = '#9e9e9e'
			if(sidebar[0].childNodes[3].innerText !== "" && sidebar[0].classList[1] == "active"){
				document.querySelector(".active").classList.remove("active");
				sidebar[1].classList.add("active");
				formsectionbody.style.display = "none";
				deliverytime.style.display = "block";
				previousbutton.style.display = "block";
				if(barsectionpera[1].innerText !== ""){
					rightarrow.style.color = '#7a80bd'
				}
			}else if(sidebar[1].childNodes[3].innerText !== "" && sidebar[1].classList[1] == "active"){
				document.querySelector(".active").classList.remove("active");
				sidebar[2].classList.add("active");
				deliverytime.style.display = "none";
				uploadimage.style.display = "block";
				if(barsectionpera[2].innerText !== ""){
					rightarrow.style.color = '#7a80bd'
				}
			}else if(sidebar[2].childNodes[3].innerText !== "" && sidebar[2].classList[1] == "active"){
				document.querySelector(".active").classList.remove("active");
				sidebar[3].classList.add("active");
				uploadimage.style.display = "none";
				contactinformation.style.display = "block";
				nextbutton.style.display = "none";
				submit_btn.style.display = "block";
				sidebar[3].childNodes[3].innerHTML = '<span class="material-symbols-outlined">check_circle</span>' + "Please fill up this form"
			}else{
				alert("please select a service")
			}
			

		// }
	};
};

nextbutton.addEventListener("click", nextBtnClick());

const preBtnClick = (i) => {
	return (e) => {
		rightarrow.style.color = '#7a80bd'
		if (sidebar[i].classList.length == 2) {
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
		if(barsectionpera.innerText !== ""){
			rightarrow.style.color = '#7a80bd'
		}
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

	};
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
let div;
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
	showFile(event); //calling function
	deleteMe(event);
});
function deleteMe(event) {
	let files = event.target.files;
	for (let i = 0; i < files.length; i++) {
		div = document.createElement("div");
		div.classList.add("button-container");
		output.appendChild(div);
	}
}

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
	showFile(event, file); //calling function
});
let count = 0;
let image_num = document.querySelector(".image_number");
let classes;
let array = [];
let pic_array = [];
let delete_btn;
let sum = 0;

function showFile(e, file) {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		//CHECK IF FILE API IS SUPPORTED
		let some = pic_array.length;
		if (file != null) {
			let fileReader = new FileReader(); //creating new FileReader object
			fileReader.onload = () => {
				let fileURL = fileReader.result; //passing user file source in fileURL variable
				const div = document.createElement("div");
				div.classList.add("button-container");
				output.appendChild(div);
				let image = `<img src="${fileURL}" alt="image">`;
				pic_array.push(image);
				sum = sum+3
				uploadarrImage(some, sum);
				countfunc();
			};
			fileReader.readAsDataURL(file);
		} else {
			const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
			let some = pic_array.length;

			for (let i = 0; i < files.length; i++) {
				// LOOP THROUGH THE FILE LIST OBJECT
				if (!files[i].type.match("image.*|application.*")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
				const picReader = new FileReader(); // RETRIEVE DATA URI
				picReader.addEventListener("load", function (event) {
					// LOAD EVENT FOR DISPLAYING PHOTOS
					const picFile = event.target;

					let image = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
					pic_array.push(image);
					sum = sum+1
					uploadarrImage(some, sum);
					countfunc();
				});

				picReader.readAsDataURL(files[i]); //READ THE IMAGE
			}
		}
	} else {
		alert("This is not an Image File!");
		dropArea.classList.remove("active");
		dragText.textContent = "Drag & Drop to Upload File";
	}
}

let button_dlt;

function uploadarrImage(x , sum) {
	let btn_container = document.querySelectorAll(".button-container");
	for (let d = x; d < btn_container.length; d++) {
		btn_container[d].innerHTML = pic_array[d];
		button_dlt = document.createElement("button");
		button_dlt.classList.add("image_button");
		button_dlt.id = "newId" + sum + d
		button_dlt.innerText = "+";
		btn_container[d].appendChild(button_dlt);
		console.log(pic_array,d);
		
		let current_btn = document.getElementById("newId" + sum + d)
		current_btn.addEventListener("click" , function(event){
			let button_array = document.getElementsByClassName('image_button')
			let target_button_index = null
			for (let i = 0; i < button_array.length; i++) {
				if(event.target.id == button_array[i].id) {
					target_button_index = i
				}
			}
			pic_array.splice(target_button_index, 1)
			let img_container = current_btn.parentElement;
			img_container.remove()
			count = count -1
			countfunc(count)
		})
	}

}
function countfunc(count) {
	classes = document.querySelectorAll(".button-container");
	count = classes.length;
	image_num.innerHTML = '<span class="material-symbols-outlined">check_circle</span>' + count + " Images uploaded";
	if(barsectionpera.innerText !== ""){
		rightarrow.style.color = '#7a80bd'
	}
	if (count == 0) {
		image_num.innerHTML = "";
		dragText.innerText = "Drag & drop files here or";
		before.style.setProperty("--width", "550px");
		before.style.setProperty("--height", "550px");
		percentage.innerText = "50%";
		rightarrow.style.color = '#9e9e9e'
	}
}

//contact form section //

let primaryinput = document.querySelectorAll(".contact-input");
console.log(primaryinput);
const requiredInputValue = (i) => {
	return (e) => {
		if (primaryinput[i].value !== null) {
			if (i == 0) {
				before.style.setProperty("--width", "900px");
				before.style.setProperty("--height", "900px");
				percentage.innerText = "81%";
			} else if (i == 1) {
				before.style.setProperty("--width", "950px");
				before.style.setProperty("--height", "950px");
				percentage.innerText = "87%";
			} else if (i == 2) {
				before.style.setProperty("--width", "1000px");
				before.style.setProperty("--height", "1000px");
				percentage.innerText = "93%";
			} else if (i == 3) {
				before.style.setProperty("--width", "1100px");
				before.style.setProperty("--height", "1100px");
				percentage.innerText = "99%";
				if (primaryinput[i].value == "") {
					primaryinput[i].value = "+1";
				}
			}
		}
	};
};
for (let i = 0; i < primaryinput.length; i++) {
	primaryinput[i].addEventListener("change", requiredInputValue(i));
}
