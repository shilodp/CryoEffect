$('a[href^="#"]').each(function () {
    $(this).click(function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

$(".gallery-slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    variableWidth: true,
});

$(".team-slider").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    variableWidth: true,
});
