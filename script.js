function bookNow() {
  alert("Welcome to TutorConnect!");
}

function scheduleSession() {
  alert("Scheduling feature coming soon!");
}

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Booking Confirmed!");

  window.open("https://meet.google.com/new", "_blank");
});
