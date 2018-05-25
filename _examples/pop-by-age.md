---
layout: example
title: Pop By Age
chart: popbyage
chartConfig: PopByAge
---

{% capture data %}{
  "reader": "waffle",
  "dataset": "open-numbers/ddf--gapminder--population#develop",
  "path": "https://waffle-server.gapminder.org/api/ddf/ql"
}{% endcapture %}
{% include examples/layout.md content=data %}