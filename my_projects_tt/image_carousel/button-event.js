document.addEventListener('DOMContentLoaded', function () {
    const kentoButton = document.getElementById('kentoButton');
    const yujiButton = document.getElementById('yujiButton');
    const gojoButton = document.getElementById('gojoButton');
    const megumiButton = document.getElementById('megumiButton');
    const sukunaButton = document.getElementById('sukunaButton');

    kentoButton.addEventListener('click', function () {
        window.location.href = 'nanami_description.html';
    });

    yujiButton.addEventListener('click', function () {
        window.location.href = 'yuji_description.html';
    });

    gojoButton.addEventListener('click', function () {
        window.location.href = 'gojo_description.html';
    });

    megumiButton.addEventListener('click', function () {
        window.location.href = 'megumi_description.html';
    });

    sukunaButton.addEventListener('click', function () {
        window.location.href = 'sukuna_description.html';
    });
});
