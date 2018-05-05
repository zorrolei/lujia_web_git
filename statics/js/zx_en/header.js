	$(document).ready(function() {

		// console.log(window._mobile);
		/**
		 * 初始化 fullpage 
		 */
		if(window._mobile){
			var mainHeight = $(window).height() - $(".ui-topNav-wap").height();
				$(".nav-mobile").css({'height':mainHeight + 'px'});
		}
		/**
		 * header 相关
		 */
		$('.header').mouseenter(function(e){
			$(this).addClass("over");
			
		});

		$('.header').mouseleave(function(e){
			$(this).removeClass("over");
			 $('.nav-cont.on').removeClass('on');
			 $('.header .ui-navlist li.on').removeClass('on');

			$('#full_bg').removeClass('over');
		});

		$('.header .ui-navlist li').mouseenter(function(e){
			
			$('#full_bg').removeClass('over');
			$(this).addClass("on").siblings().removeClass('on');

			var index = $(this).index();
			$('.nav-content-warp .nav-cont').removeClass('on');
			
			if($(this).hasClass('no-expands')){
				return;
			}
			$('.nav-content-warp .nav-cont').eq(index).addClass('on');

			$('#full_bg').addClass('over');
		});


		

		$('.nav-cont-list .nav-cont-items .nav-cont-item').mouseenter(function(e){
			var index = $(this).index();

			$('.nav-cont-item-bg',$(this).parent()).css({'top':index*50 + 'px'});
		});

		var m_nav_display = false;

		$('.m-nav-topBtn').click(function(e){
			m_nav_display = !m_nav_display;
			check_menu_topBtn();
		});
		function check_menu_topBtn(){
			if(m_nav_display){
				$('.nav-mobile').show();$('.m-nav-up').hide();$('.m-nav-down').show();

				$.fn.fullpage.destroy();
				$('#full_bg').addClass('over');
			}else{
				$('.nav-mobile').hide();$('.m-nav-up').show();$('.m-nav-down').hide();

				location.reload();

			}
		}

		$('.nav-mobile-item').click(function(e){
			var el = $(this).parent();
			if(!$(el).hasClass('nav-mobile-menugroup'))
			{
				if($(this).hasClass('nav-mobile-item'))
				{
					if ($(this).hasClass('active')) {

						//$('.nav-mobile nav-mobile-item').removeClass('active');

						$(this).removeClass('active');
					}else{
						$('.nav-mobile-item').each(function(index,item){
							// console.log(item);
							$(this).removeClass("active");
							if($(this).parent().hasClass('nav-mobile-menugroup')){
								$('.nav-mobile-subMenus',$(this).parent()).hide();
							}
						});
						$(this).addClass('active');
					}
				}
				return;
			}


			if ($(this).hasClass('active')) {
				//$('.nav-mobile nav-mobile-item').removeClass('active');
				$(this).removeClass('active');
				$('.nav-mobile-subMenus',el).hide();

			}else{
				// console.log(22222);
				$('.nav-mobile-item').each(function(index,item){
					// console.log(item);
					$(this).removeClass("active");
					if($(this).parent().hasClass('nav-mobile-menugroup')){
						$('.nav-mobile-subMenus',$(this).parent()).hide();
					}
				});
				$(this).addClass('active');
				$('.nav-mobile-subMenus',el).show();
			}
		});

		var isBigScreen = true;
		if($(window).width()>1000)
		{
			isBigScreen = true;
		}else{
			isBigScreen = false;
		}

		$(window).resize(function(e){
			if($(window).width()>=1000&&!isBigScreen){
				isBigScreen = true;
				m_nav_display = false;
				check_menu_topBtn();
			}

			if($(window).width()<1000&&isBigScreen){
				isBigScreen = false;

				var mainHeight = $(window).height() - $(".ui-topNav-wap").height();
				$(".nav-mobile").css({'height':mainHeight + 'px'});

			}

			
			var swp_w = parseInt($('.nav-cont-swp').width());
			$('.nav-cont-swp-bg').each(function(index,item){
				var _w = parseInt($('img',this).width());
				var ml = parseInt((swp_w - _w)/2);
				
				// $(this).css({'width':swp_w+ 'px'});

				$('img',this).css({'margin-left':ml+'px'});

			})
			
		});

		var nav_Swiper = new Swiper('.nav-cont-swp1',{
			// pagination: '.nav-cont-page1',
			loop:true,
			grabCursor: true,
			// paginationClickable: true,
			// nextButton: '.nav-cont-al',
	  //       prevButton: '.nav-cont-ar',
	        speed: 600
		});

		$('.nav-cont-al').click(function(){
			nav_Swiper.swipePrev(); 
		})
		$('.nav-cont-ar').click(function(){
			nav_Swiper.swipeNext(); 
		})

		/*
			$('.nav-cont-al').on('click', function(e){
				e.preventDefault()
				nav_Swiper.swipePrev()
			});

			$('.nav-cont-ar').on('click', function(e){
				e.preventDefault()
				nav_Swiper.swipeNext()
			});

		    var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        parallax: true,
		        speed: 600,
		    });
	    */
	});


