document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
