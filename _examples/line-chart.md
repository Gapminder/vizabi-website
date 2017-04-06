---
layout: example
title: Line Chart
---

##Example {{page.title}}

<div id="placeholder" class="example-placeholder" style="width:740px; height:500px; padding-top:0;"></div>

---

###Code snippet

{% highlight html %}
<div id="placeholder" width="650px" height="400px"></div>
<script>
var wsReader = new WSReader.WSReader().getReader();
Vizabi.Reader.extend("waffle", wsReader);

Vizabi._globals.ext_resources = {
  host: "https://waffle-server.gapminder.org",
  preloadPath: "/api/vizabi/",
  dataPath: "/api/ddf/",
  shapePath: "/preview/data/mc_precomputed_shapes.json"
};

Vizabi("LineChart", document.getElementById("placeholder"), {
  "state": {
    "time": {
      "startOrigin": "1800",
      "endOrigin": "2015",
      "value": "2015",
      "dim": "time"
    },
    "entities": {
      "dim": "geo",
      "show": {
        "is--country": true
      }
    },
    "entities_allpossible": {
      "dim": "geo",
      "show": {
        "is--country": true
      }
    },
    "entities_colorlegend": {     
      "dim": "world_4region"
    },
    "entities_tags": {
      "dim": "tag"
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker": {
      "space": ["entities", "time"],
      "opacityRegular": 0.8,
      "label": {
        "use": "property",
        "which": "name"
      },
      "axis_y": {
        "use": "indicator",
        "which": "population_total",
        "scaleType": "linear"
      },
      "axis_x": {
        "use": "indicator",
        "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
        "scaleType": "log",
        "domainMin": 0.11,
        "domainMax": 500,
        "tailFatX": 1.85,
        "tailCutX": 0.2,
        "tailFade": 0.7,
        "xScaleFactor": 1.039781626,
        "xScaleShift": -1.127066411
      },
      "axis_s": {
        "use": "indicator",
        "which": "gapminder_gini",
        "scaleType": "linear"
      },
      "color": {
        "use": "property",
        "which": "world_4region",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend", "stack", "group"]
      },
      "stack": {
        "use": "constant",
        "which": "all"
      },
      "group": {
        "use": "property",
        "which": "world_4region",
        "merge": false
      }
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "opacityRegular": 0.8,
      "opacityHighlightDim": 0.3, 
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
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_parent": {
        "use": "property",
        "which": "parent"
      }
    }
  },
  "ui": {
    "datawarning": {
      "doubtDomain": [1800, 1950, 2015],
      "doubtRange": [1.0, 0.8, 0.6]
    },
    "splash": true
  },
  data: {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  },
  "locale": {
    "filePath": "/preview/data/translation/"
  },
});
</script>
{% endhighlight %}

<script defer>
var wsReader = new WSReader.WSReader().getReader();
Vizabi.Reader.extend("waffle", wsReader);

Vizabi._globals.ext_resources = {
  host: "https://waffle-server.gapminder.org",
  preloadPath: "/api/vizabi/",
  dataPath: "/api/ddf/",
  shapePath: "/preview/data/mc_precomputed_shapes.json"
};

Vizabi("LineChart", document.getElementById("placeholder"), {
  "state": {
    "time": {
      "startOrigin": "1800",
      "endOrigin": "2015",
      "value": "2015",
      "dim": "time"
    },
    "entities": {
      "dim": "geo",
      "show": {
        "geo": { "$in": ["usa", "rus", "chn", "nga"] }
      }
    },
    "entities_colorlegend": { 
      "dim": "world_4region"
    },
    "marker": {
      "space": ["entities", "time"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "axis_y": {
        "use": "indicator",
        "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
        "scaleType": "log"
      },
      "axis_x": {
        "use": "indicator",
        "which": "time",
        "scaleType": "time"
      },
      "color": {
        "use": "property",
        "which": "world_4region",
        "scaleType": "ordinal",
        "allow": {
          "scales": ["ordinal"]
        },
        "syncModels": ["marker_colorlegend"]
      }
    },
    "entities_allpossible": {
      "dim": "geo",
      "show": {
        "is--country": true
      }
    },
    "entities_tags": {
      "dim": "tag"
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "opacityRegular": 0.8,
      "opacityHighlightDim": 0.3, 
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
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_parent": {
        "use": "property",
        "which": "parent"
      }
    }
  },
  "ui": {
    "datawarning": {
      "doubtDomain": [1800, 1950, 2015],
      "doubtRange": [1.0, 0.3, 0.2]
    }
  },
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  },
  "locale": {
    "filePath": "/preview/data/translation/"
  },
});
</script>
