$(function(){


    $('.fangdajing').on('click',function(){
        $(".hidden").addClass("searching");
        $(".search-box").addClass("searching");
        $(".search-inner").addClass("searching");
        $(".search-inner input").addClass("searching");
        $(".search-example").addClass("searching");
        $(".search-example span").addClass("searching");
        $(".search-example li").addClass("searching");
    });
    $(".close").on("click",function(){
        $(".hidden").removeClass("searching");
        $(".search-box").removeClass("searching");
        $(".search-inner").removeClass("searching");
        $(".search-example").removeClass("searching");
    });

    var first=$(".first");
    var flag=true;
    $(".big,.logos").on("click",function(){
        $(".body").finish().slideToggle();
        $(".up").addClass("searching");
        $(".down").addClass("searching");
        if(flag){
            first.addClass("searching");

            $(".up").removeClass("searching");
            $(".down").removeClass("searching");
            flag=false;
        }else{
            first.removeClass("searching");
            $(".up").addClass("searching");
            $(".down").addClass("searching");
            flag=true;
        }
    });

    var slides=$('.tu a');
    var sarousel=$('.sarousel');
    var dots=$('.dot-nav .dot');
    var flag=false;
    sarousel.on('mouseenter',function(){
        clearInterval(t);
    });
    sarousel.on('mouseleave',function(){
            t=setInterval(moveLeft,2500);
    });
    moveTo=function(el,dir){
        flag=true;
        if(dir==='right'){
            slides.filter(".active").removeClass("active").addClass("enter").delay(500).queue(function(){//找到slides中的active，再移除该类名。active的作用是让图片归位，也就是在屏幕该显示的地方显示。enter的作用是在原来的位置上稍微向右移动300px，四张图片分别推迟0.5s加上enter类名

                flag=false;
                $(this).removeClass("enter").dequeue();
            });
            $(el).addClass('left');/
            $(el).get(0).offsetWidth;
            $(el).removeClass("left").addClass("active");//将当前元素移除left类，同时加active类，让当前元素移动到屏幕中要显示的地方
        }
        if(dir==="left"){
            slides.filter(".active").removeClass("active").addClass("leave").delay(500).queue(function(){
                flag=false;
                $(this).removeClass("leave").dequeue();
            });
            $(el).addClass("right");
            $(el).get(0).offsetWidth;
            $(el).removeClass("right").addClass("active");
        }
        dots.removeClass("active").eq(slides.index(el)).addClass("active");
    };

    var moveRight=function(){//手机到手表
        if(flag)return;//处于停止运动的状态
            var active=slides.filter(".active");//找到有active这个类的元素
            var el=active.prev().length?active.prev():slides.eq(-1);//el就等于有active类元素的上一个元素，如果有active这个类的元素是第一张元素，那么el就是第四张元素图片
            moveTo(el,'right');
        
    };

    var moveLeft=function(){//手表到手机
        if(flag)return;
            var active=slides.filter(".active");//找到有active这个类的元素
            var el=active.next().length?active.next():slides.eq(0);//当前元素就等于有active类元素的下一个图片元素，如果有active这个类的元素是第四张图片元素，那么el就是第一张元素图片
            moveTo(el,'left');

    };
    var t=setInterval(moveLeft,2500);
    dots.on("click",function(){
        if(flag)return;
        var now=slides.filter(".active").index();//index()是下标
        var next=$(this).index();//要点击的dots元素的下标
        if(now===next){//要点的dots元素与当前在屏幕中显示的图片相对应（即下标相同）
            return;
        }
        var el=slides.eq(next);//el相当于图片元素的eq(next),next是下标
        if(now>next){//如果要点的dots元素在当前图片元素对应的dots元素前面
            moveTo(el,'left');
        }else{//如果要点的dots元素在当前图片元素对应的dots元素后面，图片就向右移
            moveTo(el,'right');
        }
    });
    $('.h3 h3,.jia').on('click',function(){
        $(this).parent().next().slideToggle();
    })
});