/// <reference path="../jquery-1.9.1.min.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../CmnFuncExd.js" />
/// <reference path="SiteFunc.js" />
/// <reference path="../CmnTools/VideoPlayer/VideoProcess.js" />


var _Height = 0;
var _Whether = 0;
var _Wada = "";
$(function () {
    $(window).scrollTop(0);
    //显示视频浮层
    $(".JscVideoBtn").on("click", function () {
        $(".JscVideoFloat").show();
        var _videoHtml = Cmn.Video.GetVideoFlashPlayer("http://" + Cmn.Func.GetMainDomain(location.href) + "/Video/papa.mp4", 700, 400, "", true);
        $(".JscVideoStart").html(_videoHtml);
    })
    //点击浮层关闭浮层
    $(".JscClose").on("click", function () {
        $(".JscVideoFloat").hide();
        $(".JscVideoStart").html("");
    })
    function Variety(JscBox) {
        var _jscBox = JscBox;
        _Wada = setInterval(function () {
            $("." + _jscBox + " img").animate({ "zoom": "1.2" },1000, function () { 
                $("." + _jscBox + " img").animate({ "zoom": "1" }, 1000);
            });
        }, 2000);
    }
    //分享
    SiteFunc.Share();
    //滚动条抓取高度
    $(window).scroll(function () {
        _Height = ($(this).scrollTop());
        //判断高度执行方法
        if (_Whether != 0) {
        }
        else {
            if (_Height > 300 && _Height < 800) {
                $(".JscLine1").animate({ "height": "147px" }, 800);
                $(".JscBoxs").show();
                Variety("JscBox1");
                $(".JscBoxs").animate({ "top": "99px", "left": "187px" }, 800, function () {
                    $(".JscBoxs").hide();
                    $(".JscBox1").show();
                    $(".JscCar1").show();
                    $(".JscText1").show();
                    $(".JscCar1").animate({ "right": "0px" }, 1000);
                    $(".JscText1").animate({ "left": "50px" }, 1000);
                });
                _Whether = 1;
            }
            else {

            }
        }
        if (_Whether != 1) {
        }
        else {
            if (_Height > 900 && _Height < 1500) {
                clearInterval(_Wada);
                $(".JscLine2").animate({ "height": "272px" }, 1500);
                $(".JscBox2").show();
                $(".JscBox2s").show();
                Variety("JscBoxMove");
                $(".JscBox2s").animate({ "top": "825px", "left": "1035px" }, 1500, function () {
                    $(".JscBox2s").hide();
                    $(".JscBoxMove").show();
                    $(".JscCar2").show();
                    $(".JscText2").show();
                    $(".JscCar2").animate({ "right": "304px" }, 1000);
                    $(".JscText2").animate({ "right": "65px" }, 1000);
                });
                _Whether = 2;
            }
        }

        if (_Whether != 2) {
        }
        else {
            if (_Height > 1500 && _Height < 2200) {
                clearInterval(_Wada);
                $(".JscLine3").animate({ "height": "308px" }, 1800);
                $(".JscBox3").show();
                $(".JscBox3s").show();
                Variety("JscBox4");
                $(".JscBox3s").animate({ "top": "791px", "right": "1045px" }, 1500, function () {
                    $(".JscBox3s").hide();
                    $(".JscC4aircross").fadeIn(1500);
                    $(".JscBox4").show();
                    $(".JscCar4").show();
                    $(".JscText3").show();
                    $(".JscCar4").animate({ "right": "0px" }, 1000);
                    $(".JscText3").animate({ "left": "64px" }, 1000);
                });
                _Whether = 3;
            }
        }

        if (_Whether != 3) {
        }
        else {
            if (_Height > 2300 && _Height < 2900) {
                clearInterval(_Wada);
                $(".JscLine4").animate({ "height": "282px" }, 1500);
                $(".JscBox5").show();
                $(".JscBox5s").show();
                Variety("JscBox6");
                $(".JscBox5s").animate({ "top": "846px", "left": "1038px" }, 1500, function () {
                    $(".JscBox5s").hide();
                    $(".JscC4l").fadeIn(1500);
                    $(".JscBox6").show();
                    $(".JscCar3").show();
                    $(".JscText4").show();
                    $(".JscCar3").animate({ "left": "0px" }, 1000);
                    $(".JscText4").animate({ "right": "46px" }, 1000);
                });
                _Whether = 4;
            }
        }

        if (_Whether != 4) {
        }
        else {
            if (_Height > 2900 && _Height < 3700) {
                clearInterval(_Wada);
                $(".JscLine5").animate({ "height": "244px" }, 1500);
                $(".JscBox7").show();
                $(".JscBox7s").show();
                Variety("JscBox8");
                $(".JscBox7s").animate({ "top": "823px", "left": "221px" }, 1500, function () {
                    $(".JscBox7s").hide();
                    $(".JscC4picasso").fadeIn(1500);
                    $(".JscBox8").show();
                    $(".JscCar5").show();
                    $(".JscText5").show();
                    $(".JscCar5").animate({ "right": "0px" }, 1000);
                    $(".JscText5").animate({ "left": "64px" }, 1000);
                });
                _Whether = 5;
            }
        }

        if (_Whether != 5) {
        }
        else {
            if (_Height > 3700 && _Height < 4300) {
                clearInterval(_Wada);
                $(".JscLine6").animate({ "height": "260px" }, 1500);
                $(".JscBox9").show();
                $(".JscBox9s").show();
                Variety("JscBox10");
                $(".JscBox9s").animate({ "top": "844px", "left": "1058px" }, 1500, function () {
                    $(".JscBox9s").hide();
                    $(".JscBox10").show();
                    $(".JscCar6").show();
                    $(".JscText6").show();
                    $(".JscCar6").animate({ "left": "0px" }, 1000);
                    $(".JscText6").animate({ "right": "55px" }, 1000);
                });
                _Whether = 6;
            }
        }

        if (_Whether != 6) {
        }
        else {
            if (_Height > 4300) {
                clearInterval(_Wada);
                $(".JscLine7").animate({ "height": "97px" }, 800);
                $(".JscBox11").show();
                $(".JscBox11s").show();
                Variety("JscBox12");
                $(".JscBox11s").animate({ "top": "665px", "right": "618px" }, 800, function () {
                    $(".JscBox11s").hide();
                    $(".JscBox12").show();
                    //$(".JscCar6").show();
                    $(".JscText7").show();
                    //$(".JscCar6").animate({ "left": "0px" });
                    $(".JscText7").animate({ "top": "90px" },1000);
                });
                _Whether = 6;
            }
        }

    })
   

})