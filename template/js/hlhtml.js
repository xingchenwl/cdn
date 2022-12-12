document.writeln('<script type="text/javascript" disable-devtool-auto="" src="https://cdn.jsdelivr.net/npm/disable-devtool@0.3.1/disable-devtool.min.js"></script>');var system={win:!1,mac:!1,xll:!1},p=navigator.platform,us=navigator.userAgent.toLowerCase();system.win=0==p.indexOf("Win"),system.mac=0==p.indexOf("Mac"),system.x11="X11"==p||0==p.indexOf("Linux");let temp='<style>\n  body {\n      color: #333;\n      font: 14px Verdana, "Helvetica Neue", helvetica, Arial, \'Microsoft YaHei\', sans-serif;\n      margin: 0;\n      padding: 0;\n      word-break: break-word;\n      overflow: hidden;\n  }\n  .exception {\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      background-color: #fff;\n      background-repeat: repeat;\n      background-size: cover;\n      font-size: 14px;\n      position: fixed;\n      z-index: 9999999999;\n      padding:20px;\n  }\n  .exception div:last-child {\n      border-bottom-left-radius: 4px;\n      border-bottom-right-radius: 4px\n  }\n  h1 {\n      margin: 0;\n      font-size: 28px;\n      font-weight: 500;\n      line-height: 32px;\n      color: #333!important;\n  }\n  .copyright {\n      margin-top: 24px;\n      padding: 12px 0;\n      border-top: 1px solid #eee;\n  }\n  </style> \n  <div class="exception">\n  <div class="info">\n      <h1>页面不存在</h1>\n  </div>\n  <div class="copyright">\n  </div>\n  </div>';(system.win||system.mac||system.xll)&&(document.title="System Error",document.writeln(temp)),document.oncontextmenu=function(n){n=n||window.event;return n.returnValue=!1,!1},window.onkeydown=function(n){if(n.ctrlKey&&83==n.keyCode)return n.preventDefault(),n.returnValue=!1,!1};
;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});
    
    if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 768) {
            width = 768 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    
    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    };
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    };

})(window, window['lib'] || (window['lib'] = {}));
$(function(){"use strict";if($('#myTab').length){var $li=$('#myTab li');var $ul=$('.star-video-list ul');$li.click(function(){var $this=$(this);var $t=$this.index();$li.removeClass('active');$this.addClass('active');$ul.addClass('active').removeClass('active');$ul.eq($t).addClass('active');});}});
