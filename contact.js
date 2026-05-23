document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    try {
        const response = await fetch("contact.php", {
            method: "POST",
            body: formData
        });

        const result = await response.text();

        if (result.includes("success")) {
            form.style.display = "none";
            document.getElementById("contactSuccess").style.display = "block";
            form.reset();
            setTimeout(() => {
                window.location.href = 'thank.html';
            }, 1000); 
        } else {
            alert("❌ Error sending message. Please try again.");
        }
    } catch (error) {
        alert("❌ Something went wrong: " + error.message);
    }
});
