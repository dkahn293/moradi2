$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });
});

$(function () {

    createSticky($(".navbar"));

});

function createSticky(sticky) {

    if (typeof sticky !== "undefined") {

        var pos = sticky.offset().top,
            win = $(window);

        win.on("scroll", function () {
            if (win.scrollTop() >= pos) {
                sticky.addClass("fixed");
                $(sticky).find('*').addClass("fixed-child");
            } else {
                sticky.removeClass("fixed");
                $(sticky).find('*').removeClass("fixed-child");
            }
        });
    }
}
