$(function () {
    'use strict';


    
    var nav = $('.main_menu').offset().top;

    $(window).scroll(function(){
    
        var src =   $(this).scrollTop();
    
       if(src > nav ){
    
        $('.main_menu').addClass('menu_fix');
    
       }

       else{
    
        $('.main_menu').removeClass('menu_fix');
    
       }




    });


});