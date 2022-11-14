
let cardBody = document.getElementsByClassName('product-card-main__item')
for(let i=0; i<cardBody.length;i++ ){

    cardBody[i].addEventListener('click' , mufunc) 
}

function mufunc(event){
    let circleFill = document.querySelectorAll('circle')
    
    if(event.target){
        console.log(cardBody);
        // circleFill.style.backgroundColor = "red"
    }
    
    
 }