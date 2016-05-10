/**
 * Created by Gucci Wu on 2016-5-6.
 */
function kChart(option){
    //Option structure
    //  data: data source
    //  timeList: time range of data source
    //  volume:  volume column data source, empty will not show volume component
    //  ma5:
    //  ma10:
    //  ma20:
    //  stockName: stock name of UTF-8 鹏欣资源
    //  stockCode: 6 digits stock code 600490
    //  elementID: k-chart container ID
    //  volumeElementID: volume component container ID

    var kOption = {
        title: {
            text: option.stockName,
            left: 'left'
        },
        legend: {
            data : [option.stockName, 'MA5', 'MA10', 'MA20']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[0] + '  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[1] + '  最低 : ' + params[0].value[2];
                return res;
            }
        },
        grid: {
            x: 80,
            y: 40,
            x2: 20,
            y2: 50
        },
        xAxis: {
            type: 'category',
            data: option.timeList,
            scale: true,
            boundaryGap: false,
            axisLine: {onZero: false},
            splitLine: {show: false}
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: true
            }
        },
        dataZoom: {
            y: '88%',
            show: true,
            start: 50,
            end: 100
        },
        series: [
            {
                name: option.stockName,
                type: 'candlestick',
                itemStyle: {
                    normal: {
                        color: 'red',           // 阳线填充颜色
                        color0: 'lightgreen',   // 阴线填充颜色
                        lineStyle: {
                            width: 2,
                            color: 'orange',    // 阳线边框颜色
                            color0: 'green'     // 阴线边框颜色
                        }
                    },
                    emphasis: {
                        color: 'black',         // 阳线填充颜色
                        color0: 'white'         // 阴线填充颜色
                    }
                },
                data: option.data
            },
            {
                name: 'MA5',
                type: 'line',
                data: option.ma5
            },
            {
                name: 'MA10',
                type: 'line',
                data: option.ma10
            },
            {
                name: 'MA20',
                type: 'line',
                data: option.ma20
            }
        ]
    };

    var myCandleChart = echarts.init(document.getElementById(option.elementID));
    myCandleChart.setOption(kOption);

    var vOption = {
        tooltip: {
            trigger: 'axis',
            showDelay: 0             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        },
        toolbox: {
            show: false
        },
        dataZoom: {
            show: false,
            start: 50,
            end: 100
        },
        grid: {
            x: 70,
            y: 10,
            x2: 6,
            y2: 30
        },
        xAxis: [
            {
                type: 'category',
                position: 'top',
                boundaryGap: true,
                axisLabel: {show: false},
                axisTick: {onGap: false},
                splitLine: {show: false},
                data: option.timeList
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                splitNumber: 2,
                boundaryGap: [0, 0.05],
                axisLabel: {
                    formatter: function (v) {
                        return Math.round(v / 10000) + ' 万'
                    }
                },
                splitArea: {show: true}
            }
        ],
        series: [
            {
                name: stockName,
                type: 'bar',
                symbol: 'none',
                data: option.volume
            }
        ]
    };

    var myVolumeChart = echarts.init(document.getElementById(option.volumeElementID));
    myVolumeChart.setOption(vOption);

    myCandleChart.group = 'kv_group';
    myVolumeChart.group = 'kv_group';

    echarts.connect('kv_group');
}