---
layout: example
title: Bubble Chart
chart: bubblechart
chartConfig: BubbleChart
---

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server.gapminder.org/api/ddf"
}{% endcapture %}
{% include examples/layout.md content=data %}