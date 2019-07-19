/**
 * Created by full on 2018/6/8.
 */
;(function($,window,document,undefined){

    //配置参数
    var defaults = {
        current:1,              //当前第几页,默认为第1页
        prevCls:'page_prev',    //上一页class
        nextCls:'page_next',    //下一页class
        prevContent:'<',        //上一页按钮内容，可更改
        nextContent:'>',        //下一页按钮内容，可更改
        activeCls:'active',     //当前页选中状态
        coping:false,           //首页和尾页
        homePage:'',            //首页节点内容
        endPage:'',             //尾页节点内容
        count:3,                //当前页前后分页个数
        jump:false,             //跳转到指定页数
        jumpIptCls:'jump-ipt',  //文本框内容
        jumpBtnCls:'jump-btn',  //跳转按钮
        jumpBtn:'跳转',           //跳转按钮文本
        callback:function(){}   //回调
    };

    var Pagination = function(element,options){
        //全局变量
        var opts = options,//配置
            current,//当前页
            $document = $(document),
            $obj = $(element);//容器
        /**
         * 获取总页数
         * @return int pages 总页数
         */
        this.getTotalPage = function(){
            var pages = $obj.siblings('input[type="hidden"]').val();
            return pages;
        };
        //获取当前页
        this.getCurrent = function(){
            return current;
        };

        /**
         * 动态填充分页页码
         * @param int index 页码
         */
        this.filling = function(index){
            var html = '';
            current = index || opts.current;//当前页码
            var pageCount = this.getTotalPage();
            if(current > 1){//上一页
                html += '<a href="javascript:;" class="'+opts.prevCls+'">'+opts.prevContent+'</a>';
            }else{
                $obj.find('.'+opts.prevCls) && $obj.find('.'+opts.prevCls).remove();
            }
            if(current >= opts.count * 2 && current != 1 && pageCount != opts.count){
                var home = opts.coping && opts.homePage ? opts.homePage : '1';
                html += opts.coping ? '<a href="javascript:;" data-page="1">'+home+'</a><span>...</span>' : '';
            }
            var start = current - opts.count,
                end = current + opts.count;
            ((start > 1 && current < opts.count) || current == 1) && end++;
            (current > pageCount - opts.count && current >= pageCount) && start++;
            for (;start <= end; start++) {
                if(start <= pageCount && start >= 1){
                    if(start != current){
                        html += '<a href="javascript:;" data-page="'+start+'">'+ start +'</a>';
                    }else{
                        html += '<span class="'+opts.activeCls+'">'+ start +'</span>';
                    }
                }
            }
            if(current + opts.count < pageCount && current >= 1 && pageCount > opts.count){
                var end = opts.coping && opts.endPage ? opts.endPage : pageCount;
                html += opts.coping ? '<span>...</span><a href="javascript:;" data-page="'+pageCount+'">'+end+'</a>' : '';
            }
            if(current < pageCount){//下一页
                html += '<a href="javascript:;" class="'+opts.nextCls+'">'+opts.nextContent+'</a>'
            }else{
                $obj.find('.'+opts.nextCls) && $obj.find('.'+opts.nextCls).remove();
            }

            html += opts.jump ? '<input type="text" class="'+opts.jumpIptCls+'"><a href="javascript:;" class="'+opts.jumpBtnCls+'">'+opts.jumpBtn+'</a>' : '';

            $obj.empty().html(html);
        };

        //绑定点击事件
        this.eventBind = function(){
            var self = this;
            var pageCount = this.getTotalPage();//总页数
            $obj.off().on('click','a',function(){
                if($(this).hasClass(opts.nextCls)){
                    var index = parseInt($obj.find('.'+opts.activeCls).text()) + 1;
                }else if($(this).hasClass(opts.prevCls)){
                    var index = parseInt($obj.find('.'+opts.activeCls).text()) - 1;
                }else if($(this).hasClass(opts.jumpBtnCls)){
                    if($obj.find('.'+opts.jumpIptCls).val() !== ''){
                        var index = parseInt($obj.find('.'+opts.jumpIptCls).val());
                    }else{
                        return;
                    }
                }else{
                    var index = parseInt($(this).data('page'));
                }
                self.filling(index);
                typeof opts.callback === 'function' && opts.callback(self);
            });
            //输入跳转的页码
            $obj.on('input propertychange','.'+opts.jumpIptCls,function(){
                var $this = $(this);
                var val = $this.val();
                var reg = /[^\d]/g;
                if (reg.test(val)) {
                    $this.val(val.replace(reg, ''));
                }
                (parseInt(val) > pageCount) && $this.val(pageCount);
                if(parseInt(val) === 0){//最小值为1
                    $this.val(1);
                }
            });
            //回车跳转指定页码
            $document.keydown(function(e){
                var self = this;
                if(e.keyCode == 13 && $obj.find('.'+opts.jumpIptCls).val()){
                    var index = parseInt($obj.find('.'+opts.jumpIptCls).val());
                    self.filling(index);
                    typeof opts.callback === 'function' && opts.callback(self);
                }
            });
        };

        //初始化
        this.init = function(){
            this.filling(opts.current);
            this.eventBind();
        };
        this.init();
    };

    $.fn.pagination = function(parameter,callback){
        if(typeof parameter == 'function'){//重载
            callback = parameter;
            parameter = {};
        }else{
            parameter = parameter || {};
            callback = callback || function(){};
        }
        var options = $.extend({},defaults,parameter);
        return this.each(function(){
            var pagination = new Pagination(this, options);
            callback(pagination);
        });
    };

})(jQuery,window,document);
