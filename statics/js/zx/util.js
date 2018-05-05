
/*今日路加   瀑布流*/
$(document).ready(function() {
// window.onload = function(){
     newsChoose();
     newsYearPageClick();
     newsYearPageClick2();
    // var link = $(".jr-bus-con ul li a").attr('href');
    // console.log(link);

    $.each($(".jr-bus-con ul li a"),function(){
        if($(this).attr('href')==''){
            $(this).attr("href","javascript:;");
            $(this).css({'cursor':'no-drop',});
            $(this).addClass("on");
        }else{
            $(this).removeClass("on");
        }
    })

    $(window).load( function(){
        var winWidth = $(window).width();
        if(winWidth <= 1920){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 3,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
        if(winWidth <= 1280){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 3,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
        if(winWidth <= 960){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 2,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
        if(winWidth <= 640){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 1,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
    })
    $(window).resize(function(){
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth <= 1920){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 3,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
        if(winWidth <= 1280){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 3,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
        if(winWidth <= 960){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 2,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
        if(winWidth <= 640){
            var deSwiper = new Swiper('.rel-list-con', {
                paginationClickable: true,
                nextButton: '.rel-next-btn',
                prevButton: '.rel-prev-btn',
                slidesPerView: 1,
                spaceBetween: 30,
                calculateHeight: true,
                autoplayDisableOnInteraction : false,
                autoplay:false,
                loop:true,
              });
            $('.rel-prev-btn').click(function(){
                deSwiper.swipePrev(); 
            })
            $('.rel-next-btn').click(function(){
                deSwiper.swipeNext(); 
            }) 
        }
    })

    // var imgLength = $(".yh-business .bus-list-con img");
    // if (imgLength.length <= 1){
    //     // $("#bus-lb").removeClass("bus-list-con");
    //     $(".yh-business .bus-list-con .swiper-slide").addClass("swiper-no-swiping"); 
    //     $(".bus-list-con .bus-next-btn").hide();
    //     $(".bus-list-con .bus-prev-btn").hide();
    //     var bankSwiper = new Swiper('.bus-list-con', {
    //         paginationClickable: true,
    //         nextButton: '.arrow-right',
    //         prevButton: '.arrow-left',
    //         slidesPerView: 1,
    //         calculateHeight: true,
    //         spaceBetween: 30,
    //         autoplay:false,
    //         pagination: '.swiper-pagination',
    //         paginationType: 'fraction',
    //         loop:false
    //       }); 
    //       $('.arrow-left').click(function(){
    //             bankSwiper.swipePrev(); 
    //         })
    //       $('.arrow-right').click(function(){
    //             bankSwiper.swipeNext(); 
    //         })           
    //     // var imgSrc = $(".yh-business .bus-list-con .busItem img").attr("src");
    //     // console.log(imgSrc)
                                       
    // }else{
    //     $(".yh-business .bus-list-con .swiper-slide").removeClass("swiper-no-swiping"); 
    //     $(".bus-list-con .bus-next-btn").show();
    //     $(".bus-list-con .bus-prev-btn").show();
    //     var bankSwiper = new Swiper('.bus-list-con', {
    //         paginationClickable: true,
    //         nextButton: '.bus-next-btn',
    //         prevButton: '.bus-prev-btn',
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //         calculateHeight: true,
    //         autoplay:3000,
    //         pagination: '.swiper-pagination',
    //         paginationType: 'fraction',
    //         loop:false
    //       });
    // }

    //blocksit define
    $(window).load(function() {
    // window.onload = function() {
        $('#container-p').BlocksIt({
            numOfCol: 3,
            offsetX: 8,
            offsetY: 8,
            blockElement: '.t-grid'
        });
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth <= 480) {
            conWidth = 320;
            col = 1;
        } else if(winWidth <= 660) {
            conWidth = 440;
            col = 1;
        }else if(winWidth <= 880) {
            conWidth = 660;
            col = 2;
        } else if(winWidth <= 1100) {
            conWidth = 880;
            col = 3;
        }else if(winWidth <= 1920) {
            conWidth = 1140;
            col = 3;
        } else {
            conWidth = 1140;
            col = 3;
        }

        $('#container-p').BlocksIt({
            numOfCol: col,
            offsetX: 8,
            offsetY: 8
        });
        
        if(conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#container-p').width(conWidth);
            $('#container-p').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });

    //window resize
    var currentWidth = 1140;
    $(window).resize(function() {
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth < 480) {
            conWidth = 320;
            col = 1;
        } else if(winWidth < 660) {
            conWidth = 440;
            col = 1;
        }else if(winWidth < 880) {
            conWidth = 660;
            col = 2;
        } else if(winWidth < 1100) {
            conWidth = 880;
            col = 3;
        }else if(winWidth < 1920) {
            conWidth = 1140;
            col = 3;
        } else {
            conWidth = 1140;
            col = 3;
        }



        if(conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#container-p').width(conWidth);
            $('#container-p').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });
});

$(function(){

   

    /*今日路加  banner选择*/
    dSelect($('.dSelect1'));
    dSelect($('.dSelect2'));

    function dSelect(se){
        var ulList=se.find('.d_SelectList') || se.find('.d_SelectList2');
        var inSelect=se.find('.d_inSelect');
        var pDown=se.find('.d_posDown');
        var cHide=se.find('.d_hideCha');

        mClick(inSelect);
        mClick(pDown);
        mClick(cHide);

        function mClick(obj){
            obj.click(function(){
                var ulList=$(this).siblings('.d_SelectList') || $(this).siblings('.d_SelectList2');
                if (ulList.css("display") == "none") {
                    ulList.slideDown("fast");
                } else {
                    ulList.slideUp("fast");
                }
                return false;
            });
        };
        ulList.children('li').mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });

        ulList.find('#d-click').click(function(){
            inSelect.focus();
            var txt=$(this).text();
            $(this).parents(".d_select").find(".d_inSelect").val(txt);
            ulList.slideUp("fast");
            return false;
        });

        $(document).click(function(){
            ulList.slideUp("fast");
        });

    };


    $(".news-choose").find(".d_inSelect").click(function(){
        if(!$(this).siblings("ul").css("display")=="none"){
            $(this).parent().siblings().find("ul").slideDown(200);
        }else{
            $(this).parent().siblings().find("ul").slideUp(200);
        }
    });

    //**多元路加-数据信息栏目切换
    $(".dy_bankcont .bank_tabtit span").click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        $(this).parent().next('.bank_tabcont').find(".bank_tab_dy").eq($(this).index()).addClass('bank_tab_dycur').siblings().removeClass('bank_tab_dycur');
    })

    /*多元路加  左侧下拉*/
    $(".multivar-l").find(".mul-nav-list").click(function(){
        if($(this).siblings("dl").css("display")=="none"){
            $(this).siblings("dl").slideDown(200);
            $(this).children('span').addClass('Icon-sctive');
        }else{
            $(this).siblings("dl").slideUp(200);
            $(this).children('span').removeClass('Icon-sctive');
        }
    })

    $(".right-win").find(".r-w-link03").click(function(){
        $("html,body").animate({scrollTop:0},200);
    })


    $(".right-win .btn-share").hover(function(){
            $(this).find(".jt-list").toggle();
    })

    $(".right .share").hover(function(){
            $(this).find("dl").toggle();
    })

    $(".to-share .ww-share").hover(function(){
            $(this).find("dl").toggle();
    })

    // $("select#event-news").click(function(){
    //     console.log($(this).val());
    // })

    // $(window).scroll(function(e) {
    //   //滚屏
    //   var scrollTop = $(document.body).scrollTop();
    //     if(scrollTop>=1){
    //         $("#fullpage").removeClass("lite02");
    //         $("#fullpage").addClass("lite03");
    //     }else{
    //         $("#fullpage").removeClass("lite03");
    //     }
    // })

    $(window).scroll(function(e) {
      //滚屏
      var scrollTop = $(document.body).scrollTop();
        if(scrollTop==0){
            $("#fullpage").addClass("lite02");
        }else{
            $("#fullpage").addClass("lite03");
            $("#fullpage").removeClass("lite02");
        }
    })


    $(".tab_box .label").children("li").unbind("click").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(".tab_box").find(".content_box").children().eq($(this).index()).show().siblings().hide();
    });

    $(".zx_tab_box").find("ul").children("li").unbind("click").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(".zx_tab_box").find(".tab_content_box").children().eq($(this).index()).show().siblings().hide();
    });

    /*多元路加  数字*/
    numAni($("#i-1"),21,5);
    numAni($("#i-2"),172,20);
    numAni($("#i-3"),16.3,5);
    function numAni(el,endVal,addVal){
        add();
        function add(){
            var value01 = $(el).text();
            if(value01>=endVal){
                $(el).text(endVal);
                return null;
            }
            value01 = parseInt(value01) + addVal;
            $(el).text(value01);
            setTimeout(add,100);
        }
    }
    /*数字滚动  1  end*/

});

function newsYearClick(year){
    getNewsData(1,year);
}

function newsYearPageClick(){

    $(".page-click ul li").unbind("click").click(function(){
        var _href = $(this).find("a").attr("href");
        getNewsData(2,_href);
        return false;
    });

}

function getNewsData(flag,argu1,argu2){
    
    
    if(flag == 1 ){
        _url = 'https://www.group.citic/html/Corporate_Culture/Corporate_Culture_Events/year'+argu1+'.html';
    }else if(flag == 2 ){
        _url = argu1;
        _data = {}
    }else if(flag ==3){
        _url = 'https://www.group.citic/html/News/type'+argu2+'_year'+argu1+'.html';
    }else{
        _url = argu1;
        _data = {}
    }

    $.ajax({ 
        type:'get',      
        url:_url, 
        dataType:'text',  
        success:function(data){  
            if(flag == 3 || flag == 4){
                $(".today-zx").html(data);
                newsYearPageClick2();
        $('#container-p').BlocksIt({
            numOfCol: 3,
            offsetX: 8,
            offsetY: 8,
            blockElement: '.t-grid'
        });
        testBlocksitImg();
        var winWidth = $(window).width();
        var currentWidth = 1140;
        var conWidth;
        if(winWidth <= 480) {
            conWidth = 320;
            col = 1;
        } else if(winWidth <= 660) {
            conWidth = 440;
            col = 1;
        }else if(winWidth <= 880) {
            conWidth = 660;
            col = 2;
        } else if(winWidth <= 1100) {
            conWidth = 880;
            col = 3;
        }else if(winWidth <= 1920) {
            conWidth = 1140;
            col = 3;
        } else {
            conWidth = 1140;
            col = 3;
        }
        
        if(conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#container-p').width(conWidth);
            $('#container-p').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
            }else{
                $(".content_box").html(data);
                newsYearPageClick();
            }
           
        },
        beforeSend:function(){
            
        },
        complete:function(){
        
        }
    });


}

function newsChoose(){
    if($(".news-choose").length > 0){

        $(".news-choose form").submit(function(){
            
            valueYear = $(".valueYear").val();
            valueType = $(".valueType").val();


            valueYear = valueYear =='undefined' || valueYear =='' || valueYear == null ? "0" : valueYear;
            valueType = valueType =='undefined' || valueType =='' || valueType == null ? "0" : valueType;

            if(valueYear == 0 && valueType == 0){
                window.location.href="/html/News/";
                return false;
            }

            getNewsData(3,valueYear,valueType);

            return false; 
        });

    }
}

function newsYearPageClick2(){

    $(".page-click2 ul li").unbind("click").click(function(){
        var _href = $(this).find("a").attr("href");
        getNewsData(4,_href);
        return false;
    });

}

$(function(){
    mobilePages();
    noClick();
    testBlocksitImg();
    if($(window).resize()){
        mobilePages();
    }
})

/**mobilePages 移动端修正页码显示数量过多bug
     * @author Wenbo
     * @date   2017/11/6
     */
function mobilePages() {
    var item = $('.page-h ul .fl');
    var _wwidth = $('html').width();
    if (item.length > 0 && _wwidth < 768) {
        //ip6s宽度显示值
        var pagePrev = 3;
        var pageLast = 2;
        if (_wwidth < 410) {
            //兼容至ip5显示值
            pagePrev = 2;
            pageLast = 2;
        }
        for (var i = pagePrev; i < item.length - pageLast; i++) {
            item.eq(i).css('display', 'none');
        }
    }
}

function testBlocksitImg() {
    var defereds = [];
    var $imgs = $('#container-p .t-grid .imgholder img');
    $imgs.each(function () {
        var dfd = $.Deferred();
        $(this).load(dfd.resolve);
        defereds.push(dfd);
    });
    $.when.apply(null, defereds).done(function () {
        console.log('load compeleted'+'+'+new Date());
        if ($('#container-p').length>0){
            $('#container-p').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });
}

function noClick(){

    var aHref = $(".foot-btm li:last-child a");
    aHref.attr("href","javascript:;");
    aHref.css("cursor","no-drop")
    console.log(aHref.text())

}











