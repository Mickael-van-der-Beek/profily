#Profily

This is a little snippet to replace empty profile picture.

##Usage
###Simple usage
    $('img').profily();

###With options
	$('img').profily({
		fontFamily    : 'Calibri',
		attribute     : 'alt'
	});

###Options
	fontFamily //Choose the font family you want to display (Default : Calibri)
	attribute //Choose the attribute you want to use for the fullname (Default : alt)
	light //If you want to get an other color when the backround if yoo light (Default : false)