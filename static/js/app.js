// Copy what was provided above and create dropdown list for sID of person/participant
function initializedDropdown(){
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
}

// // Keep selected person ID to use later. See 15.02.07
// var selected_id =  d3.select("#selDataset").node().value;

// // Start the process for updating the charts based on the selection.
// optionChanged(selected_id);
initializedDropdown();

// Create a function to update charts
function optionChanged(selected_id){

    // Identity data for each plot
    d3.json("samples.json").then(function(data){
        var samples_data = data.samples;
        var demo_data = data.metadata;

    // Before creating the charts, get the demographic info.
        demo_data.forEach(function(row){
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
        var samp_vals = row.sample_values
        console.log(samp_vals);

    // 1. Will need a trace to create the plot. Additionally, cut to top 10.
    var trace1 = {
        x: samp_vals.slice(0,10),
        // is this where the homework is requesting hover information?
        y: otu_ids.map(id => String(`OTU ${id}`)),
        type: "bar",
        orientation: "h",
        mode: 'markers',
        marker: {size:8},
        text: otu_labels,
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
        }],
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
    Plotly.newPlot("bar", bar_data, bar_layout);

    // Create bubble chart
    // 1. Will need a trace
    var trace2 = {
        x: otu_ids,
        y:samp_vals,
        type: 'scatter',
        text: otu_labels,
        mode: 'markers',
        marker: {size: samp_vals, color: otu_ids},
        tranforms: [{type:'sort', target:'y', order:'descending'}],
    };

    //2. Create the array for the plot
    var bubble_chart = [trace2];
    
    //3. Define layout
    var bubble_layout = {
        yaxis: {autorange: true,},
        xaxis: {title: `OTU ID`, autorange: true,}
        
    };

    // 4. Plot the chart to a div tag
    Plotly.newPlot("bubble", bubble_chart, bubble_layout);
        }
});
});
}
