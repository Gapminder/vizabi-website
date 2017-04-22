---
layout: post
title:  "Make a new chart"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Make a new chart from scratch"
%}
<!--more-->

Let’s make a simple donut chart, showing world population share by regions. The result looks like this:

<div id="donut-chart-placeholder" class="vizabi-placeholder no-border"></div>

Vizabi is organized as a base plus a collection of “tools”. Tools are like apps. We have some already: `BubbleChart`, `LineChart`, `BarChart`, and you can also write your own. The tools consist of “components”, which are the elementary blocks. The “barchart” tool above includes components “donut” and “gapminder-timeslider”. The latter one is also used by bar and line charts, so components can be reused.

  <script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
  <link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.css">
  <script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.js"></script>


<style>
    .vzb-barchart{
        position: absolute;
        top: 0px; left: 0px; rigth: 0px; bottom: 0px;
        font-family: 'Arial Rounded MT Bold', Arial, sans-serif;
        width: 100%; height: 100%;
    }
    .vzb-barchart svg{width:100%; height:100%}

    .vzb-barchart text {text-anchor: middle; fill: rgb(96, 120, 137)}

    .vzb-barchart .year {dominant-baseline: hanging; fill: #DDD;}

    .vzb-large .vzb-barchart .year{font-size: 8.0em;}
    .vzb-large .vzb-barchart .title{font-size: 4.0em;}
    .vzb-large .vzb-barchart .label{font-size: 2.0em;}

    .vzb-medium .vzb-barchart .year {font-size: 8.0em;}
    .vzb-medium .vzb-barchart .title {font-size: 4.0em;}
    .vzb-medium .vzb-barchart .label {font-size: 2.0em;}

    .vzb-small .vzb-barchart .year {font-size: 4.0em;}
    .vzb-small .vzb-barchart .title {font-size: 2.0em;}
    .vzb-small .vzb-barchart .label {font-size: 1.0em;}
</style>

<script defer>
ready(function() {



    var utils = Vizabi.utils;

    //extend the base Tool class and register it in Vizabi tools under a name 'DunutChart'
    Vizabi.Tool.extend('myBarChart', {

      //Run when the tool is created
      init: function(placeholder, external_model) {

        this.name = "myBarChart";

        this.components = [{
          component: 'myBarChartComponent',
          placeholder: '.vzb-tool-viz',
          model: ["state.time", "state.marker", "state.entities"]
        }, {
          component: 'timeslider',
          placeholder: '.vzb-tool-timeslider',
          model: ["state.time", "state.entities", "state.marker", "ui"]
        }];

        this._super(placeholder, external_model);
      }

    });

    //DONUT CHART COMPONENT
    Vizabi.Component.extend('myBarChartComponent', {

      init: function(config, context) {
        var _this = this;

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

        //bind the function updateTime() to the change of time value in the model
        this.model_binds = {
          "change:time:value": function(evt) {
            if(!_this._readyOnce) return;
	        _this.redraw();				
          }
        };

        //call the prototype constructor of the component
        this._super(config, context);
      },

      /**
       * DOM is ready and the model is ready -- happens once on the load and never again
       */
      readyOnce: function() {
        var _this = this;

        //link DOM elements to the variables
        this.element = d3.select(this.element)
        this.svgEl = this.element.select("svg").append("g");
        
        this.KEY = this.model.entities.getDimension();

        //run a startup sequence
        this.update();
        this.redraw();
      },

      /**
       * Populate the visuals according to the number of entities
       */
      update: function() {

        //fetch an array of keys from marker model and attach them to DOM elements 
        this.keys = this.model.marker.getKeys();
        this.bars = this.svgEl.selectAll('rect').data(this.keys);

        //exit and enter DOM elements
        this.bars.exit().remove();
        this.bars.enter().append("rect");
        
        //fetch the scales for axis and color
        this.scaleAxis = this.model.marker.axis.getScale();
        this.scaleColor = this.model.marker.color.getScale();
      },

      /**
       * Updates the visuals
       */
      redraw: function() {
        var _this = this;
        var height = parseInt(this.element.style("height"));
        var widthOne = parseInt(this.element.style("width")) / _this.keys.length;
        
        this.scaleAxis.range([height, 0]);

        //request the values for the current time from the model
        this.values = this.model.marker.getFrame(_this.model.time.value, (frame) => {
        
          _this.svgEl.selectAll('rect')
            .attr("width", widthOne / 2)
            .attr("x", (d,i) => widthOne * i)
            .attr("height", height)
            .attr("y", (d) => _this.scaleAxis(frame.axis[d[_this.KEY]] || 0))
            .attr("fill", (d) => _this.scaleColor(frame.color[d[_this.KEY]]) || "transparent")

        });
      },
      
      resize: function() {
        if(!this._readyOnce) return;
        this.redraw();
      }

    });


    var config = {
          state: {
        time: {
          dim: "time"
        },
        entities: {
          dim: "geo",
          show: {
           category: "country"
          }
        },
        marker: {
          space: ["entities", "time"],
          label: {
            use: "property",
            which: "geo"
          },
          axis: {
            use: "indicator",
            which: "LEX"
          },
          color: {
            use: "property",
            which: "world_region"
          }
        }
      },
      locale: {
        id: "en",
        filePath: "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/dist/assets/translation/"
      },
      ui: {},
    
      data: {
        reader: 'csv',
        path: '//raw.githubusercontent.com/vizabi/vizabi-preview/master/src/data/waffles/basic-indicators.csv'
      }
    
    }

    //point to the data and append the Vizabi DonutChart to 'placeholder' div
    Vizabi('myBarChart', document.getElementById('donut-chart-placeholder'), config);

});


</script>

<!--more-->

## Skeleton

We start with a skeleton like this:

{% highlight html %}
<!DOCTYPE html>
<meta charset="utf-8">
<body>
<link rel="stylesheet" type="text/css" href="http://static.gapminderdev.org/vizabi/develop/dist/vizabi.css">
<div id='placeholder' style='width: 600px; height: 400px'></div>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://static.gapminderdev.org/vizabi/develop/dist/vizabi.js"></script>
<script>

    //here goes all the code

</script>
</body>
{% endhighlight %}

## Creating a tool

Let's start from a tool.

We extend the base Tool class and register it in Vizabi tools collection under a name 'DonutChart'. The new tool will only have "init" method, here is the outline:

{% highlight javascript %}
    Vizabi.Tool.extend('DonutChart', {

        //Run when the tool is created
        init: function(config, options) {

            this.name = "barchart";

            this.components = [
                // ...
                // put components here
                // ...
            ];

            this.default_options = {
                // ...
                // put default options here
                // ...
            };

            //constructor is the same as any tool
            this._super(config, options);
        }
    });
{% endhighlight %}

## Including a component
Let's include a time slider component. First we choose which component to use, by providing its name. Once Vizabi is defined, we can stop on a breakpoint and check Vizabi.Component.getCollection() to see which components are available.

Then we give a placeholder selector, if we need the component to be rendered on screen somewhere (these placeholdes are defined by the template in Tool.js).

Finally, we list the models our component should have access to. The result would be:

{% highlight javascript %}
this.components = [{
    component: 'timeslider',
    placeholder: '.vzb-tool-timeslider',
    model: ["state.time"]
}];
{% endhighlight %}

We will add one more component, our own 'donut'. It does not exist yet, but we will make it soon. Besides time it needs one more model, marker:

{% highlight javascript %}
this.components = [{
    component: 'donut',
    placeholder: '.vzb-tool-viz',
    model: ["state.time", "state.marker"]
}, {
    component: 'timeslider',
    placeholder: '.vzb-tool-timeslider',
    model: ["state.time"]
}];
{% endhighlight %}

## Default options
These are the parameters and state settings that would be set if they are not provided in the URL or by the container page.

We set time to have the range of 1990-2012 years, with the deafult position at 2000. We let entities include all ("*") geo's of category "regions", which is equivalent to explicitly writing 'geo: ["asi", "ame", "eur", "afr"]'.

{% highlight javascript %}

this.default_options = {
    state: {
        time: {
            start: "1990",
            end: "2012",
            value: "2000"
        },
        entities: {
            show: {
                dim: "geo",
                filter: {
                    _defs_: {
                        "geo": ["*"],
                        "geo.category": ["region"]
                    }
                }
            }
        },
        marker: {
            space: ["entities", "time"],
            label: {
                use: "property",
                which: "geo.name"
            },
            axis: {
                use: "indicator",
                which: "sg_population"
            },
            color: {
                use: "property",
                which: "geo.region"
            }
        }
    },

    //default language. Let's keep it minimal for now
    language: {
        id: "en"
    }
};
{% endhighlight %}

Markers correspond to visual dimensions we want to show. We have label, axis and color which would handle the data magic and give us labels, population and color of regions at any point of time.

Finally, we include language pointer "en". The meaning is that you would have language strings here as well, but we skip it for now.

And the tool is done.


## Creating a component
As with the tool, let's start from an outline

{% highlight javascript %}
Vizabi.Component.extend('donut', {

    init: function(config, context) {
        // ...
        // happens once when component is created, before model or DOM are ready
        // ...
    },

    readyOnce: function() {
        // ...
        // happens once on the load when both DOM and MODEL are ready
        // ...
    },

    updateEntities: function(){
        // ...
        // populate the visuals according to the number of entities
        // ...
    },

    update: function() {
        // ...
        // updates the visuals for the new time value
        // ...
    },

    resize: function() {
        // ...
        // executes every time the container or vizabi is resized
        // ...
    }

});
{% endhighlight %}

## Component.init
The init function will have the following:

{% highlight javascript %}
init: function(config, context) {
    var _this = this;

    this.name = 'barchart';

    //provide the template as a string
    this.template = '<div class="vzb-barchart"><svg class="vzb-barchart-svg"></svg></div>';

    //define expected models for this component
    this.model_expects = [
        {name: "time", type: "time"},
        {name: "marker", type: "model"}
    ];

    //bind the function update() to the change of time value in the model
    this.model_binds = {
        "change:time:value": function(evt) {
            //fetch the time from the model and update the text on screen
            _this.time = _this.model.time.value;
            _this.yearEl.text(_this.timeFormatter(_this.time));
            _this.redraw();
        }
    };

    //call the prototype constructor of the component
    this._super(config, context);

    //init variables for d3 pie layout
    this.colorScale = null;
    this.arc = d3.svg.arc();
    this.pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.population; });
},
{% endhighlight %}

## Component.readyOnce
This function is only called once after the data model and the dom are both ready for the first time. This allows to do the preparations before kicking off the startup sequence.

{% highlight javascript %}
readyOnce: function() {
    var _this = this;

    //link DOM elements to the variables
    this.element = d3.select(this.element)
    this.svgEl = this.element.select("svg").append("g");
    this.yearEl = this.svgEl.append("text").attr("class", "year");
    this.titleEl = this.svgEl.append("text").attr("class", "title");

    //bind the resize() and update() events to container resize
    this.on("resize", function() {
        _this.resize();
        _this.redraw();
    });

    //run a startup sequence
    this.resize();
    this.update();
    this.redraw();
},
{% endhighlight %}

## Component.resize
This function is called every time when the container is resized and allows the responsive behavior.

{% highlight javascript %}
resize: function() {

    var height = parseInt(this.element.style("height"));
    var width = parseInt(this.element.style("width"));
    var min = Math.min(height, width);

    this.svgEl.attr("transform","translate("+(width/2)+","+(height/2)+")");
    this.titleEl.attr("y", "-0.1em");
    this.yearEl.attr("y", "0.1em");

    this.arc
        .outerRadius(min/2 * 0.9)
        .innerRadius(min/2 - min * 0.1)
}
{% endhighlight %}

## Component.update
This function updates everything that depends on the state parameters except the current time. It should be not exec

{% highlight javascript %}
update: function(){
    this.timeFormatter = d3.time.format(this.model.time.formatInput);
    this.colorScale = this.model.marker.color.getScale();

    this.titleEl.text("Population");
    this.items = this.model.marker.label.getItems();

    this.entities = this.svgEl.selectAll('.vzb-dc-entity')
        .data(this.items);

    //exit selection
    this.entities.exit().remove();

    //enter selection
    this.entities
        .enter().append("g")
        .attr("class", "vzb-dc-entity")
        .each(function(){
        d3.select(this).append("path");
        d3.select(this).append("text").attr("class","label");
    });
}
{% endhighlight %}

## Component.redraw
This function requests the data for the current time point and updates the visuals

{% highlight javascript %}
redraw: function() {
    var _this = this;

    //prepare the data and request the values for the current time from the model
    var data = utils.clone(this.items);

    data.forEach(function(d){
        d.pop = _this.model.marker.axis.getValue({geo: d.geo, time: _this.time});
        d.color = _this.model.marker.color.getValue({geo: d.geo, time: _this.time});
        d.label = _this.model.marker.label.getValue({geo: d.geo, time: _this.time});
    });

    data = this.pie(data);

    //set the properties of the donuts and text labels
    this.entities
        .data(data)
        .select("path")
        .attr("d", this.arc)
        .style("fill", function(d) { return _this.colorScale(d.data.color) })
        .style("stroke", "white")

    this.entities
        .select("text")
        .attr("transform", function(d) { return "translate(" + _this.arc.centroid(d) + ")"; })
        .text(function(d) { return d.data.label; });
}
{% endhighlight %}



## Responsiveness in CSS
Here we added some additional styling to make the chart look good. Note how profiles large, medium and small are applied to change the font size.

{% highlight css %}
.vzb-barchart{
    position: absolute;
    top: 0px; left: 0px; rigth: 0px; bottom: 0px;
    font-family: 'Arial Rounded MT Bold', Arial, sans-serif;
    width: 100%; height: 100%;
}
.vzb-barchart svg{width:100%; height:100%}

.vzb-barchart text {text-anchor: middle; fill: rgb(96, 120, 137)}

.vzb-barchart .year {dominant-baseline: hanging; fill: #DDD;}

.vzb-large .vzb-barchart .year{font-size: 4.0em;}
.vzb-large .vzb-barchart .title{font-size: 2.0em;}
.vzb-large .vzb-barchart .label{font-size: 1.2em;}

.vzb-medium .vzb-barchart .year {font-size: 4.0em;}
.vzb-medium .vzb-barchart .title {font-size: 2.0em;}
.vzb-medium .vzb-barchart .label {font-size: 1.2em;}

.vzb-small .vzb-barchart .year {font-size: 4.0em;}
.vzb-small .vzb-barchart .title {font-size: 2.0em;}
.vzb-small .vzb-barchart .label {font-size: 1.0em;}
{% endhighlight %}



## Appending Vizabi tool to a DOM element
Finally we need to point our tool to the data and append it to 'placeholder' div element:

{% highlight javascript %}
Vizabi('DonutChart', document.getElementById('placeholder'),
    {data: { reader: 'csv', path: 'https://dl.dropboxusercontent.com/u/4933279/Gapminder/waffles/en/basic-indicators.csv' }}
);
{% endhighlight %}


With that, the donut chart is finished.
