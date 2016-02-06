---
title: Embedding
slug: embedding
---

##Bubble chart

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
		},
		ui: {
			buttons: ['find', 'colors', 'fullscreen']
		}
	});
</script>
{% endhighlight %}

##Line chart

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
        end: '2015',
        round: "ceil",
        trails: true,
        lockNonSelected: 0,
        adaptMinMaxZoom: false
      },
      entities: {
        dim: "geo",
        show: {
          _defs_: {
            "geo": ["*"],
            "geo.cat": ["country"]
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
            which: "u5mr"
          },
          axis_x: {
            use: "indicator",
            which: "gdp_pc"
          },
          color: {
            use: "property",
            which: "geo.region"
          },
          size: {
            use: "indicator",
            which: "pop"
          }
        }
      },
      data: {
        //reader: "waffle",
        reader: "csv",
        path: "/preview/data/waffles/dont-panic-poverty.csv"
      },
			ui: {
				buttons: ['size', 'fullscreen'],
				buttons_expand: []
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
              which: "gdp_pc",
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
        ui: {
            buttons: ['colors']
        },
        data: {
            reader: 'csv',
            path: '/preview/data/waffles/dont-panic-poverty.csv'
        }
    });


});
</script>
