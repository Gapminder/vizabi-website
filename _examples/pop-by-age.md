---
layout: example
title: Pop By Age
---

##Example {{page.title}}

<div id="placeholder" class="example-placeholder" style="width: 720px; height: 500px; padding-top: 0px;"></div>

---

###Code snippet

{% highlight html %}
<div id="placeholder" width="600px" height="400px"></div>
<script>
Vizabi("PopByAge", document.getElementById("placeholder"), {
	state: {
		marker: {
			axis_y: {
					use: "indicator",
					which: "age"
			},
			axis_x: {
					use: "indicator",
					which: "sg_population"
			}
		}
	},
	data: {
		reader: "csv",
		path: "/path/to/your/file.csv"
	},
	ui: {
		buttons: [],
		dialogs: {
			popup: []
		}
	}

	});
</script>
{% endhighlight %}

<script defer>
Vizabi("PopByAge", document.getElementById("placeholder"), {
  "state": {
    "time": {
      "step": 1,
      "delayThresholdX2": 0,
      "delayThresholdX4": 0,
      "immediatePlay": true,
      "delay": 1000,
      "dim": "year"
    },
    "entities": {
      "dim": "geo",
      "show": {
        "is--world_4region": true
      }
    },
    "entities_colorlegend": {
      "dim": "geo",
      "show": {
        "is--world_4region": true
      }
    },
    "entities_age": {
      "dim": "age",
      "show": {
        "age": {
          "$nin": ["80plus","100plus"]
        }
      },
      "grouping": 1
    },
    "entities_side": {
      "dim": "gender",
      "skipFilter": true
    },
    "marker": {
      "space": ["entities", "time", "entities_side", "entities_age"],
      "label_stack": {
        "use": "property",
        "spaceRef": "entities",
        "which": "name"
      },
      "label_side": {
        "use": "property",
        "spaceRef": "entities_side",
        "which": "name"
      },
      "axis_y": {
        "use": "property",
        "which": "age",
        "spaceRef": "entities_age",
        "domainMax": 100,
        "domainMin": 0,
        "_important": false
      },
      "axis_x": {
        "use": "indicator",
        "which": "population"
      },
      "color": {
        "use": "property",
        "which": "world_4region",
        "scaleType": "ordinal",
        "spaceRef": "entities",
        "allow": {
          "scales": ["ordinal"]
        },
        "syncModels": ["marker_colorlegend"]
      },
      "side": {
        "use": "property",
        "which": "gender",
        "spaceRef": "entities_side",
        "allow": {
          "scales": ["ordinal"]
        }
      }
    },
    "entities_allpossible": {
      "dim": "geo",
      "show": {
        "is--world_4region": true
      }
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "entities_allpossibleside": {
      "dim": "gender"
    },
    "marker_allpossibleside": {
      "space": ["entities_allpossibleside"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_rank": {
        "use": "property",
        "which": "rank"
      },
      "hook_geoshape": {
        "use": "property",
        "which": "shape_lores_svg"
      }
    },
    "entities_tags": { },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {},
      "hook_parent": {}
    }
  },
  "ui": {
    "splash": true
  },
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-dev.gapminderdev.org/api/ddf",
    "dataset": "open-numbers/ddf--gapminder--population"
  },
  "locale": {
    "filePath": "/preview/data/translation/"
  },
});
</script>
