$(document).ready(function(){

    // sticky navigation
    $('.js--section-feature').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });

    // scroll on buttons
    $('.js--goto-section-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--order-panel').offset().top},1000)
    });

    $('.js--goto-section-feature').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top},1000)
    });

    // smooth scrolling
    // Select all links with hashes
            $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
                ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                    scrollTop: target.offset().top
                    }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                    });
                }
                }
            });

    // animation on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__pulse');
    },{
        offset: '70%'
    });

    $('.js--order-panel').waypoint(function(direction){
        $('.js--order-panel').addClass('animate__animated animate__pulse');
    },{
        offset: '10%'
    });

    $('.js--app-screen').waypoint(function(direction){
        $('.js--app-screen').addClass('animate__animated animate__wobble');
    },{
        offset: '30%'
    });

    $('.js--branch-heading').waypoint(function(direction){
        $('.js--branch-heading').addClass('animate__animated animate__heartBeat');
    },{
        offset: '70%'
    });

    $('.js--customer').waypoint(function(direction){
        $('.js--customer').addClass('animate__animated animate__jackInTheBox');
    },{
        offset: '70%'
    });

    // mobile navigation
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    })
   
});