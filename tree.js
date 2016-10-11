d3.json("dataNumbers-pie.json", function (data){

    var r = 300;

    var color =  d3.scaleOrdinal() // (A)
        .range(["red", "blue", "orange"]);

    var canvas = d3.select("body")
        .append("svg")
        .attr("width", 1500)
        .attr("height",1500);


    var group = canvas.append("g")
        .attr("transform", "translate(300,300)");


    var pack = d3.pack();



    var nodes = pack(data);

    console.log(nodes);

    //var arc = d3.arc() // Generatore di archi
    //    .innerRadius(200) // Se messo a 0 fa una pie chart
    //    .outerRadius(r);




    //var pie = d3.pie()
    //    .value(function(d){return d}); //Ritorna i valori come radians (sono oggetti)

    //var arcs = group.selectAll("arc") //Effettiva esecuzione della chart
    //    .data(pie(data)) //Con i dati presi dal layout pie
    //    .enter()
    //        .append("g")
    //        .attr("class", "arc");

    //arcs.append("path")
    //    .attr("d", arc) //preso dal generatore di archi proprio come è
    //    .attr("fill", function(d){return color(d.data)}) //d è preso dalla funzione precedente, usa la scala per generare i colori (scale ordinal (A))
    //
    //arcs.append("text")
    //    .attr("transform", function(d){return "translate("+ arc.centroid(d)+ ")"; }) //Posiziona le label correttamente
    //    .text(function(d){return d.data})
    //    .attr("text-anchor", "middle")
    //    .attr("font-size", "20px")
    //    .attr("fill", "white");

})