---
layout: example
title: Bubble Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder'></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	state: {
		time: {
			value: '2010'
		}
	},
	ui: {
		buttons: ['find', 'size', 'fullscreen']
	}
});
</script>
{% endhighlight %}

<script defer>
Vizabi('BubbleChart', document.getElementById('placeholder'), {
state: {
  "time": {
    "value": "2010"
  },
  "marker": {
    "space": [
      "entities",
      "time"
    ],
    "type": "geometry",
    "shape": "circle",
    "label": {
      "use": "property",
      "which": "geo.name"
    },
    "axis_y": {
      "use": "indicator",
      "which": "lex"
    },
    "axis_x": {
      "use": "indicator",
      "which": "gdp_per_cap"
    },
    "size": {
      "use": "indicator",
      "min": 0.04,
      "max": 0.9,
      "which": "pop",
      "scaleType": "log",
      "allow": {
        "scales": [
          "linear",
          "log"
        ]
      }
    }
  },
  "entities": {
    "show": {
      "geo": [
        "*"
      ],
      "geo.cat": [
        "country"
      ]
    },
    "select": [],
    "highlight": [],
    "opacitySelectDim": 0.3,
    "opacityRegular": 1,
    "needUpdate": {},
    "dim": "geo"
  }
},
ui: {
	buttons: ['find', 'size', 'fullscreen']
},
data: { reader: 'csv', path: '/preview/data/waffles/basic-indicators.csv'
}});
</script>