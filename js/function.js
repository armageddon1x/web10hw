$(document).ready(function(){
	//beginning

	//script to stick social media bar to top on scroll
	function sticky() {
    var window_top = $(window).scrollTop();
    var div_top = $("#anchor1").offset().top;
    if (window_top > div_top) {
      $("#myth").addClass("fixed");
    }else {
      $("#myth").removeClass("fixed");
    };
	};

$(function(){
  $(window).scroll(sticky);
  sticky();
});

	//end
});