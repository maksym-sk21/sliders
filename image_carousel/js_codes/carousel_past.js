const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function activate(e) {
    const items = document.querySelectorAll('.item');
    const currentActive = document.querySelector('.active');

    if (e.target.matches('.next')) {
        const nextElement = currentActive.nextElementSibling || items[0];
        currentActive.classList.remove('active');
        nextElement.classList.add('active');
        slider.appendChild(items[0]);
    } else if (e.target.matches('.prev')) {
        const prevElement = currentActive.previousElementSibling || items[items.length - 1];
        currentActive.classList.remove('active');
        prevElement.classList.add('active');
        slider.insertBefore(items[items.length - 1], items[0]);
    }
}

nextBtn.addEventListener('click', activate);
prevBtn.addEventListener('click', activate);
