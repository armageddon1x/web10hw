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

  var first_click=true;
  var original=$("#dragon").height();

  $("img").click(function(){
    var path=$(this).attr("src");
    var h
    var total_h;


      $(".description").fadeIn(2000);
      $(".description .img").html("<img src='"+path+"' class='thumb'>");
      h=$(".img").height();
      total_h=h+original;
     $("#dragon").animate({
      height: total_h
     }, 500, function() {
        // Animation complete event. 
     });
   

    /*console.log(h);
    $(".description").fadeIn(2000);
    $(".description .img").html("<img src='"+path+"' class='thumb'>");
     h=$(".img").height();
    $("#dragon").animate({
     height: h
     }, 1000, function() {
        // Animation complete event. 
     });*/
  });

  //google map
  function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: new google.maps.LatLng(40.748817, -73.985428),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)

    var styles = [
      {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},
      {"color":"#000000"},
      {"lightness":40}]},
      {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},
      {"color":"#000000"},{"lightness":16}]},  
      {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},
      {"lightness":20}]},
      {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},
      {"lightness":17},
      {"weight":1.2}]},
      {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},
      {"lightness":20}]},
      {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},
      {"lightness":21}]},
      {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},
      {"lightness":17}]},
      {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},
      {"lightness":29},
      {"weight":0.2}]},
      {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},
      {"lightness":18}]},
      {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},
      {"lightness":16}]},
      {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},
      {"lightness":19}]},
      {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},
      {"lightness":17}]}
    ]
    map.setOptions({styles: styles});
    
      }
      google.maps.event.addDomListener(window, 'load', initialize);
	//end
});