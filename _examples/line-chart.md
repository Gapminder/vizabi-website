---
layout: example
title: Line Chart
chart: linechart
chartConfig: LineChart
---

{% capture data %}
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-dev.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}