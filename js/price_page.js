function calculatePrice(formId) {
  let form = document.getElementById(formId);
  let total_price = 0.0;
  let numbers = {
    quantity: null,
    rate: null,
    service: null,
    time: null,
  };

  for (let i = 0; i <= form.length; i++) {
    if (form[i]) {
      if (form[i].type != "submit") {
        if (form[i].value != 0) {
          for (let j = 0; j <= Object.keys(numbers).length; j++) {
            if (Object.keys(numbers)[j] == form[i].name) {
              let x = Object.keys(numbers)[j];
              numbers[x] = form[i].value;
            }
          }
        }
      } else {
        field = document.getElementById(formId + "MainField");
        form_calculator = document.getElementById(formId + "Wrap");
        if (field.value > 0) {
          // form[i].classList.add("filledup-button--active");
          form_calculator.classList.add("filledup-text--active");
          form_calculator.classList.add("filledup-bg--active");
        } else {
          // form[i].classList.remove("filledup-button--active");
          form_calculator.classList.remove("filledup-text--active");
          form_calculator.classList.remove("filledup-bg--active");
        }
      }
    }
  }
  if (numbers.quantity && numbers.rate && numbers.service && numbers.time != 'a') {
    let service_rate = Number(numbers.rate) + Number(numbers.service);
    total_price = numbers.quantity * service_rate;
    total_price = total_price + total_price * (numbers.time / 100);
    total_price = total_price.toFixed(2);
    form[4].classList.add("filledup-button--active");


    if (form) {
      if (form.children) {
        for (let k = 0; k <= form.children.length; k++) {
          if (form.children[k]) {
            if (form.children[k].children) {
              if (form.children[k].children.totalOutput) {
                form.children[k].children.totalOutput.innerHTML = "$" + total_price;
              }
            }
          }
        }
      }
    }
  }
}


// function activeCalculator(wrapperID) {
//   let wrapper = document.getElementById(wrapperID)
//   let all_classes = wrapper.classList
//   if (all_classes.indexOf('calculator-active')) {
//     console.log("Active")
//   } else {
//     console.log('Not active')
//   }
//   console.log(wrapper.classList.add('calculator-active'))
// }

