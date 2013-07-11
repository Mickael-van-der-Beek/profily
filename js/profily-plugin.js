(function($) {

	$.fn.profily = function( options ) {

		var fullName;

		var settings = $.extend({
			fontFamily   : 'Calibri',
			attribute    : 'alt',
			light 		 : true
		}, options);

		return this.each( function() {
        	//Get the canvas, width + height
        	var canvas = document.createElement('canvas');
			//Get full name
			if (settings.attribute && $(this).attr(settings.attribute) != '' && $(this).attr('data-image') != 1){
				fullName = $(this).attr(settings.attribute);

				//Retrieve canvas widht and height
				canvas.width = $(this).width(),
				canvas.height = $(this).height();

				//Get the initials
				var firstNameInitiales = fullName.split(' ').slice(0, -1).join(' ').charAt(0);
				var lastNameInitiales = fullName.split(' ').slice(-1).join(' ').charAt(0);

				//base on 2 string, firstName can be empty
				if(firstNameInitiales == ''){
					var initiales = lastNameInitiales;
					var moduloResult = (lastNameInitiales.charCodeAt(0)) % 10;
				}else{
					var initiales = firstNameInitiales + lastNameInitiales;
					var moduloResult = (firstNameInitiales.charCodeAt(0) + lastNameInitiales.charCodeAt(0)) % 10;
				}

				//get color from initiales and apply color
				//Use modulo from charCode of initial
				//Same color each time, color change with initiales
				var colorMod = ["#FFD213","#cc3333","#4DBA61","#8B2786","#A85B34","#ff6600","#0099cc","#3A4769","#433225","#35384D"];

				//Font + align center and middle
				var context = canvas.getContext('2d');
				

				//Get the fonsize, based on canvas width
				var fontSize = canvas.width / 2 + 'px';
				if(settings.fontFamily){
					context.font = fontSize + ' ' + settings.fontFamily;	
				}
				
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				
				var colorCheck = colorMod[moduloResult].replace("#", '');
				
				//Check if the color is light or dark 
				if(settings.light){
					context.fillStyle = isTooLightYIQ(colorCheck) ? '#31323a' : '#fff';
				}else{
					context.fillStyle = 'white';
				}
				
				//Construct canvas
				x = canvas.width / 2,
				y = canvas.height / 2;
				context.fillText(initiales, x, y);

				//Change canvas to a base64 data uri (simple manipulation)
				canvas = canvas.toDataURL();

				//Add color to the canvas and base64 src
				$(this).css({"background-color" : colorMod[moduloResult] });
				$(this).attr("src",canvas);
			}
		});
	}

	function isTooLightYIQ(hexcolor){
		var r = parseInt(hexcolor.substr(0,2),16);
		var g = parseInt(hexcolor.substr(2,2),16);
		var b = parseInt(hexcolor.substr(4,2),16);
		var yiq = ((r*299)+(g*587)+(b*114))/1000;
		return yiq >= 128;
	}

}(jQuery));