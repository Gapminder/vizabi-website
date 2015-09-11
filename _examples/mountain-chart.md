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
Vizabi('MountainChart', document.getElementById('placeholder'),
    ui: {
	   buttons: ['find', 'colors', 'stack', 'axes-mc', 'fullscreen']
    },
);
</script>
{% endhighlight %}

<script defer>
Vizabi('MountainChart', document.getElementById('placeholder'), {
    ui: {
	   buttons: ['find', 'colors', 'stack', 'axes-mc', 'fullscreen']
    },
    data: { 
        reader: 'csv-file', 
        path: 'http://static.gapminderdev.org/vizabi/release/v0.7.1/preview/local_data/waffles/mountains-pop-gdp-gini-1800-2030.csv'
    }
});
</script>