/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../jquery-1.9.1.min.js" />

var _Control = 0;
$(function () {
    CallJsApiWXConfigItf("http://suimojiama.dongfeng-citroen.com.cn/JsApiWXConfig.aspx");
    var _shareTitle = "有一种传奇叫C4家族";
    var _shareContent = "有一种传奇叫C4家族 ";
    var _shareImg = "images/ShareImg.jpg";
    var _urlShare = location.href;
    SetWechatShare(_shareTitle, _shareContent, "index.html", _shareImg, function () { });
    SetWechatShareToFriend("有一种传奇叫C4家族 ");
    SetWechatShareToTimeline("有一种传奇叫C4家族", "有一种传奇叫C4家族");


    $(".JscMusicBtn").on("touchstart", function () {
        if (_Control == 0) {
            $("#JscBgm")[0].pause();
            $(".JscLine").show();
            _Control = 1;
        }
        else {
            $("#JscBgm")[0].play();
            $(".JscLine").hide();
            _Control = 0;
        }
    })

})