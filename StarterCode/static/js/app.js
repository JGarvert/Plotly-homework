// Starter code provided: uses D3 library to read n the samples.json data, which was also provided.
d3.json('samples.json').then(data => {
    console.log(data);
})

// Create a horizontal bar chart.
// 1. Will need a trace to create the plot. Additionally, cut to top 10.
var trace1 = {
    x: ,
    y: ,
    type: "bar",
    orientation: "h",
    text: otu_labels,
    transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
    }]
};
// 2. Create the array for the plot
var bar_data = [trace1];

// 3. Define horizontal plot layout
var bar_layout = {
    title: "Top 10 OTUs found in selected individual",
    xaxis: { title: "Number of occurances"},
    yaxis: { title: "OTU ID"}
};
// 4. Plot the chart to a div tag
Plotly.newPlot("bar-plot", bar_data, bar_layout);