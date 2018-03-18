// Get content text :
console.log('h1 : ', $('h1').text());
console.log('ul : ', $('ul').text());
console.log('li : ', $('li').text());

// // Set all of h1 contents :
// $('h1').text('New Title');
// console.log('New h1 : ', $('h1').text());
//
// // Set all of li contents :
// $('li').text('New List Item');


// // Get html content  :
// console.log('h1 : ', $('ul').html());
//
// // Update with html
// $('ul').html("<li>Hacked li 1</li><li>Hacked li 2</li>");
// $('li').html('<a href="http://www.google.com">Google</a>');

// Update attribute :
console.log($('img').attr('src'));
$('img').attr('src','https://www.forestholidays.co.uk/~/media/images/content%20block%20images/slideshow%20images/themes/wildlife/pine-marten-pair.ashx');
// Get last img tag and change its attribute :
$('img').last().attr('src','http://cdn.discoverwildlife.com/sites/default/files/imagecache/623px_wide/main/PMarten%20main.jpg');


// .val
console.log('Value of Input  : ', $('input').val());
console.log('Value of Select : ', $('select').val());

// Manipulating classes :
$('h1').addClass('correct');
$('h1').removeClass('correct');
$('li').addClass('wrong');
$('h1').addClass('done');