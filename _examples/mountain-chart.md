---
layout: example
title: Mountain Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder'  style="width:720px; height:500px; padding-top:0;"></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('MountainChart', document.getElementById('placeholder'),
    state: {
        time: {
            value: "1950",
            start: "1800",
            end: "2015"
        },
        marker: {
            label: {
                "use": "property",
                "which": "geo.name"
            },
            axis_y: {
              "use": "indicator",
              "which": "pop",
              "scaleType": "linear"
            },
            axis_x: {
                "use": "indicator",
                "which": "gdp_p_cap_const_ppp2011_dollar",
                "scaleType": "log"
            },
            size: {
                "use": "indicator",
                "which": "gini",
                "scaleType": "linear"
            },
            color: {
                "use": "property",
                "scaleType": "ordinal",
                "which": "geo.name",
                "allow": {
                    "names": [
                        "!geo.name"
                    ]
                }
            }
        }
    },
    ui: {
        buttons: ['find', 'colors', 'stack', 'axes-mc', 'fullscreen'],
        buttons_expand: []
    },
    data: {
        reader: 'csv',
        path: '/path/to/your/file.csv'
    }
);
</script>
{% endhighlight %}

<script defer>
Vizabi('MountainChart', document.getElementById('placeholder'), {
    state: {
        time: {
            value: "1950",
            start: "1800",
            end: "2015"
        },
        marker: {
            label: {
                "use": "property",
                "which": "geo.name"
            },
            axis_y: {
              "use": "indicator",
              "which": "sg_population",
              "scaleType": "linear"
            },
            axis_x: {
                "use": "indicator",
                "which": "sg_gdp_p_cap_const_ppp2011_dollar",
                "scaleType": "log"
            },
			axis_s: {
				"use": "indicator",
				"which": "sg_gini",
				"scaleType": "linear"
			},
            size: {
                "use": "indicator",
                "which": "sg_gini",
                "scaleType": "linear"
            },
            color: {
                "use": "property",
                "scaleType": "ordinal",
                "which": "geo.name",
                "allow": {
                    "names": [
                        "!geo.name"
                    ]
                }
            }
        }
    },
    data: {
        reader: 'csv',
        path: '/preview/data/waffles/dont-panic-poverty.csv'
    },
    ui: {
      buttons: [],
      dialogs: {
        popup: []
      }
    }
});
</script>
