---
layout: example
title: Bubble Chart
---

##Example Bubble Chart

<div id='placeholder' class='example-placeholder'></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	state: {
		time: {
			value: '2004'
		}
	},
	ui: {
		buttons: ['find', 'size', 'fullscreen']
	}
});
</script>
{% endhighlight %}

<script defer>
Vizabi('BubbleChart', document.getElementById('placeholder'), {
state: {
	time: {
		value: '2004'
	}
},
ui: {
	buttons: ['find', 'size', 'fullscreen']
},
data: { reader: 'csv-file', path: 'https://dl.dropboxusercontent.com/u/4933279/csv/basic-indicators.csv'
}});
</script>