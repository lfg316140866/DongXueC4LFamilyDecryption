


//公共方法库
(SiteFunc = new function () {
    /// <summary>公共方法库</summary>
    this.Alert = function (message) {
        alert(message);
    };
    this.AnimeteFramePage = function (page) {
        AnimateFrame.IsLockScenes = false;
        AnimateFrame.SlideTo(page);
        AnimateFrame.IsLockScenes = true;
    }
    this.Share = function () {
        var _title = "或曾经，或现在，或将来，有关#C4家族#的传奇，历久弥新。崭新精彩即将绽放，未知惊喜静待探享，敬请关注东风雪铁龙C4家族！";
        var _sharePic = "http://" + Cmn.Func.GetMainDomain(location.href) + "/images/ShareImg.jpg";
        var _shareOnlyUrl = "http://" + Cmn.Func.GetMainDomain(location.href) + "/";
        var _SinaShare = 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent(_title) + '&url=' + _shareOnlyUrl + '&source=&appkey=&pic=' + _sharePic;
        $(".XLWeiBo").attr("href", _SinaShare);
        var _renrenShare = 'http://s.jiathis.com/?webid=renren&title=&summary=' + encodeURIComponent(_title) + '&url=' + _shareOnlyUrl + '&pic=' + _sharePic;
        $(".TowRen").attr("href", _renrenShare);
        var _tenxunShare = "http://share.v.t.qq.com/index.php?c=share&a=index&title=" + encodeURIComponent(_title) + "&url=" + _shareOnlyUrl + "&site=&pic=" + _sharePic;
        $(".TXWeiBo").attr("href", _tenxunShare);
        var _kaixinShare = 'http://www.kaixin001.com/rest/records.php?webid=kaixin&title=&content=' + encodeURIComponent(_title) + '&pic=' + _sharePic + '&starid=&aid=&style=11&t=10&url=' + _shareOnlyUrl;
        $(".KaiXin").attr("href", _kaixinShare);
        var _souhuShare = 'http://t.sohu.com/third/post.jsp?title=' + encodeURIComponent(_title) + '&pic=' + _sharePic + '&url=' + _shareOnlyUrl;
        $(".SHWeiBo").attr("href", _souhuShare);
    }
})