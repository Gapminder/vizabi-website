---
layout: post
title:  "Show your own data"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Show your own data"
  subtitle="with our charts"
  badge="easy"
  img="preview-tut-03-show-your-data.png"
%}
<!--more-->

The easiest way to bring your data into our charts is using Gapminder offline app. You can also use your data with bare vizabi running in a web browser, but to do that it's also better to start by importing the data into Gapminder offline and then do "export to web" so you will have a generated code example you can directly open in web browser. By modifying that example later you can gain more flexibility

This tutorial will get you started: it describes how to bring a data table from MS Excel into a bubble chart.

### TLDR version 
1. Download [Gapminder Offline](https://www.gapminder.org/tools-offline/)
2. Prepare and clean your data table in Excel, so that it looks like one of the examples, provided in Gapminder offline 
3. Save As... —> choose CSV format
4. Open the file in Gapminder offline 


### Longer version
In gapminder offline, go to the menu in top right corner.  
Choose “New chart —> From your data —> CSV file”  

{% image tut-03-image11.png %} 

A dialog will show up with two options: Time in rows and Time in columns. Click “see example” and look at the provided tables. You should adjust your data to look like either one of the examples. No extra stuff!

{% image tut-03-image35.png %} 

Open the example file in Excel: migrant stock data from the UN population division.  
Choose the tab with the data you are interested in.

{% image tut-03-image10.png %} 

Remove the header rows and the logo picture

{% image tut-03-image15.png %} 

Remove the columns you don’t need

{% image tut-03-image21.png %} 

Suppose we are only interested in countries.  
Remove aggregation rows (blue): like, world, africa, europe, etc  
Here i sorted all the rows by “country code” column. All the blue rows happen to be together. So it’s easier to remove all at once.

{% image tut-03-image33.png %}

Remove the country code column too

{% image tut-03-image24.png %} 

Reset the formatting of the table cells

{% image tut-03-image27.png %} 

Now in this table we have two indicators side by side (migrant stock: male and migrant stock: female). This is not matching the format Gapminder offline can consume. So we should follow the example and move indicators one below the other.

Copy the entire table and paste it below with some lines in between. We will remove them later.

{% image tut-03-image22.png %} 

Remove parts of the tables so that one indicator is above and another one is below.

{% image tut-03-image25.png %} 


Shift the table below so that the columns would use the same time points as the columns above.  Note: time points should really match here! You need to check that they match correctly.

{% image tut-03-image41.png %} 

Add an extra column after country names and before the time columns (it should be column 2).  
Write “indicator” on top

{% image tut-03-image12.png %} 

Put the indicator name for the first part of the table. Here i wrote  
Migrants (male), % of the population  
long names might not look good in the visualisation later

{% image tut-03-image43.png %} 

And fill the name of the second indicator:  
Migrants (female), % of the population  
Drag the corner of the cell to fill all the cells

{% image tut-03-image38.png %} 

Remove the extra lines we had between the indicators

{% image tut-03-image26.png %} 

Remove the first line that used to contain indicator names  
this is important!  
the first line should contain the headers: country, indicator, 1960, 1965 and so on...

{% image tut-03-image34.png %} 

Now have a look at the data. Is there anything strange there?  
Depending on your computer's cultural preference, some values may have dots as decimal separator (like in 9.6, that means almost ten). Some may have commas (like in 9,6 that also means almost ten). Either one should work but it has to be consistent across the table!

{% image tut-03-image31.png %} 

Missing values should have nothing in their cells. Here i found missing values for Germany to be “-”, so i remove them.

{% image tut-03-image13.png %} 

Ok, now the table looks clean and following the example from Gapminder offline  
Go to file —> Save As —> Comma-separated values (.csv)

{% image tut-03-image36.png %} 

Confirm that you are only exporting the current sheet and that you will lose all the formatting in CSV:

{% image tut-03-image44.png %} 

Now you have a CSV file exported.

{% image tut-03-image16.png %} 

Return to Gapminder Offline. Click “Time is in columns”, because this is our data arrangement.  
Locate the csv file you made on your computer  
Press OK and you’re done! Sometimes the bubbles are hiding, when some data is not available. Move the time slider, so maybe it will show up.

{% image tut-03-image39.png %} 

You're done. Here is an interactive example:


{% capture code %}
<div id="placeholder" class="example-placeholder" style="max-width: 720px; height: 500px; padding-top: 0;"></div>

<link rel="stylesheet" href="//static.gapminderdev.org/vizabi.css">
<link rel="stylesheet" href="//static.gapminderdev.org/bubblechart.css">

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.js"></script>
<script src="//static.gapminderdev.org/vizabi.js"></script>
<script src="//static.gapminderdev.org/bubblechart.js"></script>

<script>
var config = {
    "locale": {
      "filePath": "/preview/data/translation/"
    }, 
    "data": {
      "reader": "csv-time_in_columns",
      "path": "/preview/data/waffles/time-in-columns-migrants.csv"
    }
};

Vizabi("BubbleChart", document.getElementById("placeholder"), config);
</script>
{% endcapture %}

{{ code }}

---
If you are into coding, below is a code snippet you would use to display this data witout using Gapminder offline

{% highlight html %}
{{ code }}
{% endhighlight %}

