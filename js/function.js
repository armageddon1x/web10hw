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

  var original;
  var parent;
  var middle;
  var child;
  var original;
  var orig;
  var flag=true;

  $("img").click(function(){
    var path=$(this).attr("src");
    var h
    var total_h;
    parent=$(this).parent().parent().attr("id");
    child=$("#"+parent).children(".description");
    //middle=$(".img").parent().attr("class");
    original=$("#"+parent).height();
    console.log(parent);
    console.log(child);
    if (flag) {
      orig=original;
      alert(original);
      alert(orig);
      flag=false;
    }else{
      original=orig;
      alert(original);
      alert(orig);
    }
    //alert(parent);
    //alert(middle);
    //alert(original);
    //alert(child);

    $(child).fadeIn(2000);
    $(".description .img").html("<img src='"+path+"' class='thumb'>");
    h=$(".img").height();
    total_h=h+original;
   $("#"+parent).animate({
    height: total_h
   }, 500, function() {
      // Animation complete event. 
   });
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