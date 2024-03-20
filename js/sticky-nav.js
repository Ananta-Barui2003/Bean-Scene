
$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 300) {
    $(".header").addClass("sticky");
} else {
    $(".header").removeClass("sticky");
}
});