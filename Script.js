document.addEventListener('DOMContentLoaded', function() {
  // Select all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');

  // Loop through each FAQ item and add event listener
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn'); // Select the button inside each FAQ item
    const answer = item.querySelector('.faq-answer'); // Select the answer inside each FAQ item

    // Add click event listener on the FAQ button
    btn.addEventListener('click', () => {
      // Toggle the "active" class to show or hide the answer
      item.classList.toggle('active');

      // If the "active" class is added, show the answer
      if (item.classList.contains('active')) {
        answer.style.display = 'block'; // Display the answer
      } else {
        answer.style.display = 'none'; // Hide the answer
      }
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thanks ${name}, your message has been sent!`);
  this.reset();
});
// >>>>>>> main
document.addEventListener("click", function (event) {
        document.querySelectorAll(".faq-item.active").forEach((activeItem) => {
            if (!activeItem.contains(event.target)) {
                activeItem.classList.remove("active");
                const button = activeItem.querySelector(".faq-btn");
                const answer = activeItem.querySelector(".faq-answer");
                answer.style.display = "none";
                button.textContent = "+"; // Reverted button text
                button.style.transform = "rotate(0deg)"; // Keeping the rotation
                button.style.backgroundColor = "transparent"; // Reverted background
                button.style.color = "#000"; // Reverted text color (or whatever default you prefer)
            }
        });
    });
});

