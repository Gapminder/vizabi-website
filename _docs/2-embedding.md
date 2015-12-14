---
title: Embedding
slug: embedding
---

##Bubble chart

You can embed a Vizabi tool on your page or blog and tell your story with our graph:

<div id="bubble-chart-placeholder" class="vizabi-placeholder no-border"></div>

In the following example, Vizabi **BubbleChart** will appear in the div `placeholder`

<a onclick='openBubbleChartExample()' class="button code-btn"><i class='fa fa-codepen'></i> Codepen</a>

{% highlight html %}
<link rel="stylesheet" type="text/css" href="path/to/vizabi.css">
<script src="path/to/vizabi.js"></script>
<div id='placeholder' width="600px" height="400px"></div>
<script>
	var viz = Vizabi('BubbleChart', document.getElementById('placeholder'));
</script>
{% endhighlight %}

##Line chart

Similarly, you can also embed our line chart.

<div id="line-chart-placeholder" class="vizabi-placeholder no-border"></div>

In the following example, Vizabi **LineChart** will appear in the div `placeholder`

<a onclick='openLineChartExample()' class="button code-btn"><i class='fa fa-codepen'></i> Codepen</a>

{% highlight javascript %}
Vizabi('LineChart', document.getElementById('placeholder'));
{% endhighlight %}





<script>

function openBubbleChartExample() {
	viewOnCodepen("Bubble Chart", "var viz = Vizabi('BubbleChart', document.getElementById('placeholder'), { data: { reader: 'csv', path: '"+CODEPEN_WAFFLE_ADDRESS+"' }});");
}
    function openLineChartExample() {
	viewOnCodepen("Line Chart", "var viz = Vizabi('LineChart', document.getElementById('placeholder'), { data: { reader: 'csv', path: '"+CODEPEN_WAFFLE_ADDRESS+"' }});");
}

ready(function() {

	Vizabi('BubbleChart', document.getElementById('bubble-chart-placeholder'), {
			data: {
				reader: 'csv',
				path: WAFFLE_ADDRESS
			}
		}
	);
    
    Vizabi('LineChart', document.getElementById('line-chart-placeholder'), {
			data: {
				reader: 'csv',
				path: WAFFLE_ADDRESS
			}
		}
	);
    

});
</script>