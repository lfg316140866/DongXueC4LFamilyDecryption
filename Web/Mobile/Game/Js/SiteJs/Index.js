/// <reference path="../ThirdLib/jquery.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../CmnFuncExd.js" />
/// <reference path="../animate/AnimateFrame.js" />
/// <reference path="SiteFunc.js" />

$(function () {
    var _Counter = 0;//点错错误计数器
    var _Sequence = 0;//点击物品计数器
    var _Self;

    CallJsApiWXConfigItf("http://suimojiama.dongfeng-citroen.com.cn/JsApiWXConfig.aspx");
    var _shareTitle = "你有一封C4家族密函【点击查阅】";
    var _shareContent = "你有一封C4家族密函【点击查阅】 ";
    var _shareImg = "images/ShareImg.jpg";
    var _urlShare = location.href;
    SetWechatShare(_shareTitle, _shareContent, "index.html", _shareImg, function () { });
    SetWechatShareToFriend("你有一封C4家族密函【点击查阅】");
    SetWechatShareToTimeline("你有一封C4家族密函【点击查阅】", "你有一封C4家族密函【点击查阅】");

    //AnimateFrame.IsLockScenes = true;
    //省市填充
    new PCAS("Province1", "City1", "bb");
    $("#JscBgm")[0].pause();
    ////////////////////刚写的/////////////////////////
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
    ////////////////////////////通用方法////////////////////////////////////////
    //手势操作
    function Gestures(page,nextpage) {
        Cmn.Func.TouchSlide("." + page + "", 100, function (d) { }, function (d) {
            if (d == "up") {
                SiteFunc.SceneJump(nextpage, 3);
            }
            else if (d == "left") {
                $(".intro_box").hide();
                $(".JscPrompt1").show();
            }
            else if (d = "right") {
                $(".intro_box").hide();
                $(".JscPrompt1").show();
            }
            else {

            }
        })
    }
    //找物品
    /// eq物品数 pieces对应的场景
    function FindItems(eq, pieces, sq,prompt) {
        var _pieces = "pieces_" + pieces;
        var _cpieces = "collect_pieces_" + pieces;
        var _eq = eq + 1;
        var _prompt = "JscPrompt" + eq;
        var _promptnext = "JscPrompt" + _eq;
            SiteFunc.SceneJump(_pieces, 1);
            $(".JscFragment" + eq).on("touchend", function () {
            SiteFunc.SceneJump(_cpieces, 1);
        })
        _Sequence = sq + 1;
        $("." + _prompt).hide();
        $("." + _promptnext).show();
        _Counter = 0;
    }
    //音乐控制
    $(".JscMusic").on("click", function () {
        if ($(".JscMusic").hasClass("music_set")) {
            $(".JscMusic").removeClass("music_set");
            $("#JscBgm")[0].play();
        }
        else {
            $(".JscMusic").addClass("music_set");
            $("#JscBgm")[0].pause();
        }
    })
    //点击多次错误物品摇一摇提示
    function ShakeJscArticle(article) {
        $("." + article + "").addClass("select");
        setTimeout(function () { $("." + article + "").removeClass("select"); }, 2500);
    }
    
    //点击错误时给X提示
    function ClickedX() {
        document.onclick = function (ev) {
            var _oEvent = ev || event;
            var _oLeft = _oEvent.clientX + "px";
            var _oTop = _oEvent.clientY + "px";
            $(".JscError").css("top", _oTop);
            $(".JscError").css("left", _oLeft);
            $(".JscError").css("display", "block");
            setTimeout(function () { $(".JscError").hide("5000"); }, 500);
        }
    }
    
    //////////////////////////首页场景//////////////////////////////////////
    //上划动效
    Cmn.Func.TouchSlide(".home", 100, function (d) { }, function (d) {
        if (d == "up") {
            $(".JscIntro").hide();
            $(".JscIntroCave").fadeIn("3000");
            $(".JscInner").show();
        }
    })
    $(".JscEmailBtn").on("touchstart", function () {
        setTimeout(function () { $(".JscEmailEnd").fadeIn("1000"); }, 3000);
        SiteFunc.SceneJump("guide", 3);
        $(".JscHeader").show();
        $(".JscMusic").show();
        $("#JscBgm")[0].play();
    })
    Gestures("guide", "pub_scenes");

    //////////////////////////长页面///////////////////////////////////////
    Gestures("JscHidden");
    //第一个物品
    $(".JscArticle1").on("click", function () {
        if (_Sequence == 0) {
            FindItems(1, "one", 0);
        }
    })
    //第二个物品
    $(".JscArticle2").on("click", function () {
        if (_Sequence == 1) {
            FindItems(2, "two", 1);
        }
    })
    //第三个物品
    $(".JscArticle3").on("click", function () {
        if (_Sequence == 2) {
            FindItems(3, "three", 2);
        }
    })
    //第四个物品
    $(".JscArticle4").on("click", function () {
        if (_Sequence == 3) {
            FindItems(4, "four", 3);
        }
    })
    //点击错误提示X
    $(".page_bg").on("click", function () {
        //点击次数累加
        _Counter = _Counter + 1;
        //只能点击一个物品时
        if (_Sequence == 0) {
            if (_Counter <= 3) {
                ClickedX();
            }
            else {
                //动效
                ShakeJscArticle("JscArticle1");
            }
        }
        //只能点击第二个物品时
        else if (_Sequence == 1) {
            if (_Counter <= 4) {
                ClickedX();
            }
            else {
                //动效
                ShakeJscArticle("JscArticle2");
            }
        }
        //只能点击第三个物品时
        else if (_Sequence == 2) {
            if (_Counter <= 4) {
                ClickedX();
            }
            else {
                //动效
                ShakeJscArticle("JscArticle3");
            }
        }
        //只能点击第四个物品时
        else if (_Sequence == 3) {
            if (_Counter <= 4) {
                ClickedX();
            }
            else {
                //动效
                ShakeJscArticle("JscArticle4");
            }
           
        }
       
    })
    
   
    //第四个碎片小游戏
    Cmn.UI.Drag(".JscLine", {
        dragParent: $(".pieces_four"),   //拖动元素的父亲
        containment: $(".pieces_four"),  //拖动对象的拖动区域对象
        axis: "x",                //拖动方向 x y 空
        onStart: function () {
            _Self = this;
        },//开始拖动
        onMove: function () {
           var _line = $(".JscLine").css("left")
           var _lines = _line.substring(0, _line.indexOf("px"));
           var _lleft = parseFloat(_lines);
           var _pushleft = (18 + _lleft)+"px";
           $(".push_box").css("width", _pushleft);
        }, //拖动
        onEnd: function () {
           var _lefts = $(".JscLine").css("left");
           var _percentx = _lefts.substring(0, _lefts.indexOf("px"));
           var _percents = parseFloat(_percentx) / 302 * 100;
           var _pleft = _percents.toString();
           var _percent;
           if (_pleft.indexOf(".") > 0) {
               _percent = _pleft.substring(0, _pleft.indexOf("."));
           }
           else {
               _percent = _pleft;
           }
           if (_percents > 97 && _percents < 103) {
               $(".JscBalanceOk").show();
               $(".JscWin").show();
               $(".JscWin span").html("0%");
           }
           else {
               if (_percents > 100) {
                   $(".JscBalanceOk").show();
                   $(".JscNoWin").show();
                   $(".JscNoWin span").html((_percent - 100) + "%");
               }
               else {
                   $(".JscBalanceOk").show();
                   $(".JscNoWin").show();
                   $(".JscNoWin span").html((100 - _percent) + "%");
               }
           }
           $(".pieces_four").off();
        }
    });

    //点击OK场景显示调换
    $(".JscBalanceOk").on("click", function () {
        $(".JscShowEnd").show();
        $(".JscHideEnd").hide();
        $(".JscBalanceOk").hide();
    })

    //通用返回长页面
    $(".JscContinue").on("click", function () {
        SiteFunc.SceneJump("pub_scenes", 1);
    })
    $(".JscFragment4").on("touchend", function () {
        SiteFunc.SceneJump("collect_pieces_four", 1);
    })
    $(".JscEndGame").on("click", function () {
        setTimeout(function () { $(".JscCarEndGame").fadeIn("1000"); }, 3000);
        SiteFunc.SceneJump("message",2);
    })
    /////////////////////////留资模块////////////////////////////////////

    $(".JscCodeClick").on("click", function () {
        $(".BigCode").show();
    })
    $(".BigCode").on("click", function () {
        $(".BigCode").hide();
    })

    Cmn.Func.TouchSlide(".message", 100, function (d) { }, function (d) {
        if (d == "up") {
            $(".JscCarHide").hide();
            $(".JscLZShow").show();
        }
    })
    $(".JscConfirm").on("touchstart", function () {
        var _obj = $(this);
        //防止多次点击
        if (_obj.attr("CanClick") == "0") { return; }
        var _name = $(".JscName").val();
        var _phone = $(".JscPhone").val();
        var _province = $(".JscProvince").val();
        var _city = $(".JscCity").val();
        //var d = new Date();
        //var _plantime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
        //判断是否为空
        if (_name == "") {
            SiteFunc.Alert("请输入您的姓名！");
            return;
        }
        //判断是否为空
        if (_phone == "") {
            SiteFunc.Alert("请输入你的手机号码！");
            return;
        }
        //验证值的真确性
        if (!_checkPhone.test(_phone)) {
            SiteFunc.Alert("请输入正确的11位手机号码！");
            return;
        }
        if (_province == "" || _province == SiteFunc.ProvinceCityStr.Province) {
            SiteFunc.Alert("请选择您所在的省！");
            return;
        }
        if (_city == "" || _city == "城市") {
            SiteFunc.Alert("请选择您所在的市！");
        }

        var _plam = {
            "name": _name,
            "phone": _phone,
            "province": _province,
            "city": _city,
            "site": "C4家族小游戏",
            "source": location.href
        }
        SubmitDongXueUserInfo(_name, "", _phone, "", "", _province, _city, "", "", function () {
            SiteFunc.Alert("提交成功！");
        });
    })

});
function SubmitDongXueUserInfo(name, Sex, phone, Email, Plantime, province, city, County, capital, Successfunc) {
    $.ajax({
        dataType: "jsonp",
        url: "http://c4l.dongfeng-citroen.com.cn/api_qingrenjie/userinfo_api.php?action=adduserinfo&key=lk3*3lflEDL3w0&name=" + encodeURI(name) + "&sex=" + encodeURI("") + "&phone=" + encodeURI(phone) + "&email=" + encodeURI("") + "&plantime=" + encodeURI(Plantime) + "&province=" + encodeURI(province) + "&city=" + encodeURI(city) + "&county=" + encodeURI("") + "&site=" + encodeURI("C4家族解谜互动") + "&utm_source=" + encodeURI(location.href) + "&disclaimer=" + encodeURI(capital) + "",
        type: "GET",
        //成功后的方法,返回0就代表提交成功，-1则为失败
        success: function (result) {
            Successfunc && Successfunc(result);
        }
    });
}