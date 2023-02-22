const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

document.querySelector('.other-events-btn').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.menu').scrollIntoView({
        behavior: 'smooth',
    });
})
