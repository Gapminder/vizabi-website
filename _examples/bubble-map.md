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
  "path": "https://waffle-server.gapminder.org/api/ddf/ql",
  "assetsPath": "https://import-waffle-server.gapminder.org/api/ddf/assets/"
}{% endcapture %}
{% include examples/layout.md content=data %}