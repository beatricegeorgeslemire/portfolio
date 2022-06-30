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



// animation.init(() => {

// });

// animation.init();