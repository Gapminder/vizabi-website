---
title: Embedding
slug: embedding
---

## Bubble chart

You can embed a Vizabi tool on your page or blog and tell your story with our graph:

<div id="bubble-chart-placeholder" class="vizabi-placeholder no-border"></div>

In the following example, Vizabi **BubbleChart** will appear in the div `placeholder`

<!-- <a onclick='openBubbleChartExample()' class="button code-btn"><i class='fa fa-codepen'></i> Codepen</a> -->

{% highlight html %}
<link rel="stylesheet" type="text/css" href="path/to/vizabi.css">
<script src="path/to/vizabi.js"></script>
<div id='placeholder' width="600px" height="400px"></div>
<script>
	var viz = Vizabi('BubbleChart', document.getElementById('placeholder'), {
		state: {
		},
		data: {
			reader: 'reader-type',
			path: '/path/to/your/file'
			// for inline reader you can specify your data manually
			/*
			data: [
				{
					column: 'value'
				},
				...
			]
			*/
		},
		ui: {
			buttons: ['find', 'colors', 'fullscreen']
		}
	});
</script>
{% endhighlight %}

## Line chart

Similarly, you can also embed our line chart.

<div id="line-chart-placeholder" class="vizabi-placeholder no-border"></div>

In the following example, Vizabi **LineChart** will appear in the div `placeholder`

<!-- <a onclick='openLineChartExample()' class="button code-btn"><i class='fa fa-codepen'></i> Codepen</a> -->

{% highlight javascript %}
Vizabi('LineChart', document.getElementById('placeholder'), {
	state: {
	},
	data: {
		reader: 'reader-type',
		path: '/path/to/your/file'
	},
	ui: {
		buttons: ['find', 'colors']
	}
});
{% endhighlight %}





<script defer>

function openBubbleChartExample() {
	viewOnCodepen("Bubble Chart", "var viz = Vizabi('BubbleChart', document.getElementById('placeholder'), { data: { reader: 'csv', path: '"+CODEPEN_WAFFLE_ADDRESS+"' }});");
}
function openLineChartExample() {
	viewOnCodepen("Line Chart", "var viz = Vizabi('LineChart', document.getElementById('placeholder'), { data: { reader: 'csv', path: '"+CODEPEN_WAFFLE_ADDRESS+"' }});");
}

ready(function() {

	Vizabi('BubbleChart', document.getElementById('bubble-chart-placeholder'), {
		state: {
      time: {
        value: '1900',
        start: '1800',
        end: '2015'
      },
      entities: {
        dim: "geo",
        show: {
          _defs_: {
            "geo": ["*"],
            "geo.category": ["country"]
          }
        },
        opacitySelectDim: .3,
        opacityRegular: 1,
        },
        marker: {
          space: ["entities", "time"],
          type: "geometry",
          label: {
            use: "property",
            which: "geo.name"
          },
          axis_y: {
            use: "indicator",
			which: 'sg_child_mortality_rate_per1000',
			scaleType: 'linear'
          },
          axis_x: {
            use: "indicator",
			which: 'sg_gdp_p_cap_const_ppp2011_dollar',
			scaleType: 'log'
          },
          color: {
            use: "property",
            which: "geo.world_4region"
          },
          size: {
            use: "indicator",
            which: "sg_population"
          }
        }
      },
      data: {
        reader: "csv",
        path: "/preview/data/waffles/dont-panic-poverty.csv"
      },
			ui: {
				buttons: [],
				dialogs: {
					popup: []
				}
			}
		}
	);

	Vizabi('LineChart', document.getElementById('line-chart-placeholder'), {
        state: {
          time: {
            value: "1980",
            start: "1950",
            end: "2015"
          },
          marker: {
            label: {
              use: "property",
              which: "geo.name"
            },
            axis_y: {
              use: "indicator",
          	  which: "sg_gdp_p_cap_const_ppp2011_dollar",
              scaleType: "log"
            },
            axis_x: {
              use: "indicator",
              which: "time",
              scaleType: "time"
            },
            color: {
              use: "property",
              scaleType: "ordinal",
              which: "geo.name"
            }
          }
        },
        data: {
            reader: 'csv',
            path: '/preview/data/waffles/dont-panic-poverty.csv'
        },
				ui: {
					buttons: [],
					dialogs: {
						popup: []
					}
				}
    });


});
</script>
