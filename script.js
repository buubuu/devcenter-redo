$('#tabs')
    .tabs()
    .addClass('ui-tabs-vertical ui-helper-clearfix');

$('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

    });