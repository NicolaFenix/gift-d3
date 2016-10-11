//d3.select("p").text("hello world");
//
//
//d3.select("body").append("p").text("Ciao a tutti");

console.log(d3);

var dataArray = [20, 30, 120,60];
var width = 500;
var height = 500;


var widthScale = d3.scaleLinear()
                .domain([0,120])
                .range([0, width]);

var color = d3.scaleLinear()
                .domain([0,120])
                .range(["blue","red"]);


var  axis = d3.axisBottom(widthScale)
    .ticks(5);

var canvas = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(50,50)")



canvas.append("g")
    .attr("transform", "translate(0,400)")
    .call(axis);


var bars = canvas.selectAll("rect")
                    .data(dataArray)
                    .enter()
                        .append("rect")
                        .attr("width", function(d){ return widthScale(d);})
                        .attr("height", 50)
                        .attr("y", function(d,i){ return i*100})
                        .attr("fill", function(d){ return color(d);});

bars.transition()
    .attr("x", 20);