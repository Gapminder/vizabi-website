---
layout: example
title: BubbleMap
chart: bubblemap
chartConfig: BubbleMap
---

{% capture globals %}
Vizabi._globals.ext_resources = {
  host: "https://waffle-server.gapminder.org",
  preloadPath: "/api/vizabi/",
  dataPath: "/api/ddf/ql/",
  shapePath: "/preview/data/mc_precomputed_shapes.json"
}
{% endcapture %}

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server-dev.gapminderdev.org/api/ddf/ql"
}{% endcapture %}
{% include examples/layout.md content=data %}