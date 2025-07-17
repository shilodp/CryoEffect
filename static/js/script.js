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
});

$(".team-slider").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    variableWidth: true,
    centerMode: true,
});

$(document.forms["contact-us"]).submit((e) => {
    e.preventDefault();
    const token = grecaptcha.getResponse();

    if (token) {
        console.log('success')
    }
});
