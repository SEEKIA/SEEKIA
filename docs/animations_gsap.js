document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content", { opacity: 0, y: -50, duration: 1.5, ease: "power2.out" });
    gsap.from(".business-cards .card", { opacity: 0, y: 30, duration: 1, stagger: 0.3, ease: "power2.out" });
    gsap.from("footer", { opacity: 0, y: 50, duration: 1, delay: 1, ease: "power2.out" });
});
