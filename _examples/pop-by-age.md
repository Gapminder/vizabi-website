---
layout: example
title: Pop By Age
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder' style="width: 720px; height: 500px; padding-top: 0px;"></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('PopByAge', document.getElementById('placeholder'));
</script>
{% endhighlight %}

<script defer>
Vizabi('PopByAge', document.getElementById('placeholder'), {
	state: {
			marker: {
					axis_y: {
							use: 'indicator',
							which: 'age'
					},
					axis_x: {
							use: 'indicator',
							which: 'population'
					}
			}
	},
	data: {
		reader: 'csv',
		path: '/preview/data/waffles/usa.csv'
	},
	ui: {
		buttons: [],
		dialogs: {
			popup: []
		}
	}
});
</script>
