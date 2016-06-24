/**
 * Created by Administrator on 2016/5/28.
 */

define(['jquery'],function($){

    var GoTop = function () {
        var me =this;
        this.$node = rander();
        bind();

        function bind(){
            me.$node.on('click',function (e) {
                $(window).scrollTop(0);
            });
            $(window).on('scroll',function (e) {
                if ($(window).scrollTop()>400){
                    me.$node.fadeIn();
                } else {
                    me.$node.fadeOut();
                }
            })
        }
        function rander(){
            var temp = "";
            temp += '<div id="goTop" class="iconfont">&#xe61e;';
            temp += '</div>';

            $node = $(temp);
            $node.css({
                position: 'fixed',
                zIndex: 999,
                right: 20,
                bottom: 30,
                fontSize: 40,
                color: "#00BCD4",
                cursor: "pointer",
                display: "none",
                background: "#1E347B",
                padding:'5px 5px'

            });

            $('body').append($node);
            return $node;
        }
        
    };
    return GoTop;
});




