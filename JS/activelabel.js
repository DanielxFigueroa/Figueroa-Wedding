$(document).ready( function() {

   $(".wrap .wrap-content").blur( function() {
      if ( $(this).val()!="" ) {
         $(this).siblings("label").addClass("active");
      }
      else {
         $(this).siblings("label").removeClass("active");
      }
   });
});
