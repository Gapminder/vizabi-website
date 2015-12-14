---
layout: example
title: Line Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder'></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('LineChart', document.getElementById('placeholder'), {
	state: {
		time: {
			value: '1999'
		}
	}
});
</script>
{% endhighlight %}

<script defer>
Vizabi('LineChart', document.getElementById('placeholder'), {
state: {
	time: {
		value: '1999'
	}
},
data: { reader: 'csv', path: '/preview/data/waffles/basic-indicators.csv'
}});
</script>