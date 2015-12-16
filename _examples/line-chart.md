---
layout: example
title: Line Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder' width="600px" height="400px"></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
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
          which: "gdp_pc",
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
          which: "gdp_pc",
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
        path: '/preview/data/waffles/dont-panic-poverty.csv'
    }
});
</script>