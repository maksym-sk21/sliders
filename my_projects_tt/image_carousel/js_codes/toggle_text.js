document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const overlay = document.querySelector('.overlay');

    toggleButton.addEventListener('click', () => {
        overlay.classList.toggle('hidden');
    });
});
