
 /*var max_scroll = 450; // this is the scroll position to start positioning the nav in a fixed way
    $(document).ready(function(){

        $(window).scroll(function () {
        var navbar = $("#floatable-nav-bar");

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > max_scroll && !navbar.is(".nav_floated")) {
            navbar.addClass("nav_floated");
            // console.log("go floated");
        }
        else if(scrollTop < max_scroll && navbar.is(".nav_floated") ) {
            // console.log("return to normal");
            navbar.removeClass("nav_floated");
        }

    }
}*/


$('.carousel').carousel({
  interval: 4000
})

$(document).ready(function(){
var lastId, topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight() + 150,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

menuItems.click(function(e) {
    var href = $(this).attr("href"),
    topMenuHeight = topMenu.outerHeight() + 20,
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

$(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop) return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});
});