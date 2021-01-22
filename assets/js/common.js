$(function () {
    $(".nav ul li").hover(function () {
        $(this).children("div").show()
        $(this).siblings().children("div").hide()
    },function () {
        $(this).children("div").hide()
    })
    $(".nav_search img").click(function () {
        $(this).next().toggle()
    })
    $(".more").click(function () {
        $(this).siblings(".nav").toggle()
        // console.log('weqqeq')
    })
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!bIsIpad && !bIsIphoneOs && !bIsMidp && !bIsUc7 && !bIsUc && !bIsAndroid && !bIsCE && !bIsWM) {
            //pc
        } else {
            // 移动
            $(".nav ul li").click(function () {
                $(this).children("a").children().show()
                $(this).siblings().children("a").children().hide()
                // $(this).children(".child").show()
                // $(this).siblings().children(".child").hide()
                console.log('22')
                return false
            })
            $(".nav ul li").hover(function () {
                $(this).children("div").show()
                $(this).siblings().children("div").hide()
            },function () {
                $(this).children("div").show()
                $(this).siblings().children("div").hide()
            })
            // $(".nav ul li").click(function () {
            //     $(this).children("div").show()
            //     $(this).siblings().children("div").hide()
            // })
        }
    }
    browserRedirect()
})