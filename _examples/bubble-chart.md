---
layout: example
title: Bubble Chart
chart: bubblechart
chartConfig: BubbleChart
---

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server-dev.gapminderdev.org/api/ddf/ql"
}{% endcapture %}
{% include examples/layout.md content=data %}