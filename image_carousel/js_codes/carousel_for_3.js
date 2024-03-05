const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot'); // Добавлено получение точек

async function animateAndRemoveOriginal(clonedItem, originalItem) {
    slider.append(clonedItem);

    // Применяем класс анимации для копии элемента
    clonedItem.classList.add('item');

    await new Promise((resolve) => {
        // Наследуем продолжительность анимации из CSS
        clonedItem.addEventListener('transitionend', () => {
            originalItem.remove();
            clonedItem.classList.remove('item');
            resolve();
        }, { property: 'transform', once: true });
    });
}

function activate(e) {
    const items = document.querySelectorAll('.item');
    const currentDot = Array.from(dots).findIndex(dot => dot.classList.contains('active'));

    async function handleNext() {
        const clonedItem = items[0].cloneNode(true);
        slider.append(clonedItem);

        // Даем браузеру время на применение анимации
        await new Promise(resolve => setTimeout(resolve, 0));

        items[0].remove();
        slider.append(items[0]);

        // После нажатия на кнопку вперед делаем активной кнопку назад
        document.querySelector('.prev').classList.add('active');
        document.querySelector('.next').classList.remove('active');

        updateDots(currentDot + 1);
    }

    async function handlePrev() {
        const clonedItem = items[items.length - 1].cloneNode(true);
        slider.prepend(clonedItem);

        // Даем браузеру время на применение анимации
        await new Promise(resolve => setTimeout(resolve, 0));

        items[items.length - 1].remove();

        // После нажатия на кнопку назад делаем активной кнопку вперед
        document.querySelector('.next').classList.add('active');
        document.querySelector('.prev').classList.remove('active');

        updateDots(currentDot - 1);
    }

    if (e.target.matches('.next') && e.target.classList.contains('active')) {
        handleNext();
    }

    if (e.target.matches('.prev') && e.target.classList.contains('active')) {
        handlePrev();
    }
}



function updateDots(newIndex) {
    const totalDots = dots.length;

    // Обработка кругового переключения
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
