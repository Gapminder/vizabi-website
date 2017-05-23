---
layout: post
title:  "Embed a Gapminder chart to your web page or blog"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Embed a Gapminder chart"
  subtitle="to your web page or blog"
  badge="easy"
  img="preview-tut-01-embed-a-gapminder-chart.png"
%}
<!--more-->

### Simple embedding
1. Go to [gapminder.org/tools](https://gapminder.org/tools), pick any chart you like
2. Press embed button `</>` 
3. Copy to clipboard the code that appeared
4. Paste this code anywhere on your web page
5. Tweak width and height so that it fits your layout

Note: if you change something on the chart your changes will be captured in the embed link as well

Note: if you don't want `<iframe>`, read on..

{% image embed-gapminder-chart.gif %}

### Embedding without iframe

You will need to include vizabi script and stylesheet into your web page, as well as the scripts and styles for the tools you want to use. 

Example can be found [here](https://bl.ocks.org/angieskazka/ed82b664173a9023fa8a)

