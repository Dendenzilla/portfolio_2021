// IF COMING FROM HOME OR ON HOME
if ((document.referrer === 'http://localhost:3000/index.html') || (document.referrer === 'http://localhost:3000/')  ||( window.location.href === 'http://localhost:3000/index.html' ) || ( window.location.href === 'http://localhost:3000/' )) {
    $( document ).ready(function() {
        $('.page-loader-base.bottom-left').removeClass('loading');
        console.log("either on home or coming from home");
    });
} else {
        $('.page-loader-base.bottom-left').addClass('loaded');
        console.log("not on home or coming from home");
}
if(( window.location.href !== 'http://localhost:3000/index.html' ) && ( window.location.href !== 'http://localhost:3000/' )){
    setTimeout(function(){ 
        var nextHeader= $('li.current-menu-item').text();
        $('.link-home span.submenu').text(nextHeader);
        if ($('#tw').length) { 
            var workHeader= $('#tw').text();
            $('.link-home span.submenu').text(workHeader);
            console.log('work header added');
        }
        $('.link-home span.submenu').removeClass('loading');
    }, 500);
    $( document ).ready(function() {
        $('li.current-menu-item').addClass('newPageItem');
    });
}
// Closing the main page loader on page load and opening it imemdiatly
// Taken out of the "doc.ready" fct so there's no blink during which user can see the main area
if ((document.referrer !== 'http://localhost:3000/index.html') || (document.referrer === 'http://localhost:3000/') && (sessionStorage.getItem("isOpen") == "True")){
    $('.page-loader-main').addClass('loaded');
    setTimeout(function(){
        $('.page-loader-main').removeClass('loaded');
        localStorage.setItem("isOpen", "False");
    }, 50);
}

$( document ).ready(function() {
    
    $(".homepage-header a, a.link-home").click(function(){
        $('.page-loader-base.top-right').addClass('loading');
        var href = $(this).attr('href');
        // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 750);
        return false;
    });
    // WHEN SWITCHING BETWEEN MENUS
    $('.pages-menu a').click(function(){
        $('li.current-menu-item').removeClass('newPageItem');
        $('.link-home span.submenu').text('loading').addClass('loading');
        $('.page-loader-main').addClass('loading');
        sessionStorage.setItem("isOpen", "True");
        var href = $(this).attr('href');
        // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 600);
        return false;
    });
    $('.window a.page-loader-scdn').click(function(){
        $('.link-home span.submenu').text('loading').addClass('loading');
    });
    
});

$('.burger').click(function(){
    $(".page-header").toggleClass('opened');
    $('#nav-icon2').toggleClass('open');
});
