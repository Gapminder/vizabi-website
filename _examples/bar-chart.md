---
layout: example
title: Bar Chart
---

##Example {{page.title}}

<div id='placeholder' class='example-placeholder' style="width: 720px; height: 500px; padding-top: 0px;"></div>

---

###Code snippet

{% highlight html %}
<div id='placeholder' width="600px" height="400px"></div>
<script>
Vizabi('BarChart', document.getElementById('placeholder'), {
	state: {
        time: {
            start: '1990',
            end: '2014',
            value: '2000'
        },
        marker: {
            axis_y: {
                use: 'indicator',
                which: 'life_expectancy_years',
                min: 75,
                max: 83,
                scaleType: 'linear'
            },
            axis_x: {
                use: 'property',
                which: 'geo.name'
            },
            color: {
                use: 'property',
                which: 'geo.name'
            }
        },
        entities: {
            show: {
                geo: [
                    'swe',
                    'usa',
                    'nor',
                    'can'
                ]
            }
        }
    },
    data: {
        reader: 'csv',
        path: '/path/to/your/file.csv'
    }
});
</script>
{% endhighlight %}

<script defer>
Vizabi('BarChart', document.getElementById('placeholder'), {
    state: {
        time: {
			start: '1990',
			end: '2014',
            value: '2000'
        },
        marker: {
            axis_y: {
                use: 'indicator',
                which: 'life_expectancy_years',
                min: 75,
                max: 83,
                scaleType: 'linear'
            },
            axis_x: {
                use: 'property',
                which: 'geo.name'
            },
            color: {
                use: 'property',
                which: 'geo.name'
            }
        },
        entities: {
            show: {
                geo: [
                    'swe',
                    'usa',
                    'nor',
                    'can'
                ]
            }
        }
    },
    data: {
        reader: 'csv',
        path: '/preview/data/waffles/basic-indicators.csv'
    },
    ui: {
      buttons: [],
      dialogs: {
        popup: []
      }
    }
});
</script>
