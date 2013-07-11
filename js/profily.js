// Script by Julien Henrotte
// 2013 For Sagacify.com

//replace empty profile picture
function profily(){
	$('img').each(function(){
		if($(this).attr('data-image') == 0){
			fullName = $(this).attr('alt');
			createInitiale($(this),'Calibri', fullName);
		}
	});
}

//create all canvas
function createInitiale(theCanvas, fontFamily, fullName){
	//Get the canvas, width + height
	var canvas = document.createElement('canvas');
	var getName = fullName;
	
	//Retrieve canvas widht and height
	canvas.width = theCanvas.width(),
	canvas.height = theCanvas.height();
	//Get the fonsize, based on canvas width
	var fontSize = canvas.width / 2 + 'px';

	//Get the initials
	var firstNameInitiales = getName.split(' ').slice(0, -1).join(' ').charAt(0);
	var lastNameInitiales = getName.split(' ').slice(-1).join(' ').charAt(0);

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
	var context = canvas.getContext('2d'),
	x = canvas.width / 2,
	y = canvas.height / 2;
	context.font = fontSize + ' ' + fontFamily;

	context.textAlign = 'center';
	context.textBaseline = 'middle';
	var colorCheck = colorMod[moduloResult].replace("#", '');
	
	//Check if the color is light or dark 
	context.fillStyle = isTooLightYIQ(colorCheck) ? '#31323a' : '#fff';
	
	//Construct canvas
	context.fillText(initiales, x, y);

	//Change canvas to a base64 data uri (simple manipulation)
	canvas = canvas.toDataURL();

	//Add color to the canvas and base64 src
	theCanvas.css({"background-color" : colorMod[moduloResult] });
	theCanvas.attr("src",canvas);
}


// Check color 
function isTooLightYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return yiq >= 128;
}

//replace empty profile picture
profily();