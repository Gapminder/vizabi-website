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
            "dim": "time",
            "value": "2000",
            "start": "1800",
            "end": "2015",
            "playable": true,
            "playing": false,
            "loop": false,
            "round": "round",
            "delay": 250,
            "delayAnimations": 250,
            "delayStart": 1200,
            "delayEnd": 75,
            "delaySet": false,
            "unit": "year",
            "step": 1,
            "adaptMinMaxZoom": false,
            "formatInput": "%Y",
            "formatOutput": "%Y",
            "xLogStops": [],
            "yMaxMethod": "latest",
            "record": false,
            "probeX": 0,
            "tailFatX": 1,
            "tailCutX": 0,
            "tailFade": 1,
            "xScaleFactor": 1,
            "xScaleShift": 0,
            "xPoints": 50,
            "trails": true,
            "lockNonSelected": 0
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
                "which": "u5mr",
                "min": null,
                "max": null,
                "fakeMin": null,
                "fakeMax": null,
                "scaleType": "linear",
                "allow": {
                    "scales": [
                        "linear",
                        "log"
                    ]
                }
            },
            "axis_x": {
                "use": "indicator",
                "which": "gdp_pc",
                "min": null,
                "max": null,
                "fakeMin": null,
                "fakeMax": null,
                "scaleType": "log",
                "allow": {
                    "scales": [
                        "linear",
                        "log"
                    ]
                }
            },
            "color": {
                "use": "property",
                "palette": {
                    "asi": "#FF5872",
                    "eur": "#FFE700",
                    "ame": "#7FEB00",
                    "afr": "#00D5E9",
                    "_default": "#ffb600"
                },
                "which": "geo.name",
                "scaleType": "ordinal",
                "allow": {
                    "names": [
                        "!geo.name"
                    ]
                }
            },
            "size": {
                "use": "indicator",
                "min": 0.04,
                "max": 0.9,
                "which": "pop",
                "scaleType": "linear",
                "allow": {
                    "scales": [
                        "linear",
                        "log"
                    ]
                }
            }
        }
    },
    ui: {
        buttons: ['find', 'size', 'fullscreen']
    },
    data: {
        reader: 'csv', path: '/preview/data/waffles/dont-panic-poverty.csv'
    }
});
</script>