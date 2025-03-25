document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".section-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.nextElementSibling;
            if (section && section.classList.contains("section-content")) {
                toggleSection(section);
            }
        });
    });
});

function toggleSection(section) {
    section.style.display = section.style.display === "block" ? "none" : "block";
}
