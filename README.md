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

## License

(The MIT License)

Copyright (c) 2013 Julien Henrotte [@Julien_he](https://twitter.com/Julien_He)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.