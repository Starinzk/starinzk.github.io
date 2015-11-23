(function( window, undefined ){

    
	var divName = $( ".page" );
    var buttons = $( ".nav_bar" ).find( "a" ); 



    buttons.on("click", function (e){

    	var className = $( this ).data( "page");

    	divName.hide();
    	$( className ).fadeIn(1000);
    	e.preventDefault();

    });

    divName.hide();
    $(".p1").fadeIn( 1000 );

})( window, undefined );

 