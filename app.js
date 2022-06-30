// const animation = {};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('imgAnimation');
            return;
        }
        document.querySelector('.imgContainer').classList.remove('imgAnimation');
    });
});

observer.observe(document.querySelector('.imgContainer'));

const observerTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('textAnimation');
            return;
        }
        document.querySelector('.aboutText').classList.remove('textAnimation');
    });
});

observerTwo.observe(document.querySelector('.aboutText'));