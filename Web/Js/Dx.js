/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="Cmn.js" />
/// <reference path="CmnAjax.js" />
/// <reference path="CmnFuncExd.js" />
/// <reference path="animate/AnimateFrame.js" />
/// <reference path="animate/Scenes.js" />
/// <reference path="animate/ScenesSwitch.js" />

var _LoadingPic;
$(document).ready(function () {    
    _LoadingPic = setInterval(function () {
        if ($(".load_line").hasClass("update")) {
            $(".load_line").removeClass("update");
        }
        else {
            $(".load_line").addClass("update");
        }
    }, 300)
    $(".LoadingWrap").css("display", "block");
    Cmn.Func.ImageLazyLoading("body", function (pro) {
        $(".LoadingNum").html(pro + "%")
    },function () {
        clearInterval(_LoadingPic);
        $(".LoadingWrap").delay(500).fadeOut(800);
    });
    Cmn.PageIsLock = true;
    AnimateFrame.Init(500, SwitchMode.Shifting, Direction.Up, Direction.Down);
 


    //左侧导航hover效果
    //var _lefthover = $(".Jsc_sidebar_nav li a");

    //$(_lefthover).hover(function (e) {
    //    $(this).parent().addClass("sidebar_set");
    //    $(this).find("i .nav_hoverimg").hide();
    //    //$(this).find("i .nav_img").hide();
    //    //$(this).find("i .nav_hoverimg").show();
    //}, function (e) {
    //    $(this).parent().removeClass("sidebar_set");
    //    //$(this).find("i .nav_img").show();
    //    //$(this).find("i .nav_hoverimg").hide();
    //});

    //左侧导航点击切换按钮
    $(".Jsc_sidebar_nav li a").click(function () {
        $(".Jsc_sidebar_nav li a").parent().removeClass("sidebar_set");
        $(this).parent().addClass("sidebar_set");
    });

    //右侧导航hover效果
    var _hover = $(".Jsc_right_barnav li");

    $(_hover).hover(function (e) {
        $(this).find("i").stop(true, true).animate({ right: '0px' });
        $(this).siblings().find("i").stop(true, true).animate({ right: '-180px' });
    }, function (e) {
        $(_hover).find("i").stop(true, true).animate({ right: '-180px' });
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

    //新闻页单击查看详情
    //$(".Jsc_news_more").click(function () {
    //    $(".Jsc_pop_float").show();
    //    $(".Jsc_inf_float").show();
    //    //新闻资讯浮层自定义滚动条
    //    setTimeout(function () {
    //        $(".inf_box").mCustomScrollbar("destroy");
    //        $(".inf_box").mCustomScrollbar({
    //            autoDraggerLength: false,
    //            scrollButtons: {
    //                enable: false,
    //                scrollType: "continuous",
    //                scrollSpeed: "auto",
    //                scrollAmount: 40
    //            },
    //            theme: "light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
    //        });
    //    }, 10);
    //});

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

    //$(".Jsc_left_sidebar").hover(function (e) {
    //    $(this).children(".Jsc_left_sidebar_box").fadeIn(300);
    //    $(this).children(".Jsc_left_sidebar_click").hide(300);
    //}, function () {
    //    $(this).children(".Jsc_left_sidebar_box").hide(300);
    //    $(this).children(".Jsc_left_sidebar_click").fadeIn(300);
    //});
})