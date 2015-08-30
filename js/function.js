$(document).ready(function(){
	//beginning

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

  var original;
  var parent;
  var middle;
  var child;
  var image_child;
  var original;
  var orig;
  var flag=true;

  $("img").click(function(){
    var path=$(this).attr("src");
    var h
    var total_h;
    parent=$(this).parent().parent().attr("id");
    child=$("#"+parent).children(".description");
    image_child=$("#"+parent).find(".img");
    //middle=$(".img").parent().attr("class");
    original=$("#"+parent).height();
    console.log(parent);
    console.log(child);
    console.log(image_child);

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
    $(image_child).html("<img src='"+path+"' class='thumb'>");
    h=$(image_child).height();
    total_h=h+original;
   $("#"+parent).animate({
    height: total_h
   }, 500, function() {
      // Animation complete event. 
   });
  });

  //smooth animation for anchor link
 function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  var fname="";
  var lname="";
  var email="";
  var address="";
  var city="";
  var state="";
  var zip="";
  var card="";
  var sec="";

  $("#submit").click(function(){
    fname=$("#fname").val();
    lname=$("#lname").val();
    email=$("#email").val();
    address=$("#address").val();
    city=$("#city").val();
    state=$("#state").val();
    zip=$("#zip").val();
    card=$("#card").val();
    security=$("#security").val();

    fname_valid=validate("fname", fname);
    lname_valid=validate("lname", lname);
    email_valid=validate("email", email);
    zip_valid=validate("zip", zip);
    card_valid=validate("card",card);
    security_valid=validate("security", security);
    //validate("last_name", lname);
    //validate("email", email);
    //validate("card", card);
    //validate("security",sec);
    console.log(fname_valid);

    if (fname_valid) {
      alert("valid name, next step");
    }else{
      alert("invalid");
    };

    if (lname_valid) {
      alert("valid last name, next step");
    }else{
      alert("invalid last name");
    };

    if (email_valid) {
      alert("valid email, next step");
    }else{
      alert("invalid email");
    };

    if (zip_valid) {
      alert("valid zip, next step");
    }else{
      alert("invalid zip");
    };
    
    if (card_valid) {
      alert("valid card, next step");
    }else{
      alert("invalid card");
    };
   
    if (security_valid) {
      alert("valid sec, next step");
    }else{
      alert("invalid sec");
    };

    if (true) {
      alert("buy");
      alert("Thank you, "+fname+" "+lname+" for your purchase");
      $("#purchase").submit();
      
    };

  });
// (data.indexOf("0")===-1||data.indexOf("1")===-1||data.indexOf("2")===-1||data.indexOf("3")===-1||data.indexOf("4")===-1)
  function validate(data_type,data){
    var result=false;

    if (data!=""){
      console.log("we have input");
      //switch
      switch(data_type){
        //first name
        case "fname":
          if (data.indexOf("0")===-1) {
            alert("good name");
            $("#fname").removeClass("error");
            result=true;
          }else{
            alert("no numbers in name!");
            $("#fname").addClass("error");
            result=false;
          }
          break;
          //last name
        case "lname":
          if (data.indexOf("0")===-1) {
            alert("good name");
            $("#lname").removeClass("error");
            result=true;
          }else{
            alert("no numbers in name!");
            $("#lname").addClass("error");
            result=false;
          }
          break;
          //email
        case "email":
          if(data.indexOf("@")!=-1){
            //console.log(" The @ is found");
            $("#email").removeClass("error");
            result=true;
            if(data.indexOf(".")!=-1 ){
              //console.log( "valid ");
              $("#email").removeClass("error");
              result=true;
            }else{
              //console.log( "invalid email");
              $("#email").addClass("error");
              result=false;
            }
          }
         break;
         //zip
        case "zip":
          if (data.length===5) {
            alert("good zip");
            $("#zip").removeClass("error");
            result=true;
          }else{
            alert("not enough zip!");
            $("#zip").addClass("error");
            result=false;
          }
          break;
          //card
        case "card":
          if (data.length===16) {
            alert("good card");
            $("#card").removeClass("error");
            result=true;
          }else{
            alert("not enough numbers!");
            $("#card").addClass("error");
            result=false;
          }
         break;
         //security
        case "security":
         if (data.length===3) {
            alert("good security");
            $("#security").removeClass("error");
            result=true;
          }else{
            alert("not 3 numbers!");
            $("#security").addClass("error");
            result=false;
          }
          break;
      }
    }else{
      console.log("nothing here")
      result=false;
    }
    return result;
  }


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