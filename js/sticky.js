	//script to stick social media bar to top on scroll
	function sticky() {
    var window_top = $(window).scrollTop();
    var div_top = $("#anchor1").offset().top;

    var window_top_2 = $(window).scrollTop();
    var div_top_2 = $("#anchor1").offset().top+36;

    console.log(window_top);
    console.log(div_top);
    console.log("window "+window_top_2);
    console.log("div 2 "+div_top_2);


    if (window_top > div_top) {
      $("#myth").addClass("fixed");
    }else {
      $("#myth").removeClass("fixed");
    };

    if (window_top_2 > div_top_2) {
      $("#navigator").addClass("fixed");
    }else {
      $("#navigator").removeClass("fixed");
    };
	};

    $(window).scroll(sticky);
    sticky();