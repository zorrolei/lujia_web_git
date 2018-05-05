$(function(){
    // var $tab=$('.zxabout_leader,.zxabout_manager').find('.label li');
    // var $box=$('.zxabout_leader,.zxabout_manager').find('.box');
    // $box.first().siblings().hide();
    // $tab.click(function(){
    //     var _num=$(this).index();
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $box.eq(_num).show().siblings().hide();
    // });
    // /*党建文化*/
    // var $drop=$('.nav_zx_left').find('.drop_out');
    // $drop.click(function(){
    //     $(this).nextUntil(':not(.drop_in)').slideToggle();
    // });
    // /*荣毅仁生平*/
    // tab('.zxparty_inscription');
    // /*文化体系*/
    // tab('.zxparty_culture');
    function tab(name){
        var $rtab=$(name).find('.label li');
        var $rbox=$(name).find('.box');
        $rbox.first().siblings().hide();
        $rtab.click(function(){
            var _num=$(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $rbox.eq(_num).show().siblings().hide();
        });
    }
    /*品牌认证*/
    tab('.zxbrand_identification');

    var zx_brand_box;
    $('.zxbrand_identification .box li').click(function(){
        var _num=$(this).index();
        
        var box = $(this).parent().parent();
        var el = $('.zx_brand_back',box);
        console.log(box.html());
        zx_brand_box = el.hide().eq(_num);
        zx_brand_box.css('display','table');
    });

    $('.zx_brand_box .close').click(function(){
        $(this).parent().parent().hide();
        // $('.zx_brand_back').hide();
    })
});