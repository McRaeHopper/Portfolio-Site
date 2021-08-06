$('.portfolio-item').mouseenter(function(){
    $(this).find('.portfolio-text').animate(
        {
            'margin-left':'3%',
        },
    {
        duration: 200,
        queue: false
    });
});

$('.portfolio-item').mouseleave(function(){
    $(this).find('.portfolio-text').animate(
        {
            'margin-left':'0%'
        },
        {
            duration: 200,
            queue: false
        });
});
