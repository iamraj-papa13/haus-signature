document.addEventListener('DOMContentLoaded', () => {
    // Hide Preloader
    setTimeout(() => {
        document.getElementById('preloader').classList.add('loaded');
    }, 1500);

    // Initialize Animations
    AOS.init({ duration: 1000, once: true });
});
