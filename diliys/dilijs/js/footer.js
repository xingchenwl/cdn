$(function () {
    $.get("/cdn-cgi/trace", function (data) {
        //var sip = data.match(/(ip=?)(\S*)/)[2];
        var str = data.match(/(colo=?)(\S*)/)[2];
        var every = [
            ['HKG', '香港'],
            ['TPE', '台北'],
            ['NRT', '东京'],
            ['KIX', '大阪'],
            ['ICN', '仁川'],
            ['LHR', '伦敦'],
            ['SIN', '新加坡'],
            ['CDG', '巴黎'],
            ['FRA', '法兰克福'],
            ['KUL', '马来西亚'],
            ['LAX', '洛杉矶'],
            ['SJC', '圣何塞'],
            ['KBP', '乌克兰'],
            ['PRG', '布拉格']
        ];
        for (var i = 0; i < every.length; i++) {
            if (str == every[i][0]) {
                $("#cdnip").append("节点：" + every[i][1]);
            }
        }
    });
})