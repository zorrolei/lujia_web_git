$(function(){
    

    $(window).resize(function(){
        margin();
    });
    margin();
    function margin(){
        var _wwidth=$('html').width();
        var _mwidth=(_wwidth-1140)/2+60;
        var $img=$('.zxpartnews').find(' .big_img');
        var _iheight=$img.width()*420/640;
        if(_wwidth<675){
            $('.zxpartnews').find(' .back').css('left',0);
            $('.zxpartnews').find(' .big_img,.swiper-container').css('height',_iheight);
        }else{
            $('.zxpartnews').find(' .back').css('left',_mwidth);
        }
    }
  //   function tab(name){
  //       var $rtab=$(name).find('.label li');
  //       var $rbox=$(name).find('.box');
  //       $rbox.first().siblings().hide();
  //       // $rbox.first().show();
		// $rtab.click(function(){
  //           var _num=$(this).index();
  //           $(this).addClass('active').siblings().removeClass('active');
  //           $rbox.eq(_num).show().siblings().hide();
  //           // $rtab.removeClass('active');
  //           // $(this).addClass('active');
  //           // $rbox.hide();
  //           // $rbox.eq(_num).show();
		// });
  //   }

    
    /*品牌认证*/
    // tab('.zxbrand_identification');
    // $('.zxbrand_identification .box li').click(function(){
    //     var _num=$(this).index();
    //     $(this).closest('.box').find('.zx_brand_back').hide().eq(_num).css('display','table');
    // });
    // $('.zx_brand_box .close').click(function(){
    //     $('.zx_brand_back').hide();
    // })

    /*党建文化轮播*/
    var hdSwiper = new Swiper('.yhd-swiper',{
        autoplay : 3000,//可选选项，自动滑动
        loop : true,//可选选项，开启循环
        calculateHeight: true,
        //onInit: function(swiper){
        //  swiper.swipeNext()
        //}
    })
    $('#previous').click(function(){
        hdSwiper.swipePrev(); 
    })
    $('#next').click(function(){
        hdSwiper.swipeNext(); 
    })
});