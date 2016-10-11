d3.json("flare.json", function (data){


    var color =  d3.scaleOrdinal() // (A)
        .range(["red", "blue", "orange"]);

    var canvas = d3.select("body")
        .append("svg")
        .attr("width", 1500)
        .attr("height",1500);


    var group = canvas.append("g")
        .attr("transform", "translate(300,300)");


    var mypack = d3.pack()
        .size([300,300])
        .padding(10);


    var nodes = d3.pack(data);
    console.log(pack);

})