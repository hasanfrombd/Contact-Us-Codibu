


// outline on click for Input,select,textarea 
$('input').click(function(){
    $('input').css('outline-color','#375aff');
});

$('select').click(function(){
    $('select').css('outline-color','#375aff');
});

$('textarea').click(function(){
    $('textarea').css('outline-color','#375aff');
});


// faq section starts
$(".question").click(function () {
    if ($('.answer').is(':visible')) {
        $(".answer").slideUp(300);
        $(".plusminus").text('+');
    }
    if ($(this).next(".answer").is(':visible')) {
        $(this).next(".answer").slideUp(300);
        $(this).children(".plusminus").text('+');
    } else {
        $(this).next(".answer").slideDown(300);
        $(this).children(".plusminus").text('-');
    }
});

// faq section ends