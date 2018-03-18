$('button').click(function () {
    var text = $(this).text();
   console.log('You Clicked : ', text)
});

$('input[type="text"]').keypress(function (event) {
    if(event.which === 13) {
        console.log("Enter Presses!");
    }
    else {
        console.log("Text input keypress!", event);
    }
});

// ON (All of methods like click, dblclick, keypress, dragstart can be used with "on" method):
$('input[type="text"]').on('dblclick',function (event) {
    console.log("Double Clicked");
});