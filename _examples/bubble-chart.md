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
        path: '/preview/data/waffles/dont-panic-poverty.csv'
    }
});
</script>