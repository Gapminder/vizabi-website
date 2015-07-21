---
layout: example
title: Pop By Age
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder'></div>

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
		path: 'https://dl.dropboxusercontent.com/u/4933279/csv/usa.csv'
	}
});
</script>