d3.json("bar1.json", function (data){




    //d3.xml("").mimeType("image/svg+xml").get(function(error, xml) {
    //    if (error) throw error;
    //
    //    d3.selectAll("svg.bar1").insert(xml.documentElement);
    //
    //});


    var y = d3.scaleLinear()
        .domain([0,100])
        .range([0, 300]);

    var bar1 = d3.select("#bar1")
        .selectAll("rect")

        .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("width", 0)
            .attr("height", 150)
            .transition()
                .delay(500)
                .attr("width", function (d) {  return y(d.x); });


    d3.select("#mask1").append("img")
        .attr("src","bar1-mask.svg")
        .attr("width", 300)
        .attr("height", 150);



    //d3.xml("bar1-mask.svg", function(xml) {
    //    document.body.appendChild(xml.documentElement);
    //
    //
    //    d3.select("#mask1")
    //        .attr("width",300);
    //
    //
    //});

});
