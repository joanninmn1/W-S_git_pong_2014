
////////////~`~`~`~`~`~`~`~`~`~`~`~`Start Rainbow function`~`~`~`~`~`~`~`~`~`~`~`///////////
	// set up an array with some color words in it.
	var kcColor=new Array("red","yellow","green","cyan","blue","Fuchsia"), kcCount=0, interval;
	// create function to do a rainbow!
	function rainb(){
		// iterate through the array based on the counter
	    if (kcCount == kcColor.length-1) {kcCount=0} else {kcCount +=1}
	    // render the colors to the screen using the animate jquery call while iterating throught the array. 
	    $('#hello-world').animate({color:kcColor[kcCount]}, 1000);
	    // loop this function every 500ms
		interval = setTimeout("rainb()", 900);
	}
////////////~`~`~`~`~`~`~`~`~`~`~`~`End Rainbow function`~`~`~`~`~`~`~`~`~`~`~`///////////
	
// do stuff when the document loads
$(document).ready(function() {
	//Start Color Changing by calling the function (init)
	rainb();
});



//////Shelby's box business://////

$(document).ready(function(event){
	
	// INTERACTION FUNCTIONS & EVENT LISTENERS
	
	$('.creature a').click(function(event){
		
		event.preventDefault();
		
		var t = event.target;
		
		var l = $(t).position().left + 100;
		
		$(t).animate({ 'left' : l }, 250);
		
		console.log(l);
		
	});

		$('.weird a').click(function(event){
		
		event.preventDefault();
		
		var t = event.target;
		
		var l = $(t).position().top + 100;
		
		$(t).animate({ 'top' : l }, 250);
		
		console.log(l);
		
	});
	
	
	function init() {	
	}
	
	init();
	
});


// Enable jQuery ui dragging
    $(function() {
        $( ".draggable" ).draggable();
    });
// Enable jQuery ui resize
    $(function() {
        $( ".resizable" ).resizable({
            helper: "ui-resizable-helper"
        });
    });

// Sparkly mouse (!!!)
	$(document).ready(function() {

	    $(document).mousemove(function(e) {

			//create img elements and appending to body
			pointer = $('<img>').attr({'src':'images/sparkles.gif'});
			$(document.body).append(pointer);

			//show at mouse position and fade
                pointer.css({
                        'position':'absolute', 'z-index':'0',
                        top: e.pageY +16 ,    //offsets
                        left: e.pageX +16   //offsets
                    }).fadeOut(1600);     
	    });
	});

