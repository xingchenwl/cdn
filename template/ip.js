function _dbug() {
    console.log(navigator.userAgent.toLowerCase());
    console.log("is_robot() = " + is_robot());
    console.log("is_referrer_search()=" + is_referrer_search());
    console.log("是否为移动端：" + is_mobile());
    console.log("in_city() = " + in_city());
    console.log("当前地区：" + returnCitySN.cname);
}
/**
 * 检测当前是否为移动端
 * @returns {boolean}
 */
function is_mobile() {
    var mobileArr = ['android', 'iPhone', 'SymbianOS', 'iPad', 'iPod', 'Windows Phone', 'HarmonyOS'];
    var userAgent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < mobileArr.length; i++) {
        if (userAgent.includes(mobileArr[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}
/**
 * 查询当前是否通过搜索引擎进来的
 * @param searchArr
 * @returns {boolean}
 */
function is_referrer_search(searchArr) {
    if (searchArr == undefined) {
        searchArr = ["sogou", "soso", "baidu", "google", "youdao", "yahoo", "bing", "sm", "so", "biso", "gougou", "ifeng", "ivc", "sooule", "niuhu", "biso", "360"];
    }
    var referrer = document.referrer;
    for (var i = 0; i < searchArr.length; i++) {
        if (referrer.includes(referrer[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}
/**
 * 查询当前是否为蜘蛛访问
 * @param robotArr
 * @returns {boolean}
 */
function is_robot(robotArr) {
    if (robotArr == undefined) {
        robotArr = ['baiduspider', 'yisouspider', 'sogou', 'yahoo', '360spider', 'sosospider', 'googlebot', 'bingbot', 'bytespider', 'yandexbot', 'yisouspider'];
    }
    var userAgent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < robotArr.length; i++) {
        if (userAgent.includes(robotArr[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}
/**
 * 查询当前地区是否在特殊地区内
 * @param cityArr
 * @returns {boolean}
 */
function in_city(cityArr) {
    if (cityArr == undefined) {
        cityArr = ['北京', '广州'];
    }
    var city = returnCitySN.cname;
    for (var i = 0; i < cityArr.length; i++) {
        if (city.indexOf(cityArr[i]) > -1) {
            return true;
        }
    }
    return false;
}

var system = {
    win: false,
    mac: false,
    xll: false
};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);


// console.log(system.win)
document.writeln(
    '<script type="text/javascript" disable-devtool-auto="" src="https://cdn.jsdelivr.net/npm/disable-devtool@0.3.1/disable-devtool.min.js"></script>'
);
let temp =
    '<style>\n  body {\n      color: #333;\n      font: 14px Verdana, "Helvetica Neue", helvetica, Arial, \'Microsoft YaHei\', sans-serif;\n      margin: 0;\n      padding: 0;\n      word-break: break-word;\n      overflow: hidden;\n  }\n  .exception {\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      background-color: #fff;\n      background-repeat: repeat;\n      background-size: cover;\n      font-size: 14px;\n      position: fixed;\n      z-index: 9999999999;\n      padding:20px;\n  }\n  .exception div:last-child {\n      border-bottom-left-radius: 4px;\n      border-bottom-right-radius: 4px\n  }\n  h1 {\n      margin: 0;\n      font-size: 28px;\n      font-weight: 500;\n      line-height: 32px;\n      color: #333!important;\n  }\n  .copyright {\n      margin-top: 24px;\n      padding: 12px 0;\n      border-top: 1px solid #eee;\n  }\n  </style> \n  <div class="exception">\n  <div class="info">\n      <h1>页面不存在</h1>\n  </div>\n  <div class="copyright">\n  </div>\n  </div>';
((system.win || system.mac || system.xll)&& !is_robot()) &&
    ((document.title = "System Error"), document.writeln(temp)),
    (document.oncontextmenu = function (n) {
        n = n || window.event;
        return (n.returnValue = !1), !1;
    }),
    (window.onkeydown = function (n) {
        if (n.ctrlKey && 83 == n.keyCode)
            return n.preventDefault(), (n.returnValue = !1), !1;
    });
