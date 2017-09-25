---
title: Advanced Options
slug: advanced-options
---

## Buttons

It is possible to add buttons that increase the exploration features of your chart.

<div id="advanced-placeholder" class="vizabi-placeholder" style="width: 720px; height:500px; padding-top:0;"></div>

{% highlight javascript %}
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	ui: {
	    buttons: ['find', 'axes', 'size', 'colors',
	    		  'fullscreen', 'trails', 'lock', 'moreoptions']
	}
});
{% endhighlight %}

## Data Source

Vizabi has multiple readers, which can read data in various formats. Our current readers are:

- **csv**: reads data from a CSV file
- **json-file**: reads data from a JSON file
- **waffle-server**: Gapminder's REST API *(currently down)*
- **inline**: reads data from JS object at initialization

Most examples on this page are using the `csv` reader, using [this CSV file](//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/waffles/en/basic-indicators.csv).

But let's use the **inline** reader instead with our own data in our next example:

<div id="advanced-placeholder2" class="vizabi-placeholder"></div>


{% highlight javascript %}
Vizabi('BarChart', document.getElementById('placeholder'), {
	data: {
		reader: 'inline',
		data: [{ 'geo': 'swe', 'time': '1995', 'score': '10'},
			   { 'geo': 'swe', 'time': '1996', 'score': '13'},
			   { 'geo': 'swe', 'time': '1997', 'score': '14'},
			   { 'geo': 'swe', 'time': '1998', 'score': '15'},
			   { 'geo': 'swe', 'time': '1999', 'score': '16'},
			   { 'geo': 'swe', 'time': '2000', 'score': '18'},
			   { 'geo': 'fin', 'time': '1995', 'score': '10'},
			   { 'geo': 'fin', 'time': '1996', 'score': '10'},
			   { 'geo': 'fin', 'time': '1997', 'score': '14'},
			   { 'geo': 'fin', 'time': '1998', 'score': '18'},
			   { 'geo': 'fin', 'time': '1999', 'score': '22'},
			   { 'geo': 'fin', 'time': '2000', 'score': '25'},
 		]
	},
	state: {
		entities: {
            show: {
                dim: 'geo',
                filter: {
                    'geo': ['*']
                }
            }
        },
        marker: {
            label: {
                use: 'property',
                which: 'geo'
            },
            color: {
                use: 'property',
                which: 'geo'
            },
            axis_y: {
                use: 'indicator',
                which: 'score'
            },
            axis_x: {
                use: 'property',
                which: 'geo'
            }
        }
	}
});
{% endhighlight %}

<script defer>

// function openAdvancedExample2() {
// 	viewOnCodepen("Inline Reader", "Vizabi('BarChart',document.getElementById('placeholder'),{data:{reader:'inline',data:[{'geo':'swe','time':'1995','score':'10'},{'geo':'swe','time':'1996','score':'13'},{'geo':'swe','time':'1997','score':'14'},{'geo':'swe','time':'1998','score':'15'},{'geo':'swe','time':'1999','score':'16'},{'geo':'swe','time':'2000','score':'18'},{'geo':'fin','time':'1995','score':'10'},{'geo':'fin','time':'1996','score':'10'},{'geo':'fin','time':'1997','score':'14'},{'geo':'fin','time':'1998','score':'18'},{'geo':'fin','time':'1999','score':'22'},{'geo':'fin','time':'2000','score':'25'},]},state:{entities:{show:{dim:'geo',filter:{'geo':['*']}}},marker:{label:{use:'property',which:'geo'},color:{use:'property',which:'geo'},axis_y:{use:'indicator',which:'score'},axis_x:{use:'property',which:'geo'}}}});");
// }

// ready(function() {

	// Vizabi('BubbleChart', document.getElementById('advanced-placeholder'), {
	// 	state: {
  //     time: {
  //       value: '1900',
  //       start: '1800',
  //       end: '2015',
  //       round: "ceil",
  //       trails: true,
  //       lockNonSelected: 0,
  //       adaptMinMaxZoom: false
  //     },
  //     entities: {
  //       dim: "geo",
  //       show: {
  //         _defs_: {
  //           "geo": ["*"],
  //           "geo.cat": ["country"]
  //         }
  //       },
  //       opacitySelectDim: .3,
  //       opacityRegular: 1,
  //       },
  //       marker: {
  //         space: ["entities", "time"],
  //         type: "geometry",
  //         label: {
  //           use: "property",
  //           which: "geo.name"
  //         },
  //         axis_y: {
  //           use: "indicator",
  //           which: "u5mr"
  //         },
  //         axis_x: {
  //           use: "indicator",
  //           which: "gdp_pc"
  //         },
  //         color: {
  //           use: "property",
  //           which: "geo.region"
  //         },
  //         size: {
  //           use: "indicator",
  //           which: "pop"
  //         }
  //       }
  //     },
  //     data: {
  //       //reader: "waffle",
  //       reader: "csv",
  //       path: "/preview/data/waffles/dont-panic-poverty.csv"
  //     },
	// 	ui: {
	// 	    buttons: ['find', 'axes', 'size', 'colors', 'fullscreen', 'trails', 'lock', 'moreoptions']
	// 	}
	// });

	Vizabi('BarChart', document.getElementById('advanced-placeholder2'), {
		data: {
			reader: 'inline',
			data: [{ 'geo': "swe", 'time': "1995", 'score': "10"},
				   { 'geo': "swe", 'time': "1996", 'score': "13"},
				   { 'geo': "swe", 'time': "1997", 'score': "14"},
				   { 'geo': "swe", 'time': "1998", 'score': "15"},
				   { 'geo': "swe", 'time': "1999", 'score': "16"},
				   { 'geo': "swe", 'time': "2000", 'score': "18"},
				   { 'geo': "fin", 'time': "1995", 'score': "10"},
				   { 'geo': "fin", 'time': "1996", 'score': "10"},
				   { 'geo': "fin", 'time': "1997", 'score': "14"},
				   { 'geo': "fin", 'time': "1998", 'score': "18"},
				   { 'geo': "fin", 'time': "1999", 'score': "22"},
				   { 'geo': "fin", 'time': "2000", 'score': "25"}
	 		]
		},
		state: {
			time: {
				value: '1995',
				start: '1998',
				end: '2000'
			},
			entities: {
	            show: {
	                dim: "geo",
	                filter: {
	                    "geo": ["*"]
	                }
	            }
	        },
	        marker: {
	            label: {
	                use: "property",
	                which: "geo"
	            },
	            color: {
	                use: "property",
	                which: "geo"
	            },
	            axis_y: {
	                use: "indicator",
	                which: "score"
	            },
	            axis_x: {
	                use: "property",
	                which: "geo"
	            }
	        }
		}
	});

// });

</script>
