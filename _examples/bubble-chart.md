---
layout: example
title: Bubble Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder' style="width: 720px; height: 500px; padding-top: 0px;"></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('BubbleChart', document.getElementById('placeholder'), {
	state: {
	  time: {
		value: '1900',
		start: '1800',
		end: '2015'
	  },
	  entities: {
		dim: "geo",
		show: {
		  _defs_: {
			"geo": ["*"],
			"geo.category": ["country"]
		  }
		},
		opacitySelectDim: .3,
		opacityRegular: 1,
		},
		marker: {
		  space: ["entities", "time"],
		  type: "geometry",
		  label: {
			use: "property",
			which: "geo.name"
		  },
		  axis_y: {
			  use: 'indicator',
			  which: 'sg_child_mortality_rate_per1000',
			  scaleType: 'linear'
		  },
		  axis_x: {
			  use: 'indicator',
			  which: 'sg_gdp_p_cap_const_ppp2011_dollar',
			  scaleType: 'log'
		  },
		  color: {
			use: "property",
			which: "geo.world_4region"
		  },
		  size: {
			use: "indicator",
			which: "sg_population"
		  }
		}
	  },
	  ui: {
		buttons: [],
		dialogs: {
		  popup: []
		}
	}
    data: {
        reader: 'csv',
        path: '/path/to/your/file.csv'
    }
});
</script>
{% endhighlight %}

<script defer>
Vizabi('BubbleChart', document.getElementById('placeholder'), {
    state: {
      time: {
        value: '1900',
        start: '1800',
        end: '2015'
      },
      entities: {
        dim: "geo",
        show: {
          _defs_: {
            "geo": ["*"],
            "geo.category": ["country"]
          }
        },
        opacitySelectDim: .3,
        opacityRegular: 1,
        },
        marker: {
          space: ["entities", "time"],
          type: "geometry",
          label: {
            use: "property",
            which: "geo.name"
          },
          axis_y: {
              use: 'indicator',
              which: 'sg_child_mortality_rate_per1000',
              scaleType: 'linear'
          },
          axis_x: {
              use: 'indicator',
              which: 'sg_gdp_p_cap_const_ppp2011_dollar',
              scaleType: 'log'
          },
          color: {
            use: "property",
            which: "geo.world_4region"
          },
          size: {
            use: "indicator",
            which: "sg_population"
          }
        }
      },
      data: {
        reader: "csv",
        path: "/preview/data/waffles/dont-panic-poverty.csv"
      },
      ui: {
        buttons: [],
        dialogs: {
          popup: []
        }
      }
});
</script>
