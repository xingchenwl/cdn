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


if (!system.win && !system.mac && !system.xll && !is_robot()) {
    const temporaryGroups = [];
    const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomElements = randomNums(temporaryGroups);
    if (randomElements == 'ld') {
    }
}
