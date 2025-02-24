const options = {
    root: document.querySelector('.span-wrapper'),
    rootMargin: '0px',
    threshold: 0.5,
};

const handleSpanShown = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(handleSpanShown, options);
const targets = document.querySelectorAll('.initial');
targets.forEach(target => {
    return observer.observe(target);
});