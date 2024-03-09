document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');

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
        const requestedSlideIndex = parseInt(window.location.hash.slice(1));
        updateDots(requestedSlideIndex);
    });

    document.addEventListener('click', activate, false);
});
