---
title: Responsiveness
slug: responsiveness
---

##Responsiveness

You can also embed the chart in a placeholder with flexible width. Resize the browser window to see the effect on the previous chart or <a onclick='openBubbleChartExample2()'>view the example on Codepen</a>. Styling and layouting of the bubble chart tool will change.

<!-- <a onclick='openBubbleChartExample2()' class="button code-btn"><i class='fa fa-codepen'></i> Codepen</a> -->

{% highlight html %}
<div id='placeholder' style='position: absolute; top: 0; bottom: 0; left: 0; right: 0;'></div>
{% endhighlight %}

If on a mobile, just flip your device. <button class="button right" onclick="flipDeviceBubbleChart()"><i class="fa fa-repeat"></i> Flip Device</button>

<div id="bubbles-placeholder" class="vizabi-placeholder mobile landscape"></div>

<script defer>
var mobileBubbleChartViz = Vizabi('BubbleChart', document.getElementById('bubbles-placeholder'), {
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
          which: "child_mortality_rate_per1000"
        },
        axis_x: {
          use: "indicator",
          which: "gdp_p_cap_const_ppp2011_dollar"
        },
        color: {
          use: "property",
          which: "geo.region"
        },
        size: {
          use: "indicator",
          which: "population"
        }
      }
    },
    data: {
      reader: "csv",
      path: "/preview/data/waffles/dont-panic-poverty.csv"
    }
});

function openBubbleChartExample2() {
	viewOnCodepen("Bubble Chart", "var viz = Vizabi('BubbleChart', document.getElementById('bubbles-placeholder'), { data: { reader: 'csv', path: '"+CODEPEN_WAFFLE_ADDRESS+"' }});", "<div id='placeholder' style='position: absolute; top: 0; bottom: 0; left: 0; right: 0;'></div>", "body{background:#ffffff}");
}

function flipDeviceBubbleChart() {
	var placeholder = document.getElementById("bubbles-placeholder");
	var classes = placeholder.getAttribute("class");
	var buttons = placeholder.getElementsByClassName('vzb-buttonlist-btn-icon');

	if(classes === "vizabi-placeholder mobile portrait") {
		placeholder.setAttribute("class", "vizabi-placeholder mobile landscape");
	} else {
		placeholder.setAttribute("class", "vizabi-placeholder mobile portrait");
	}

	//added to correct the button styles on flip of the "screen"
	for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.height = "14px";
        buttons[i].style.width = "14px";
    }

	//simulate window resize
	mobileBubbleChartViz.trigger('resize');
}
</script>
