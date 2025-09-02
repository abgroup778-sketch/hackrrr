// Mobile menu & simple form handler
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been received.");
            form.reset();
        });
    }
});
