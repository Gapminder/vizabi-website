---
layout: post
title:  "Join your data with Gapminder's data"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Join your data"
  subtitle="with Gapminder's data"
  badge="easy"
  img="preview-tut-04-join-your-data-with-g.png"
%}
<!--more-->

As well as in the previous example, the easiest way to bring your data into our charts is using Gapminder offline app. You can also use your data with bare vizabi running in a web browser, but to do that it's also better to start by importing the data into Gapminder offline and then do "export to web" so you will have a generated code example you can directly open in web browser. By modifying that example later you can gain more flexibility

### TLDR version:

1. Download [Gapminder Offline](https://www.gapminder.org/tools-offline/) if you still haven't
2. Change column headers to the ones requested by the application. Likely these are “geo” and “time”
3. Change your country names to the ones we use in Gapminder.  
Here is the table that defines the mapping: download it as 
[⏬ XLSX](https://github.com/open-numbers/ddf--gapminder--geo_entity_domain/raw/master/gapminder-geo-id-mapping.xlsx){:download="gapminder-geo-id-mapping.xlsx"} or
[⏬ CSV](https://github.com/open-numbers/ddf--gapminder--geo_entity_domain/raw/master/ddf--entities--geo--country.csv){:download="ddf--entities--geo--country.csv"} 
4. Make sure you use years as time points and they look like 1995, 2016, etc

### Longer version:

Suppose you have a chart like this to start from:

{% image tut-04-image12.png %} 

And you have a data like this:  

{% image tut-04-image16.png %} 

When you are adding data to the current chart, you will get a message that the entities should match. We use our own country codes in Gapminder (swe for Sweden, cyp for Cyprus etc). So if you want to match up your data with our country codes you also need to use them.

{% image tut-04-image11.png %} 

📌 Here is the table that defines the mapping: download it as 
[⏬ XLSX](https://github.com/open-numbers/ddf--gapminder--geo_entity_domain/raw/master/gapminder-geo-id-mapping.xlsx){:download="gapminder-geo-id-mapping.xlsx"} or
[⏬ CSV](https://github.com/open-numbers/ddf--gapminder--geo_entity_domain/raw/master/ddf--entities--geo--country.csv){:download="ddf--entities--geo--country.csv"} 

Use VLOOKUP Excel function to search the dictionary and replace the country names with Gapminder country codes. 

Make an extra sheet and insert the mapping table in there. Actually you need just two columns from the mapping table: country names and country codes, let names be the first column, because VLOOKUP uses the first column to find the matches.

{% image tut-04-image5.png %} 

Return to the sheet with data  
Add a column between country names and the indicators

{% image tut-04-image14.png %} 

Add a formula in the second column:

`=VLOOKUP(A1;'COUNTRY MAPPING'!A:B;2;FALSE)`  
- here A1 is the country name to look up
- 'COUNTRY MAPPING' is the name of sheet where to look it up
- A:B is the range of columns where to search for the name A1
- 2 is the index of the column which contains the value to be returned
- FALSE means that the match should be strict, this is important!

once done with the formula, pull it so that it stretches for all the rows
The resulting table looks like this: 

{% image tut-04-image13.png %} 


There will be a few unresolved matches, displayed as #N/A. You will have to resolve those manually, or remove the rows. Once ready, delete the country name column and you should have something like this:

{% image tut-04-image10.png %} 

Observe that the column 1 should be named “geo”, like it was suggested by Gapminder offline app.

Export a CSV and give it to Gapminder offline app.

Select an appropriate data arrangement. In our example it’s time in columns.

{% image tut-04-image18.png %} 

The chart reloads, and the additional information appears in the menu. You can select one of the indicators now and you will see the picture: 

{% image tut-04-image17.png %} 

### Troubleshooting

Common problems are the following:
* Incorrect data arangement was chosen — "time goes right" or "time goes down" [more on it here](/tutorials/2017/04/03/show-your-data/)
* Empty values are marked with "-" or "=" or other symbol. Empty cells must be blank
* The app expects time points as years: 1997, 1998, but your file has months "1997-02" or years like '97 or something else
* Name of the first column should be exactly as the app suggests, for Gapminder data it's "geo"
* Name of the second column should be exactly as the app suggests, for Gapminder data it's "time" (only applicable for "time goes down" arrangement)

