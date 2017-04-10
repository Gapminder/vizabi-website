

## Example {{page.title}}

<div id="placeholder" class="example-placeholder"  style="width:720px; height:500px; padding-top:0;"></div>

---

### Code snippet

{% capture scripts %}
<link rel="stylesheet" href="//static.gapminderdev.org/vizabi/develop/dist/vizabi.css">
<link rel="stylesheet" href="//static.gapminderdev.org/vizabi-{{ page.chart }}/develop/dist/{{ page.chart }}.css">

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
<script src="//static.gapminderdev.org/vizabi/develop/dist/vizabi.min.js"></script>
<script src="//static.gapminderdev.org/preview/master/assets/vendor/js/vizabi-ws-reader/bundle.web.js"></script>
<script src="//static.gapminderdev.org/systema-globalis/master/{{ page.chartConfig }}.js"></script>
<script src="//static.gapminderdev.org/vizabi-{{ page.chart }}/develop/dist/{{ page.chart }}.js"></script>
{% endcapture %}

{% capture everything %}{{ scripts }}
<script>
var wsReader = new WSReader.WSReader().getReader();
Vizabi.Reader.extend("waffle", wsReader);

Vizabi._globals.ext_resources = {
  host: "https://waffle-server.gapminder.org",
  preloadPath: "/api/vizabi/",
  dataPath: "/api/ddf/",
  shapePath: "/preview/data/mc_precomputed_shapes.json"
};

var config = Vizabi.utils.extend({{ page.chartConfig }}, {
  "locale": {
    "filePath": "/preview/data/translation/"
  }, {{ include.content }} });

Vizabi("{{ page.chartConfig }}", document.getElementById("placeholder"), config);
</script>
{% endcapture %}

{% highlight html %}
<div id="placeholder" width="600px" height="400px"></div>
{{ everything }}
{% endhighlight %}

{{ everything }}