document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.2, // El 20% del elemento debe estar visible
        }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
});
