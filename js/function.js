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

  $("img").click(function(){
    var path=$(this).attr("src");
    var h=$(".img").height();
    console.log(h);
    $(".description").fadeIn(1000);
    $(".description .img").html("<img src='"+path+"' class='thumb'/>");
    //$('#dragon').animate({
    //  height: "400px"
    //  }, 2000, function() {
    //      // Animation complete event. 
    //  });
  });

	//end
});