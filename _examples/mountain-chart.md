---
layout: example
title: Mountain Chart
chart: mountainchart
chartConfig: MountainChart
---

{% capture globals %}
{% endcapture %}

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server.gapminder.org/api/ddf/ql"
}{% endcapture %}
{% include examples/layout.md content=data %}