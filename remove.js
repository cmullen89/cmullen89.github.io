jQuery(document).ready(function($){
 setTimeout(function() {
   $('#remove').fadeOut('slow',function(){
    $('#remove').remove();
   });
 }, 4000);
});
