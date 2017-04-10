---
layout: example
title: BubbleMap
chart: bubblemap
chartConfig: BubbleMap
---

{% capture data %}
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}