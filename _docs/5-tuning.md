---
title: Tuning
slug: tuning
---


## Colors

Vizabi tools are crafted to be highly customisable. You can enable or disable features and do all sorts of tuning. **Let's hack the color of regions.**

Vizabi Initialization:

{% highlight javascript %}
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	state: {
	    "marker": {
	        "color": {
	            "palette": {
	                "asi": "teal",
	                "ame": "limegreen",
	                "eur": "red",
	                "afr": "deepskyblue"
	            }
	        }
	    }
	}
});
{% endhighlight %}

This state &#8594; marker &#8594; color &#8594; palette sequence is rather obscure. Read the [bubble chart default state here](https://github.com/Gapminder/vizabi/blob/develop/src/tools/bubblechart/bubblechart-tool.js#L46) to see what is possible to change.

## Indicators

One strong side of Vizabi framework is that you can change the displayed indicators as easily as you change colors. Let's set X axis to show population and color to show life expectancy:

{% highlight javascript %}
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	state: {
        "marker": {
            "color": {
                "use": "indicator",
                "which": "lex"
            },
            "axis_x": {
                "use": "indicator",
                "which": "pop"
            }
        }
	}
});
{% endhighlight %}

## Entities

We can also select which entities will be visible on the chart. In the next example we make the graph display only the Nordics *and color them so that they look different*:

{% highlight javascript %}
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	state: {
	    "entities": {
	        "show": {
	            "filter": {
	                 "geo": [ "dnk", "fin", "isl", "nor", "swe"]
	             }
	        }
	    },
	    "marker": {
	        "color": {
	            "use": "property",
	            "which": "geo"
	        }
	    }
	}
});
{% endhighlight %}

## Language

Vizabi framework supports localisation. In the following example we switch the language to Swedish and provide a few language strings:

{% highlight javascript %}
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	language: {
        id: "se",
        strings: {
            se: {
                "title": "Bubblar titel",
                "indicator/lex": "Livslängd",
                "indicator/gdp_per_cap": "BNP per capita",
                "indicator/pop": "Befolkning",
                "indicator/geo.region": "Region",
                "indicator/geo": "Geo kod",
                "indicator/time": "Tid",
                "indicator/geo.category": "Geo kategori",
                "scaletype/linear": "Linjär",
                "scaletype/log": "Logaritmisk",
                "scaletype/time": "Tid",
              }
        }
    }
});
{% endhighlight %}

The same customization options (color, entities, indicator, language) also work for the other charts. Learn more about the available options for [line chart](https://github.com/Gapminder/vizabi/blob/develop/src/tools/linechart/linechart-tool.js#L45) or [bar chart](https://github.com/Gapminder/vizabi/blob/develop/src/tools/barchart/barchart-tool.js#L45).
