let header = document.querySlector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);

});