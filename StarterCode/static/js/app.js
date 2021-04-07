// Starter code provided: uses D3 library to read n the samples.json data, which was also provided.
d3.json('samples.json').then(data => {
    console.log(data);
})

// Copy what was provided above and create dropdown list for ID of person/participant
function selectedID(){
d3.json("samples.json").then(function(data){
        var name_list = data.names;
        // check your work
        // console.log(name_list);

       // ID from row 25 in html
    d3.selectAll("#selDataset")
    .selectAll("option")
    .data(name_list)
    .enter()
    .append("option")
    .attr("value",function(name) {
        return name;
    })
    .text(function(name){
        return name;
    });
});

// Keep selected person ID to use later.
var selected_id =  d3.select("#selDataset").node().value;

// Start the process for updating the charts based on the selection.

UpdateCharts(selected_ID);

// Create a function to update charts
function UpdateCharts(selected_id){

// Identity data for each plot
d3.json("sample.json").then(function(data){
    var samples_data = data.samples;
})

// Before creating the charts, get the demographic info.
demo_info.forEach(function(row){
    if (row.id === parseInt(selected_id)) {
      d3.select("#sample-metadata").html("");
      var test_person = Object.entries(row)
      // console.log(test_person);
      
      test_person.forEach((info) => {
        d3.selectAll("#sample-metadata")
        .append("div")
        .data(info)
        .text(`${info[0]}: ${info[1]}`)
      });
    }
  });

// Per the instructions, we will need otu_ids, otu_labels, and samp_vals for the selected ID

samples_data.forEach(function(row){
    if (row.id === selected_id) {

      var otu_ids = row.otu_ids;
      var otu_labels = row.otu_labels;
      var samp_vals = row.sample_values;
      // console.log(selected_id);

// // Create a horizontal bar chart.  Start by identifying data source.
// d3.json("samples.json").then(function(data){
//     var samples_data = data.samples;
//     //check it out
//     // console.log(samples.data);

// 1. Will need a trace to create the plot. Additionally, cut to top 10.
var trace1 = {
    x: samp_vals,
    // is this where the homework is requesting hover information?
    y: otu_ids,
    type: "bar",
    orientation: "h",
    mode: 'markers',
    marker: {size:10},
    // text: otu_labels,
    transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
    }]
};
// 2. Create the array for the plot
var bar_data = [trace1];
// check your work!
// console.log(bar_data)

// 3. Define horizontal plot layout
var bar_layout = {
    title: "Top 10 OTUs found in selected individual",
    xaxis: { title: "Number of occurances"},
    yaxis: { title: "OTU ID"}
};
// 4. Plot the chart to a div tag
Plotly.newPlot("bar-plot", bar_data, bar_layout);