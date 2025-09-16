(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').addClass('show');
                $('.whatsapp-btn').css('bottom', '100px');
            } else {
                $('.back-to-top').removeClass('show');
                $('.whatsapp-btn').css('bottom', '30px');
            }
        });

        $('.back-to-top').click(function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        $('.whatsapp-btn').click(function () {
            window.open($(this).attr('href'), '_blank');
        });

    });

    // Whats App Icon
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        });

        $('.back-to-top').click(function (e) {
            e.preventDefault();
            let icon = $(this).find("i");

            icon.addClass("clicked");

            setTimeout(() => {
                icon.removeClass("clicked");
            }, 800);

            $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
        });

        $('.whatsapp-btn').click(function () {
            window.open($(this).attr('href'), '_blank');
        });

    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Carousel 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        breakpoints: {
            992: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            576: { slidesPerView: 2 }
        }
    });

    // Our Clients Swiper
    $(document).ready(function () {
        const clientsImages = [
            ["awtad.jpg", "اوتاد الفهد للمقاولات"],
            ["albaik-resaurent.png", "سلسلة مطاعم البيك"],
            ["amanat-hail.png", "أمانة منطقة حائل"],
            ["hail-zone.png", "حائل زون"],
            ["king-khaled.jpg", "مستشفي الملك خالد"],
            ["Kudu-logo.svg", "سلسلة مطاعم كودو"],
            ["dunkin.svg", "دانكن"],
            ["bank-albilad.png", "بنك البلاد"],
            ["othaim-logo.svg", "اسواق العثيم"],
            ["anwar-hospital.png", "مستشفي الانوار الطبي"],
            ["saknai-hotel.png", "فندق سكناي"]
        ];

        var client = document.getElementsByClassName("swiper-wrapper")[0];
        let slides = "";
        for (let i = 0; i < clientsImages.length; i++) {
            slides += `<div class="swiper-slide">
                            <div class="image-parent">
                                <img src="./img/clients/${clientsImages[i][0]}" alt="Logo ${i}" />
                            </div>
                            <p>${clientsImages[i][1]}</p>
                        </div>
                        `
                ;
        }

        client.innerHTML = slides;
    });
})(jQuery);

