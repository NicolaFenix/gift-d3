d3.json("dataNumbers.json", function (data){

    var canvas = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);


    var group = canvas.append("g")
        .attr("transform", "translate(100,100)");


    var line = d3.line()
        .x(function(d){return d.x} )
        .y(function(d){return d.y} );

    group.selectAll("path")
        .data([data])
        .enter()
            .append("path")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 10);



})