

    // creates a global "addWheelListener" method
    // example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
    (function(window,document) {

        var prefix = "", _addEventListener, onwheel, support;

        // detect event model
        if ( window.addEventListener ) {
            _addEventListener = "addEventListener";
        } else {
            _addEventListener = "attachEvent";
            prefix = "on";
        }

        // detect available wheel event
        support = "onwheel" in document.createElement("div") ? "wheel" : // 各个厂商的高版本浏览器都支持"wheel"
                  document.onmousewheel !== undefined ? "mousewheel" : // Webkit 和 IE一定支持"mousewheel"
                  "DOMMouseScroll"; // 低版本firefox

        window.addWheelListener = function( elem, callback, useCapture ) {
            _addWheelListener( elem, support, callback, useCapture );

            // handle MozMousePixelScroll in older Firefox
            if( support == "DOMMouseScroll" ) {
                _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
            }
        };

        function _addWheelListener( elem, eventName, callback, useCapture ) {
            elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
                !originalEvent && ( originalEvent = window.event );

                // create a normalized event object
                var event = {
                    // keep a ref to the original event object
                    originalEvent: originalEvent,
                    target: originalEvent.target || originalEvent.srcElement,
                    type: "wheel",
                    deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        originalEvent.preventDefault ?
                            originalEvent.preventDefault() :
                            originalEvent.returnValue = false;
                    }
                };
                
                // calculate deltaY (and deltaX) according to the event
                if ( support == "mousewheel" ) {
                    event.deltaY = - 1/40 * originalEvent.wheelDelta;
                    // Webkit also support wheelDeltaX
                    originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
                } else {
                    event.deltaY = originalEvent.detail;
                }

                // it's time to fire the callback
                return callback( event );

            }, useCapture || false );
        }

    })(window,document);  
    
$(document).ready(function() {
  // $("#fullpage").addClass("lite02");
  // $("#fullpage").css({'top':'-120px'});

  // $(window).scroll(function(e) {
  //     //滚屏
  //     var scrollTop = $(document.body).scrollTop();
  //       if(scrollTop>=1){
  //           $("#fullpage").addClass("lite03");
  //       }else{
  //           $("#fullpage").removeClass("lite03");
  //       }
  //   })

  $(window).load( function(){
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth <= 640){
            var dySwiper = new Swiper('#m-duoyuan-slider',{
              // pagination: '.m-index-new-pagination',
              slidesPerView: 1.15,
              spaceBetween: 30,
              freeMode: true
                  // autoplay:6300
            });
            
        }
    })
    $(window).resize(function(){
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth <= 640){
            var dySwiper = new Swiper('#m-duoyuan-slider',{
              // pagination: '.m-index-new-pagination',
              slidesPerView: 1,
              spaceBetween: 30,
              freeMode: true
                  // autoplay:6300
            });
        }
    })


  var prev_x =0;
  var w_w = $(window).width();
  var w_h = $(window).height();

  function mobileRem(win){
        
    var doc = win.document;
    var html = doc.documentElement;
    var option = html.getAttribute('data-use-rem');
    if( option === null ) return;
    // defaut 750px；
    var baseWidth = option == 'default' || option == '' || parseInt(option) <= 0 ? 750 : parseInt(option);
    var grids = baseWidth/100,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = html.clientWidth || 375; // default to 375 if can't get device-width
      html.style.fontSize = clientWidth / grids + 'px';
    };
    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
  };

  function checkRem()
  {
    w_w = $(window).width();
    w_h = $(window).height();

    if(w_w<=640 || window._mobile)
    {
      mobileRem(window);
    }
    if(w_h<=960 && !window._mobile){
      $('.index-banner-warp .normal .banner-bg').addClass('mini');
      $('.section-content').addClass('section-content-mini');
      $('.page-warp').addClass('page-mini');
    }
  }
  
  var bg_left = parseInt(w_w*-0.1);
  var current_index = 1;
  var isMove =false;
  var initFp = true;
  var pageStep = -1;

  // $('.s2bg img').click
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

      afterLoad: function(anchorLink, index){

      $('.section2 .img-slider').each(function(index,item){
          $(item).find(".swiper-slide").length<=1?$(item).find('.img-slider-btn').hide():$(item).find('.img-slider-btn').show();
      });

        var loadedSection = $(this);
        current_index = index;
        if(index>1){
          $('#wrapper>.header').addClass('lite');
        }else{
          $('#wrapper>.header').removeClass('lite');

        }
        // console.log(index);
        //using index
        if(index == 5){
          // $.fn.fullpage.setResponsive(true);
          // $.fn.fullpage.setAutoScrolling(false);
           pageStep = 0;
           step_begin = true;
           step_end = false;
           $('.section .page-warp').css({top:'0px'})

           //checkStep();
           $.fn.fullpage.setAllowScrolling(false);
        }

        if(index == 4){
          // $.fn.fullpage.setResponsive(false);
          // $.fn.fullpage.setAutoScrolling(true);  
           pageStep = -1;
           $.fn.fullpage.setAllowScrolling(true);
          isMove =false;
        }

        $('.section .page-warp').css({'padding-top': 1+'px'});

        if(index == 2){
          resize();
        }
      }
    });


    var index_swiper = new Swiper('.index-banner', {
          pagination: '.index-banner-pagination',
          paginationClickable: '.index-banner-pagination',
          // nextButton: '.index-bnannr-next',
          // prevButton: '.index-bnannr-next',
          spaceBetween: 30,
          autoplay:6300,
          speed:500
    });

    resize();
    addEvent();
    noClick();

    function noClick(){

      var aHref = $(".foot-btm li:last-child a");
      aHref.attr("href","javascript:;");
      aHref.css("cursor","no-drop")


  }

    function checkDirect(evt){
        var m_x = evt.pageX||evt.clientX||0;//获取鼠标X值
        var off_x = prev_x - m_x;
       if(Math.abs(off_x)>3) {
          var left = parseInt($("#banner-mousemove .banner-cont-enti .building1").css('left'));
          var txt_left = parseInt($("#banner-mousemove .banner-cont-txt").css('left'));
          
           if(off_x<0)
           {
              // console.log("bg_left : " +bg_left);
              if(left>=800)
              {
                left-=3;
              }
                $("#banner-mousemove .banner-cont-enti .building1").css({'left':left});

                if(txt_left>100)
                {
                  txt_left-=2;

                }
                $("#banner-mousemove .banner-cont-txt").css({'left':txt_left});

                

                if(bg_left<0)
                {
                  bg_left+=2;

                }
                $('#banner-mousemove .banner-bg img').css({'margin-left':bg_left});
           }else{

              // console.log("bg_left : " +bg_left);
              if(left<=1200)
              {
                left+=3;
              }
                $("#banner-mousemove .banner-cont-enti .building1").css({'left':left});

                if(txt_left<500)
                {
                  txt_left+=2;

                }
                $("#banner-mousemove .banner-cont-txt").css({'left':txt_left});

                if(bg_left>parseInt(w_w*-0.1)*2)
                {
                  bg_left-=2;

                }
                $('#banner-mousemove .banner-bg img').css({'margin-left':bg_left});
           }
           // setImg();
           prev_x = m_x;
           return;
        }
      }

    var dx, dy;

   

    //$('.section2 .bg img').attr('src','./statics/images/zx/section2-0'+'3'+'.png');

    

  $(window).resize(function(e){
    resize();
  });
  $(window).load(function(){            
      $('.index-banner-warp .banner-bg img').each(function(i){
        if($(this).width()<w_w){
          $(this).css({'width':w_w + 'px'});
        }
      });      
  });    

  // document.onload(function(e){
  //   $('.index-banner-warp .banner-bg img').each(function(i){
  //       if($(this).width()<w_w){
  //         $(this).css({'width':w_w + 'px'});
  //       }
  //     });
  // })

  function resize(){
    if($(window).width()>$('.banner-bg').width())
    {
      $('.banner-bg').addClass('displaytype2');
    }else{
      $('.banner-bg').removeClass('displaytype2');
    }

    w_w = $(window).width();
    w_h = $(window).height();
    bg_left = parseInt(w_w*-0.1);
    

    
    var share_W = $('.section1 .shares-zhongxin').width();
    $(".section1 .news-zhongxin").css({'width':parseInt(w_w - share_W)});
    
    
    // $('.index-banner-warp .banner-bg img').each(function(i){
    //   if($(this).width()<w_w){
    //     $(this).css({'width':w_w + 'px'});
    //   }
    // });

    checkRem();

    if(w_w>960)
    {
      $("#banner-mousemove .banner-cont-txt").css({'left':parseInt(w_w*0.1)});
      $('#banner-mousemove .banner-bg img').width(parseInt(w_w*1.2));
      $('#banner-mousemove .banner-bg img').css({'margin-left':bg_left});
      $("#banner-mousemove .banner-cont-enti .building1").css({'left':parseInt(w_w*0.55)});
      return;
    }

    if(w_w<=480)
    {
        // $('.banner-cont-enti-item.building1').css({'bottom':"-0.2rem",'top':'auto','width':'2.7rem','height':'auto'});
    }else{
      
      if(w_h<700){
        // $('.banner-cont-enti-item.building1').css({'bottom':"auto",'top':'0'});
      }else{
        //$('.banner-cont-enti-item.building1').css({'bottom':"0",'top':'auto'});
      }

      // $('#banner-mousemove .banner-bg img').width(parseInt(w_w*3));
      // $('#banner-mousemove .banner-bg img').css({'margin-left':bg_left});
      // $("#banner-mousemove .banner-cont-enti .building1").css({'left':parseInt(w_w*0.55)});
      // $("#banner-mousemove .banner-cont-txt").css({'left':parseInt(w_w*0.1)});
    }
  }


  // var duoyuanSwiper = new Swiper('#m-duoyuan-slider',{
  // sliderPerView:'auto'
  // });

  var duoyuanSwiper = new Swiper('#m-duoyuan-slider',{
  slidesPerView : 1.15,//'auto'
  //slidesPerView : 3.7,
  spaceBetween:15,
  // centeredSlides:true,
  })
  $(window).scroll(function(e) {
    if(current_index==5){
      //滚屏
      var scrollTop = $(document.body).scrollTop();//滚动高度
      var ot = $('.section5').offset().top;
      if(scrollTop>=ot){
      }else{
        if( !isMove){
          // console.log("moveTo");
          isMove = true;
          // $.fn.fullpage.setAutoScrolling(true);
          $.fn.fullpage.moveTo(4);
        }
      }
    }
  });

    var move_des = 0;
    var pageStep_max = 1;
    var pw_h = $('.section5 .page-warp').height();
    var step_begin =true;
    var step_end =false;

    function checkStep(){
      pw_h = $('.section5 .page-warp').height();
      var m_h = parseInt(w_h - pw_h);

      if( m_h<0){
        pageStep = 0;
        // console.log('w_h : '+ w_h + ' Math.abs(m_h): '+ Math.abs(m_h));
        if(Math.abs(m_h) >= w_h - 100){
          move_des = m_h;
          pageStep_max = 1;
        }else{
          move_des = m_h/2;
          pageStep_max = 2;
        }
      }else{
        pageStep_max = 0;
      }
    }

    function nextSetp(){
        // console.log("page down! " + current_index + step_end);
        if(current_index==5&&!step_end){
          step_begin = false;

          pw_h = $('.section5 .page-warp').height();
          pw_top = parseInt($('.section5 .page-warp').css('top'));
          // pw_top = pw_top<=0?pw_top:0;
          move_des = pw_h - w_h + pw_top;

          pageStep++;

          if(move_des>340){
            move_des = 340;
          }else{
            step_end = true;
          }
          // console.log('pw_h : '+ pw_h + " pw_top: " + pw_top);
          // console.log('move_des : '+ move_des + " pageStep: " + pageStep);

          $('.section5 .page-warp').stop().animate({top: pw_top - move_des +'px'});
        }
        
        
        

        // if(current_index==5&&pageStep_max>0){
        //   if(pageStep >= 0 && pageStep < pageStep_max){
        //       pageStep++;
        //   }
        //   $('.section5 .page-warp').stop().animate({top:move_des*pageStep +'px'});
        //   return;
        // }
    }

    function prevStep(){
        //console.log("page up! prevStep");
        if(current_index==5){
          if(!step_begin){
            pw_h = $('.section5 .page-warp').height();
            pw_top = parseInt($('.section5 .page-warp').css('top'));
            // pw_top = pw_top<=0?pw_top:0;
            move_des = pw_h - w_h + pw_top;

            pageStep--;
            // console.log('pw_h : '+ pw_h + " pw_top: " + pw_top);
            // console.log('move_des : '+ move_des + " pageStep: " + pageStep);
            if(Math.abs(pw_top)>340){
              move_des = 340;
            }else{
              move_des = Math.abs(pw_top);
              step_begin = true;
            }

            $('.section5 .page-warp').stop().animate({top: pw_top +  move_des +'px'});
            step_end = false;

          }else if(step_begin){
            $.fn.fullpage.moveTo(4);
            return;
          }
          

          // if(pageStep==0||pageStep_max==0){
          //   $.fn.fullpage.moveTo(4);
          //   return;
          // }
          // if(pageStep>=1){
          //   pageStep--;
          //   $('.section5 .page-warp').stop().animate({top:move_des*pageStep +'px'});
          //   return;
          // }

        }

        
    }

    var mousewheel_move = false;
    var addEvent_wheel;
    function addEvent(){

      if(window._mobile){
       // console.log('_mobile_fullpage_touch');
        touch($('#wrapper'),fullPageMove);

      }

      // addEvent_wheel = wheelEvent();
       addWheelListener( document.getElementById('fullpage'), function( event ) { 
       // console.log( event.deltaY ); event.preventDefault(); 

      // addEvent_wheel(document.getElementById('fullpage'), "mousewheel", function(event) {
         if (event.deltaY < 0 && !mousewheel_move) {
          mousewheel_move = true;

          setTimeout(function(){
            mousewheel_move = false;
          },600);
          
          prevStep();
          
        }

        if (event.deltaY > 0 && !mousewheel_move) { 
          mousewheel_move = true;

          setTimeout(function(){
            mousewheel_move = false;
          },600);

          
          
          nextSetp();
        }
      });

      if(w_w>960){
         $("#banner-mousemove").mouseenter(function(evt){
           // if(!isLoaded) return;
            prev_x  = evt.pageX||evt.clientX||0;//获取鼠标X值
            $(this).on("mousemove", checkDirect);
        });

        $("#banner-mousemove").mouseleave(function(){
           // if(!isLoaded) return;
            $(this).off("mousemove", checkDirect);
        });
      }
    }

    function fullPageMove(el,moveDirection){
      // console.log(moveDirection);
      switch(moveDirection){
        case 'top':
          // if(direction=='v'){
            mousewheel_move = true;

            setTimeout(function(){
              mousewheel_move = false;
            },600);
            
            nextSetp();

            
          // }
          break;
        case 'down':
          // if(direction=='v'){
            
            mousewheel_move = true;

            setTimeout(function(){
              mousewheel_move = false;
            },600);

            
            prevStep();
          // }
          break;
      }
    }

   
      
      
   
    
});

  

  $('.section-nav-list-tit .nav-cont-item-bg').css({'top':0 + 'px'});
  var bg_src = $('.section-nav-list-cont li.on .swiper-slide-active .sl-bg img').attr('src');
  $('.section2 .bg img').attr('src',bg_src);
   // console.log("1bg_src : "+bg_src);
  $('.section-nav-list-tit li').click(function(e){
    // console.log($(this).html())
    var _index = $(this).index();
    
   // $('.section2 .bg img').attr('src','./statics/images/zx/section2-0'+(_index+1)+'.png');
    $('.section-nav-list-tit .nav-cont-item-bg').css({'top':_index*50 + 'px'});
    $(this).addClass('on').siblings().removeClass('on');

    $(".section-nav-list-cont li").eq(_index).addClass('on').siblings().removeClass('on');

    //var bg_src = $('.section-nav-list-cont li.on .swiper-slide-active .sl-bg img').attr('src');
    // console.log("2bg_src : "+bg_src);
    $('.section2 .s2bg img').eq(_index).addClass('curr').siblings().removeClass('curr');
  });

  $(".section1 .section-content-item").mouseenter(function(evt){
       $(this).addClass("on").siblings().removeClass('on');
  });

  $('.shares-tab-header>span').click(function(e){
     $(this).addClass('on').siblings().removeClass('on');
     var index = $(this).index();
     $('.shares-zhongxin .shares-cont').eq(index).addClass('on').siblings().removeClass('on');
  });

  $('.shares-ML-tab-header>span').click(function(e){
    $(this).addClass('on').siblings().removeClass('on');
    $(this).parent().siblings("ul").children().eq($(this).index()).addClass('on').siblings().removeClass('on');
  });

  $('.section-box-img').mouseenter(function(e){
    $(this).addClass('item-active-shadow');
  });

  $('.section-box-img').mouseleave(function(e){
    $(this).removeClass('item-active-shadow');
  });



    function thisCss(oElement, attr, value)
    {
        if (arguments.length == 2)
        {
            return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
        }
        else if (arguments.length == 3)
        {
            switch (attr)
            {
                case "width":
                case "height":
                case "top":
                case "left":
                case "bottom":
                    //console.log("oElement  : "+ oElement.getAttribute("data-index")+" +attr:"+attr+" value: "+value );
                    oElement.style[attr] = parseInt(value) + "px";
                    break;
                case "opacity" :
                     oElement.style.filter = "alpha(opacity=" + value + ")";
                     oElement.style.opacity = value / 100;
                    //$(oElement).css({"opacity":parseInt(value/10)*0.1});
                    break;
                case "z-index" :
                    oElement.style[attr] = parseInt(value);
                default :
                    oElement.style[attr] = value;
                    break;
            }
        }
    }




 
 




    /**
   * 触摸事件 侦听某个页面元素的触摸事件 传入触摸的方向
   * @param  {元素}   el       要使用touch事件的元素
   * @param  {function} callback 回调函数 
   * @return {none}            none
   */
  function touch(el,callback){
    var startX, startY, moveEndX, moveEndY, X, Y,scrollDirection;

    $(el).on("touchstart", function(e) {
        // e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;

        // startX = e.changedTouches[0].pageX,
        // startY = e.changedTouches[0].pageY;
    });

    $(el).on("touchend", function(e) {
        // e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        // moveEndX = e.changedTouches[0].pageX,
        // moveEndY = e.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
          if(Math.abs(X)>30){
            scrollDirection = 'right';
          }

        }
        else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
          if(Math.abs(X)>30){
            scrollDirection = 'left';
          }
            
        }
        else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
          if(Math.abs(Y)>30){
            scrollDirection = 'down';
          }
        }
        else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
          if(Math.abs(Y)>30){
            scrollDirection = 'top';
          }
        }
        else{
            // alert("just touch");
        }
        if(scrollDirection&&scrollDirection!=''){
          callback(el,scrollDirection);
          scrollDirection='';
        }
    });
  }