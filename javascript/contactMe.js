$(document).ready( function() {
	

	$("#contactMe").addClass("active");


});

	$(document).bind('mousemove', function(e){

 	if(e.pageX < $("#navbar").position().left + $("#navbar").width() - 165
		&& e.pageX > $("#navbar").position().left + 100

		)
	{
    $('#mattRocco').css({
        left: e.pageX -100,
    }); 
    $('#bottomNav').css({
    	left: e.pageX - 140,
    });

}
})


