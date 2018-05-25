var container = document.getElementById('start-splash-bubbles');
var container_width = container.offsetWidth;
var container_height = container.offsetHeight;

var sketch = function(s) {

  var time, theta = 0;
  var frames = 2400;
  var num = 100;
  var rs;

  s.setup = function() {
    s.createCanvas(container_width, container_height);
    s.smooth(8);
    s.noStroke();
    rs = s.random(10000);

    window.onresize = function() {
      container_width = container.offsetWidth;
      container_height = container.offsetHeight;
      s.createCanvas(container_width, container_height);
    }
  };

  s.draw = function() {
    s.randomSeed(rs);
    s.background("#58A1CE");
    time = (s.frameCount % frames) / s.float(frames);

    for (var i = 0; i < num; i++) {
      drawBubble(i);
    }
    theta += s.TWO_PI / frames;
  };

  function drawBubble(i) {
    var x = s.random(s.width);
    var y = s.random(s.height);
    var sc = s.random(1, 3);
    var rotation = s.random(-.01, 0.1);
    var m = s.map(s.sin(theta + (s.TWO_PI / num) * i), -1, 1, .5, 1);
    var sz = s.random(20, 70) * m;
    s.push();
    s.scale(sc);
    s.translate((x + s.frameCount) % s.width, y % s.height);
    s.rotate(rotation);
    s.fill('rgba(255, 255, 255, 1)');
    if (s.random(1) > .7) s.fill('rgba(55,55,55, 1)');
    if (s.random(1) > .8) s.fill('rgba(0, 0, 0, 1)');
    s.ellipse(0, -time * s.height + s.height, sz, sz);
    s.ellipse(0, -time * s.height, sz, sz);
    s.pop();
  }

};

var bubbles = new p5(sketch, 'start-splash-bubbles');

//hotfix: prevent vizabi from loading on phone - initial screen
if (window && window.outerWidth && window.outerWidth > 700) {
  var wsReader = WsReader.WsReader.getReader();
  Vizabi.Reader.extend("waffle", wsReader);

  var viz = Vizabi('BubbleChart', document.getElementById('embeddable-container'), {
    "chart": {
      "trails": true,
      "lockNonSelected": 0
    },
    "state": {
      "entities": {
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
      "time": {
        "startOrigin": "1800",
        "endOrigin": "2015",
        "value": "2015",
        "dim": "time"
      },
      "marker": {
        "space": ["entities", "time"],
        "label": {
          "use": "property",
          "which": "name"
        },
        "axis_y": {
          "use": "indicator",
          "which": "life_expectancy_years",
          "zoomedMin": 19,
          "zoomedMax": 86,
          "domainMin": 0,
          "domainMax": 100
        },
        "axis_x": {
          "use": "indicator",
          "scaleType": "log",
          "domainMax": 150000,
          "domainMin": 300,
          "zoomedMax": 150000,
          "zoomedMin": 300,
          "which": "income_per_person_gdppercapita_ppp_inflation_adjusted"
        },
        "size": {
          "use": "indicator",
          "which": "population_total",
          "domainMin": 15,
          "domainMax": 1400000000,
          "scaleType": "linear",
          "allow": {
            "scales": ["linear"]
          }
        },
        "color": {
          "use": "property",
          "which": "world_4region",
          "scaleType": "ordinal",
          "syncModels": ["marker_colorlegend"]
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
      },
      "splash": true
    },
    "data": {
      "reader": "waffle",
      "path": "https://waffle-server.gapminder.org/api/ddf/ql"
    },
    "locale": {
      "filePath": "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/assets/translation/"
    },
    bind: {
      ready: function() {
        setTimeout(function() {
          viz.setModel({
            state: {
              time: {
                playing: true
              }
            }
          });
        }, 25);
      }
    }
  });

  var embeddable = document.getElementById('embeddable-container');
  var close_btn = document.getElementById('close-embeddable');

  embeddable.addEventListener('click', function(e) {
    addClass(document.body, 'is-product-tour');
  });

  close_btn.addEventListener('click', function(e) {
    removeClass(document.body, 'is-product-tour');
    e.preventDefault();
  });
}
