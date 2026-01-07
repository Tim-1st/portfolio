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

    let lastScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            navbar.classList.remove('hide-navbar');
        } else if (currentScroll < lastScroll) {
            navbar.classList.remove('hide-navbar');
        } else if (currentScroll > lastScroll) {
            navbar.classList.add('hide-navbar');
        }
        lastScroll = currentScroll;
    });

    const observerLi = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('li').forEach(li => {
        observerLi.observe(li);
    });

    
});


