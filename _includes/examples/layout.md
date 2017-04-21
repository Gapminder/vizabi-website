

## Example {{page.title}}

<div id="placeholder" class="example-placeholder"  style="width:720px; height:500px; padding-top:0;"></div>

---

### Code snippet

{% capture scripts %}
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/dist/vizabi.css">
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/{{ page.chart }}.css">

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/dist/vizabi.min.js"></script>
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
  "filePath": "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/dist/assets/translation/"
};

Config{{ page.chartConfig }}.data = {
  "reader": "waffle",
  "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
};

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

