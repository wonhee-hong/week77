$(document).ready(function(){

	$( ".title" ).click( function() {
          $( ".img2" ).animate( {
            opacity: '100%'
        } ,3400);

    } );  
    $(".title").on('click', function(){
    	$('.door1').animate({
    		left:'0px'
    	},1500)
    	.animate({
    		delay:'2s'
    	})
    	.animate({
    		left:'-1000px'
    	},1000)
    });
    $(".text").click(function(){
    	$(".img2").animate({
    		opacity: '0%'
    	},1500);
    });
    $(".title").on('click', function(){
    	$('.door2').animate({
    		left:'0px'
    	},1500)
    	.animate({
    		delay:'2s'
    	})
    	.animate({
    		left:'1000px'
    	},1000)
    });


})




