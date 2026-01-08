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


const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
});
scrollBtn.addEventListener('click', function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, options);

    document.querySelectorAll(".fade-in").forEach(element => {
        observer.observe(element);
    });
});