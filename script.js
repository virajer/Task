
// 1. Contact Form Validation

document.querySelector("form").addEventListener("submit", function (e) {
  let name = document.querySelector("input[type='text']").value.trim();
  let email = document.querySelector("input[type='email']").value.trim();
  let message = document.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields.");
    e.preventDefault();
    return;
  }

  // Simple Email Pattern Check
  let emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    e.preventDefault();
  }
});


// 2. Smooth Scrolling for Anchor Links

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// 3. Scroll Animation for Product Cards

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});
cards.forEach(card => observer.observe(card));


// 4. Dynamic Year in Footer

document.addEventListener("DOMContentLoaded", () => {
  const footerText = document.querySelector("footer p");
  footerText.innerHTML = `© ${new Date().getFullYear()} ColorCrest Paints | Follow us: 
        <a href="#">FB</a> | <a href="#">IG</a> | <a href="#">TW</a>`;
});
