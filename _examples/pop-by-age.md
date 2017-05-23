---
layout: example
title: Pop By Age
chart: popbyage
chartConfig: PopByAge
---

{% capture data %}
  "data": {
    "reader": "waffle",
    "dataset": "open-numbers/ddf--gapminder--population",
    "path": "https://waffle-server-dev.gapminderdev.org/api/ddf"
  }
{% endcapture %}
{% include examples/layout.md content=data %}