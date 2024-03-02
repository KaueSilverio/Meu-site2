window.onload = function() {
    var $menu = document.querySelector('.header'),
        posYScroll,
        hasFX = !document.querySelector('.fx');

    if (window.pageYOffset > 20) {
        document.body.classList.add('fx');
        hasFX = true;
    } else {
        document.body.classList.remove('fx');
        hasFX = false;
    }
};


(function () {

    var $menu = document.querySelector('.header'),
        posYScroll,
        hasFX = !document.querySelector('.fx');

    window.addEventListener('scroll', setupNav);

    function setupNav() {
        posYScroll = getYscroll();

        if (posYScroll > 20) {
            if (!hasFX) {
                document.body.classList.add('fx');
                hasFX = true;
            }
        } else if (hasFX) {
            document.body.classList.remove('fx');
            hasFX = false;
        }
    }

    function getYscroll() {
        return window.pageYOffset;
    }

    })();

    (function () {

    var $menu = document.querySelector('.header'),
        posYScroll,
        hasFX = !document.querySelector('.fx');

    window.addEventListener('scroll', setupNav);

})();