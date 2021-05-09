$(document).ready(function(){
  $('.next').on('click',function(){
    console.log('abd');
  	var currentDiv = $('.active');
  	var nextDiv = currentDiv.next();

  	if (nextDiv.length){
  		currentDiv .removeClass('active').css('z-index',-10);
  		nextDiv.addClass('active').css('z-index',10)
      console.log('show next');

  	}

  });

 $('.prev').on('click',function(){
  	var currentDiv = $('.active');
  	var prevDiv = currentDiv.prev();

  	if (prevDiv.length){
  		currentDiv.removeClass('active').css('z-index',-10);
  		prevDiv.addClass('active').css('z-index',10)

  	}

  });
  

});