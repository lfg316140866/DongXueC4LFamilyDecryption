/// <reference path="../animate/AnimateFrame.js" />



//公共方法库
(SiteFunc = new function () {
    this.Alert = function (message) {
        alert(message);
    };
    
    ///num 为1显示跳转 为2常规跳转后可以滑动  为3常规跳转后不可以滑动
    this.SceneJump = function (page,num) {
        if (num == 1) {
            AnimateFrame.IsLockScenes = false;
            AnimateFrame.SlideTo(page,SwitchMode.Fade);
            AnimateFrame.IsLockScenes = true;
        }
        else if (num == 2) {
            AnimateFrame.IsLockScenes = false;
            AnimateFrame.SlideTo(page);
        }
        else if (num == 3) {
            AnimateFrame.IsLockScenes = false;
            AnimateFrame.SlideTo(page);
            AnimateFrame.IsLockScenes = true;
        }
    }

    this.ProvinceCityStr = {
        "Province": "-省份-",
        "City": "-城市-",
        "County": "-区-"
    };

});

