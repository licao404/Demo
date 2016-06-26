/**
 * Created by Administrator on 2016/6/16.
 */


define(['jquery'],function ($) {
    var Drag = function ($target) {
        this.target = $target;

        this.bind();
    };

    Drag.prototype = {
        //
        bind:function () {

            var target = this.target;
            target.on('mousedown',function (e) {
                //e.pageX = 事件触发时鼠标在页面上的位置
                //$dialog.offset() = dialog 元素相对html绝对位置
                console.log(1);

                var $target = $(this);
                //保存事件触发点 在 元素上的位置。
                evtX = e.pageX - $target.offset().left;
                evtY = e.pageY - $target.offset().top;
                $target.addClass('onMove').data('evtPos',{x:evtX,y:evtY}).css({
                    'opacity':0.6
                });


            }).on('mouseup',function () {
                console.log(2);

                var $target = $(this);
                $target.removeClass('onMove').removeData('evtPos').css({
                    'opacity': 1
                });
            });


            $('body').on('mousemove',function (e) {
                var $onMove = $('.onMove');
                
                if ($onMove.length) {   //触发事件元素的父元素等于绑定事件的元素
                    $onMove.offset({    //当有窗口在移动状态时
                        left:e.pageX - $onMove.data('evtPos').x,
                        top:e.pageY - $onMove.data('evtPos').y
                    });

                }
            })
        }
    };
    Drag.init = function ($targets) {

        $targets.each(function () {
            // $(this).css('background',getRandomColor());
            new Drag($(this));
        });
        function getRandomColor(){
            return '#'+(Math.random()*0xffffff<<0).toString(16);
        }
    };
    return Drag;

});


