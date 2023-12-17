document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('section').forEach(function (section) {
        section.addEventListener('click', function () {
            section.style.backgroundColor = 'bleu';
        });
    });
});document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var projects = document.querySelectorAll('.Project');
        var currentIndex = 0;

        function showProject(index) {
            projects.forEach(function(project, i) {
                if (i === index) {
                    project.style.opacity = '1';
                } else {
                    project.style.opacity = '0';
                }
            });
        }

        function nextProject() {
            currentIndex = (currentIndex + 1) % projects.length;
            showProject(currentIndex);
        }

        // Initial display
        showProject(currentIndex);

        // Auto slideshow every 3 seconds (adjust as needed)
        setInterval(nextProject, 3000);
    }, 2000); // Delay the start by 2 seconds
});

