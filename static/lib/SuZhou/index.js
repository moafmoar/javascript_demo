

var Y_JCSOption = {
    title : {
        text: '预警次数统计',
        subtext: '预警次数 日/次'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['预警次数']
    },
    renderAsImage:true,
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['04-16','04-17','04-18','04-19','04-20','04-21','04-22',
                '04-23','04-24','04-25','04-26','04-27','04-28',
                '04-29','04-30']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'预警次数',
            type:'bar',
            data:[2.0, 4,2.0, 4, 7.0, 23, 25, 76, 135, 162, 32, 20, 6, 3],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }/*,
            {
                name:'降水量',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }*/
    ]
}

function SuZhouMap() {
    var map = new BMap.Map("S_ZMap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(118.7833,32.058752), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true)
}


function MapLines() {

}

