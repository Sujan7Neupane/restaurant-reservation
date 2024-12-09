document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        indicators.forEach((indicator) => indicator.classList.remove("active"));

        slides[index].style.display = "block";
        indicators[index].classList.add("active");
        currentIndex = index;
    }

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            showSlide(index);
        });
    });

    
    showSlide(currentIndex);
});
