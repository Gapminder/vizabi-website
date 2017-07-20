---
layout: post
title:  "Configure the charts programmatically"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Configure the charts programmatically"
  subtitle="explore configs in this playground"
  badge="medium"
  img="preview-tut-02-configure-the-charts.png"
%}
<!--more-->


### How to configure something on init
You can tweak and tune all sorts of things when you embed vizabi in your webpage.  
For example, this would start Vizabi chart with linear scale on X axis:

{% highlight javascript %}
var config = { state: {marker: {axis_x: {scaleType: "linear"}}} }
var chart = Vizabi("BubbleChart", document.getElementById("placeholder"), config); 
{% endhighlight %}

What options and their values are available? The example below shows the complete config. Change things in the interactive version to the right to see how the config changes on the left (you don't need all of it, but you can use it as a lookup):  

<div id="placeholder" class="example-placeholder"  style="max-width: 580px; height: 600px; padding-top: 0; float: right;"></div>
<div id="config-explorer"></div>


### How to configure something during runtime
Above you can click on some things in config explorer to the right in order to change the picture on the left. This is how you do it programmatically:

{% highlight javascript %}
var changes = {state: {time: {playing: true}};
chart.setModel(changes); //chart was defined in the snippet above 
{% endhighlight %}

### How to read the configuration
Below is the example of retreiving values from vizabi model.

This returns the complete model (default + user-configured + autofilled): 
{% highlight javascript %}
chart.getModel(); 
{% endhighlight %}

This returns the model you should care about if you want to keep a copy of the state somewhere. It ommits volatile changes, for example, current "state.time.value" while time slider is playing.
{% highlight javascript %}
chart.getPersistentModel()
{% endhighlight %}

This returns the user-configured model:
{% highlight javascript %}
chart.getPersistentMinimalModel()
{% endhighlight %}

### How to listen to config changes

In these examples config is defined above during chart init
Listening vizabi events:

{% highlight javascript %}
config.bind = {
  //fires up when model is ready (data is loaded etc):
  'ready': function(evt, vals) {
    console.log("model is ready!");
  },
  //captures persistent (non-volatile) changes:
  'persistentChange': function(evt) {
    console.log(evt);
  }
};
{% endhighlight %}

Listening to any state change:
{% highlight javascript %}
config.bind['change:state'] = function(evt, path) {
  console.log(path, evt.source);
};
{% endhighlight %}

Listening to changes specifically in time.value:
{% highlight javascript %}
config.bind['change:state.time.value'] = function(evt, path) {
  console.log(path, evt.source);
};
{% endhighlight %}


<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/vizabi.css" />
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi-bubblechart/develop/bubblechart.css" />

<script src="//d3js.org/d3.v4.min.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/preview/master/assets/vendor/js/vizabi-ws-reader/vizabi-ws-reader.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/systema-globalis/master/BubbleChart.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/bubblechart.js"></script>
<script src="/node_modules/config-explorer/dist/index.js"></script>


<script>
var wsReader = WsReader.WsReader.getReader();
Vizabi.Reader.extend("waffle", wsReader);

var showPaths = [];
var configExplorer = new ConfigExplorer(document.getElementById('config-explorer'));

var config = Vizabi.utils.extend(BubbleChart, {
  "locale": {
    "filePath": "/preview/data/translation/"
  }, 
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-dev.gapminderdev.org/api/ddf/ql"
  },
  "bind": {
    "change:state": function () {
      configExplorer.print(this.getPlainObject(), showPaths);
    }
  }
 });


var chart = Vizabi("BubbleChart", document.getElementById("placeholder"), config);

function makeChangeObject(path, value) {
  var result = {};
  var tmp = result;
  var key;

  path = path.split('.');
  while(key = path.shift()) {
    tmp = tmp[key] = path.length ? {} : value;
  }
  
  return result;
}

function toggleClass(element, toggleClass) {
  var classes = element.className.split(' ');
  var result = classes.filter(function (value) { return value !== toggleClass; });
  var hasNotClass = result.length === classes.length;
  hasNotClass && result.push(toggleClass);
  element.className = result.join(' ');
  return hasNotClass;
}

function removeChildrenClass(element, className) {
  var sibling = element.nextElementSibling;
  if (sibling && hasClass(sibling, className)) {
    removeChildrenClass(sibling, className);
  }

  if (element.hasChildNodes()) {
    element.childNodes.forEach(function (node) {
      return node.nodeType === 1 && removeChildrenClass(node, className) 
    });
  }
    
  hasClass(element, className) && toggleClass(element, className);
}

configExplorer
  .enums({
    'time.playing': [true, false],
    'marker.axis_x.scaleType': ["log", "linear"]
  })
  .onEnumChange(function (path, value) {
    chart.setModel({ state: makeChangeObject(path, value) });
  })
  .onNodeClick(function (event, path, collapsible) {
    var added = toggleClass(event.currentTarget, 'opened');
    
    if (!toggleClass(collapsible, 'opened')) {
      removeChildrenClass(collapsible, 'opened');
    }
  
    if (added && !~showPaths.indexOf(path)) {
      showPaths.push(path);
    } else {
      showPaths = showPaths.filter(function (showPath) {
        return showPath !== path && showPath.lastIndexOf(path) !== 0;
      });
    }
  })
  .print(chart.getModel().state, showPaths);
</script>

