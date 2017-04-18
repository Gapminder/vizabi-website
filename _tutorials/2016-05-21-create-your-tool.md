---
layout: post
title:  "Test you config"
categories: tutorials
---

<div id="placeholder" class="example-placeholder"  style="width:720px; height:500px; padding-top:0;"></div>
<div id="config-explorer"></div>

<link rel="stylesheet" href="//static.gapminderdev.org/vizabi/develop/dist/vizabi.css" />
<link rel="stylesheet" href="//static.gapminderdev.org/vizabi-bubblechart/develop/dist/bubblechart.css" />

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
<script src="//static.gapminderdev.org/vizabi/develop/dist/vizabi.min.js"></script>
<script src="//static.gapminderdev.org/preview/master/assets/vendor/js/vizabi-ws-reader/bundle.web.js"></script>
<script src="//static.gapminderdev.org/systema-globalis/master/BubbleChart.js"></script>
<script src="//static.gapminderdev.org/vizabi-bubblechart/develop/dist/bubblechart.js"></script>
{% include config-explorer.html %}

<style>
    #config-explorer {
        line-height: 20px;
        background-color: #e8e8e8;
    }
    
    .value.boolean {
        color: #de8602;
    }
    
    .value.number {
        color: #1669d9;
    }
    
    .value.string {
        color: #cc1352;
    }
    
    .value.selected {
        background-color: rgba(64, 175, 227, 0.3);
    }
    
    .key.clickable, .value.enum {
        cursor: pointer;
    }
    
    .key.clickable:hover {
        text-decoration: underline;
    }
    
    .value.enum {
        border: 1px solid #43555d;
        border-right-width: 0;
        padding: 1px 5px;
    }
    
    .value.enum:hover {
        background-color: rgba(64, 175, 227, 0.3);
    }
    
    .collapsible {
        display: none;
    }
    
    .collapsible.opened {
        display: inline;
    }
    
    .collapsible.depth-1 {
        display: inline;
    }
    
    .value.enum.first {
        border-radius: 5px 0 0 5px;;
    }
    
    .value.enum.last {
        border-radius: 0 5px 5px 0;
        border-right-width: 1px;
    }
    
    .value.enum.first.last {
        border-radius: 5px 5px 5px 5px;
    }
    
    .key {
        color: #43555d;
    }
    
    .key.clickable {
        font-weight: bold;
    }
    
    .key.clickable:before {
        content: '▶ ';
    }
    
    .key.clickable.opened:before {
        content: '▼ ';
    }
    
    .key.opened {
        font-weight: normal;
    }
    
    .space {
        color: #43555d;
        opacity: 0.3;
    }
    
    .comma {
        color: #43555d;
        opacity: 0.8;
    }
    
    .brace, .colon {
        color: #43555d;
    }
    
    .delimiter:before {
        content: '|';
    }
</style>


<script>
var wsReader = new WSReader.WSReader().getReader();
Vizabi.Reader.extend("waffle", wsReader);

Vizabi._globals.ext_resources = {
  host: "https://waffle-server.gapminder.org",
  preloadPath: "/api/vizabi/",
  dataPath: "/api/ddf/",
  shapePath: "/preview/data/mc_precomputed_shapes.json"
};

var showPaths = [];
var configExplorer = new ConfigExplorer(document.getElementById('config-explorer'));

var config = Vizabi.utils.extend(BubbleChart, {
  "locale": {
    "filePath": "/preview/data/translation/"
  }, 
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  },
  "bind": {
    "change:state": function () {
      configExplorer.print(this.getPlainObject(), showPaths);
    }
  }
 });


var chart = Vizabi("BubbleChart", document.getElementById("placeholder"), config);

function makeChangeObject(path, value) {
  var result = {};
  var tmp = result;
  var key;

  path = path.split('.');
  while(key = path.shift()) {
    tmp = tmp[key] = path.length ? {} : value;
  }
  
  return result;
}

configExplorer
  .enums({
    'time.playing': [true, false]
  })
  .onEnumChange(function (path, value) {
    chart.setModel({ state: makeChangeObject(path, value) });
  })
  .onNodeClick(function (event, path) {
    if (!~showPaths.indexOf(path)) {
      showPaths.push(path);
    } else {
      showPaths = showPaths.filter(function (showPath) {
        return showPath !== path && showPath.lastIndexOf(path) !== 0;
      });
    }
  })
  .print(chart.getModel().state, showPaths);
</script>