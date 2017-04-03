$(function(){
    $('#fullpage').fullpage({
        
    });


    console.log($)
    var length = $('.footwrapper').length;
    
    var width = $('.fp-slidesContainer').width()/5;
    console.log(width);
    for(var i = 0;i < length; i ++) {
        $('.footwrapper').eq(i).on('click',function () {
            var index = $(this).index();
            $('.fp-slidesContainer').css('transform','translate3d(-' + index*width + 'px,0px,0px)');
        })


    }

    
    
    
});
(function () {
    var leftlilength = $(".content-left ul li").length;
    $('.content-right .rightindex').css('display','none');
    for(var j = 0;j < leftlilength; j++) {
        

        $(".content-left ul li").eq(j).on('click', function () {
            var liindex = $(this).index();
            $('.content-right .rightindex').css('display','none');
            $('.content-right .rightindex').eq(liindex).css('display','block');
            
        })
    }
    console.log(leftlilength)
}())
