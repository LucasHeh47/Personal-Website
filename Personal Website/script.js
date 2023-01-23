var nav = $("#nav");
(function () {
    var timeout;
    var $window = $(window);

    $window.on('scroll', function (e) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            if ($window.scrollTop() < 650) {
                nav.removeClass('hide');
            } else {
                nav.addClass('hide');
            }
        }, 100);
    });
}());