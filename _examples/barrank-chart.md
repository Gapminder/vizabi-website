---
layout: example
title: BarRank Chart
chart: barrankchart
chartConfig: BarRankChart
---

{% capture data %}
  "data": {
    "reader": "waffle",
    "path": "https://waffle-server-stage.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}