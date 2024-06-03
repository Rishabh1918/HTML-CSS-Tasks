const slides = document.querySelectorAll(".slider");
var counter = 0;

if (slides.length > 0) {
    slides.forEach((slider, index) => {
        slider.style.left = `${index * 100}%`;
    });
}

const prev = () => {
    counter--;
    sliderImage();
};

const next = () => {
    counter++;
    sliderImage();
};

const sliderImage = () => {
    if (counter >= 0 && counter < slides.length) {
        slides.forEach((slider) => {
            slider.style.transform = `translateX(-${counter * 100}%)`;
        });
    }
};