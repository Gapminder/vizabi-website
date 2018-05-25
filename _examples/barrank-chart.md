---
layout: example
title: BarRank Chart
chart: barrankchart
chartConfig: BarRankChart
---

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server.gapminder.org/api/ddf/ql"
}{% endcapture %}
{% include examples/layout.md content=data %}