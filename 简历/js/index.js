requirejs.config({
	baseUrl:'js/com',
	paths:{
		jquery:'../lib/jquery'
	}
});

requirejs(['jquery','CarouselCSS3','GoTop', 'TabList'],function ($,Carousel,GoTop,TabList) {

	new TabList($('.green-section>.wraper'));

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
				$nav.css('background',"transparent");

			}
			if (isShow($('.green-section'))){
				$nav.children('ul').children().removeClass('active').eq(1).addClass('active');
				$nav.css('background',"#0B4754");
			}
			if (isShow($('.blue-section'))){
				$nav.children('ul').children().removeClass('active').eq(2).addClass('active');
			}
			if (isShow($('.yellow-section'))){
				$nav.children('ul').children().removeClass('active').eq(3).addClass('active');
			}
		},100);

	});
	function isShow($node) {
		return $win.height()/2 + $win.scrollTop() > $node.offset().top ;
	}
	
	//demos   -----------------

	var $demoCt = $('.demoCt');
	var demoClock ;

	$demoCt.on('mouseenter','.demoItem',function (event) {
		event.stopPropagation() ;  //停止冒泡
		var _this = $(this);
		_this.find('.demo-mask').css({
			'opacity': 0
		});
		demoClock = setTimeout(function () {
			_this.find('.demoInfo').show();
		},500)

	}).on('mouseleave','.demoItem',function (event) {
		var _this = $(this);
		_this.find('.demo-mask').css({
			'opacity': 0.3
		});

		if (demoClock) {
			clearTimeout(demoClock);
			_this.find('.demoInfo').hide();
		}

	})

});



