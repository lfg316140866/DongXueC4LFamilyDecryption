/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="Cmn.js" />
/// <reference path="CmnAjax.js" />
/// <reference path="CmnFuncExd.js" />
/// <reference path="animate/AnimateFrame.js" />
/// <reference path="animate/Scenes.js" />
/// <reference path="animate/ScenesSwitch.js" />
$(document).ready(function () {
    Cmn.Func.ImageLazyLoading("body", function (pro) {
        $(".loadinner").css({ "width": pro + "%" });
        $("#counter").html(pro + "%");
    }, function () {
        $(".wrapper").delay(500).fadeOut(800);
        AnimateFrame.Init(500, SwitchMode.Shifting, Direction.Up, Direction.Down);
    });
    //阻止长页面冒泡事件
    $(".page_scenes").on("touchstart", function (e) {
        e.stopPropagation();
    });
    $(".page_scenes").on("touchmove", function (e) {
        e.stopPropagation();
    });

    //首页导航隐藏
    AnimateFrame.OnScenesAfterShow = function () {
        if (AnimateFrame.CurScenes.ID == "home") {
            $(".header_box").hide();
            $(".header_box").fadeOut();
        } else {
            $(".header_box").fadeIn();
        }
    }

    //点击进场提示
    $(".intro_box").click(function(){
        $(this).fadeOut();
    });
});
