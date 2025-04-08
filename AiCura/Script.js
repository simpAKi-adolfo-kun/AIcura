document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-item").forEach((item) => {
        const button = item.querySelector(".faq-btn");
        const answer = item.querySelector(".faq-answer");

        button.addEventListener("click", function (event) {
            event.stopPropagation();

            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                answer.style.display = "block";
                this.textContent = "-"; // Reverted button text
                this.style.transform = "rotate(180deg)"; // Keeping the rotation
                this.style.backgroundColor = "transparent"; // Reverted background
                this.style.color = "#000"; // Reverted text color (or whatever default you prefer)
            } else {
                answer.style.display = "none";
                this.textContent = "+"; // Reverted button text
                this.style.transform = "rotate(0deg)"; // Keeping the rotation
                this.style.backgroundColor = "transparent"; // Reverted background
                this.style.color = "#000"; // Reverted text color (or whatever default you prefer)
            }
        });
    });

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