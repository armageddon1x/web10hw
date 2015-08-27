$(document).ready(function(){
    $("#thing").click(function(){
   
    $("#thing").animate({
     height: "300px"
     }, 2000, function() {
        // Animation complete event. 
     });
  });
});