document.addEventListener("DOMContentLoaded", function() {
const input = document.querySelector("input");
const inputValue = input.value;
const button = document.querySelector("button");
const form = document.querySelector("form");

function ValidateEmail() {

    let regex = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/");
    let result= regex.test(inputValue);

    if (result) {
      alert("Valid email address!");
    } else {
        input.style.border = "1px solid hsl(354, 100%, 66%)";
        const error = document.querySelector(".error");
        error.innerHTML = "Please provide a valid email address"
    }
  }

  button.addEventListener("click", ValidateEmail)

});