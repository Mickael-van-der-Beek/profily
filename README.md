#Profily

This is a little snippet to replace empty profile picture. It's to change all of those website who give you the same profile pictures when it's empty, like Facebook, Twitter(egg), Gravat (G rotated), etc...

It's client side and works with dataurl, it's light and easy to use.

##Usage
###Simple usage
    $('img').profily();

###With options
```
$('img').profily({
	fontFamily    : 'Calibri',
	attribute     : 'alt'
});
```

###Options
```
$('img').profily({
	// Choose the font family you want to display (Default : Calibri)
	fontFamily    : 'Calibri',

	// Choose the attribute you want to use for the fullname (Default : alt)	
	attribute     : 'alt',

	// If you want to get an other color when the backround if yoo light (Default : false)
	light		  : true
});
```

#License

Copyright 2013 Julien Henrotte
Released under the MIT License.
You are free to use as long as the copyright header is left intact.