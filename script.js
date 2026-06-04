// const correctCode = "040825";
const correctCode = "120624";

let input = "";

const numberButtons = document.querySelectorAll(".num");
const hearts = document.querySelectorAll(".heart");
const backspace = document.getElementById("backspace");
const enterBtn = document.getElementById("enterBtn");

// NUMBER BUTTONS
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (input.length < 6) {
      input += button.textContent;
      updateHearts();
    }
  });
});

// UPDATE HEARTS
function updateHearts() {
  hearts.forEach((heart, index) => {
    if (index < input.length) {
      heart.textContent = "❤";
      heart.classList.add("filled");
    } else {
      heart.textContent = "♡";
      heart.classList.remove("filled");
    }
  });
}

// BACKSPACE
if (backspace) {
  backspace.addEventListener("click", () => {
    input = input.slice(0, -1);
    updateHearts();
  });
}

// ENTER BUTTON
if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    if (input === correctCode) {
      window.location.href = "home.html";
    } else {
      alert("wrong code :(");
      input = "";
      updateHearts();
    }
  });
}

// DATE COUNTDOWN
const daysLeft = document.getElementById("days-left");
if (daysLeft) {
  // Set the date we're counting down to
  const countDownDate = new Date("April 8, 2027").getTime();
  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    daysLeft.innerHTML = days; 
    // If countdown is over
    if (distance < 0) {
      clearInterval(x);
      daysLeft.innerHTML = "YAY! 2 YEARS!";
    }

  }, 1000);
}

// IMAGE SLIDESHOW

let slides = [];
let currentIndex = 0;

// Grab slideshow container
const slideshow = document.getElementById("slideshow");

// Fetch slideshow data
async function loadSlideshow() {
  try {
    const response = await fetch("slides.json");
    slides = await response.json();

    if (slides.length > 0) {
      updateSlide();
    }
  } catch (error) {
    console.error("Error loading the JSON data:", error);
  }
}

// Update background image
function updateSlide() {
  slideshow.style.backgroundImage = `url(${slides[currentIndex].src})`;
}

// Click slideshow to go to next slide
slideshow.addEventListener("click", () => {
  currentIndex++;

  // Loop back to first image
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  updateSlide();
});

// Initialize slideshow
loadSlideshow();