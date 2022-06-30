
//animation on my about me section image
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

//animation on my about me section text
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

//animation on my project section
const observerThree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('projectsAnimation');
            return;
        }
        document.querySelector('.projectsSection').classList.remove('projectsAnimation');
    });
});

observerThree.observe(document.querySelector('.projectsSection'));