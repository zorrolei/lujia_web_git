$(function(){
    /*关于路加背景边距*/
    $(window).resize(function(){
        margin();
    });
    margin();
    function margin(){
        var _wwidth=$('html').width();
        var _mwidth=(_wwidth-1140)/2+60;
        console.log(_mwidth)
        if(_wwidth<675){
            $('.zxresponsibility_right').find(' .back').css('left',0);
            $('.zxresponsibility_left').find(' .back').css('right',0);
        }else{
            $('.zxresponsibility_right').find(' .back').css('left',_mwidth);
            $('.zxresponsibility_left').find(' .back').css('right',_mwidth);
        }
        if(_wwidth<780){
            $('.zxchairspeech').find(' .back').css('right',0);
        }else{
            $('.zxchairspeech').find(' .back').css('right',_mwidth-60);
        }
        if(_wwidth<1140){
            $('.zxresponsibility_right').find(' .back').css('left',0);
            $('.zxresponsibility_left').find(' .back').css('right',0);
            $('.zxchairspeech').find(' .back').css('right',0);
            $('.zxpartnews').find(' .back').css('right',0);
        }

    }
});