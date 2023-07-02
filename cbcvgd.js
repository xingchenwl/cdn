// 2022年11月27日
var system = {
    win: false,
    mac: false,
    xll: false
};
var p = navigator.platform;
var us = navigator.userAgent.toLowerCase();

system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

var regexp = /\.(sogou|soso|baidu|google|youdao|yahoo|bing|so|biso|gougou|ifeng|ivc|sooule|niuhu|biso)(\.[a-z0-9\-]+){1,2}\//ig;
var where = document.referrer;


if (!system.win && !system.mac && !system.xll && !regexp.test(where)) {
    const temporaryGroups = [];
    const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomElements = randomNums(temporaryGroups);
    if (randomElements == 'sm') {
        
    }
    if (randomElements == 't5cpa') {
        (function (){
            var id = "9142199889545937380-62115";
            document.write('<ins style="display:none!important" id="' + id + '"></ins>');
            (window.adbyunion = window.adbyunion || []).push(id);
            document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
        })();
    }
    if (randomElements == 't5cpc') {
        (function (){
            var id = "9142199889545937380-62114";
            document.write('<ins style="display:none!important" id="' + id + '"></ins>');
            (window.adbyunion = window.adbyunion || []).push(id);
            document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
        })();
    }
}
