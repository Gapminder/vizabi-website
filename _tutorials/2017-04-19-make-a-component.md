---
layout: post
title:  "Make a component for Vizabi"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Make a component for Vizabi"
  subtitle="A new visual method"
  badge="hard"
%}
<!--more-->
<script >
function openComponentModelExample() {
  viewOnCodepen("Component-Model", "var TimeModel=Vizabi.Model.extend('mytime',{init:function(values,parent,bind){this._type='time';values=Vizabi.utils.extend({value:1800,start:1800,end:2015},values);this._super(values,parent,bind)}});var YearDisplay=Vizabi.Component.extend({init:function(config,parent){this.name='year-display';this.template='<h2><%= time %></h2>';this.model=new TimeModel();this.template_data={time:this.model.value};this._super(config,parent);var _this=this;this.model.on({'change':function(){_this.update()}})},update:function(evt){this.element.innerHTML=this.model.value}});var component=new YearDisplay({placeholder:document.getElementById('placeholder')});component.render();component.model.value=2012;");
}
</script>

Base class for components. It extends `Vizabi.Events`. You may think of `Vizabi.Component` similar to a Controller-View. Components can be rendered to a DOM element and have support for templating and model binding.

The following example shows a very simple component implementation:

{% highlight javascript %}
// create a new component fo year display
var YearDisplay = Vizabi.Component.extend({
  init: function(config, parent) {
    this.name = "year-display";
    this.template = '<h2><%= time %></h2>';
    this.template_data = { time: "2012" };
    this._super(config, parent);
  }
});

var component = new YearDisplay({
  placeholder: document.getElementById("placeholder")
});

component.render();

/*
 * at this point, #placeholder should contain the following html:
 * <h2>2012</h2>
 */
{% endhighlight %}

Components may also be registered if reusable. Example:

{% highlight javascript %}
Vizabi.Component.extend("year-display", {
  /* methods */
});
{% endhighlight %}

Vizabi comes with many built-in reusable components. You can find them under [`src/components`](https://github.com/Gapminder/vizabi/tree/develop/src/components){:target="_blank"}. All of them extend `Vizabi.Component`.


### Sub-components
Components may also instantiate subcomponents. Assuming `year-display` from the previous example is registered, we can create a new component that uses it.

{% highlight javascript %}
var CustomComponent = Vizabi.Component.extend({
  init: function(config, parent) {
    this.name = "my_component";
    this.template = '<div><div class="display"></div></div>';

    // "year-display" component will be rendered in the .display div
    this.components = [{
      component: "year-display",
      placeholder: ".display"
    }];

    this._super(config, parent);
  }
});

var component = new CustomComponent({
  placeholder: document.getElementById("placeholder")
});

component.render();

/*
 * at this point, #placeholder should contain the following html:
 * <div><div class="display"><h2>2012</h2></div></div>
 */
{% endhighlight %}

### Model binding

The following code is an example of model binding at a component level:

<p class="codepen">
    <a onclick="openComponentModelExample()" class="button code-btn">
        <i class="fa fa-codepen"></i> Codepen
    </a>
</p>

{% highlight javascript %}
// create a new model
var TimeModel = Vizabi.Model.extend("mytime", {
  init: function(values, parent, bind) {
    this._type = "time";
    // default values for time model
    values = Vizabi.utils.extend({
      value: 1800,
      start: 1800,
      end: 2015
    }, values);

    this._super(values, parent, bind);
  }
});

var YearDisplay = Vizabi.Component.extend({
  init: function(config, parent) {
    this.name = "year-display";
    this.template = '<h2><%= time %></h2>';
    this.model = new TimeModel();
    this.template_data = {
      time: this.model.value // value from model
    };
    this._super(config, parent);

    var _this = this;
    this.model.on({
      "change": function() {
        _this.update();
      }
    });
  },

  update: function() {
    this.element.innerHTML = this.model.value;
  }
});

var component = new YearDisplay({
  placeholder: document.getElementById("placeholder")
});

component.render();

/*
 * at this point, #placeholder should contain the following html:
 * <h2>1800</h2>
 */

component.model.value = 2012;

/*
 * at this point, #placeholder should contain the following html:
 * <h2>2012</h2>
 */
{% endhighlight %}

### Useful methods

Every `Vizabi.Component` has three special methods:

- **resize()**: called when the container detects a resize event
- **readyOnce()**: called only once when *both* compoment's DOM and model are ready
- **ready()**: called when DOM and model are ready (multiple times)

Since we know that the DOM is ready in these methods, we can use `this.element` to access the root node of the component's template and `this.placeholder` to access the placeholder node. Example:

{% highlight javascript %}
var myComponent = Vizabi.Component.extend({
  init: function(config, parent) {
    // ...
  },

  readyOnce: function(evt) {
    this.element.innerHTML = "Hello World";
  },

  ready: function(evt) {
    this.element.innerHTML = "I'm ready!";
  },

  resize: function(evt) {
    this.element.innerHTML = "I'm resizing!";
  }
});
{% endhighlight %}

And since we know that the model is ready in `readyOnce` and `ready`, we can use `this.model` to access its properties and data:

{% highlight javascript %}
var myComponent = Vizabi.Component.extend({
    init: function(config, parent) {
        // ...
    },

    ready: function(evt) {
        console.log(this.model);
    }
});
{% endhighlight %}

Checkout how Vizabi's timeslider component uses such methods [here](https://github.com/vizabi/vizabi/blob/develop/src/components/timeslider/timeslider.js){:target="_blank"}.

*Note that listening to the model's `ready` event is different than using the component's `ready()` method, because in the later, we ensure that the DOM is also ready, not only the model*