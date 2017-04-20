---
layout: post
title:  "Show your data with our charts"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Show your data with our charts"
  badge="easy"
%}
<!--more-->

{% capture code %}
<div id="placeholder" class="example-placeholder" style="width: 720px; height: 500px; padding-top: 0;"></div>

<link rel="stylesheet" href="//static.gapminderdev.org/vizabi/develop/dist/vizabi.css">
<link rel="stylesheet" href="//static.gapminderdev.org/vizabi-bubblechart/develop/dist/bubblechart.css">

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
<script src="//static.gapminderdev.org/vizabi/develop/dist/vizabi.min.js"></script>
<script src="//static.gapminderdev.org/vizabi-bubblechart/develop/dist/bubblechart.js"></script>

<script>
var config = {
    "locale": {
      "filePath": "/preview/data/translation/"
    }, 
    "data": {
      "reader": "csv",
      // here you can specify path to your file
      "path": "/preview/data/waffles/basic-indicators.csv"
    }
};

Vizabi("BubbleChart", document.getElementById("placeholder"), config);
</script>
{% endcapture %}

{{ code }}

---

{% highlight html %}
{{ code }}
{% endhighlight %}