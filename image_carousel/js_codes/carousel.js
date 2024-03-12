const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;

function activate(e) {
    const items = document.querySelectorAll('.item');
    const currentDot = Array.from(dots).findIndex(dot => dot.classList.contains('active'));

    if (e.target.matches('.next')) {
        slider.append(items[0]);
        updateDots(currentDot + 1);
    }

    if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
        updateDots(currentDot - 1);
    }

    updateHash();
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    isSwiping = false;
}

function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
    isSwiping = true;
}

function handleTouchEnd() {
    if (isSwiping) {
        handleSwipe();
    }
}

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 80) {
        prevButtonAction();
    } else if (deltaX < -80) {
        nextButtonAction();
    }
}

function nextButtonAction() {
    const items = document.querySelectorAll('.item');
    slider.append(items[0]);
    const currentDot = Array.from(dots).findIndex(dot => dot.classList.contains('active'));
    updateDots(currentDot + 1);
    updateHash();
}

function prevButtonAction() {
    const items = document.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);
    const currentDot = Array.from(dots).findIndex(dot => dot.classList.contains('active'));
    updateDots(currentDot - 1);
    updateHash();
}

function updateDots(newIndex) {
    const totalDots = dots.length;

    if (newIndex < 0) {
        newIndex = totalDots - 1;
    } else if (newIndex >= totalDots) {
        newIndex = 0;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newIndex);
    });
}

function updateHash() {
    const activeSlideIndex = Array.from(dots).findIndex(dot => dot.classList.contains('active'));
    window.location.hash = `#${activeSlideIndex}`;
}

window.addEventListener('DOMContentLoaded', function () {
    let requestedSlideIndex = parseInt(window.location.hash.slice(1));

    if (isNaN(requestedSlideIndex)) {
        requestedSlideIndex = 0;
        window.location.hash = '#0';
    }

    updateDots(requestedSlideIndex);
});

document.addEventListener('click', activate, false);
slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);
