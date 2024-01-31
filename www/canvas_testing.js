
function loadCanvasJS(dataJson) {
  var script = document.createElement('script');
  script.src = 'https://cdn.canvasjs.com/canvasjs.min.js';
  document.body.appendChild(script);
  
  script.onload = function() {
    var limit = 100000;
    var y = 100;
    var data = [];
    var dataSeries = { type: 'line' };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
      y += Math.round(Math.random() * 10 - 5);
      dataPoints.push({
        x: i,
        y: y
      });
    }
    dataSeries.dataPoints = dataPoints;
    
    console.log(dataSeries)

    // Better to construct options first and then pass it as a parameter
    var options = {
      zoomEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Try Zooming - Panning'
      },
      axisY: {
        lineThickness: 1
      },
      data: [dataSeries]
    };

    // Render CanvasJS chart
    var chart = new CanvasJS.Chart('chartContainer', options);
    var startTime = new Date();
    chart.render();
    var endTime = new Date();
    $('#timeToRender').text('Time to Render: ' + (endTime - startTime) + 'ms');
  };
}
