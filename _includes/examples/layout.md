

## Example {{page.title}}

<div id="placeholder" class="example-placeholder"  style="max-width: 720px; height: 500px; padding-top: 0;"></div>

---

### Embed this chart into your web page
1. Go to [gapminder.org/tools](https://gapminder.org/tools)
2. Pick any chart you like
3. Press embed button `</>` 
4. Copy to clipboard the code that appeared
5. Paste this code anywhere on your web page
6. Tweak width and height so that it fits your layout

{% image embed-gapminder-chart.gif %}

Note: if you change something on the chart before you press embed your changes will be captured in the embed link too

### Embedding without iframe

You will need to include vizabi script and stylesheet into your web page, as well as the scripts and styles for the tools you want to use. 

Examples can be found [here](//gapminder.org/tools)


### Code snippet

{% capture scripts %}
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/vizabi.css">
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/{{ page.chart }}.css">

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/vizabi.min.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/preview/master/assets/vendor/js/vizabi-ws-reader/bundle.web.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/systema-globalis/master/Config{{ page.chartConfig }}.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/{{ page.chart }}.js"></script>
{% endcapture %}

{% capture everything %}
<script>
var wsReader = new WSReader.WSReader().getReader();
Vizabi.Reader.extend("waffle", wsReader);
{{ globals }}
Config{{ page.chartConfig }}.locale = {
  "id": "en",
  "filePath": "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/assets/translation/"
};

Config{{ page.chartConfig }}.data = {{ data }};

Vizabi("{{ page.chartConfig }}", document.getElementById("placeholder"), Config{{ page.chartConfig }});
</script>
{% endcapture %}

{% highlight html %}
<!doctype html>
<html>
<head>
{{ scripts }}
</head>
<body>
<div id="placeholder" width="600px" height="400px"></div>
{{ everything }}
</body>
</html>
{% endhighlight %}



{{ scripts }}
{{ everything }}

