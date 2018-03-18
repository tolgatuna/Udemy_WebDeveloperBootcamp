$('button').on('click', function () {
    //$('div').fadeOut(1000);

    $('div:first-of-type').fadeOut(1000, function () {
       console.log('Fade Out Completed');
    });

    $('div:nth-child(2n)').slideToggle(1000);
    $('div').last().fadeToggle(1000);
});