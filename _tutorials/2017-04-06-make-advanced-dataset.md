---
layout: post
title:  "Make a more advanced dataset"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Make a more advanced dataset"
  subtitle="introduction to DDF, our data model"
  badge="medium"
  img="preview-tut-05-make-advanced-dataset.png"
%}
<!--more-->

There is a number of reasons why you would want a more advanced dataset

- You have names of entities repeating in your csv and would like to extract them into a special file
- You have many indicators and want to split them across many files
- You would like to provide metadata about your indicators, such as description, source link etc
- You have a dataset that combines different aggregation levels, such as population by countries, by country provinces and by cities
- Your entities have multityping and different ways to aggregate them. For example, Hong Kong is both a country, a high-income country and a city. USA is both a country, a UN state, a democracy, a high income country, a place north of equator and a place in Americas. This leads to multiple ways of aggregating it: USA aggregates to American countries and also to high-income countries. Hong Kong aggregates to high-income countries and just remains itself when you go from cities to countries.
- Your entitites need isolated namespaces. For example you want to check education by gender in different cities, and you split your data into male and female groups. And then you discovere there is a city "male" in Maldives. Having a gender ID "male" and city ID "male" requires them to be in different namespaces.
- You have a dataset that features a variety of dimensionalities, such as:
  - population by country 
  - population by country and age 
  - population by country and age and gender ([see example](https://github.com/open-numbers/ddf--gapminder--population))
  
We in Gapminder developed a model that accomodates the situations above and more. We call it Data Description Format (DDF). In DDF you have datapoints, entities and concepts, which you have to define. DDF is a conceptual model, that is not format-dependent, but in practice we use DDFCSV implementation, which makes everything look like a bunch of CSV files in a folder.

Example datasets: [Open Numbers on GitHub](https://github.com/open-numbers)

Documentation: [Introduction to DDF](https://open-numbers.github.io/ddf.html)

After you've made a DDF dataset, proceed by opening it in [Gapminder Offline App](https://www.gapminder.org/tools-offline/), or connect to it from a web page using DDFcsv data reader.


{% highlight html %}

<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.css">
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/bubblechart.css">

<script src="//d3js.org/d3.v4.min.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi-ddfcsv-reader.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/ConfigBubbleChart.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/bubblechart.js"></script>

<div id="placeholder" style="width:100%; height:100%;"></div>

<script>
  var ddfReader = new DDFCsvReader.getDDFCsvReaderObject()
  Vizabi.Reader.extend("ddf", ddfReader);

  ConfigBubbleChart.locale = {
    "id": "en",
    "filePath": "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/assets/translation/"
  };

  ConfigBubbleChart.data = {
    "reader": "ddf",
    "path": "//console.aws.amazon.com/s3/buckets/static.gapminderdev.org/preview/develop/data/systema_globalis/"
  };

  Vizabi("BubbleChart", document.getElementById("placeholder"), ConfigBubbleChart);
</script>

{% endhighlight %}