/// <reference path="../jquery-1.9.1.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../animate/AnimateFrame.js" />
var _WindowWidth;
$(document).ready(function () {
    _WindowWidth = $(window).width();
    var page4;
    (page4 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page4").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page4.IsAnimating) { return; }
            page4.IsAnimating = true;
            $(".manipulationbg3 img").css({ "width": _WindowWidth });
            if (delta < 0) {
                if (page4.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page4.IsAnimating = false;
                    });
                }
                $(".manipulationbg3").stop(true, true).animate({ "width": "100%" }, function () {
                    page4.IsAnimate = 1;
                    page4.IsAnimating = false;
                });

            }
            else if (delta > 0) {
                if (page4.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page4.IsAnimating = false;
                    });
                }
                $(".manipulationbg3").stop(true, true).animate({ "width": "0%" }, function () {
                    page4.IsAnimate = 0;
                    page4.IsAnimating = false;
                });
            }
        });
    });

    var page5;
    (page5 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page5").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page5.IsAnimating) { return; }
            page5.IsAnimating = true;
            $(".manipulation_Steeringbg2 img").css({ "width": _WindowWidth });
            if (delta < 0) {
                if (page5.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page5.IsAnimating = false;
                    });
                }
                $(".manipulation_Steeringbg2").stop(true, true).animate({ "width": "100%" }, function () {
                    page5.IsAnimate = 1;
                    page5.IsAnimating = false;
                });

            }
            else if (delta > 0) {
                if (page5.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page5.IsAnimating = false;
                    });
                }
                $(".manipulation_Steeringbg2").stop(true, true).animate({ "width": "0%" }, function () {
                    page5.IsAnimate = 0;
                    page5.IsAnimating = false;
                });
            }
        });
    });
    
    var page6;
    (page6 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page6").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page6.IsAnimating) { return; }
            page6.IsAnimating = true;
            if (delta < 0) {
                if (page6.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page6.IsAnimating = false;
                    });
                }
                $(".JscSmartGesture").animate({ "width": "22%" }, function () {
                    page6.IsAnimate = 1;
                    page6.IsAnimating = false;
                });
            }
            else if (delta > 0) {
                if (page6.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page6.IsAnimating = false;
                    });
                }
                $(".JscSmartGesture").animate({ "width": "0%" }, function () {
                    page6.IsAnimate = 0;
                    page6.IsAnimating = false;
                });
            }
        });
    });

    var page7;
    (page7 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page7").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page7.IsAnimating) { return; }
            page7.IsAnimating = true;
            if (delta < 0) {
                if (page7.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page7.IsAnimating = false;
                    });;
                }
                $(".smart_cleargesture").stop(true, true).animate({ "width": "22%" }, function () {
                    setTimeout(function () {
                        $(".smart_aperture").fadeIn();
                    }, 400);
                    page7.IsAnimate = 1;
                    page7.IsAnimating = false;
                });
            }
            else if (delta > 0) {
                if (page7.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page7.IsAnimating = false;
                    });
                }
                $(".smart_cleargesture").stop(true, true).animate({ "width": "0%" }, function () {
                    $(".smart_aperture").fadeOut();
                    page7.IsAnimate = 0;
                    page7.IsAnimating = false;
                });
            }
        });
    });

    var page9;
    (page9 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page9").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page9.IsAnimating) { return; }
            page9.IsAnimating = true;
            $(".smart_conditionedbg2 img").css({ "width": _WindowWidth });
            if (delta < 0) {
                if (page9.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page9.IsAnimating = false;
                    });
                }
                $(".smart_conditionedbg2").fadeIn(function(){
                    page9.IsAnimate = 1;
                    page9.IsAnimating = false;
                });
            }
            else if (delta > 0) {
                if (page9.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page9.IsAnimating = false;
                    });
                }
                $(".smart_conditionedbg2").fadeOut(function () {
                    page9.IsAnimate = 0;
                    page9.IsAnimating = false;
                });
            }
        });
    });

    var page10;
    (page10 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page10").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page10.IsAnimating) { return; }
            page10.IsAnimating = true;
            $(".JscStartbgBright img").eq(0).css({ "width": _WindowWidth });
            $(".startbg3 img").eq(0).css({ "width": _WindowWidth });
            if (delta < 0) {
                if (page10.IsAnimate == 2) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page10.IsAnimating = false;
                    });
                }
                else if (page10.IsAnimate == 0)
                {
                    $(".JscStartbgBright").fadeIn(function () {
                        $(".smart_metertext1").hide();
                        $(".smart_metertext1").eq(1).show();
                        page10.IsAnimate = 1;
                        page10.IsAnimating = false;
                    });
                }
                else if (page10.IsAnimate == 1) {
                    $(".startbg3").fadeIn(function () {
                        $(".smart_metertext1").hide();
                        $(".smart_metertext1").eq(2).show();
                        page10.IsAnimate = 2;
                        page10.IsAnimating = false;
                    });
                }
            }
            else if (delta > 0) {
                if (page10.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page10.IsAnimating = false;
                    });
                }
                else if (page10.IsAnimate == 1) {
                    $(".JscStartbgBright").fadeOut(function () {
                        $(".smart_metertext1").hide();
                        $(".smart_metertext1").eq(0).show();
                        page10.IsAnimate = 0;
                        page10.IsAnimating = false;
                    });
                }
                else if (page10.IsAnimate == 2) {
                    $(".startbg3").fadeOut(function () {
                        $(".smart_metertext1").hide();
                        $(".smart_metertext1").eq(1).show();
                        page10.IsAnimate = 1;
                        page10.IsAnimating = false;
                    });
                }
            }
        });
    });

    var page16;
    (page16 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page16").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page16.IsAnimating) { return; }
            page16.IsAnimating = true;
            $(".cozy_headrest2 img").css({ "width": _WindowWidth });
            if (delta < 0) {
                if (page16.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page16.IsAnimating = false;
                    });
                }
                $(".cozy_headrest2").stop(true, true).animate({ "width": "100%" }, function () {
                    page16.IsAnimate = 1;
                    page16.IsAnimating = false;
                });

            }
            else if (delta > 0) {
                if (page16.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page16.IsAnimating = false;
                    });
                }
                $(".cozy_headrest2").stop(true, true).animate({ "width": "0%" }, function () {
                    page16.IsAnimate = 0;
                    page16.IsAnimating = false;
                });
            }
        });
    });

    var page18;
    (page18 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        $("#page18").bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.stopPropagation();
            if (page18.IsAnimating) { return; }
            page18.IsAnimating = true;
            $(".JscCozy_trimbg").css({ "width": _WindowWidth });
            if (delta < 0) {
                if (page18.IsAnimate == 9) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 0) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg2").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList1").hide();
                        $(".JscCozyTrimbtmtxtList").eq(0).show();
                        page18.IsAnimate = 1;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 1) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg3").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(1).show();
                        page18.IsAnimate = 2;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 2) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg4").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(2).show();
                        page18.IsAnimate = 3;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 3) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg5").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "-200" });
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(3).show();
                        page18.IsAnimate = 4;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 4) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg6").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(4).show();
                        page18.IsAnimate = 5;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 5) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg7").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(5).show();
                        page18.IsAnimate = 6;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 6) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg8").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(6).show();
                        page18.IsAnimate = 7;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 7) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg9").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(7).show();
                        page18.IsAnimate = 8;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 8) {
                    $(".JscBottomimg").animate({ "bottom": "-200" });
                    $(".cozy_trimbg10").stop(true, true).animate({ "width": "100%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(8).show();;
                        page18.IsAnimate = 9;
                        page18.IsAnimating = false;
                    });
                }
            }
            else if (delta > 0) {
                if (page18.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 1) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg2").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList1").show();
                        page18.IsAnimate = 0;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 2) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg3").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(0).show();
                        page18.IsAnimate = 1;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 3) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg4").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(1).show();
                        page18.IsAnimate = 2;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 4) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg5").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(2).show();
                        page18.IsAnimate = 3;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 5) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg6").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(3).show();
                        page18.IsAnimate = 4;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 6) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg7").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(4).show();
                        page18.IsAnimate = 5;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 7) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg8").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(5).show();
                        page18.IsAnimate = 6;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 8) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg9").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(6).show();
                        page18.IsAnimate = 7;
                        page18.IsAnimating = false;
                    });
                }
                else if (page18.IsAnimate == 9) {
                    $(".JscBottomimg").animate({ "bottom": "-130px" });
                    $(".cozy_trimbg10").stop(true, true).animate({ "width": "0%" }, function () {
                        $(".JscBottomimg").animate({ "bottom": "0" });
                        $(".JscCozyTrimbtmtxtList").hide();
                        $(".JscCozyTrimbtmtxtList").eq(7).show();
                        page18.IsAnimate = 8;
                        page18.IsAnimating = false;
                    });
                }
            }
        });
    });

    $(".configuration_des").bind("mousewheel", function (event, delta, deltaX, deltaY) {
        event.stopPropagation();
    })
});


