---
layout: example
title: Mountain Chart
chart: mountainchart
chartConfig: MountainChart
---

{% capture data %}
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}