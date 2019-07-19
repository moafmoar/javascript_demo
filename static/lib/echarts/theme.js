(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('theme', {
		"color": [
			"#00c0ff",
			"#2ec7c9",
			"#2ec989",
			"#5bab00",
			"#dad203",
			"#ffc880",
			"#ffa358",
			"#ff6872",
			"#c770ff",
			"#8965ff",
			"#595dff",
			"#0077cb",
			"#7bc9ff",
			"#ea5bd4"
    ],
		"textStyle": {
			"fontSize": 16
		},
		"title": {
			"textStyle": {
				"fontWeight": 'normal',
				"color": "#eee",
				"fontSize": 20
			},
			"subtextStyle": {
				"fontSize":16,
				"color": "#aaa"
			}
		},
		"line": {
			"itemStyle": {
				"normal": {
					"borderWidth": 1
				}
			},
			"lineStyle": {
				"normal": {
					"width": 2
				}
			},
			"symbolSize": 4,
			"symbol": "circle",
			"smooth": false
		},
		"radar": {
			"itemStyle": {
				"normal": {
					"borderWidth": 1
				}
			},
			"lineStyle": {
				"normal": {
					"width": 2
				}
			},
			"symbolSize": 4,
			"symbol": "circle",
			"smooth": false
		},
		"bar": {
			"itemStyle": {
				"normal": {
					"barBorderWidth": 0,
					"barBorderColor": "#ccc"
				},
				"emphasis": {
					"barBorderWidth": 0,
					"barBorderColor": "#ccc"
				}
			}
		},
		"pie": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"scatter": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"boxplot": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"parallel": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"sankey": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"funnel": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"gauge": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"candlestick": {
			"itemStyle": {
				"normal": {
					"color": "#fd1050",
					"color0": "#0cf49b",
					"borderColor": "#fd1050",
					"borderColor0": "#0cf49b",
					"borderWidth": 1
				}
			}
		},
		"graph": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			},
			"lineStyle": {
				"normal": {
					"width": 1,
					"color": "#aaaaaa"
				}
			},
			"symbolSize": 4,
			"symbol": "circle",
			"smooth": false,
			"color": [
				"#26b99a",
				"#3498db",
				"#eedd78",
				"#edafda",
				"#ea7e53",
				"#a0a7e6",
				"#73a373",
				"#73b9bc",
				"#7289ab",
				"#91ca8c",
				"#f49f42"
			],
			"label": {
				"normal": {
					"textStyle": {
						"color": "#eeeeee"
					}
				}
			}
		},
		"map": {
			"itemStyle": {
				"normal": {
					"areaColor": "#eee",
					"borderColor": "#444",
					"borderWidth": 0.5
				},
				"emphasis": {
					"areaColor": "rgba(255,215,0,0.8)",
					"borderColor": "#444",
					"borderWidth": 1
				}
			},
			"label": {
				"normal": {
					"textStyle": {
						"color": "#000000"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "rgb(100,0,0)"
					}
				}
			}
		},
		"geo": {
			"itemStyle": {
				"normal": {
					"areaColor": "#eeeeee",
					"borderColor": "#444444",
					"borderWidth": 0.5
				},
				"emphasis": {
					"areaColor": "rgba(255,215,0,0.8)",
					"borderColor": "#444444",
					"borderWidth": 1
				}
			},
			"label": {
				"normal": {
					"textStyle": {
						"color": "#000000"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "rgb(100,0,0)"
					}
				}
			}
		},
		"categoryAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#eeeeee",
					fontSize:16
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#3f3b71"
					],
					"type": 'dashed'
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"#eeeeee"
					]
				}
			}
		},
		"valueAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#eeeeee",
					fontSize:16
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#3f3b71"
					],
					"type": 'dashed'
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"#eeeeee"
					]
				}
			},

		},
		"logAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#eeeeee"
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#aaaaaa"
					]
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"#eeeeee"
					]
				}
			}
		},
		"timeAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#eeeeee"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#eeeeee"
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#aaaaaa"
					]
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"#eeeeee"
					]
				}
			}
		},
		"toolbox": {
			"iconStyle": {
				"normal": {
					"borderColor": "#999999"
				},
				"emphasis": {
					"borderColor": "#666666"
				}
			}
		},
		"legend": {
			"padding": [5, 0],
			"itemGap":12,
			"textStyle": {
				"color": "#eeeeee",
				"fontSize":16
			}
		},
		"tooltip": {
           "textStyle":{
           	 "fontSize":16
           },
			"axisPointer": {
				"lineStyle": {
					"color": "#eeeeee",
					"width": "1"
				},
				"crossStyle": {
					"color": "#eeeeee",
					"width": "1"
				}
			}
		},
		"timeline": {
			"lineStyle": {
				"color": "#eeeeee",
				"width": 1
			},
			"itemStyle": {
				"normal": {
					"color": "#dd6b66",
					"borderWidth": 1
				},
				"emphasis": {
					"color": "#a9334c"
				}
			},
			"controlStyle": {
				"normal": {
					"color": "#eeeeee",
					"borderColor": "#eeeeee",
					"borderWidth": 0.5
				},
				"emphasis": {
					"color": "#eeeeee",
					"borderColor": "#eeeeee",
					"borderWidth": 0.5
				}
			},
			"checkpointStyle": {
				"color": "#e43c59",
				"borderColor": "rgba(194,53,49,0.5)"
			},
			"label": {
				"normal": {
					"textStyle": {
						"color": "#eeeeee"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "#eeeeee"
					}
				}
			}
		},
		"visualMap": {
			"color": [
				"#bf444c",
				"#d88273",
				"#f6efa6"
			]
		},
		"dataZoom": {
			"backgroundColor": "rgba(47,69,84,0)",
			"dataBackgroundColor": "rgba(255,255,255,0.3)",
			"fillerColor": "rgba(167,183,204,0.4)",
			"handleColor": "#a7b7cc",
			"handleSize": "100%",
			"textStyle": {
				"color": "#eeeeee"
			}
		},
		"markPoint": {
			"label": {
				"normal": {
					"textStyle": {
						"color": "#eeeeee"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "#eeeeee"
					}
				}
			}
		},
		"grid":{
//			"show":true,
//			borderColor:"#f00",
			"containLabel":true,
			left:"center",
			width:'90%',
//			top:"middle",
		},
		"axes":[{
			    "type": "value",
                "axisLineShow": false,
                "axisLineColor": "red",
                "axisTickShow": false,
                "axisTickColor": "#333",
                "axisLabelShow": false,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "red"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]

		}]

    });
}));


























