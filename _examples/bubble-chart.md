---
layout: example
title: Bubble Chart
chart: bubblechart
chartConfig: BubbleChart
---

{% capture data %}
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}