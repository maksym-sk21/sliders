document.addEventListener('DOMContentLoaded', function () {
    const kentoButton = document.getElementById('kentoButton');
    const yujiButton = document.getElementById('yujiButton');
    const gojoButton = document.getElementById('gojoButton');
    const megumiButton = document.getElementById('megumiButton');
    const sukunaButton = document.getElementById('sukunaButton');

    function openDescription(url) {
        window.open(url, 'sameWindowName');
    }

    kentoButton.addEventListener('click', function () {
        openDescription('nanami_description.html');
    });

    yujiButton.addEventListener('click', function () {
        openDescription('yuji_description.html');
    });

    gojoButton.addEventListener('click', function () {
        openDescription('gojo_description.html');
    });

    megumiButton.addEventListener('click', function () {
        openDescription('megumi_description.html');
    });

    sukunaButton.addEventListener('click', function () {
        openDescription('sukuna_description.html');
    });
});
