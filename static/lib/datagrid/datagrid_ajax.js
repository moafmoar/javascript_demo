/**
 * Created by full on 2017/9/6.
 */

$(function () {
    $("#datagrid").datagrid({
        url:'../../data/datagrid/data3.json',
        method:'get',
        pagination: true,
        fitColumns: true,
        striped: true,
        rownumbers: true,
        //singleSelect:true,
        loader: $.easyuiloader,
        columns: [[
            {
                field: 'sceneryName',
                title: '景点名',
                width: 10
            },
            {
                field: 'visitorCount',
                title: '游客总数',
                width: 10
            },
            {
                field: 'visitorDensity',
                title: '游客密度',
                width: 10
            },
            {
                field: 'originTop3',
                title: '来源地Top3',
                width: 10
            },
            {
                field: 'ranking',
                title: '人数月度排名',
                width: 10
            }
        ]]
    })
})
