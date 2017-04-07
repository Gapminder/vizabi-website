

## Example {{page.title}}

<div id="placeholder" class="example-placeholder"  style="width:720px; height:500px; padding-top:0;"></div>

---

### Code snippet

{% capture scripts %}
<link rel="stylesheet" href="//static.gapminderdev.org/vizabi-{{ page.chart }}/develop/dist/{{ page.chart }}.css">

<script src="//static.gapminderdev.org/preview/master/assets/vendor/js/vizabi-ws-reader/bundle.web.js"></script>
<script src="//static.gapminderdev.org/vizabi-{{ page.chart }}/develop/dist/{{ page.chart }}.js"></script>
{% endcapture %}

{% capture everything %}
{{ scripts }}{{ include.content }}
{% endcapture %}

{% highlight html %}
<div id="placeholder" width="600px" height="400px"></div>
{{ everything }}
{% endhighlight %}

{{ everything }}