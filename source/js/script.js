//var slideWidth=300;
//var sliderTimer;
//$(function(){
//$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
//    sliderTimer=setInterval(nextSlide,1000);
//    $('.viewport').hover(function(){
//        clearInterval(sliderTimer);
//    },function(){
//        sliderTimer=setInterval(nextSlide,1000);
//    });
//});
//
//function nextSlide(){
//    var currentSlide=parseInt($('.slidewrapper').data('current'));
//    currentSlide++;
//    if(currentSlide>=$('.slidewrapper').children().size())
//    {
//        currentSlide=0;
//    }
//    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
//}
// $(function() {
//   $('.wrapper').click(function() {
//   	$('.content').toggleClass('open');
//   	$(this).toggleClass('open');
//   })

// })

// $(document).ready(function() {
// 	// Update nav selected when click
// 	$('a').on('click', function() {
// 		console.log("haha");
// 		$('.navigation-link').removeClass('navigation__link--active');
// 		$(this).parent().addClass('navigation__link--active');
// 	});
//   slideSwitch();
	
// });


document.getElementById('btn-back').onclick = sliderLeft;

function sliderLeft() {
	console.log('Nazhat');
}

sliderLeft();