const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

function activate(e) {
    const items = document.querySelectorAll('.item');
    const currentDot = Array.from(dots).findIndex(dot => dot.classList.contains('active'));

    if (e.target.matches('.next')&& e.target.classList.contains('active')) {
        slider.append(items[0]);
        updateDots(currentDot + 1);
        document.querySelector('.prev').classList.add('active');
        document.querySelector('.next').classList.remove('active');
    }

    if (e.target.matches('.prev')&& e.target.classList.contains('active')) {
        slider.prepend(items[items.length - 1]);
        updateDots(currentDot - 1);
        document.querySelector('.prev').classList.remove('active');
        document.querySelector('.next').classList.add('active');
    }

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

document.addEventListener('click', activate, false);

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
