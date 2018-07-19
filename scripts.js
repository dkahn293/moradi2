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

//facebook messenger

window.fbAsyncInit = function () {
    FB.init({
        appId: '252416415554866',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
