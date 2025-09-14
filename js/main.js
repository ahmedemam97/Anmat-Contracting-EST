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
                // رفع WhatsApp أعلى 70px عن الأسفل
                $('.whatsapp-btn').css('bottom', '100px');
            } else {
                // اخفاء Back to Top
                $('.back-to-top').removeClass('show');
                // إعادة WhatsApp لمكانه الأصلي
                $('.whatsapp-btn').css('bottom', '30px');
            }
        });

        // الضغط على Back to Top
        $('.back-to-top').click(function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // الضغط على واتساب
        $('.whatsapp-btn').click(function () {
            window.open($(this).attr('href'), '_blank');
        });

    });

    // Whats App Icon

    $(document).ready(function () {

        // اظهار Back to Top عند النزول
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        });

        // الضغط على Back to Top
        $('.back-to-top').click(function (e) {
            e.preventDefault();
            let icon = $(this).find("i");

            // تشغيل أنيميشن الإطلاق
            icon.addClass("clicked");

            setTimeout(() => {
                icon.removeClass("clicked");
            }, 800);

            $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
        });

        // الضغط على واتساب يفتح الرابط فقط
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
        slidesPerView: 6,     // عدد اللوغوهات في الديسكتوب
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        grabCursor: true, // يخلي الماوس Drag
        breakpoints: {
            992: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            576: { slidesPerView: 2 }
        }
    });
})(jQuery);

