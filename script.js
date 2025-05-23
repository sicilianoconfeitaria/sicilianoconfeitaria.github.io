document.addEventListener('DOMContentLoaded', function() {
    // Menu adaptado para mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const barraLinks = document.querySelector('.barra-links');
    if (mobileMenu && barraLinks) {
        mobileMenu.addEventListener('click', () => {
            barraLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    // Carrossel
    const carrossel = document.querySelector('.carrossel');
    if (carrossel) {
        const slides = document.querySelectorAll(".carrossel img");
        let currentIndex = 0;
        const intervalTime = 5000;
        let slideInterval;
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
        function startCarousel() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
        function stopCarousel() {
            clearInterval(slideInterval);
        }
        showSlide(currentIndex);
        startCarousel();
        // Botões
        const nextBtn = document.querySelector(".carrossel-botoes .next");
        const prevBtn = document.querySelector(".carrossel-botoes .prev");
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                stopCarousel();
                nextSlide();
                startCarousel();
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                stopCarousel();
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
                startCarousel();
            });
        }
        // Pause com o cursor em cima
        carrossel.addEventListener('mouseenter', stopCarousel);
        carrossel.addEventListener('mouseleave', startCarousel);
    }
});