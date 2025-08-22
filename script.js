document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar ul');
    const navbar = document.querySelector('.navbar');

    if (!menuToggle || !navLinks) return;

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('bx-x');
        }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            if (icon && icon.classList.contains('bx-x')) {
                icon.classList.remove('bx-x');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            if (icon && icon.classList.contains('bx-x')) {
                icon.classList.remove('bx-x');
            }
        }
    });

    // Close menu on window resize (if screen becomes larger)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            if (icon && icon.classList.contains('bx-x')) {
                icon.classList.remove('bx-x');
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(31, 36, 45, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    });
});
