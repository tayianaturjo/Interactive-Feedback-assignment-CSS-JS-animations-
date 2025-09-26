// ===============================
// Part 2: JavaScript Functions
// ===============================

// Function with parameter + return value
function createGreeting(name) {
  return `Hello, ${name}! Thanks for sharing your thoughts.`;
}

// Global variable (accessible everywhere)
let globalMessage = "Character count updated:";

// Local scope demonstration + calculation
function updateCharCount(text) {
  let count = text.length; // local variable
  document.getElementById("charCount").innerText = `${globalMessage} ${count}/200`;
  return count;
}

// Form submission handling
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let feedback = document.getElementById("feedback").value;

  if (feedback.trim() === "") {
    alert("Feedback cannot be empty!");
    return;
  }

  // Show greeting using parameter + return value
  let message = createGreeting(name);
  document.getElementById("greeting-output").innerText = message;

  // Trigger popup animation
  let popup = document.getElementById("popup");
  popup.classList.add("show");

  // Remove class after animation to reset
  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
});

// Real-time character counter
document.getElementById("feedback").addEventListener("input", function() {
  updateCharCount(this.value);
});
