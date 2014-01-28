
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
		interval = setTimeout("rainb()", 500);
	}
////////////~`~`~`~`~`~`~`~`~`~`~`~`End Rainbow function`~`~`~`~`~`~`~`~`~`~`~`///////////
	
// do stuff when the document loads
$(document).ready(function() {
	//Start Color Changing by calling the function (init)
	rainb();
});

