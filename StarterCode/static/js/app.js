// Starter code provided: uses D3 library to read n the samples.json data, which was also provided.
// d3.json('samples.json').then(data => {
//     console.log(data);
// })

// Copy what was provided above and create dropdown list for ID of person/participant
function selectedID(){
    d3.json("samples.json").then(function(data){
        var name_list = data.names;
        // check your work
        // console.log(name_list);

    d3.selectAll("#selDataset")
    // ID from row 25 in html
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

// Keep selected person ID to use in later coding.
var selected_id =  d3.select("#selDataset").node().value;

//at some point the charts will need to be updated with the selected id.

// Before creating the charts, get the demographic info.
demo_info.forEach(function(row){
    if (row.id === parseInt(selected_id)) {
      d3.select("#sample-metadata").html("");
      // console.log(row.id);

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



// Create a horizontal bar chart.  Start by identifying data source.
d3.json("samples.json").then(function(data){
    var samples_data = data.samples;
    //check it out
    // console.log(samples.data);

// 1. Will need a trace to create the plot. Additionally, cut to top 10.
var trace1 = {
    x: ,
    y: ,
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

// 3. Define horizontal plot layout
var bar_layout = {
    title: "Top 10 OTUs found in selected individual",
    xaxis: { title: "Number of occurances"},
    yaxis: { title: "OTU ID"}
};
// 4. Plot the chart to a div tag
Plotly.newPlot("bar-plot", bar_data, bar_layout);