---
layout: post
title:  "Import datasets that are different"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Import datasets that are different"
  subtitle="with our charts"
  badge="easy"
  img="preview-tut-03-show-your-data.png"
%}
<!--more-->

This tutorial explains how you can import a dataset which is somehow different from the example that was discussed in the [Show your own data tutorial](/tutorials/2017/04/03/show-your-data/). Here we assume the reader is familiar with exporting a CSV and reading it in Gapminder Offline.  

### Data contains only one time point
### Data contains something else than countries
Open the example file in Excel: Teachers time reports. [⏬ XLS](/data/teachers-timereports.xls){:download="teachers-timereports.xls"}   

{% image tut-20-image11.png %}

Since there is no time dimension in this particular file you'll have to cheat the software to consume it. Add a fake time point for all of your values. Insert a column after the teacher's anonymized names and fill it with a single value like "2017". Put "time" in the header (you can put "year" or anything).  

{% image tut-20-image12.gif %} 

Now the file matches the format "time goes down" in Gapminder Offline tool.  
"Save As" the file as CSV. Solution: [⏬ CSV](/data/teachers-timereports.csv){:download="teachers-timereports.csv"}   
Open the file you saved in Gapminder Offline

{% image tut-20-image13.gif %} 

You can select text categories from the data you have imported to be colors.  

{% image tut-20-image14.gif %} 

Below is the interactive examle that shows the result.  

{% capture code %}
<div id="placeholder" class="example-placeholder" style="max-width: 720px; height: 500px; padding-top: 0;"></div>

<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.css">
<link rel="stylesheet" href="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/bubblechart.css">

<script src="//d3js.org/d3.v4.min.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi.js"></script>
<script src="//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/bubblechart.js"></script>

<script>
var config = {
    "locale": {
      "filePath": "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/assets/translation/"
    }, 
    "data": {
      "reader": "csv",
      "path": "https://raw.githubusercontent.com/Gapminder/vizabi-website/develop/data/teachers-timereports.csv"
    }
};

Vizabi("BubbleChart", document.getElementById("placeholder"), config);
</script>
{% endcapture %}

{{ code }}

---
If you are into coding, below is a code snippet you would use to display this data without using Gapminder offline. If you copy and paste it into your website it should still work

{% highlight html %}
{{ code }}
{% endhighlight %}

