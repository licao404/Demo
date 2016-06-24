/**
 *  把要置顶的元素拷贝一份，设置好样式。当到达顶部时，将拷贝插入到该元素后面，不需要时移出该元素即可。
 */
$.fn.stick = function (handler) {

    var $node = this,
        nodeWidth = $node.width(),
        nodeHeight = $node.height(),
        nodeLeft = $node.offset().left,
        nodeTop = $node.offset().top,
        $nodeClone = $node.clone();
    $nodeClone.css ({
        'position':'fixed',
        'top':0,
        'left':nodeLeft,
        'width':nodeWidth,
        'height':nodeHeight
    });


    $(window).on("resize",function (e) {
        nodeWidth = $node.width();
        nodeHeight = $node.height();
        nodeLeft = $node.offset().left;
        nodeTop = $node.offset().top;

        $nodeClone.css ({
            'left':nodeLeft,
            'width':nodeWidth,
            'height':nodeHeight
        });

    });
    $(window).on("scroll",function (e) {
        var winScroll = $(this).scrollTop();

        if (winScroll >= nodeTop) {
            setFixed();
        } else if (winScroll < nodeTop) {
            clearFixed();
        }
    });

    function setFixed() {
        $nodeClone.data('isFixed',true);
        $node.after($nodeClone);
    }
    function clearFixed() {
        if ($nodeClone.data('isFixed')){
            $nodeClone.data('isFixed',false);
            $nodeClone.remove();
        }

    }

};