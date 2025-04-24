document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart");

    // Ajoute une vibration périodique
    setInterval(() => {
        heart.classList.add("vibrate");
        setTimeout(() => {
            heart.classList.remove("vibrate");
        }, 10); // Durée de la vibration
    }, 2000); // Intervalle entre les vibrations
});