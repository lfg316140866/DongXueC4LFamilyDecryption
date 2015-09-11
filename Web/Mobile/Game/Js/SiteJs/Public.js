/// <reference path="../animate/AnimateFrame.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../jquery-1.9.1.min.js" />
/// <summary>PC版</summary>
/// <reference path="../CmnTools/VideoPlayer/VideoProcess.js" />
$(function () {
    var Public;
    (Public = new function () {
        var _pageUrl=Cmn.Func.GetParamFromUrl("page");
        if (_pageUrl == "product") {
            AnimateFrame.SlideTo("power_family");
        }

        $(".JscReturn").on("click", function () {
            AnimateFrame.SlideTo("page23");
        });
        /// <summary>左侧导航</summary>
        //首页
        $(".Jsc_sidebar_nav").find("li").eq(0).on("click", function () {
            AnimateFrame.SlideTo("home");
        });
        //评鉴C4L
        $(".Jsc_sidebar_nav").find("li").eq(1).on("click", function () {
            AnimateFrame.SlideTo("power_family");
        });
        //配置表
        $(".Jsc_sidebar_nav").find("li").eq(2).on("click", function () {
            AnimateFrame.SlideTo("page20");
        });
        //新闻发布
        $(".Jsc_sidebar_nav").find("li").eq(3).on("click", function () {
            AnimateFrame.SlideTo("page23");
        });
        //精彩下载
        $(".Jsc_sidebar_nav").find("li").eq(4).on("click", function () {
            AnimateFrame.SlideTo("page22");
        });

        //首页默认隐藏右侧导航
        if (AnimateFrame.CurScenes.ScenesNo == 0) {
            $(".JscNavigation").hide();
        }

        //点击向下箭头跳转下一页
        $(".Jsc_arrow_btn a").on("click", function () {
            var _nextNo = AnimateFrame.GetNextScenesNo();
            AnimateFrame.SlideTo(_nextNo);
        });

        //var _IsFirstToRevolve = false;
        /// <summary>360赏车方法</summary>
        //360°旋转如果在旋转场景中默认给到红色车型
        $(".JscSidebarBtn3").on("click", function () {
            $(".JscLoad").show();
            //if (!_IsFirstToRevolve) {
            var _frames = SpriteSpin.sourceArray('/images/pop/rotate/car_color/black/Rotation_black_{frame}.png', {
                frame: [1, 25],
                digits: 1
            });
            //调用到绑定滚动
            RotateImg(".rotate_bar", _frames);
            //_IsFirstToRevolve = true;
            //}
        });
        //滑动旋转车子
        $(".revolve_nav>li").on("click", function () {
            //当前圈圈选中状态
            $(".revolve_nav>li a").removeClass("color_set");
            $(this).children("a").addClass("color_set");
            //拿到当前车子颜色的属性
            var _carColor = $(this).attr("carcolor");
            //将所有颜色的车子先隐藏
            //$(".color_car").hide();
            //显示当前选中的车子
            //$(".color_car[carcolor=" + _carColor + "]").show();
            ////选择到每个旋转图片
            //var _obj = $(".color_car[carcolor=" + _carColor + "]").children(".car_box").children("img");
            //通过滑动显示6张图片
            var _frames = SpriteSpin.sourceArray('/images/pop/rotate/car_color/' + _carColor + '/Rotation_' + _carColor + '_{frame}.png', {
                frame: [1, 25],
                digits: 1
            });
            //调用到绑定滚动
            RotateImg(".rotate_bar", _frames);
            $(".JscLoad").show();
        });

        function RotateImg(imgSelector, imgArryList) {
            //绑定滚动
            $(imgSelector).spritespin({
                source: imgArryList,
                width: 505,
                height: 505,
                frames: imgArryList.length,
                behavior: "drag", // "hold"
                module: "360",
                sense: -1,
                animate: false,
                loop: true,
                frameWrap: true,
                frameStep: 1,
                frameTime: 10,
                loopFrame: 10,
                renderer: 'background',
                onLoad: function () {
                   $(".JscLoad").hide(); 
                }
            });
            
        };
    });

    /// <summary>精彩下载方法</summary>
    function DownloadList() { 
        //精彩图片下载
        var _picDataPaging = new CmnAjax.DataPaging([".JscPaperMenu1", ".JscPaperMenu2", ".JscPaperMenu3", ".JscPaperMenu4", ".JscPaperMenu5"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetPic", "", ".JscPaperPageBtn", 5, function (dat) {
            _NewDate = dat.data;
            Cmn.FillData(".JscWallpaperLi", dat.data, false);
            if (dat.IsSuccess == 1) {
                $(".Jsc_paper_menu i").off("click").on("click", function () {
                    var _index = $(this).index(".Jsc_paper_menu i");
                    $(".Jsc_pop_float>div").hide();
                    $(".Jsc_pop_float").show();
                    $(".Jsc_wallpaper_float").show();
                    $(".JscWallpaper").cycle("destroy").cycle({
                        fx: 'scrollHorz',
                        timeout: 0,
                        prev: $(".JscWallpaperLeftBtn"),
                        next: $(".JscWallpaperRightBtn"),
                        speed: 1000,
                        pause: 1,
                        startingSlide: _index
                    });
                });
            }
        });

        /// <summary>精彩视频业务逻辑</summary>
        //视频数据填充
        var _VideoIndex = 0;
        var _VideoPath = "";
        function VoideList() {
            //精彩视频下载
            var _videoDataPaging = new CmnAjax.DataPaging([".JscVideoMenu1", ".JscVideoMenu2", ".JscVideoMenu3"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetVeido", "", ".JscVideoPage", 3, function (dat) {
                if (dat.IsSuccess == "1") {
                    $(".JscVideoListPic i").off("click").click(function () {
                        _VideoIndex = $(this).index();
                        $(".Jsc_pop_float>div").hide();
                        $(".Jsc_pop_float").show();
                        $(".Jsc_Video_float").show();
                        _VideoPath = $(this).attr("videourl");
                        _VideoPath = Cmn.Func.GetAbsoluteUrl(_VideoPath);
                        FillVideo(_VideoPath);
                    });
                };
            });
        };
        VoideList();
        //播放视频
        FillVideo = function (videoPath) {
            var _Video = Cmn.Video.GetVideoPlayerHtml(videoPath, 697, 447, "", true);
            $(".VideoPopInnerTopPic").html(_Video);
        }
    }

    //跳转场景
    AnimateFrame.OnScenesAfterShow = function () {
        var _scenesID = AnimateFrame.CurScenes.ScenesNo;
        $(".JscMonitorOne").animate({ "left": "-100%" });
        if (AnimateFrame.CurScenes.ID == "page27") {
            $(".JscMonitorOne").animate({ "left": "0" });
        }
        //$(".JscSmartGesture").animate({ "bottom": "-500px" });
        //if (AnimateFrame.CurScenes.ID == "page6") {
        //    $(".JscSmartGesture").animate({ "bottom": "0" });
        //}
        //if (AnimateFrame.CurScenes.ID == "page30") {
        //    setTimeout(function () {
        //        $(".JscDayLight1").show();
        //        $(".JscDayLight2").show();
        //        setTimeout(function () {
        //            $(".JscDayLight1").hide();
        //            $(".JscDayLight2").hide();
        //            setTimeout(function () {
        //                $(".JscDayLight1").show();
        //                $(".JscDayLight2").show();
        //            }, 200);
        //        }, 200);
        //    },300)
        //}
        if (AnimateFrame.CurScenes.ID == "home") {
            $(".Jsc_sidebar_nav li").removeClass("sidebar_set");
            $(".Jsc_sidebar_nav li").eq(0).addClass("sidebar_set");
        }
        else if (AnimateFrame.CurScenes.ID == "page20") {
            $(".Jsc_sidebar_nav li").removeClass("sidebar_set");
            $(".Jsc_sidebar_nav li").eq(2).addClass("sidebar_set");
        }
        else if (AnimateFrame.CurScenes.ID == "page23" || AnimateFrame.CurScenes.ID == "page21" || AnimateFrame.CurScenes.ID == "page31") {
            $(".Jsc_sidebar_nav li").removeClass("sidebar_set");
            $(".Jsc_sidebar_nav li").eq(3).addClass("sidebar_set");
        } else if (AnimateFrame.CurScenes.ID == "page22") {
            $(".Jsc_sidebar_nav li").removeClass("sidebar_set");
            $(".Jsc_sidebar_nav li").eq(4).addClass("sidebar_set");
            DownloadList();
        } else {
            $(".Jsc_sidebar_nav li").removeClass("sidebar_set");
            $(".Jsc_sidebar_nav li").eq(1).addClass("sidebar_set");
        }

        if (_scenesID >= 9) {
            $(".JscDynamicMenu").addClass("update");
            $(".technology_box").removeClass("update");
        } else {
            $(".JscDynamicMenu").removeClass("update");
            $(".technology_box").addClass("update");
        }
        if (_scenesID == 0 || AnimateFrame.CurScenes.ID == "page20" || AnimateFrame.CurScenes.ID == "page22" || AnimateFrame.CurScenes.ID == "page23" || AnimateFrame.CurScenes.ID == "page21" || AnimateFrame.CurScenes.ID == "page31") {
            $(".JscNavigation").hide();
        }
        else {
            $(".JscNavigation").show();
            $(".JscMenuItemTitle").nextAll("dl").hide();
            if (_scenesID >= 2 && _scenesID < 5) {
                $(".JscDynamicTitle1").nextAll("dl").show();
            }
                //else if (_scenesID > 9 && _scenesID < 10) {
                //    $(".JscDynamicTitle2").nextAll("dl").show();
                //}
            else if (_scenesID >= 7 && _scenesID < 9) {
                $(".JscDynamicTitle3").nextAll("dl").show();
            }
            else if (_scenesID >= 10 && _scenesID < 17) {
                $(".JscDynamicTitle5").nextAll("dl").show();
            }
            else if (_scenesID >= 18 && _scenesID < 24) {
                $(".JscDynamicTitle6").nextAll("dl").show();
            }
            else if (_scenesID >= 25 && _scenesID < 32) {
                $(".JscDynamicTitle7").nextAll("dl").show();
            }
        }
    }

    /// <summary>右侧导航</summary>
    //点击显示预约试驾
    $(".JscSidebarBtn1").on("click", function () {
        $(".Jsc_pop_float>div").hide();
        $(".Jsc_pop_float").show();
        $(".Jsc_drive_float").show();
    });
    //点击显示预定购车
    $(".JscSidebarBtn2").on("click", function () {
        $(".Jsc_pop_float>div").hide();
        $(".Jsc_pop_float").show();
        $(".Jsc_shopping_float").show();
    });
    //点击显示预定购车
    $(".JscSidebarBtn3").on("click", function () {
        $(".Jsc_pop_float>div").hide();
        $(".Jsc_pop_float").show();
        $(".Jsc_rotate_float").show();
    });

    /// <summary>留资</summary>
    //免责声明
    $(".Jsc_btn").on("click", function () {
        $(".Jsc_attesting_float").show();
    });
    $(".Jsc_attesting_close_btn").on("click", function () {
        $(".Jsc_attesting_float").hide();
    });
    //绑定省市区
    new PCAS("Province1", "City1", "County1");
    new PCAS("Province2", "City2", "County2");
    new PCAS("Province3", "City3");
    //留资性别选择
    $(".JscSex").click(function () {
        $(this).parents(".JscSelectSexBox").find(".JscSex").removeClass("sex_select");
        $(this).addClass("sex_select");
    });
    //手机号码长度超过只截取前面11位
    //$(".Js_lyf").on("keyup keydown change", function () {
    //    if ($(this).val().length > 10) {
    //        var _nowVal = $(this).val().substring(0, 11);
    //        $(this).val(_nowVal);
    //    }
    //});
    //即刻预约试驾
    var _Submit = false;
    $(".Js_SubmitBtn").on("click", function () {
        if (_Submit) { return; }
        var _obj = $(this).prev(".Js_FuChen");
        var _siteAddress = _obj.attr("siteaddress");
        var _name = _obj.find(".Js_UserName").val();
        var _sex = _obj.find(".JscSelectSexBox").find(".JscSex.sex_select").attr("values");
        var _phone = _obj.find(".Js_Phone").val();
        var _car_time = _obj.find(".JscBuyCarTime").val();
        var _province = _obj.find(".Js_IsProvince").val();
        var _city = _obj.find(".Js_IsCity").val();
        var _county = _obj.find(".Js_IsCounty").val();
        var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
        var _checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (_obj.find(".JscCheck").prop("checked")) {
            var _disclaimer = "是";
        }
        else {
            var _disclaimer = "否";
        }

        if (_name == "") {
            SiteFunc.Alert("请输入您的姓名！");
            return;
        }
        //一般性别会默认选择一个，但是还是判断一下
        if (_sex == "" || _sex == undefined) {
            SiteFunc.Alert("请选择您的性别！");
            return;
        }
        if (_phone == "") {
            SiteFunc.Alert("请输入您的手机号！");
            return;
        }
        if (!_checkPhone.test(_phone)) {
            SiteFunc.Alert("请输入正确的11位手机号！");
            return;
        }
        if (_car_time == "" || _car_time == undefined) {
            SiteFunc.Alert("请选择您的计划购车时间");
            return;
        }
        if (_province == "" || _province == SiteFunc.ProvinceCityStr.Province) {
            SiteFunc.Alert("请选择您所在的省！");
            return;
        }
        if (_city == "" || _city == "城市") {
            SiteFunc.Alert("请选择您所在的市！");
            return;
        }
        if (_county == "" || _county == "区/县") {
            SiteFunc.Alert("请选择您所在的地区！");
            return;
        }
        //留资
        var _param = {
            "name": _name,
            "sex": _sex,
            "phone": _phone,
            "car_time": _car_time,
            "province": _province,
            "city": _city,
            "county": _county,
            "drive_site": _siteAddress,
            "site": "C4L新官网-PC",
            "source": location.href,
            "disclaimer": _disclaimer
        }
        _Submit = true;
        CmnAjax.PostData("/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=AddTestDrive", _param, function (data) {
            if (data.IsSuccess == "1") {
                Cmn.alert("提交成功！");
                $(".Jsc_answer_float").hide();
                $(".Jsc_pop_float").hide();
                _Submit = false;
            }
        });
    });
});
