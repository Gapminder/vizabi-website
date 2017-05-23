---
layout: example
title: BubbleMap
chart: bubblemap
chartConfig: BubbleMap
---

{% capture globals %}
Vizabi._globals.ext_resources = {
  shapePath: "/preview/data/mc_precomputed_shapes.json"
}
{% endcapture %}

{% capture data %}
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-dev.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}