function calculatePrice(formId) {
  let form = document.getElementById(formId);
  console.log(formId)
  let total_price = 0;
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
        console.log(field.value)
        if (field.value > 0) {
          console.log(form[i]);
          form[i].classList.add("filledup-button--active");
          form_calculator.classList.add("filledup-text--active");
          form_calculator.classList.add("filledup-bg--active");
        } else {
          form[i].classList.remove("filledup-button--active");
          form_calculator.classList.remove("filledup-text--active");
          form_calculator.classList.remove("filledup-bg--active");
        }
      }
    }
  }
  let service_rate = Number(numbers.rate) + Number(numbers.service);
  total_price = numbers.quantity * service_rate;
  total_price = total_price + total_price * (numbers.time / 100);
  total_price = total_price.toFixed(2);
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
