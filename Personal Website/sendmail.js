$(document).ready(function() {
   $("#contact-form").on("submit", function(event) {
     event.preventDefault();

     $.ajax({
       url: "sendmail.php",
       type: "post",
       data: $(this).serialize(),
       success: function(response) {
         if (response === "success") {
           $("#alert-success").removeClass("alert-hide").fadeIn().delay(3000).fadeOut(function() {
            $(this).addClass("alert-hide");
          });
         } else {
           $("#alert-danger").removeClass("alert-hide").fadeIn().delay(3000).fadeOut(function() {
            $(this).addClass("alert-hide");
          });
         }
       },
       error: function() {
         $("#alert-danger").removeClass("alert-hide").fadeIn().delay(3000).fadeOut(function() {
            $(this).addClass("alert-hide");
          });
       }
     });
   });
 });
