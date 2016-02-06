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
	data: {
		reader: 'csv',
		path: '/preview/data/waffles/usa.csv'
	}
});
</script>
