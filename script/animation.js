$(document).ready(function(){
/* toggle qunit section for showtest button when clicked */
$("#qunit").hide(); /* hide the qunit section in the beginning */
$("#qunitTitle").hide();
    $("#testBtn").click(function(){
        $("#qunit").toggle("slow");
       $("#qunitTitle").toggle("slow");
    });

/* animation for result button when clicked */
 $("#resultBtn").click(function(){
$(".pictureSection").fadeOut("fast").fadeIn("slow");
$("#result").slideUp("fast").slideDown("slow");
});

});







