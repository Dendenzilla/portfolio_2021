// IF COMING FROM HOME OR ON HOME
if ((document.referrer === 'https://dekube.be/') || (document.referrer === 'http://dekube.be/') || (document.referrer === 'http://localhost:3000/')  ||( window.location.href === 'https://dekube.be/' ) || ( window.location.href === 'http://dekube.be/' ) || ( window.location.href === 'http://localhost:3000/' )) {
    $( document ).ready(function() {
        $('.page-loader-base.bottom-left').removeClass('loading');
        console.log("either on home or coming from home");
    });
} else {
        $('.page-loader-base.bottom-left').addClass('loaded');
        console.log("not on home or coming from home");
}
if(( window.location.href !== 'https://dekube.be/' ) && ( window.location.href !== 'http://dekube.be/' ) && ( window.location.href !== 'http://localhost:3000/' )){
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
        // WAS ADDED TO REMOVE LOADER WHEN ENTERING THE SITE ON A MENU PAGE
        $('.page-loader-main').removeClass('loaded');
    });
}
// Closing the main page loader on page load and opening it imemdiatly
// Taken out of the "doc.ready" fct so there's no blink during which user can see the main area
// first "if" so that when coming from home the menu loader is finished when the orange loader start
if ((document.referrer === 'https://dekube.be/') || (document.referrer === 'http://dekube.be/') || (document.referrer === 'http://localhost:3000/')){
    console.log('coming from home');
    // Start the page with the main loader opened (blocking the view)
    $('.page-loader-main').addClass('loaded');
    $('.page-header').addClass('opened');
    setTimeout(function(){
        $('.page-loader-main').removeClass('loaded');
        setTimeout(function(){
            $('.page-header').removeClass('opened');
        }, 50);
        //was localStorage
        sessionStorage.setItem("isOpen", "False");
    }, 50);
}else if((sessionStorage.getItem("isOpen") == "True")){
    // Start the page with the main loader opened (blocking the view)
    // Update, Main loader always starts opened
    $('.page-loader-main').addClass('loaded');
    $('.page-header').addClass('opened');
    setTimeout(function(){
        $('.page-loader-main').removeClass('loaded');
        setTimeout(function(){
            $('.page-header').removeClass('opened');
        }, 500);
        //was localStorage
        sessionStorage.setItem("isOpen", "False");
    }, 50);
}else{
    // WHEN LANDING DIRECTLY ON A MENU PAGE ON MOBILE WE DELAY THE MENU REMOVAL
    setTimeout(function(){
        $('.page-header').removeClass('opened');
    }, 500);
}

// APPLY THE MENU LI CLASS WHEN VIEWING A WINDOW
if ((sessionStorage.getItem("windowOpen") == "True")){
    console.log("windowopened");
    $('ul.menu li:first').addClass('newPageItem');
    sessionStorage.setItem("windowOpen", "False");
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
        $('#nav-icon2').removeClass('open');
        $('li.newPageItem').removeClass('newPageItem');
        $('.link-home span.submenu').text('loading').addClass('loading');
        $('.page-loader-main').addClass('loading');
        sessionStorage.setItem("isOpen", "True");
        var href = $(this).attr('href');
        // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 600);
        return false;
    });
    $('.window a.page-loader-scdn').click(function(){
        sessionStorage.setItem("isOpen", "True");
        $('li.newPageItem').removeClass('newPageItem');
        $(".page-header").addClass('opened');
        $('.page-loader-main').addClass('loading');
        $('.link-home span.submenu').text('loading').addClass('loading');
        sessionStorage.setItem("windowOpen", "True");
        var href = $(this).attr('href');
        // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 600);
        return false;
    });
    
});

$('.burger').click(function(){
    $(".page-header").toggleClass('opened');
    $('#nav-icon2').toggleClass('open');
    $('body').toggleClass('burger-menu');
});
