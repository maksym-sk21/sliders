const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function activate(e) {
    const items = document.querySelectorAll('.item');
    if (e.target.matches('.next')) {
        slider.appendChild(items[0]);
    } else if (e.target.matches('.prev')) {
        slider.insertBefore(items[items.length - 1], items[0]);
    }
}

nextBtn.addEventListener('click', activate);
prevBtn.addEventListener('click', activate);
