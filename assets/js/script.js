
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

//carousel
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
          fixedWidth : 100,
      fixedHeight: 60,
          gap        : 10,
          rewind     : true,
          pagination : false,
    } ).mount();
  } );