/**
 * Created by Administrator on 2016/6/21.
 */

define(['jquery'],function(){
    var TabList = function (listCt) {
        var _this = this;
        this.$listCt = listCt;

        this.rander();

        this.$listHead = this.$tabList.children('.listHead');

        this.$listCont = this.$tabList.children('.listContent');

        this.bind();
        
    };
    TabList.prototype = {


        //绑定事件
        bind:function () {
            var _this = this;
            this.$listHead.on('mouseenter','.tab-head',function () {
                var $head = $(this);
                _this.$listHead.children().removeClass('active');
                $head.addClass('active');

                _this.$listCont.children().removeClass('active').eq($head.index()).addClass('active');
            });

        },

        //渲染
        rander:function () {
            var js = '<p>熟悉原生JavaScript的使用，掌握事件模型、DOM 操作、Ajax、JSONP、跨域、闭包、' +
                '原型链、继承等相关概念的原理和使用方法，能使用原生JS 封装通用函数库，实现诸如轮播、Tab 切换卡、' +
                '懒加载、Dialog、表单验证、Ajax 等常见效果</p>' +
                '<p>熟练jQuery的使用，熟练使用 jQuery 开发常见页面的效果，能够将常见效果封装成 jQuery 插件</p>' +
                '<P>对设计模式、编写可复用代码方面有一定经验，可对诸如轮播、Tab 切换卡、懒加载、Dialog等常见效果实现组件化封装</P>' +
                '<p>熟悉 Git、Sublime、WebStorm 等前端相关工具的使用</p>' +
                '<p>对前端工程化、模块化有一定认识，能使用 RequireJS 实现模块化开发，能使用 NPM、Gulp 打造基本的自动化流程</p>' +
                '<p>对前端性能优化有相关经验</p>',
                css = "<p>掌握浮动、定位、盒模型、BFC 等CSS核心概念，掌握常见布局方式，对CSS 兼容有一定经验，能熟练开发符合W3C规范的常见页面。</p>",
                html =  "<p>掌握HTML标签使用方法，对代码可读性、规范性、语义化有一定认识。</p>";
            var temp = "";
            temp += '<div class="tab-list clearfix">'
                        + '<div class="listContent">'
                            + '<div class="tab-content active">'+html+'</div>'
                            + '<div class="tab-content">'+css+'</div>'
                            + '<div class="tab-content">'+js+'</div>'
                        + '</div>'
                        + '<div class="listHead">'
                            + '<div class="tab-head active"><a href="javascript:void(0);" class="iconfont">&#xe601;</a></div>'
                            + '<div class="tab-head"><a href="javascript:void(0);" class="iconfont">&#xe674;</a></div>'
                            + '<div class="tab-head"><a href="javascript:void(0);" class="iconfont">&#xe603;</a></div>'
                        + '</div>'
                +   '</div>';
            this.$tabList = $(temp);                //tablist
            this.$listCt.append(this.$tabList);
        }
    };
    TabList.init = function () {
        
    };
    return TabList;
    
});


