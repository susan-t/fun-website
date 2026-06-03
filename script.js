const correctCode = "040825";

let input = "";

const numberButtons = document.querySelectorAll(".num");
const hearts = document.querySelectorAll(".heart");
const backspace = document.getElementById("backspace");
const enterBtn = document.getElementById("enterBtn");

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
        window.location.href = "home.html";
    }
    else{
        alert("wrong code :(");
        input = "";
        updateHearts();
    }
});

// DATE COUNTDOWN
const counterElement = document.getElementById("days-left");
if(counterElement){
  const targetDate = new Date("April 8, 2027");
  function updateDayCountdown(){
    const now = new Date();
    const timeDifference = targetDate - now;
    const daysLeft = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24)
    );
    if(daysLeft >= 0){
      counterElement.textContent = daysLeft;
    }
    else{
      counterElement.textContent = "0";
    }
  }
  updateDayCountdown();
  setInterval(updateDayCountdown, 86400000);
}