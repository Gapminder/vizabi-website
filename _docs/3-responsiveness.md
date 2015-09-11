---
title: Responsiveness
slug: responsiveness
---

##Responsiveness

You can also embed the chart in a placeholder with flexible width. Resize the browser window to see the effect on the previous chart or <a onclick='openBubbleChartExample2()'>view the example on Codepen</a>. Styling and layouting of the bubble chart tool will change.

<a onclick='openBubbleChartExample2()' class="button code-btn"><i class='fa fa-codepen'></i> Codepen</a>
{% highlight html %}
<div id='placeholder' style='position: absolute; top: 0;
bottom: 0; left: 0; right: 0;'></div>
{% endhighlight %}

If on a mobile, just flip your device. <button class="button right" onclick="flipDeviceBubbleChart()"><i class="fa fa-repeat"></i> Flip Device</button>

<div id="bubble-chart-placeholder2" class="vizabi-placeholder mobile landscape"></div>


<script>

function openBubbleChartExample2() {
	viewOnCodepen("Bubble Chart", "var viz = Vizabi('BubbleChart', document.getElementById('placeholder'), { data: { reader: 'csv-file', path: '"+CODEPEN_WAFFLE_ADDRESS+"' }});", "<div id='placeholder' style='position: absolute; top: 0; bottom: 0; left: 0; right: 0;'></div>", "body{background:#ffffff}");
}

function flipDeviceBubbleChart() {
	var placeholder = document.getElementById("bubble-chart-placeholder2");
	var classes = placeholder.getAttribute("class");
	if(classes === "vizabi-placeholder mobile") {
		placeholder.setAttribute("class", "vizabi-placeholder mobile landscape");
	} else {
		placeholder.setAttribute("class", "vizabi-placeholder mobile");
	}

	//simulate window resize
	mobileBubbleChartViz.trigger('resize');
}

var mobileBubbleChartViz;

ready(function() {

	mobileBubbleChartViz = Vizabi('BubbleChart', document.getElementById('bubble-chart-placeholder2'), {
			data: {
				reader: 'csv-file',
				path: WAFFLE_ADDRESS
			}
		}
	);
    mobileBubbleChartViz.trigger('resize');

});
</script>