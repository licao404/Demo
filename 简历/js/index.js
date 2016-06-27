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
				$nav.css('background',"transparent");
			}
			if (isShow($('#introduce'))){
				$nav.children('ul').children().removeClass('active').eq(1).addClass('active');
				$nav.css('background',"#082646");
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
		return $win.height()/2 + $win.scrollTop() > $node.offset().top ;
	}


	$('.blackboard').on('mouseenter',function () {
		$(this).children().each(function (index,elem) {
            var target =$(this);
            var left = 5;

			target.css('background',getRandomColor());
				for (var i = 0 ;i < 2;i++){
					target.animate({
						'margin-left':left
					});
					left = 0 - left;
				}

		});
        // console.log(labelClock)
	});

	function getRandomColor(){
		return '#'+(Math.random()*0xffffff<<0).toString(16);
	}

});



