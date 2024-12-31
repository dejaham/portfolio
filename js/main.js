document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation pour faire apparaître les éléments au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observer les sections et les cartes
    document.querySelectorAll('section, .skill-card, .project-card').forEach((el) => {
        el.style.transform = 'translateY(20px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Animation du texte du hero
    const heroText = document.querySelector('#hero h1');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease-out';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 200);
    }

    // Gestion du menu responsive
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-toggle');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').appendChild(menuButton);

    menuButton.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show');
    });
});
