---
layout: example
title: Line Chart
chart: linechart
chartConfig: LineChart
---

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server.gapminder.org/api/ddf"
}{% endcapture %}
{% include examples/layout.md content=data %}