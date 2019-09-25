---
layout: post
title:  "Read files with nice looking names of entities"
categories: tutorials
---

{%
  include tutorials/post-title.html
  title="Read files with nice looking names of entities"
  subtitle="CSV, Excel, Google spreadsheet"
  badge="easy"
  img="preview-tut-10-nice-looking-names.png"
%}
<!--more-->

After you've practiced mapping country names into the codes we use internally you likely found that these codes aren't very pretty. So we've added an option for you to keep the human-friendly country names right next to the codes for convenience.  


### Reading CSV or Excel file with both country IDs and names using Gapminder Offline (v3.5.0 and up)  

Suppose you've prepared a file, where time goes down and there is an additional second column with country names like so:  

{% image tut-10-image01.png %}  

Then chose options during the import in Gapminder Offline like so (note "1" in the field of "position" below):  

{% image tut-10-image02.png %}  

Now suppose you've prepared a file, where time goes right and there is an additional first column with country names:  

{% image tut-10-image03.png %}  

Then chose options this way (note "0" in the field of "position" below):  
 
{% image tut-10-image04.png %}  
 
In both situations the column "name" is ignored, but it is very much helpful to keep it present in the data files without a need to delete it before import. Sorry for making this overly complicated with these 0s and 1s, we just wanted to share this new functionality as soon as possible, maybe it will already help you a lot.  