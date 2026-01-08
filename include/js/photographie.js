const burgerMenu = document.querySelector('.burger-menu');
    const ancres = document.querySelector('.ancres');
    const ancresLinks = document.querySelectorAll('.ancres a');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        ancres.classList.toggle('active');
    });

    ancresLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            ancres.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !ancres.contains(e.target)) {
            burgerMenu.classList.remove('active');
            ancres.classList.remove('active');
        }
    });