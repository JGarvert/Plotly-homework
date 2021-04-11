# Plotly-homework
Unit 15 homework on Plotly using belly button biodiversity data

![Bacteria by filterforge.com](Images/bacteria.jpg)

## Background:
The purpose of this project is to create an interactive dashboard using data collected about microbes in the human navel.
Belly Button Biodiversity dataset http://robdunnlab.com/projects/belly-button-biodiversity/

Starter files and data was provided.  This includes the data (samples.json), html file, and the starter code for jsonifying the data.  The remainder is up to the student.

The dashboard should include a drop down menu of Names ('participant ID.  Then based on the selected 'name', the website should dynmacially update a table of demographic into, horizontal bar chart of the top 10 (by quantity) microbial species (OTU), and bubble chart reflecting all microbial species.  Bonus points for a guage showing frequency of scrubs per week.  This project did not include the bonus.  Remember, I am not being paid for this, I am paying for this.  Time is money.  Bonus script means extra time.

Other items to note: no data or graphs will load until a test subject is selected.  Additionally, there are certain test subjects whose graphs are off the charts.  Literally.  For instance, check out ID 947, 954, and 650.  If you want a pretty bubble graph, check out ID 1601

## Technologies:
Becuase the homework came with many files (and technologies) already included, the challenge was to complete the app.js file. (e.g. technologies were already included.) However, general knowledge of D3 (and library), javascript, plotly, and reading the provided html file are helpful.

## Step 1: Plotly

Use the D3 library to read in `samples.json`. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. Create auto populated website containers:
* Container #1: list of meta data that includes the demograhic info
* Container #2: bar chart with `sample_values` as the values, `otu_ids` as the labels, `otu_labels`.  This should be sorted and limited to the top 10 OTUs of the selected ID.
* Container #3: bubble chart with `otu_ids` for the x values, `sample_values` for the y values, `sample_values` for the marker size, `otu_ids` for the marker colors, and `otu_labels` for the text values.

## Step 2: Bonus - guage chart of washing frequency.
This was not attempted. 

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
