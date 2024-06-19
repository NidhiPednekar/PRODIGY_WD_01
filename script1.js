document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const body = document.body;

    if (scrollPosition < 600) {
        body.classList.add('scroll-0');
        body.classList.remove('scroll-1', 'scroll-2', 'scroll-3');
    } else if (scrollPosition >= 600 && scrollPosition < 900) {
        body.classList.add('scroll-1');
        body.classList.remove('scroll-0', 'scroll-2', 'scroll-3');
    } else if (scrollPosition >= 900 && scrollPosition < 1200) {
        body.classList.add('scroll-2');
        body.classList.remove('scroll-0', 'scroll-1', 'scroll-3');
    } else {
        body.classList.add('scroll-3');
        body.classList.remove('scroll-0', 'scroll-1', 'scroll-2');
    }
});
