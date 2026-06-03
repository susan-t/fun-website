// CHANGE THIS TO YOUR DATE
const correctCode = "120825";

let input = "";

const numberButtons =
  document.querySelectorAll(".num");

const hearts =
  document.querySelectorAll(".heart");

const backspace =
  document.getElementById("backspace");

const enterBtn =
  document.getElementById("enterBtn");



// NUMBER BUTTONS
numberButtons.forEach(button => {

  button.addEventListener("click", () => {

    if(input.length < 6){

      input += button.textContent;

      updateHearts();

    }

  });

});



// UPDATE HEARTS
function updateHearts(){

  hearts.forEach((heart, index) => {

    if(index < input.length){

      heart.textContent = "❤";
      heart.classList.add("filled");

    }
    else{

      heart.textContent = "♡";
      heart.classList.remove("filled");

    }

  });

}



// BACKSPACE
backspace.addEventListener("click", () => {

  input = input.slice(0, -1);

  updateHearts();

});



// ENTER BUTTON
enterBtn.addEventListener("click", () => {

  if(input === correctCode){

    window.location.href = "nextpage.html";

  }
  else{

    alert("wrong code :(");

    input = "";

    updateHearts();

  }

});