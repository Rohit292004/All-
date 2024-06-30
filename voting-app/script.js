// Initialize vote counts from local storage or default to 0
let congressCount = parseInt(localStorage.getItem("congressCount")) || 0;
let aapCount = parseInt(localStorage.getItem("aapCount")) || 0;
let bhajpaCount = parseInt(localStorage.getItem("bhajpaCount")) || 0;

// Get the vote count elements
const congressCountElem = document.getElementById("congress-count");
const aapCountElem = document.getElementById("aap-count");
const bhajpaCountElem = document.getElementById("bhajpa-count");

// Update the vote count display and local storage
function updateVoteCount() {
  congressCountElem.textContent = congressCount;
  aapCountElem.textContent = aapCount;
  bhajpaCountElem.textContent = bhajpaCount;

  // Update local storage
  localStorage.setItem("congressCount", congressCount);
  localStorage.setItem("aapCount", aapCount);
  localStorage.setItem("bhajpaCount", bhajpaCount);
}
congressCount = 0;
aapCount = 0;
bhajpaCount = 0;


// Function to display popup message
function displayPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = message;
  popup.style.display = "block";

  // Close popup when close button is clicked
  document.getElementById("close-popup").addEventListener("click", function () {
    popup.style.display = "none";
  });
}

// Event listeners for voting buttons with popup messages
document.getElementById("congress-btn").addEventListener("click", function () {
  congressCount++;
  updateVoteCount();
  const message = this.querySelector(".badge").getAttribute("data-msg");
  displayPopup(message);
});

document.getElementById("aap-btn").addEventListener("click", function () {
  aapCount++;
  updateVoteCount();
  const message = this.querySelector(".badge").getAttribute("data-msg");
    displayPopup(message);
});

document.getElementById("bhajpa-btn").addEventListener("click", function () {
  bhajpaCount++;
  updateVoteCount();
  const message = this.querySelector(".badge").getAttribute("data-msg");
    displayPopup(message);
});

// Initial update of vote count display
updateVoteCount();
