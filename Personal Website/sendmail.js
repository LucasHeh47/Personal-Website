loading = false;

$(document).ready(function() {
   $("#contact-form").on("submit", function(event) {
     $("#contact-submit").prop("disabled", true);
     loading = true;

     $("#visible-send-btn-text").addClass("hide");
     $("#invisible-send-btn-text").addClass("show");

     event.preventDefault();

     $.ajax({
       url: "sendmail.php",
       type: "post",
       data: $(this).serialize(),
       success: function(response) {
         loading = false;
         $("#contact-submit").prop("disabled", false);
         $("#visible-send-btn-text").removeClass("hide");
         $("#invisible-send-btn-text").removeClass("show");
         if (response === "success") {
           $(".alert-success").removeClass("alert-hide").fadeIn().delay(10000).fadeOut(function() {
            $(this).addClass("alert-hide");
          });
         } else {
           $(".alert-danger").removeClass("alert-hide").fadeIn().delay(10000).fadeOut(function() {
            $(this).addClass("alert-hide");
          });
         }
       },
       error: function() {
         $(".alert-danger").removeClass("alert-hide").fadeIn().delay(10000).fadeOut(function() {
            $(this).addClass("alert-hide");
          });
       }
     });
   });
 });
