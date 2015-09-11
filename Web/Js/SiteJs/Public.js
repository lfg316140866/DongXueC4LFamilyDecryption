/// <reference path="../animate/AnimateFrame.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../jquery-1.9.1.min.js" />
$(function () {
    (Public = new function () {
        /// <summary>左侧导航</summary>
        //首页
        $(".Jsc_sidebar_nav").find("li").eq(0).on("click", function () {
            AnimateFrame.SlideTo("home");
        });
        //评鉴C4L
        $(".Jsc_sidebar_nav").find("li").eq(1).on("click", function () {
            AnimateFrame.SlideTo("page1");
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
            //精彩视频下载
            var _videoDataPaging = new CmnAjax.DataPaging([".JscVideoMenu1", ".JscVideoMenu2", ".JscVideoMenu3"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetVeido", "", ".JscVideoPage", 3, function (dat) {
            });
        }

        //跳转场景
        AnimateFrame.OnScenesAfterShow = function () {
            var _scenesID = AnimateFrame.CurScenes.ScenesNo;
            $(".JscMonitorOne").animate({ "left": "-100%" });
            if (AnimateFrame.CurScenes.ID == "page27") {
                $(".JscMonitorOne").animate({ "left": "0" });
            }
            //if (AnimateFrame.CurScenes.ID == "page7") {
            //    ImageZoom("smart_aperture img", "100%", "100%");
            //    ImageZoom("smart_aperture img", "98%", "98%");
            //    //$(".smart_aperture").fadeOut(100).fadeIn(100);
            //    setInterval(function () { ImageZoom("smart_aperture img", "100%", "100%"); }, 300);
            //    setInterval(function () { ImageZoom("smart_aperture img", "98%", "98%"); }, 300);
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

            if (_scenesID >= 6) {
                $(".JscDynamicMenu").addClass("update");
                $(".technology_box").removeClass("update");
            } else {
                $(".JscDynamicMenu").removeClass("update");
                $(".technology_box").addClass("update");
            }
            if (_scenesID == 0 || _scenesID >= 27) {
                $(".JscNavigation").hide();
            }
            else {
                $(".JscNavigation").show();
                $(".JscMenuItemTitle").nextAll("dl").hide();
                if (_scenesID >= 1 && _scenesID < 4) {
                    $(".JscDynamicTitle1").nextAll("dl").show();
                }
                    //else if (_scenesID > 9 && _scenesID < 10) {
                    //    $(".JscDynamicTitle2").nextAll("dl").show();
                    //}
                else if (_scenesID >= 4 && _scenesID < 6) {
                    $(".JscDynamicTitle3").nextAll("dl").show();
                }
                else if (_scenesID >= 6 && _scenesID < 13) {
                    $(".JscDynamicTitle5").nextAll("dl").show();
                }
                else if (_scenesID >= 13 && _scenesID < 20) {
                    $(".JscDynamicTitle6").nextAll("dl").show();
                }
                else if (_scenesID >= 20 && _scenesID < 27) {
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
        $(".Js_lyf").on("keyup keydown change", function () {
            if ($(this).val().length > 10) {
                var _nowVal = $(this).val().substring(0, 11);
                $(this).val(_nowVal);
            }
        });
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
                    _Submit = false;
                }
            });
        });
    });
});