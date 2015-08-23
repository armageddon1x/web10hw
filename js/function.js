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

  //google map
  function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(40.748817, -73.985428),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
	//end
});