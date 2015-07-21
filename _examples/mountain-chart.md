---
layout: example
title: Mountain Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder'></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('MountainChart', document.getElementById('placeholder'), {
	ui: {
		buttons: ['fullscreen']
	}
});
</script>
{% endhighlight %}

<script defer>
Vizabi('MountainChart', document.getElementById('placeholder'), {
	ui: {
		buttons: ['fullscreen']
	}
});
</script>