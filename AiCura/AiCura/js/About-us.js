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
          answer.style.display = 'none'; 
        }
      });
    });
  });

  document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button text/icon for better UX
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

