// Mobile navigation
(function() {
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var overlay = document.querySelector('.mobile-nav-overlay');
    var nav = document.querySelector('.mobile-nav');
    var closeBtn = document.querySelector('.mobile-nav-close');

    function openNav() {
        overlay.classList.add('active');
        nav.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        overlay.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', openNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeNav();
    });
})();
