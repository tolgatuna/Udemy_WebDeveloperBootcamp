// If we write with click, new added li dont do this thing!!!
// Check Off Specific Todos By Clicking :
// $('li').click(function() {
//     $(this).toggleClass("completed");
// });

// $('li span').click(function (evt) {
//     $(this).parent().fadeOut(500, function () {
//         $(this).remove();
//     });
//     evt.stopPropagation();
// });

/*
 * Why Use On()?
 *
 * In most cases, click() and on('click') will both get the job done. HOWEVER, there is one key difference
 *   - click() only adds listeners for existing elements
 *   - on() will (can) add listeners for all potential future elements
 * */

// We need to add with .on() method for new added li of ul items!
$('ul').on("click", "li", function() {
    $(this).toggleClass("completed");
});

$('ul').on("click", "li span", function (evt) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    evt.stopPropagation();
});

$('input[type="text"]').keypress(function (evt) {
   if(evt.which === 13) { // Enter Key
       // Grabbing new text from input
       var newTodoText = $(this).val();
       $('ul').append("<li><span><i class=\"fa fa-trash\"></i></span> " + newTodoText + "</li>");
       $(this).val("");
   }
});

$('h1 i').click(function () {
    $('input[type="text"]').fadeToggle();
});