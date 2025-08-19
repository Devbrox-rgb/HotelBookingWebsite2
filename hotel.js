
const greetingEl = document.createElement("h3");
greetingEl.style.marginBottom = "20px";
greetingEl.style.color = "#444";
greetingEl.style.fontSize = "22px";

const hour = new Date().getHours();
if (hour < 12) {
  greetingEl.textContent = "☀️ Good Morning, Guest!";
} else if (hour < 18) {
  greetingEl.textContent = "🌤️ Good Afternoon, Guest!";
} else {
  greetingEl.textContent = "🌙 Good Evening, Guest!";
}

const roomsSection = document.querySelector(".rooms");
if (roomsSection) {
  roomsSection.prepend(greetingEl);
}
