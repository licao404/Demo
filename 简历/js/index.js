requirejs.config({
	baseUrl:'js/com',
	paths:{
		jquery:'../lib/jquery'
	}
});

requirejs(['jquery','CarouselCSS3','GoTop', 'TabList','drag'],function ($,Carousel,GoTop,TabList,Drag) {

	new TabList($('.green-section>.wraper'));
	
	Drag.init($('.ball'));
	Carousel.init($('.J_Poster'));
	GoTop();


	
	
	
	
	//navbar -----------------
	var navclock;
	var $nav = $('nav');
	var $win = $(window);

	$(window).on('scroll',function () {
		navclock && clearTimeout(navclock);

		navclock = setTimeout(function () {
			if (isShow($('#banner'))){
				$nav.children('ul').children().removeClass('active');
				$nav.css({
					'background':"transparent",
					'padding-top':5,
					'padding-bottom':5
				});
			}
			if (isShow($('#introduce'))){
				$nav.children('ul').children().removeClass('active').eq(1).addClass('active');
				// $nav.css('background',"#166AC3");
				$nav.css({
					'background':"#166AC3",
					'padding-top':15,
					'padding-bottom':15
				});
			}
			if (isShow($('#base'))){
				$nav.children('ul').children().removeClass('active').eq(2).addClass('active');
			}
			if (isShow($('#works'))){
				$nav.children('ul').children().removeClass('active').eq(3).addClass('active');
			}

			//myLabel   -----------------

		},100)


	});
	function isShow($node) {
		return $win.height()*0.8 + $win.scrollTop() > $node.offset().top ;
	}

	//introduce----------------
	$('.J-main').on('mouseenter',function () {
		setRandomColor($('.J-main').children());

		var targets = $('.J-main').children(),
			index = 1,
			delay = 300;

		targets.eq(index).animate({left:200*index},delay);
		targets.eq(++index).animate({left:200*index},delay+=100);
		targets.eq(++index).animate({left:200*index},delay+=100);
		targets.eq(++index).animate({left:200*index},delay+=100);

	}).on('mouseleave',function () {
		var targets = $('.J-main').children(),
			index = 4,
			delay = 600;

		targets.eq(index).animate({left:40},delay-=100);
		targets.eq(--index).animate({left:30},delay-=100);
		targets.eq(--index).animate({left:20},delay-=100);
		targets.eq(--index).animate({left:10},delay);
	});

	function setRandomColor($nodes) {
		$nodes.each(function () {
			var _this = $(this),
				box = _this.find('.box'),
				arrow = _this.find('.arrow'),
				color = getRandomColor();

			box.css('backgroundColor',color);
			arrow.css('border-left-color',color);
		})

	}






	function getRandomColor(){
		return '#'+(Math.random()*0xffffff<<0).toString(16);
	}

});



