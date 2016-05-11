---
layout: example
title: Line Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder' style="width:740px; height:500px; padding-top:0;"></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="650px" height="400px"></div>
<script>
Vizabi('LineChart', document.getElementById('placeholder'), {
    state: {
      time: {
        value: "1950",
        start: "1800",
        end: "2015"
      },
      marker: {
        label: {
          use: "property",
          which: "geo.name"
        },
        axis_y: {
          use: "indicator",
          which: "sg_gdp_p_cap_const_ppp2011_dollar",
          scaleType: "log"
        },
        axis_x: {
          use: "indicator",
          which: "time",
          scaleType: "time"
        },
        color: {
          use: "property",
          scaleType: "ordinal",
          which: "geo.name"
        }
      }
    },
    ui: {
        buttons: ['find', 'colors']
    },
    data: {
        reader: 'csv',
        path: '/path/to/your/file.csv'
    }
});
</script>
{% endhighlight %}

<script defer>
Vizabi('LineChart', document.getElementById('placeholder'), {
    state: {
      time: {
        value: "1950",
        start: "1800",
        end: "2015"
      },
      marker: {
        label: {
          use: "property",
          which: "geo.name"
        },
        axis_y: {
          use: "indicator",
          which: "sg_gdp_p_cap_const_ppp2011_dollar",
          scaleType: "log"
        },
        axis_x: {
          use: "indicator",
          which: "time",
          scaleType: "time"
        },
        color: {
          use: "property",
          scaleType: "ordinal",
          which: "geo.name"
        }
      }
    },
    ui: {
      buttons: [],
      dialogs: {
        popup: []
      }
    },
    data: {
        reader: 'csv',
        path: '/preview/data/waffles/dont-panic-poverty.csv'
    }
});
</script>
