/// <reference path="../ThirdLib/jquery.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../CmnFuncExd.js" />
/// <reference path="../animate/AnimateFrame.js" />

//首页业务逻辑 此处名称可以和页面对应起来 也可以和场景ID对应
$(function () {

    (Index = new function () {
        /// <summary>首页业务逻辑</summary>
        //首页图片填充
        CmnAjax.FillData(".JscHomeKVList", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetHomeKV", "", function (dat) {
            if (dat.IsSuccess == 1) {
                $(".JscHomeKV").cycle("destroy").cycle({
                    fx: 'scrollHorz',
                    pager: $(".JscHomeCarousel"),
                    timeout: 2000,
                    prev: ".JscLeft",
                    next: ".JscRight",
                    activePagerClass: "carousel_set",
                    speed: 1000,
                    pause: 1
                });
            }
        });

        //有奖问答关闭
        $(".Jsc_joinno_btn,.Jsc_answer_close_btn").on("click", function () {
            $(".Jsc_pop_float").hide();
        });
        //有奖调查问卷
        $(".Jsc_join_btn").on("click", function () {
            $(".Jsc_answer_home>div").hide();
            $(".Jsc_answer_modules1").show();
        });
        //答题第一题
        $(".Jsc_next_btn1").on("click", function () {
            if ($("#first_A_set").prop("checked") == true) {
                $(".error_msg").hide();
                $(".Jsc_answer_float>div").hide();
                $(".Jsc_answer_close_btn").show();
                $(".answer_tip").show();
                $(".answer_car").show();
                $(".Jsc_answer_modules2").show();
            } else {
                $(".error_msg").show();
            }
        });
        //答题第二题
        $(".Jsc_next_btn2").on("click", function () {
            if ($("#second_A_set").prop("checked") == true) {
                $(".error_msg").hide();
                $(".Jsc_answer_float>div").hide();
                $(".Jsc_answer_close_btn").show();
                $(".answer_tip").show();
                $(".answer_car").show();
                $(".Jsc_answer_modules3").show();
            } else {
                $(".error_msg").show();
            }
        });
        //答题第三题
        $(".Jsc_next_btn3").on("click", function () {
            if ($("#three_B_set").prop("checked") == true) {
                $(".error_msg").hide();
                $(".Jsc_answer_float>div").hide();
                $(".Jsc_answer_close_btn").show();
                $(".answer_tip").show();
                $(".answer_car").show();
                $(".Jsc_answer_inf").show();
            } else {
                $(".error_msg").show();
            }
        });

        /// <summary>精彩下载业务逻辑</summary>
        var _NewDate;
        //点击焦点新闻
        $(".JscFocusNews").on("click", function () {
            var _news_type = $(this).attr("newstypes");
            if (_news_type == "1") {
                $("#page21").show();
                AnimateFrame.SlideTo("page21");
                NewsList()
            } else if (_news_type == "2") {
                $("#page31").show();
                AnimateFrame.SlideTo("page31");
                NewsList2()
            }
        });

        var _NewNavData;
        var _NewsDesListData = [];
        function NewsList() {
            //新闻填充
            var _newsListDataPaging = new CmnAjax.DataPaging([".JscNewNav"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetNews", { "news_type": "1" },".Jsc_page_nav", 8, function (dat) {
            Cmn.FillData(".JscNewsDesList", _NewsDesListData, false);
            Cmn.FillData(".JscNewsCon", _NewNavData[0], false);
            //点击当前显示新闻详情
            $(".Jsc_news_more,.JscNewNav,.JscNewsDesList").off("click").click(function () {
                $(".Jsc_pop_float>div").hide();
                $(".Jsc_pop_float").show();
                $(".Jsc_inf_float").show();
                var _title = $(this).attr("news_title");
                var _content = $(this).children(".JscCon").html();
                //var _content = $(this).find("div").html();
                $("#JscNewTitle").html(_title);
                $("#JscContent").html(_content);
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
                }, 10);
            });
            if (dat.IsSuccess == 1) {
                $(".JscNewsNavBox").cycle("destroy").cycle({
                    fx: 'scrollHorz',
                    pager: $(".JscCarouselMsg"),
                    timeout: 2000,
                    activePagerClass: "carousel_update",
                    speed: 1000,
                    pause: 1
                });
            }
        }, "", "", "", function (data) {
            _NewNavData = data;
            _NewsDesListData = [];
            for (var _i = 0; _i < (data.length - 1) ; _i++) {
                _NewsDesListData[_i] = data[_i + 1];
            }
        });
            _newsListDataPaging.Paging.ActiveClass = "append";
        }

        //媒体报道
        var _NewNavData2;
        var _NewsDesListData2 = [];
        function NewsList2() {
            //新闻填充
            var _newsListDataPaging2 = new CmnAjax.DataPaging([".JscNewNav2"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetNews", { "news_type": "2" }, ".Jsc_page_nav", 8, function (dat) {
                Cmn.FillData(".JscNewsDesList2", _NewsDesListData2, false);
                Cmn.FillData(".JscNewsCon2", _NewNavData2[0], false);
                //点击当前显示新闻详情
                $(".Jsc_news_more2,.JscNewNav2,.JscNewsDesList2").off("click").click(function () {
                    $(".Jsc_pop_float>div").hide();
                    $(".Jsc_pop_float").show();
                    $(".Jsc_inf_float").show();
                    var _title = $(this).attr("news_title");
                    var _content = $(this).children(".JscCon2").html();
                    //var _content = $(this).find("div").html();
                    $("#JscNewTitle").html(_title);
                    $("#JscContent").html(_content);
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
                    }, 10);
                });
                if (dat.IsSuccess == 1) {
                    $(".JscNewsNavBox2").cycle("destroy").cycle({
                        fx: 'scrollHorz',
                        pager: $(".JscCarouselMsg2"),
                        timeout: 2000,
                        activePagerClass: "carousel_update",
                        speed: 1000,
                        pause: 1
                    });
                }
            }, "", "", "", function (data) {
                _NewNavData2 = data;
                _NewsDesListData2 = [];
                for (var _i = 0; _i < (data.length - 1) ; _i++) {
                    _NewsDesListData2[_i] = data[_i + 1];
                }
            });
            _newsListDataPaging2.Paging.ActiveClass = "append";
        }

        //点击轮毂小图
        $(".JscMinTires").on("click", function () {
            $(".JscMaxTires").show();
        });
        $(".JscTireClose").on("click", function () {
            $(".JscMaxTires").hide();
        });
    });
});