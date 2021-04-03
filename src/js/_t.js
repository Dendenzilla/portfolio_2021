$(function(){
    //WHEN YOU CLICK THE ELEMENT..
    $('.tt').on('click',function(){
        //GET THE TEXT INSIDE THAT SPECIFIC LI
        var content= $(this).text();
        console.log(content);
        //PLACE THE TEXT INSIDE THE INPUT FIELD, YOU CAN CHANGE YOUR SELECTOR TO TARGET THE RIGHT INPUT
        $('#trgt').text(content);
        //HERE YOU CAN DO SOMETHING ELSE LIKE SIBMITING THE FORM, OR CLICK A BUTTON.. OR SOMETHING ELSE
    });
});

var nextHeader= $('li.current-menu-item').text();