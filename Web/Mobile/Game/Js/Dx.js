/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="Cmn.js" />
/// <reference path="CmnAjax.js" />
/// <reference path="CmnFuncExd.js" />
/// <reference path="animate/AnimateFrame.js" />
/// <reference path="animate/Scenes.js" />
/// <reference path="animate/ScenesSwitch.js" />
var _Cyle;
var _VideoIsOver = false;
function IndexCycle() {
    if ($(".JscHomeKV>li").length > 1) {
        $(".JscHomeKV").cycle("destroy").cycle({
            fx: 'scrollHorz',
            pager: $(".JscHomeCarousel"),
            timeout: 2000,
            //prev: ".JscLeft",
            //next: ".JscRight",
            activePagerClass: "carousel_set",
            speed: 2000,
            pause: 1,
            startingSlide:0
        });
        clearInterval(_Cyle);
    }
}

function CloseVideoFloat() {
    if (_VideoIsOver) { return; }
    
    $(".JscIndexVideo").html("");
    $(".JscIndexVideoFloat,.Jsc_pop_float").hide();
    setTimeout(function () {
        $(".Jsc_pop_float>div").hide();
        $(".Jsc_pop_float").show();
        $(".Jsc_answer_float").show();
    }, 10000);
    _Cyle = setInterval(function () {
        IndexCycle();
    }, 10);
    IndexCycle();
    _VideoIsOver = true;
}
//var CloseVideoFloats = CloseVideoFloat();
var _LoadingPic;
$(document).ready(function () {
    _LoadingPic = setInterval(function () {
        if ($(".load_line").hasClass("update")) {
            $(".load_line").removeClass("update");
        }
        else {
            $(".load_line").addClass("update");
        }
    }, 300);
    
    $(".LoadingWrap").css("display", "block");
    Cmn.Func.ImageLazyLoading("body", function (pro) {
        $(".LoadingNum").html(pro + "%");
    }, function () {
        clearInterval(_LoadingPic);
        $(".LoadingWrap").delay(500).fadeOut(800);
        $(".Jsc_pop_float>div").hide();
        $(".JscIndexVideoFloat").show();
        var _width = $(".JscIndexVideo").width();
        var _height = $(".JscIndexVideo").height();
        //var _indexvideourl = Cmn.Func.GetAbsoluteUrl("video/indexvideo.flv");
        var _videoHtml = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='100%' height='100%' align='middle'>" +
                    "<param name='movie' value='c4l.swf' />" +
                    "<param name='quality' value='high' />" +
                    "<param name='bgcolor' value='#000' />" +
                    "<param name='play' value='true' />" +
                    "<param name='loop' value='true' />" +
                    "<param name='scale' value='showall' />" +
                    "<param name='menu' value='true' />" +
                    "<param name='devicefont' value='false' />" +
                    "<param name='allowScriptAccess' value='sameDomain' />" +
                    "<param value='transparent' name='wmode'/>" +
                    "<object class='c4lIndexVideo' type='application/x-shockwave-flash' data='c4l.swf' width='100%' height='100%'>" +
                    "<param name='movie' value='c4l.swf' />" +
                    "<param name='quality' value='high' />" +
                    "<param name='bgcolor' value='#000' />" +
                    "<param name='play' value='true' />" +
                    "<param name='loop' value='true' />" +
                    "<param name='wmode' value='window' />" +
                    "<param name='scale' value='showall' />" +
                    "<param name='menu' value='true' />" +
                    "<param name='devicefont' value='false' />" +
                    "<param name='allowScriptAccess' value='sameDomain' />" +
                    "<param value='transparent' name='wmode'/>" +
                    "<a href='http://www.adobe.com/go/getflash'>" +
                    "<img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='获得 Adobe Flash Player' />" +
                    "</a>" +
                    "</object>"+
                        "</object>";
        $(".JscIndexVideo").html(_videoHtml);
        $(".CloseIndexVideo").on("click", function () {
            if ($(".c4lIndexVideo")[0]!= undefined) {
                $(".c4lIndexVideo")[0].pauseVideo();
            }
            _VideoIsOver = true;
            $(".JscIndexVideo").html("");
            $(".JscIndexVideoFloat,.Jsc_pop_float").hide();
            setTimeout(function () {
                $(".Jsc_pop_float>div").hide();
                $(".Jsc_pop_float").show();
                $(".Jsc_answer_float").show();
            }, 10000);
            _Cyle = setInterval(function () {
                IndexCycle();
            }, 10);
            IndexCycle();
        });

        Cmn.Func.ImageLazyLoading("body", function (pro) {

        }, function () {

        }, "lazypath2");

    });
    Cmn.PageIsLock = true;
    AnimateFrame.Init(500, SwitchMode.Shifting, Direction.Up, Direction.Down);



    //左侧导航hover效果
    //var _lefthover = $(".Jsc_sidebar_nav li a");

    Cmn.PageIsLock = true;

    //新闻资讯浮层自定义滚动条
    setTimeout(function () {
        $(".inf_box").mCustomScrollbar("destroy");
        $(".inf_box").mCustomScrollbar({
            autoDraggerLength: false,
            scrollButtons: {
                enable: false,
                scrollType: "continuous",
                scrollSpeed: "auto",
                scrollAmount: 40
            },
            theme: "light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
        });
    }, 100);

    //右侧导航hover效果
    var _hover = $(".Jsc_right_barnav li.right_sidebar_btn2");

    $(_hover).hover(function (e) {
        $(this).find("i").stop(true, true).animate({ right: '0px' });
        //$(this).find("i").stop(true, true).animate({ right: '-180px' });
    }, function (e) {
        //if($(this).index(".Jsc_right_barnav li")==0){return;}
        $(this).find("i").stop(true, true).animate({ right: '-180px' });
    });


    //360旋转车颜色选择按钮
    $(".Jsc_rotate_menu li a").click(function () {
        $(".Jsc_rotate_menu li a").removeClass("color_set");
        $(this).addClass("color_set");
    });

    //预约试驾关闭按钮
    $(".Jsc_msg_close_btn").click(function () {
        $(".Jsc_drive_float").hide();
        $(".Jsc_pop_float").hide();
    });

    //预约购车关闭按钮
    $(".Jsc_msg_close_btn").click(function () {
        $(".Jsc_shopping_float").hide();
        $(".Jsc_pop_float").hide();
    });

    //360旋转车关闭按钮
    $(".Jsc_rotate_btn").click(function () {
        $(".Jsc_rotate_float").hide();
        $(".Jsc_pop_float").hide();
    });

    //壁纸关闭按钮
    $(".Jsc_iwallpaper_close_btn").click(function () {
        $(".Jsc_wallpaper_float").hide();
        $(".Jsc_pop_float").hide();
    });

    //新闻详情关闭按钮
    $(".Jsc_inf_close_btn").click(function () {
        $(".Jsc_inf_float").hide();
        $(".Jsc_pop_float").hide();
    });


    //留资性别选则
    $(".Jsc_sex em").click(function () {
        $(".Jsc_sex em").removeClass("sex_select");
        $(this).addClass("sex_select");
    });


    //新闻页翻页按钮
    $(".Jsc_page_nav li").click(function () {
        $(".Jsc_page_nav li").removeClass("append");
        $(this).addClass("append");
    });

    //新闻发布页鼠标hover
    $(".press_hover").hover(function () {
        $(this).parent().addClass("hover");
    }, function () {
        $(this).parent().removeClass("hover");
    });

    //精美壁纸页鼠标hover
    $(".paper_des").hover(function () {
        $(this).parent().addClass("hover");
        $(this).parent().siblings(".lf_shadow").show();
    }, function () {
        $(this).parent().removeClass("hover");
        $(this).parent().siblings(".lf_shadow").hide();
    });

    //精美视频页鼠标hover
    $(".video_des").hover(function () {
        $(this).parent().addClass("hover");
        $(this).parent().siblings(".rl_shadow").show();
    }, function () {
        $(this).parent().removeClass("hover");
        $(this).parent().siblings(".rl_shadow").hide();
    });

    //点击精美壁纸弹出浮层
    $(".Jsc_paper_menu i").click(function () {
        $(".Jsc_pop_float").show();
        $(".Jsc_wallpaper_float").show();
    });
    //点击精美壁纸翻页切换按钮
    $(".Jsc_page_btn").click(function () {
        $(".Jsc_page_btn").removeClass("page_set");
        $(this).addClass("page_set");

    });

    //浮层精美壁纸下载翻页按钮
    $(".Jsc_wallpaper_btn").click(function () {
        $(".Jsc_wallpaper_btn").removeClass("wallpaper_set");
        $(this).addClass("wallpaper_set");
    });

    //首页左侧导航显示
    $(".Jsc_click_btn").click(function () {
        $(".Jsc_left_sidebar_click").hide();
        $(".Jsc_left_sidebar_box").fadeIn();
        $(".Jsc_page_btn").show();
    });

    //首页左侧导航隐藏
    $(".Jsc_nav_return").click(function () {
        $(".Jsc_left_sidebar_click").fadeIn();
        $(".Jsc_left_sidebar_box").hide();
    });

})
