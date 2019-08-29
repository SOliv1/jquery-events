$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").show();
        $(".stream1").show(1000);
        $("#button_effects1").click(function(){
        $('#button_effects1').hide('slow');
    });
 });
 
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });

    $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    }); 
});     

//waits until page is loaded first

    $(document).ready(function(){
    //applies colour red to paragraphs when clicked on 
    $("p").click(function(){
        $("p").addClass("highlight_text");
    });

//will add lightblue to h2 elements

    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });

    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */

    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    }); 
    
    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons


    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons

    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
}); 
