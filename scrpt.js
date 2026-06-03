"use strict";

// Wait for the HTML to fully load before attaching events
document.addEventListener("DOMContentLoaded", () => {
    const actionButton = document.getElementById("action-btn");

    function myFunction() {
        console.log("Button was clicked!");  
    }

    // Attaching the event listener to the button
    actionButton.addEventListener("click", myFunction);
});
