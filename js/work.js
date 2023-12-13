document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('section').forEach(function (section) {
        section.addEventListener('click', function () {
            section.style.backgroundColor = 'gray';
        });
    });
});
