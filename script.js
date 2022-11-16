let cardBody = document.getElementsByClassName("product-card-main__item");
// let newtag = document.createElement("p");
// let element1 = document.getElementById("services");
// let element2 = document.getElementById("delivery");
// newtag.classList.add("item-name");
// element1.appendChild(newtag);
// element2.appendChild(newtag);
let circleFill = document.querySelectorAll("circle");
let active = document.querySelector(".active")






//for sidebar functionality//

let sidebar = document.getElementsByClassName("sidebar-item-wrapper");
let percentage = document.getElementById("percentage");
const before = document.querySelector(".wave");

const some_func = (data) => {
	return (e) => {
		console.log(e);
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
				} else if (data == 2) {
					before.style.setProperty("--width", "850px");
					before.style.setProperty("--height", "850px");
					percentage.innerText = "75%";
				} else if (data == 3) {
					before.style.setProperty("--width", "1150px");
					before.style.setProperty("--height", "1150px");
					percentage.innerText = "100%";
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

const mufunc = ( product) => {
    return (e) => {
        cardBody[product].childNodes[1].childNodes[1].checked = true;
    
        console.log(sidebar[1].classList,sidebar[0]);
        if(sidebar[0].classList[1] == 'active'){
            sidebar[0].childNodes[3].innerHTML = '<span class="material-symbols-outlined">check_circle</span>' + cardBody[product].childNodes[1].childNodes[1].value
            
        }else if(sidebar[1].classList[1] == 'active'){
            sidebar[1].childNodes[3].innerHTML = '<span class="material-symbols-outlined">check_circle</span>' + cardBody[product].childNodes[1].childNodes[1].value
        }
       
        // const sidebar_func = (i) =>{
        //     return(e) =>{
               
        //     }
        // }
         
        // for(let i=0;i<sidebar.length; i++){
        //     sidebar[i].addEventListener("click", sidebar_func(i))
        // }
    }
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
}

for (let i = 0; i < cardBody.length; i++) {
	cardBody[i].addEventListener("click", mufunc(i));
}


function scriptClick(){
 
    console.log(active);
}


