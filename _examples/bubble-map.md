---
layout: example
title: BubbleMap
chart: bubblemap
chartConfig: BubbleMap
---

{% capture globals %}
{% endcapture %}

{% capture data %}{
  "reader": "waffle",
  "path": "https://waffle-server-dev.gapminderdev.org/api/ddf/ql",
  "assetsPath": "https://waffle-server-dev.gapminderdev.org/api/vizabi/"
}{% endcapture %}
{% include examples/layout.md content=data %}