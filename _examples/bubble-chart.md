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
            value: '1950',
            start: '1800',
            end: '2015'
        },
        marker: {
            space: [
                'entities',
                'time'
            ],
            type: 'geometry',
            shape: 'circle',
            label: {
                use: 'property',
                which: 'geo.name'
            },
            axis_y: {
                use: 'indicator',
                which: 'u5mr',
                scaleType: 'linear'
            },
            axis_x: {
                use: 'indicator',
                which: 'gdp_pc',
                scaleType: 'log'
            },
            color: {
                use: 'property',
                which: 'geo.name',
                scaleType: 'ordinal',
                allow: {
                    names: [
                        '!geo.name'
                    ]
                }
            }
        }
    },
    ui: {
        buttons: ['find', 'size', 'fullscreen']
    },
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
        end: '2015',
        round: "ceil",
        trails: true,
        lockNonSelected: 0,
        adaptMinMaxZoom: false
      },
      entities: {
        dim: "geo",
        show: {
          _defs_: {
            "geo": ["*"],
            "geo.cat": ["country"]
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
            use: "indicator",
            which: "u5mr"
          },
          axis_x: {
            use: "indicator",
            which: "gdp_pc"
          },
          color: {
            use: "property",
            which: "geo.region"
          },
          size: {
            use: "indicator",
            which: "pop"
          }
        }
      },
      data: {
        //reader: "waffle",
        reader: "csv",
        path: "/preview/data/waffles/dont-panic-poverty.csv"
      },
    ui: {
        presentation: true
    }
});
</script>
