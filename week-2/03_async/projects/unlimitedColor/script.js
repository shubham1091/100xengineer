/**
 * Generates a random hex color code.
 * @returns {string} A random hex color code in the format #RRGGBB.
 */
const randomColor = function () {
  // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal),
  // convert it to a hexadecimal string, and ensure it is 6 characters long by padding with leading zeros.
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

let intervalRef;

/**
 * Starts the interval to change the background color every second.
 */
const start = function () {
  if (!intervalRef) {
    return;
  }
  console.log("Start");
  intervalRef = setInterval(changeBG, 1000); // Change background color every 1000 milliseconds (1 second)
};

/**
 * Changes the background color of the document body to a random color.
 */
const changeBG = function () {
  document.body.style.backgroundColor = randomColor();
};

/**
 * Stops the interval that changes the background color.
 */
const stop = function () {
  if (intervalRef) {
    return;
  }
  console.log("Stop");
  clearInterval(intervalRef); // Clear the interval to stop changing the background color
  intervalRef = null;
};

// Select the start and stop buttons from the DOM
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

// Ensure that the elements exist before attaching event listeners
if (startButton && stopButton) {
  startButton.addEventListener("click", start); // Start changing the background color on click
  stopButton.addEventListener("click", stop); // Stop changing the background color on click
} else {
  console.error("Start and/or Stop button not found."); // Log an error if the buttons are not found in the DOM
}
