document.addEventListener('DOMContentLoaded', () => {
    // Luxury Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
    }

    // Smooth Scroll Animations Logic
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true
        });
    }
});