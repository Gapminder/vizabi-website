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
  "path": "https://waffle-server-dev.gapminderdev.org/api/ddf/ql"
}{% endcapture %}
{% include examples/layout.md content=data %}