$(document).ready(function(){
    $(window).on('load scroll', function(){

        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    
    });
    
    
    $('.facility').magnificPopup({
    
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
         
    });
});