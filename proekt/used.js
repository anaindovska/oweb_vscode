let currentIndexes = [0, 0, 0]; 

function slika(i, sliderIndex) {
    const sliders = document.querySelectorAll('.slikislider');
    const slider = sliders[sliderIndex];
    const imgwidth = 500;

    if (i >= 5) {
        currentIndexes[sliderIndex] = 0;
    } else if (i < 0) {
        currentIndexes[sliderIndex] = 4;
    } else {
        currentIndexes[sliderIndex] = i;
    }

    slider.style.transform = `translateX(-${currentIndexes[sliderIndex] * imgwidth}px)`;
}

function scrollLevo(sliderIndex) {
    slika(currentIndexes[sliderIndex] - 1, sliderIndex);
}

function scrollDesno(sliderIndex) {
    slika(currentIndexes[sliderIndex] + 1, sliderIndex);
}