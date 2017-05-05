---
layout: post
title:  "Make a new chart"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Make a new chart from scratch"
  subtitle="Make a new chart from scratch"
  badge="hard"
  img="preview-tut-09-create-your-tool.png"
%}
<!--more-->

In the previous tutorial we've learned how to make a new visualization tool in Vizabi by combining exising components. But what if a component we need doesn't exist? Well, we need to make a new one.


### Summary
In this tutorial we will do the following:  
we will start with a tool definition, like we had previously
in the tool definition we will add a time slider and a component that doesn't exist yet
we will then define that new component
we will connect the component to the models
we will add stuff the component should do when it's loaded
we will add D3 magic so that things appear on the screen
we will add event binding, so that stuff would redraw on changes of time slider or resize


### Start with a tool definition

Let our new tool be a simple bar chart with bars that change height over time. 
Here we connect D3, Vizabi js and css, define a placeholder on the page and call Vizabi to render myBarChart in that placeholder without any configurations.

{% highlight html %}
<html>
  <head>
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
    <link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.css">
    <script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.js"></script>
  </head>

  <body>
    <div id="placeholder" style="width: 100%; height: 100%; min-height: 500px;"></div>

    <script>
      Vizabi('myBarChart', document.getElementById('placeholder'));
    </script>
  </body>
</html>
{% endhighlight %}


Now let's define tool "myBarChart" (before calling Vizabi):

{% highlight javascript %}
Vizabi.Tool.extend('myBarChart', {

  init: function(placeholder, external_model) {

    this.name = "myBarChart";

    this.components = [];

    this._super(placeholder, external_model);
  }

});
{% endhighlight %}

## Including components in the tool
Let's include a time slider component. First we choose which component to use, by providing its name. Once Vizabi is defined, we can stop on a breakpoint and check Vizabi.Component.getCollection() to see which components are available.

Then we give a placeholder selector, if we need the component to be rendered on screen somewhere (these placeholdes are defined by the template in Tool.js).

Finally, we list the models our component should have access to. The result would be:

{% highlight javascript %}
this.components = [{
  component: 'timeslider',
  placeholder: '.vzb-tool-timeslider',
  model: ["state.time", "state.entities", "state.marker", "ui"]
}];
{% endhighlight %}

We will add one more component, our own 'myBarChartComponent'. It does not exist yet, but we will make it soon.

{% highlight javascript %}
this.components = [{
  component: 'myBarChartComponent',
  placeholder: '.vzb-tool-viz',
  model: ["state.time", "state.marker", "state.entities"]
}, {
  component: 'timeslider',
  placeholder: '.vzb-tool-timeslider',
  model: ["state.time", "state.entities", "state.marker", "ui"]
}];
{% endhighlight %}


## Creating a new component
As with the tool, let's start from an outline

{% highlight javascript %}
Vizabi.Component.extend('myBarChartComponent', {

  init: function(config, context) {
      // ...
      // happens once when component is created, but before model or DOM are ready
      // ...
  },

  readyOnce: function() {
      // ...
      // happens once on the load when both DOM and MODEL are ready
      // ...
  },

  redraw: function() {
      // ...
      // updates the visuals 
      // ...
  },

  resize: function() {
      // ...
      // executes every time the container or vizabi is resized
      // ...
  }

});
{% endhighlight %}

## Component.init: connect the component to the models
The init function will have the following:

{% highlight javascript %}
init: function(config, context) {

  this.name = 'myBarChartComponent';
  this.template = '<div class="vzb-barchart"><svg class="vzb-barchart-svg"></svg></div>';

  //define expected models for this component
  this.model_expects = [{
    name: "time",
    type: "time"
  }, {
    name: "marker",
    type: "model"
  }, {
    name: "entities",
    type: "entities"
  }];

  //call the prototype constructor of the component
  this._super(config, context);
},
{% endhighlight %}

Here we have defined a template with an empty SVG element and connected the component to models.

## Component.readyOnce: add stuff the component should do when it's loaded
This function is only called once after the data model and the dom are both ready for the first time. This allows to do the preparations we don't need to repeat every time when redrawing the bars.

{% highlight javascript %}
readyOnce: function() {
  var _this = this;

  //link DOM elements to the variables
  this.element = d3.select(this.element)
  this.svgEl = this.element.select("svg").append("g");

  this.KEY = this.model.entities.getDimension();

  //fetch an array of keys from marker model and attach them to DOM elements 
  this.keys = this.model.marker.getKeys();
  this.bars = this.svgEl.selectAll('rect').data(this.keys);

  //exit and enter DOM elements
  this.bars.exit().remove();
  this.bars.enter().append("rect");

  //fetch the scales for axis and color
  this.scaleAxis = this.model.marker.axis.getScale();
  this.scaleColor = this.model.marker.color.getScale();

  this.redraw();
},
{% endhighlight %}

## Component.redraw: add D3 magic so that things appear on the screen
This function requests the data for the current time point and updates the visuals

{% highlight javascript %}
redraw: function() {
  var _this = this;
  var height = parseInt(this.element.style("height"));
  var widthOne = parseInt(this.element.style("width")) / _this.keys.length;

  this.scaleAxis.range([height, 0]);

  //request the values for the current time from the model
  this.values = this.model.marker.getFrame(_this.model.time.value, (frame) => {

    _this.svgEl.selectAll('rect')
      .attr("width", widthOne / 2)
      .attr("x", (d, i) => widthOne * i)
      .attr("height", height)
      .attr("y", (d) => _this.scaleAxis(frame.axis[d[_this.KEY]] || 0))
      .attr("fill", (d) => _this.scaleColor(frame.color[d[_this.KEY]]) || "transparent")

  });
},
{% endhighlight %}





With that, the chart is finished.
