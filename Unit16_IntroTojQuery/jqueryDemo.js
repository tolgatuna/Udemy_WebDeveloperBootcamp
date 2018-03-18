// to select all h1 tags :
$('h1').css('color','blue');

// to select all elements with class 'special'
$('.special').css('text-transform','upperCase');

// to select all elements with id 'adorable'
$('#adorable').css('color','yellow');

// to select all a tags inside of li's
var styles = {
    backgroundColor : 'pink',
    fontWeight: 'bold'
}

$('li a').css(styles);
