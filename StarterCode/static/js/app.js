// Starter code provided: uses D3 library to read n the samples.json data, which was also provided.
d3.json('samples.json').then(data => {
    console.log(data);
})

// Create a horizontal bar chart.
// 1. Will need a trace to create the plot
var trace1 = {
    x: ,
    y: ,
    type: "bar"
};
// 2. Define horizontal plot layout
var layout = {
    title: "Top 10 OTUs found in selected individual",
    xaxis: { title: "Number of occurances"},
    yaxis: ( title: "OTU ID")
};
// Plot the chart to a div tag
Plotly.newPlot("bar-plot", data, layout);