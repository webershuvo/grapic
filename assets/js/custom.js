$(document).ready(function(){
  // alert("ok");

  //Sticky Header js Start
    $(window).on('scroll', function () {
        var scrollAmount = $(window).scrollTop();

        //console.log(scrollAmount)
        var scrollTo = $("header").height();
        // alert(scrollTo);

        if (scrollAmount > scrollTo) {
            $(".logo_sm").removeClass("d-none");
        } else {

            $(".logo_sm").addClass("d-none");
        }
    });
    //Sticky Header js Ends

    // Sticky Sub Menu Js Start 
    var topNavHeight = $(".top-navbar").height();
    $("nav.submenu").css('top', topNavHeight);
    // note: for nav tag there parent are position=relative 

    // scroll on hover js 

    // let listElement = $('.scroll_menu');
    // let leftHoverScrollElement = $('#left-hover-scroll');
    // let rightHoverScrollElement = $('#right-hover-scroll');

    // let leftHoverScroll = new HoverScroller(leftHoverScrollElement, "left", listElement);
    // let rightHoverScroll = new HoverScroller(rightHoverScrollElement, "right", listElement);
    // leftHoverScrollElement.hover(function () {
    //   leftHoverScroll.scroll.start();
    // }, function () {
    //   leftHoverScroll.scroll.stop();
    // });

    // rightHoverScrollElement.hover(function () {
    //   rightHoverScroll.scroll.start();
    // }, function () {
    //   rightHoverScroll.scroll.stop();
    // });
    // listElement.scroll(function () {
    //   leftHoverScroll.check();
    //   rightHoverScroll.check();
    // });

    //some code of submenu about scroll on click js are moved to the bottom as it conflicts gere
    $('#right-hover-scroll').click(function() {
        event.preventDefault();
        $('.scroll_menu').animate({
            scrollLeft: "+=250px"
        }, "slow");
    });
        
    $('#left-hover-scroll').click(function() {
        event.preventDefault();
        $('.scroll_menu').animate({
            scrollLeft: "-=250px"
        }, "slow");
    });


    var scroll_menuNavWidth = $(".navbar-nav").width();
    var scroll_menuWidth = $(".scroll_menu .navbar-nav").width();

    if (scroll_menuWidth > scroll_menuNavWidth) {
        $(".scroll_btn").removeClass("d-none");
    } else {
        $(".scroll_btn").addClass("d-none");
    }

    // Sticky Sub Menu Js End 

// banner_simple_slider Start 
    $('.banner_simple_slider_wrap').slick({
        arrows: true,
        prevArrow: ".banner_simple_slider .left_btn",
        nextArrow: ".banner_simple_slider .right_btn",
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: false,
        cssEase: 'linear',
        // focusOnSelect: true,
        // responsive: [
        //     {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        //     },
        //     {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        //     }
        // ]
    });
// banner_simple_slider End

// Certificate js start 

    $('.certificate_wrapper').slick({
        arrows: true,
        prevArrow: ".certificate_btn .left_btn",
        nextArrow: ".certificate_btn .right_btn",
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: false,
        cssEase: 'linear',
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

// Certificate js end 

// Gallery js start 
    $('.gallery_wrap_for').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.gallery_wrap_nav',
        // centerMode: true,
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        focusOnSelect: true,
    });
    $('.gallery_wrap_nav').slick({
        arrows: true,
        prevArrow: ".certificate_btn .left_btn",
        nextArrow: ".certificate_btn .right_btn",
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: '.gallery_wrap_for',
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: false,
        cssEase: 'linear',
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

// Gallery js end 

// Venobox js start 
$('.venobox').venobox({
    framewidth : '80%',                            // default: ''
    // frameheight: '100vh',                            // default: ''
    border     : '5px',                             // default: '0'
    bgcolor    : '#72A682',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    // share      : ['facebook', 'twitter', 'download'] // default: []
}); 
// Venobox js end 

// scroll on click js 
var scroll_menu = document.querySelector(".navbar .scroll_menu .nav-link.active");
// scroll_menu.scrollIntoView({behavior: "smooth" ,inline: "center"});
// scroll_menu.scrollIntoView({inline: "center"});
scroll_menu.scrollIntoView({behavior: "smooth"});
});